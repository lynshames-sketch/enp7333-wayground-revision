// Application principale : ENP7333 × Wayground × Taxonomie de Bloom × Steven Pinker × NotebookLM

(function() {
  // ==================== ALGORITHME DE MÉLANGE FISHER-YATES ====================
  // Garantit une distribution mathématiquement uniforme et aléatoire des réponses (A, B, C, D)
  function fisherYatesShuffle(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      // Utilise crypto.getRandomValues si disponible pour un aléa cryptographique fort
      let randFloat;
      if (window.crypto && window.crypto.getRandomValues) {
        const buf = new Uint32Array(1);
        window.crypto.getRandomValues(buf);
        randFloat = buf[0] / (0xFFFFFFFF + 1);
      } else {
        randFloat = Math.random();
      }
      const j = Math.floor(randFloat * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  // ==================== ÉTAT GLOBAL DE L'APPLICATION ====================
  const STORAGE_KEY = 'enp7333_wayground_state_v1';
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

  const state = {
    xp: saved.xp || 0,
    bestStreak: saved.bestStreak || 0,
    masteredIds: new Set(saved.masteredIds || []),
    missedIds: new Set(saved.missedIds || []),
    historyDistribution: saved.historyDistribution || { A: 0, B: 0, C: 0, D: 0 },
    activeTab: 'arena',
    filters: {
      module: 'ALL',
      bloom: 'ALL',
      timed: true
    },
    quiz: {
      active: false,
      questions: [],
      currentIndex: 0,
      score: 0,
      streak: 0,
      correctCount: 0,
      answered: false,
      timerSeconds: 45,
      timerMax: 45,
      timerInterval: null,
      timeFrozen: false,
      doubleActive: false,
      shieldActive: false,
      powerups: {
        double: 2,
        fifty: 2,
        shield: 1,
        freeze: 2,
        hint: 3
      },
      sessionDistribution: { A: 0, B: 0, C: 0, D: 0 }
    },
    flashcards: {
      moduleFilter: 'ALL',
      deck: [],
      index: 0,
      flipped: false
    }
  };

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      xp: state.xp,
      bestStreak: state.bestStreak,
      masteredIds: Array.from(state.masteredIds),
      missedIds: Array.from(state.missedIds),
      historyDistribution: state.historyDistribution
    }));
    updateHeaderStats();
  }

  const BLOOM_META = {
    1: { level: 1, label: 'Mémoriser', color: '#6366f1', icon: '🧠', desc: 'Rappel des définitions, auteurs, rubriques et délais' },
    2: { level: 2, label: 'Comprendre', color: '#06b6d4', icon: '💡', desc: 'Explication des concepts et distinctions théoriques' },
    3: { level: 3, label: 'Appliquer', color: '#10b981', icon: '🛠️', desc: 'Mise en situation concrète sur des cas pratiques' },
    4: { level: 4, label: 'Analyser', color: '#f59e0b', icon: '🔍', desc: 'Décomposition causale du PAD (MAPAQ) et de la PAIF' },
    5: { level: 5, label: 'Évaluer', color: '#ec4899', icon: '⚖️', desc: 'Jugement critique, classement et justification' },
    6: { level: 6, label: 'Créer (Pinker)', color: '#eab308', icon: '✍️', desc: 'Formulation d’énoncés SMART et réécriture à fort impact' }
  };

  // ==================== INITIALISATION UI ====================
  document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initArenaControls();
    renderBloomFilterBar();
    renderModuleFilterSelect();
    renderNotebooksHub();
    initFlashcards();
    initPinkerLab();
    updateHeaderStats();
    updateDistributionWidget();
    startNewQuiz();
  });

  function initTabs() {
    document.querySelectorAll('.nav-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-tab');
        switchTab(target);
      });
    });
  }

  window.switchTab = function(tabId) {
    state.activeTab = tabId;
    document.querySelectorAll('.nav-tab').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-tab') === tabId);
    });
    document.querySelectorAll('.tab-panel').forEach(p => {
      p.classList.toggle('active', p.id === `panel-${tabId}`);
    });
  };

  function updateHeaderStats() {
    const totalQ = (window.ALL_QUESTIONS || []).length;
    const mastered = state.masteredIds.size;
    const pct = totalQ ? Math.round((mastered / totalQ) * 100) : 0;

    const elXp = document.getElementById('stat-xp');
    const elStreak = document.getElementById('stat-best-streak');
    const elMastery = document.getElementById('stat-mastery');
    const elMissed = document.getElementById('stat-missed-count');

    if (elXp) elXp.textContent = `${state.xp.toLocaleString('fr-CA')} XP`;
    if (elStreak) elStreak.textContent = `${state.bestStreak} 🔥`;
    if (elMastery) elMastery.textContent = `${mastered}/${totalQ} (${pct}%)`;
    if (elMissed) elMissed.textContent = state.missedIds.size;
  }

  // ==================== CONTRÔLES DU QUIZ WAYGROUND ====================
  function renderBloomFilterBar() {
    const container = document.getElementById('bloom-filter-pills');
    if (!container) return;

    let html = `<button class="bloom-pill active" data-bloom="ALL">🎯 Tous les niveaux de Bloom (1–6)</button>`;
    Object.values(BLOOM_META).forEach(b => {
      html += `<button class="bloom-pill" data-bloom="${b.level}" style="--pill-color:${b.color}">
        <span>${b.icon} N${b.level} • ${b.label}</span>
      </button>`;
    });
    container.innerHTML = html;

    container.querySelectorAll('.bloom-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.bloom-pill').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        state.filters.bloom = btn.getAttribute('data-bloom');
        startNewQuiz();
      });
    });
  }

  function renderModuleFilterSelect() {
    const sel = document.getElementById('module-filter-select');
    if (!sel) return;

    let html = `<option value="ALL">📚 Tous les modules (REF + M00 à M09 + Pinker)</option>`;
    (window.NOTEBOOKS_DATA || []).forEach(nb => {
      const count = (window.ALL_QUESTIONS || []).filter(q => q.module === nb.code).length;
      html += `<option value="${nb.code}">${nb.icon} ${nb.shortTitle} (${count} questions)</option>`;
    });
    sel.innerHTML = html;

    sel.addEventListener('change', () => {
      state.filters.module = sel.value;
      startNewQuiz();
    });
  }

  function initArenaControls() {
    const btnShuffleNew = document.getElementById('btn-restart-quiz');
    if (btnShuffleNew) {
      btnShuffleNew.addEventListener('click', () => startNewQuiz());
    }

    const chkTimed = document.getElementById('toggle-timer-mode');
    if (chkTimed) {
      chkTimed.addEventListener('change', () => {
        state.filters.timed = chkTimed.checked;
        if (!state.filters.timed) {
          clearInterval(state.quiz.timerInterval);
          const timerBar = document.getElementById('quiz-timer-fill');
          if (timerBar) timerBar.style.width = '100%';
          const timerTxt = document.getElementById('quiz-timer-text');
          if (timerTxt) timerTxt.textContent = '∞ Mode Étude';
        } else if (state.quiz.active && !state.quiz.answered) {
          startQuestionTimer();
        }
      });
    }

    const btnMissedMode = document.getElementById('btn-missed-mode');
    if (btnMissedMode) {
      btnMissedMode.addEventListener('click', () => {
        if (state.missedIds.size === 0) {
          showToast('Aucune question à rattraper pour le moment ! Bravo 🎉', 'success');
          return;
        }
        startNewQuiz({ onlyMissed: true });
      });
    }

    const btnSimulateDist = document.getElementById('btn-simulate-fisher-yates');
    if (btnSimulateDist) {
      btnSimulateDist.addEventListener('click', runMonteCarloDistributionAudit);
    }

    // Power-ups listeners
    document.querySelectorAll('.powerup-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-powerup');
        activatePowerup(type);
      });
    });
  }

  // ==================== MOTEUR DE QUIZ & DISTRIBUTION ALÉATOIRE ====================
  window.startQuizForModule = function(moduleCode) {
    switchTab('arena');
    const sel = document.getElementById('module-filter-select');
    if (sel) sel.value = moduleCode;
    state.filters.module = moduleCode;
    startNewQuiz();
  };

  function startNewQuiz(options = {}) {
    clearInterval(state.quiz.timerInterval);
    let pool = [...(window.ALL_QUESTIONS || [])];

    if (options.onlyMissed) {
      pool = pool.filter(q => state.missedIds.has(q.id));
    } else {
      if (state.filters.module !== 'ALL') {
        pool = pool.filter(q => q.module === state.filters.module);
      }
      if (state.filters.bloom !== 'ALL') {
        pool = pool.filter(q => String(q.bloomLevel) === String(state.filters.bloom));
      }
    }

    if (pool.length === 0) {
      pool = [...(window.ALL_QUESTIONS || [])];
      showToast('Aucun filtre exact trouvé : chargement de la banque complète.', 'info');
    }

    // 1) Mélange Fisher-Yates de l'ordre des questions
    const shuffledQuestions = fisherYatesShuffle(pool).map(q => {
      // 2) Mélange Fisher-Yates des 4 choix de réponse pour CHAQUE question
      const shuffledOpts = fisherYatesShuffle(q.options);
      const correctIdx = shuffledOpts.indexOf(q.correctAnswer);
      const letter = ['A', 'B', 'C', 'D'][correctIdx] || 'A';
      return {
        ...q,
        shuffledOptions: shuffledOpts,
        correctIndex: correctIdx,
        correctLetter: letter
      };
    });

    // Calcul de la distribution aléatoire sur cette session
    const sessionDist = { A: 0, B: 0, C: 0, D: 0 };
    shuffledQuestions.forEach(sq => {
      sessionDist[sq.correctLetter] = (sessionDist[sq.correctLetter] || 0) + 1;
    });

    state.quiz = {
      active: true,
      questions: shuffledQuestions,
      currentIndex: 0,
      score: 0,
      streak: 0,
      correctCount: 0,
      answered: false,
      timerSeconds: 45,
      timerMax: 45,
      timerInterval: null,
      timeFrozen: false,
      doubleActive: false,
      shieldActive: false,
      powerups: {
        double: 2,
        fifty: 2,
        shield: 1,
        freeze: 2,
        hint: 3
      },
      sessionDistribution: sessionDist
    };

    updatePowerupButtons();
    updateDistributionWidget();
    renderCurrentQuestion();
  }

  function renderCurrentQuestion() {
    clearInterval(state.quiz.timerInterval);
    const quizCard = document.getElementById('quiz-main-card');
    const summaryCard = document.getElementById('quiz-summary-card');
    if (!quizCard || !summaryCard) return;

    if (state.quiz.currentIndex >= state.quiz.questions.length) {
      showQuizSummary();
      return;
    }

    quizCard.classList.remove('hidden');
    summaryCard.classList.add('hidden');

    const q = state.quiz.questions[state.quiz.currentIndex];
    state.quiz.answered = false;
    state.quiz.timeFrozen = false;
    state.quiz.doubleActive = false;
    state.quiz.shieldActive = false;

    // Mise à jour de la barre de progression
    const total = state.quiz.questions.length;
    const curr = state.quiz.currentIndex + 1;
    document.getElementById('quiz-progress-text').textContent = `Question ${curr} / ${total}`;
    document.getElementById('quiz-progress-fill').style.width = `${Math.round((curr / total) * 100)}%`;
    document.getElementById('quiz-score-live').textContent = `${state.quiz.score.toLocaleString('fr-CA')} pts`;

    const mult = getStreakMultiplier(state.quiz.streak);
    const streakEl = document.getElementById('quiz-streak-badge');
    streakEl.textContent = `🔥 Série : ${state.quiz.streak} (Multiplicateur ×${mult})`;
    streakEl.classList.toggle('streak-hot', state.quiz.streak >= 3);

    // Badges Module + Bloom + NotebookLM
    const nb = (window.NOTEBOOKS_DATA || []).find(n => n.code === q.module);
    const bloom = BLOOM_META[q.bloomLevel] || BLOOM_META[1];

    const badgesHtml = `
      <span class="q-badge mod-badge" style="--badge-color:${nb ? nb.color : '#6366f1'}">
        ${nb ? nb.icon : '📘'} ${nb ? nb.shortTitle : q.module}
      </span>
      <span class="q-badge bloom-badge" style="--badge-color:${bloom.color}" title="${bloom.desc}">
        ${bloom.icon} Bloom N${bloom.level} : ${bloom.label}
      </span>
      ${ nb ? `<a href="${nb.notebookUrl}" target="_blank" rel="noopener noreferrer" class="q-badge nlm-link-badge" title="Ouvrir le NotebookLM de ce module">
        🔗 NotebookLM (${nb.code}) ↗
      </a>` : '' }
    `;
    document.getElementById('quiz-question-badges').innerHTML = badgesHtml;
    document.getElementById('quiz-question-text').textContent = q.question;

    // Cacher l'indice et le feedback
    const hintBox = document.getElementById('quiz-hint-box');
    hintBox.classList.add('hidden');
    hintBox.innerHTML = '';

    const feedbackBox = document.getElementById('quiz-feedback-box');
    feedbackBox.classList.add('hidden');
    feedbackBox.innerHTML = '';

    // Rendu des 4 options Wayground colorées (A, B, C, D) mélangées par Fisher-Yates
    const letters = ['A', 'B', 'C', 'D'];
    const optContainer = document.getElementById('quiz-options-grid');
    optContainer.innerHTML = q.shuffledOptions.map((optText, idx) => `
      <button class="wayground-option opt-color-${idx}" data-idx="${idx}">
        <span class="opt-key">${letters[idx]}</span>
        <span class="opt-label">${optText}</span>
      </button>
    `).join('');

    optContainer.querySelectorAll('.wayground-option').forEach(btn => {
      btn.addEventListener('click', () => {
        const chosenIdx = parseInt(btn.getAttribute('data-idx'), 10);
        handleOptionSelect(chosenIdx, btn);
      });
    });

    updatePowerupButtons();

    if (state.filters.timed) {
      startQuestionTimer();
    } else {
      document.getElementById('quiz-timer-fill').style.width = '100%';
      document.getElementById('quiz-timer-text').textContent = '∞ Mode Étude';
    }
  }

  function startQuestionTimer() {
    clearInterval(state.quiz.timerInterval);
    state.quiz.timerSeconds = state.quiz.timerMax;
    const fill = document.getElementById('quiz-timer-fill');
    const txt = document.getElementById('quiz-timer-text');

    const updateTimerUI = () => {
      const pct = Math.max(0, (state.quiz.timerSeconds / state.quiz.timerMax) * 100);
      if (fill) fill.style.width = `${pct}%`;
      if (txt) txt.textContent = state.quiz.timeFrozen ? `❄️ ${state.quiz.timerSeconds}s (Gelé)` : `⏱️ ${state.quiz.timerSeconds}s`;
    };

    updateTimerUI();
    state.quiz.timerInterval = setInterval(() => {
      if (state.quiz.answered || state.quiz.timeFrozen) return;
      state.quiz.timerSeconds--;
      updateTimerUI();
      if (state.quiz.timerSeconds <= 0) {
        clearInterval(state.quiz.timerInterval);
        handleTimeOut();
      }
    }, 1000);
  }

  function getStreakMultiplier(streak) {
    if (streak >= 6) return 2.5;
    if (streak >= 4) return 2.0;
    if (streak >= 2) return 1.5;
    return 1.0;
  }

  function handleOptionSelect(chosenIdx, btnEl) {
    if (state.quiz.answered) return;
    const q = state.quiz.questions[state.quiz.currentIndex];
    const isCorrect = chosenIdx === q.correctIndex;

    // Si mauvaise réponse mais Bouclier Seconde Chance actif
    if (!isCorrect && state.quiz.shieldActive) {
      state.quiz.shieldActive = false;
      btnEl.disabled = true;
      btnEl.classList.add('opt-eliminated');
      showToast('🛡️ Bouclier Seconde Chance activé ! Ce choix est écarté, essayez à nouveau.', 'info');
      return;
    }

    state.quiz.answered = true;
    clearInterval(state.quiz.timerInterval);

    // Enregistrer la lettre de la bonne réponse dans l'historique d'audit aléatoire
    state.historyDistribution[q.correctLetter] = (state.historyDistribution[q.correctLetter] || 0) + 1;

    const allBtns = document.querySelectorAll('#quiz-options-grid .wayground-option');
    allBtns.forEach((b, idx) => {
      b.disabled = true;
      if (idx === q.correctIndex) {
        b.classList.add('opt-correct');
      } else if (idx === chosenIdx && !isCorrect) {
        b.classList.add('opt-wrong');
      } else {
        b.classList.add('opt-dimmed');
      }
    });

    let pointsEarned = 0;
    if (isCorrect) {
      state.quiz.streak++;
      state.quiz.correctCount++;
      if (state.quiz.streak > state.bestStreak) {
        state.bestStreak = state.quiz.streak;
      }
      state.masteredIds.add(q.id);
      state.missedIds.delete(q.id);

      const speedBonus = state.filters.timed ? Math.round((state.quiz.timerSeconds / state.quiz.timerMax) * 300) : 150;
      const basePoints = 500 + speedBonus;
      const mult = getStreakMultiplier(state.quiz.streak) * (state.quiz.doubleActive ? 2 : 1);
      pointsEarned = Math.round(basePoints * mult);

      state.quiz.score += pointsEarned;
      state.xp += pointsEarned;
    } else {
      state.quiz.streak = 0;
      state.missedIds.add(q.id);
    }

    saveState();
    updateDistributionWidget();
    renderQuestionFeedback(q, isCorrect, pointsEarned);
  }

  function handleTimeOut() {
    if (state.quiz.answered) return;
    state.quiz.answered = true;
    const q = state.quiz.questions[state.quiz.currentIndex];
    state.quiz.streak = 0;
    state.missedIds.add(q.id);

    const allBtns = document.querySelectorAll('#quiz-options-grid .wayground-option');
    allBtns.forEach((b, idx) => {
      b.disabled = true;
      if (idx === q.correctIndex) {
        b.classList.add('opt-correct');
      } else {
        b.classList.add('opt-dimmed');
      }
    });

    saveState();
    renderQuestionFeedback(q, false, 0, true);
  }

  function renderQuestionFeedback(q, isCorrect, pointsEarned, isTimeout = false) {
    const nb = (window.NOTEBOOKS_DATA || []).find(n => n.code === q.module);
    const bloom = BLOOM_META[q.bloomLevel] || BLOOM_META[1];
    const feedbackBox = document.getElementById('quiz-feedback-box');

    const statusBanner = isCorrect
      ? `<div class="fb-header fb-success">
           <span>✅ Bonne réponse ! (Option ${q.correctLetter})</span>
           <span class="fb-points">+${pointsEarned} pts ${state.quiz.doubleActive ? '⚡ (Double x2!)' : ''}</span>
         </div>`
      : `<div class="fb-header fb-error">
           <span>${isTimeout ? '⏰ Temps écoulé !' : '❌ Réponse incorrecte'} — La bonne réponse était l’option <strong>${q.correctLetter}</strong></span>
           <span class="fb-points">Ajoutée au mode Rattrapage</span>
         </div>`;

    feedbackBox.innerHTML = `
      ${statusBanner}
      <div class="fb-body">
        <div class="fb-explanation">
          <h4>📘 Explication théorique & Corrigé (${q.module} • Bloom N${bloom.level} : ${bloom.label})</h4>
          <p>${q.explanation}</p>
        </div>
        <div class="fb-pinker">
          <h4>✍️ Conseil d’impact rédactionnel Steven Pinker</h4>
          <p>${q.pinkerTip}</p>
        </div>
        <div class="fb-actions">
          ${nb ? `<a href="${nb.notebookUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
            📂 Ouvrir le NotebookLM ${nb.code} (${nb.sourcesCount} sources) ↗
          </a>` : ''}
          <button id="btn-next-question" class="btn-primary">
            ${state.quiz.currentIndex + 1 < state.quiz.questions.length ? 'Question suivante →' : 'Voir le bilan de la partie 🏆'}
          </button>
        </div>
      </div>
    `;

    feedbackBox.classList.remove('hidden');
    document.getElementById('btn-next-question').addEventListener('click', () => {
      state.quiz.currentIndex++;
      renderCurrentQuestion();
    });
  }

  // ==================== POWER-UPS WAYGROUND ====================
  function activatePowerup(type) {
    if (!state.quiz.active || state.quiz.answered) return;
    if ((state.quiz.powerups[type] || 0) <= 0) {
      showToast('Ce Power-up est épuisé pour cette manche !', 'warn');
      return;
    }

    const q = state.quiz.questions[state.quiz.currentIndex];

    if (type === 'fifty') {
      const allBtns = Array.from(document.querySelectorAll('#quiz-options-grid .wayground-option'));
      const wrongBtns = allBtns.filter(b => parseInt(b.getAttribute('data-idx'), 10) !== q.correctIndex && !b.disabled);
      if (wrongBtns.length < 2) return;
      const toDisable = fisherYatesShuffle(wrongBtns).slice(0, 2);
      toDisable.forEach(b => {
        b.disabled = true;
        b.classList.add('opt-eliminated');
      });
      state.quiz.powerups.fifty--;
      showToast('✂️ 50/50 activé : deux choix erronés ont été éliminés !', 'success');
    } else if (type === 'double') {
      if (state.quiz.doubleActive) return;
      state.quiz.doubleActive = true;
      state.quiz.powerups.double--;
      showToast('⚡ Double Jeu activé : points doublés (×2) sur cette question !', 'success');
    } else if (type === 'shield') {
      if (state.quiz.shieldActive) return;
      state.quiz.shieldActive = true;
      state.quiz.powerups.shield--;
      showToast('🛡️ Bouclier Seconde Chance activé : droit à l’erreur sur cette question !', 'success');
    } else if (type === 'freeze') {
      if (state.quiz.timeFrozen) return;
      state.quiz.timeFrozen = true;
      state.quiz.powerups.freeze--;
      const txt = document.getElementById('quiz-timer-text');
      if (txt) txt.textContent = `❄️ ${state.quiz.timerSeconds}s (Gelé)`;
      showToast('❄️ Chronomètre gelé ! Prenez tout votre temps pour analyser.', 'success');
    } else if (type === 'hint') {
      const hintBox = document.getElementById('quiz-hint-box');
      if (!hintBox.classList.contains('hidden')) return;
      state.quiz.powerups.hint--;
      const bloom = BLOOM_META[q.bloomLevel] || BLOOM_META[1];
      hintBox.innerHTML = `
        <strong>💡 Indice Bloom (N${bloom.level} - ${bloom.label}) & Pinker :</strong>
        <span>${q.pinkerTip}</span>
      `;
      hintBox.classList.remove('hidden');
    }

    updatePowerupButtons();
  }

  function updatePowerupButtons() {
    document.querySelectorAll('.powerup-btn').forEach(btn => {
      const type = btn.getAttribute('data-powerup');
      const count = state.quiz.powerups[type] || 0;
      const badge = btn.querySelector('.pu-count');
      if (badge) badge.textContent = count;
      btn.disabled = count <= 0 || state.quiz.answered;
    });
  }

  function showQuizSummary() {
    const quizCard = document.getElementById('quiz-main-card');
    const summaryCard = document.getElementById('quiz-summary-card');
    quizCard.classList.add('hidden');
    summaryCard.classList.remove('hidden');

    const total = state.quiz.questions.length;
    const correct = state.quiz.correctCount;
    const acc = total ? Math.round((correct / total) * 100) : 0;

    document.getElementById('summary-accuracy').textContent = `${acc}% (${correct}/${total})`;
    document.getElementById('summary-score').textContent = `${state.quiz.score.toLocaleString('fr-CA')} pts`;
    document.getElementById('summary-streak').textContent = `${state.bestStreak} 🔥`;

    const dist = state.quiz.sessionDistribution;
    document.getElementById('summary-dist-breakdown').textContent =
      `A: ${dist.A} • B: ${dist.B} • C: ${dist.C} • D: ${dist.D}`;
  }

  // ==================== AUDIT STATISTIQUE DE DISTRIBUTION ALÉATOIRE ====================
  function updateDistributionWidget() {
    const dist = state.quiz.sessionDistribution || { A: 0, B: 0, C: 0, D: 0 };
    const total = Math.max(1, dist.A + dist.B + dist.C + dist.D);

    ['A', 'B', 'C', 'D'].forEach(letter => {
      const count = dist[letter] || 0;
      const pct = Math.round((count / total) * 100);
      const bar = document.getElementById(`dist-bar-${letter}`);
      const lbl = document.getElementById(`dist-val-${letter}`);
      if (bar) bar.style.width = `${pct}%`;
      if (lbl) lbl.textContent = `${count} (${pct}%)`;
    });
  }

  function runMonteCarloDistributionAudit() {
    const counts = { A: 0, B: 0, C: 0, D: 0 };
    const letters = ['A', 'B', 'C', 'D'];
    const trials = 2000;
    const sample = ['Opt1', 'Opt2', 'Opt3', 'Opt4'];

    for (let i = 0; i < trials; i++) {
      const shuffled = fisherYatesShuffle(sample);
      const pos = shuffled.indexOf('Opt1');
      counts[letters[pos]]++;
    }

    const out = document.getElementById('monte-carlo-result');
    if (out) {
      out.innerHTML = `✅ Simulation Fisher-Yates sur <strong>${trials.toLocaleString('fr-CA')} tirages</strong> : ` +
        letters.map(l => `<strong>${l}</strong>: ${((counts[l] / trials) * 100).toFixed(1)}%`).join(' • ') +
        ` (Équilibre aléatoire vérifié !)`;
      out.classList.remove('hidden');
    }
  }

  // ==================== HUB NOTEBOOKLM & RESSOURCES PAR MODULE ====================
  function renderNotebooksHub() {
    const grid = document.getElementById('notebooks-hub-grid');
    if (!grid) return;

    const notebooks = window.NOTEBOOKS_DATA || [];
    grid.innerHTML = notebooks.map(nb => {
      const qCount = (window.ALL_QUESTIONS || []).filter(q => q.module === nb.code).length;
      return `
        <article class="nb-card" style="--nb-accent:${nb.color}">
          <div class="nb-card-top">
            <div class="nb-title-row">
              <span class="nb-icon">${nb.icon}</span>
              <div>
                <span class="nb-code-pill">${nb.code} • ${nb.sourcesCount} ressource${nb.sourcesCount > 1 ? 's' : ''} synchronisée${nb.sourcesCount > 1 ? 's' : ''}</span>
                <h3>${nb.title}</h3>
              </div>
            </div>
            <div class="nb-eval-tag">🎯 ${nb.evaluations}</div>
          </div>

          <p class="nb-summary">${nb.summary}</p>

          <div class="nb-concepts">
            <h4>Points clés à maîtriser :</h4>
            <ul>
              ${nb.keyConcepts.map(c => `<li>${c}</li>`).join('')}
            </ul>
          </div>

          <div class="nb-actions">
            <a href="${nb.notebookUrl}" target="_blank" rel="noopener noreferrer" class="btn-nlm-open">
              🧠 Ouvrir dans NotebookLM ↗
            </a>
            <button class="btn-quiz-mod" onclick="window.startQuizForModule('${nb.code}')">
              🎮 Tester ce module (${qCount} Q)
            </button>
            <button class="btn-sources-toggle" onclick="window.toggleSourcesModal('${nb.code}')">
              📂 Voir les ${nb.sourcesCount} sources
            </button>
          </div>
        </article>
      `;
    }).join('');
  }

  window.toggleSourcesModal = function(modCode) {
    const modal = document.getElementById('sources-modal');
    const nb = (window.NOTEBOOKS_DATA || []).find(n => n.code === modCode);
    if (!modal || !nb) return;

    document.getElementById('modal-nb-title').textContent = `${nb.icon} ${nb.title} (${nb.sourcesCount} sources dans NotebookLM)`;
    document.getElementById('modal-nb-link').href = nb.notebookUrl;

    const listEl = document.getElementById('modal-sources-list');
    listEl.innerHTML = nb.sources.map((s, idx) => `
      <li class="source-item">
        <span class="source-idx">#${idx + 1}</span>
        <span class="source-title">${s.title}</span>
        <span class="source-badge">${s.type.toUpperCase()}</span>
      </li>
    `).join('');

    modal.classList.remove('hidden');
  };

  window.closeSourcesModal = function() {
    const modal = document.getElementById('sources-modal');
    if (modal) modal.classList.add('hidden');
  };

  // ==================== FLASHCARDS 3D ====================
  function initFlashcards() {
    const sel = document.getElementById('fc-module-select');
    if (!sel) return;

    let html = `<option value="ALL">📚 Toutes les cartes mémoire (Tous les modules)</option>`;
    (window.NOTEBOOKS_DATA || []).forEach(nb => {
      html += `<option value="${nb.code}">${nb.icon} ${nb.shortTitle} (${(nb.flashcards || []).length} cartes)</option>`;
    });
    sel.innerHTML = html;

    sel.addEventListener('change', () => {
      state.flashcards.moduleFilter = sel.value;
      buildFlashcardDeck();
    });

    const cardEl = document.getElementById('flashcard-3d');
    if (cardEl) {
      cardEl.addEventListener('click', () => {
        state.flashcards.flipped = !state.flashcards.flipped;
        cardEl.classList.toggle('is-flipped', state.flashcards.flipped);
      });
    }

    document.getElementById('btn-fc-prev')?.addEventListener('click', () => {
      if (state.flashcards.deck.length === 0) return;
      state.flashcards.index = (state.flashcards.index - 1 + state.flashcards.deck.length) % state.flashcards.deck.length;
      renderFlashcard();
    });

    document.getElementById('btn-fc-next')?.addEventListener('click', () => {
      if (state.flashcards.deck.length === 0) return;
      state.flashcards.index = (state.flashcards.index + 1) % state.flashcards.deck.length;
      renderFlashcard();
    });

    document.getElementById('btn-fc-shuffle')?.addEventListener('click', () => {
      state.flashcards.deck = fisherYatesShuffle(state.flashcards.deck);
      state.flashcards.index = 0;
      renderFlashcard();
      showToast('🔀 Paquet de cartes mélangé aléatoirement !', 'info');
    });

    buildFlashcardDeck();
  }

  function buildFlashcardDeck() {
    const cards = [];
    (window.NOTEBOOKS_DATA || []).forEach(nb => {
      if (state.flashcards.moduleFilter !== 'ALL' && nb.code !== state.flashcards.moduleFilter) return;
      (nb.flashcards || []).forEach(fc => {
        cards.push({
          module: nb.code,
          shortTitle: nb.shortTitle,
          icon: nb.icon,
          color: nb.color,
          q: fc.q,
          a: fc.a
        });
      });
    });
    state.flashcards.deck = fisherYatesShuffle(cards);
    state.flashcards.index = 0;
    renderFlashcard();
  }

  function renderFlashcard() {
    const deck = state.flashcards.deck;
    if (!deck.length) return;
    const curr = deck[state.flashcards.index];
    state.flashcards.flipped = false;

    const cardEl = document.getElementById('flashcard-3d');
    if (cardEl) cardEl.classList.remove('is-flipped');

    document.getElementById('fc-counter').textContent = `Carte ${state.flashcards.index + 1} sur ${deck.length}`;
    document.getElementById('fc-front-badge').textContent = `${curr.icon} ${curr.shortTitle}`;
    document.getElementById('fc-back-badge').textContent = `✅ Réponse • ${curr.shortTitle}`;
    document.getElementById('fc-front-text').textContent = curr.q;
    document.getElementById('fc-back-text').textContent = curr.a;
  }

  // ==================== LABORATOIRE STEVEN PINKER ====================
  function initPinkerLab() {
    const lab = window.PINKER_LAB_DATA;
    if (!lab) return;

    const pillarsGrid = document.getElementById('pinker-pillars-grid');
    if (pillarsGrid) {
      pillarsGrid.innerHTML = lab.pillars.map(p => `
        <div class="pinker-pillar-card">
          <div class="pp-header">
            <span class="pp-icon">${p.icon}</span>
            <h4>${p.title}</h4>
          </div>
          <p class="pp-theory">${p.theory}</p>
          <p class="pp-app"><strong>Application ENP7333 :</strong> ${p.enpApplication}</p>
          <div class="pp-compare">
            <div class="pp-bad">❌ <em>Bureaucratique :</em> ${p.badExample}</div>
            <div class="pp-good">✅ <em>Style Pinker :</em> ${p.goodExample}</div>
          </div>
        </div>
      `).join('');
    }

    const challengesGrid = document.getElementById('pinker-challenges-grid');
    if (challengesGrid) {
      challengesGrid.innerHTML = lab.challenges.map(ch => `
        <div class="pinker-challenge-card">
          <div class="pc-badge">${ch.evalBadge}</div>
          <p class="pc-context">${ch.context}</p>
          <div class="pc-before">
            <h5>❌ Brouillon alourdi (Noms zombies, nébuleux & haies) :</h5>
            <p>${ch.before}</p>
            <ul>
              ${ch.issues.map(iss => `<li>${iss}</li>`).join('')}
            </ul>
          </div>
          <button class="btn-reveal-pinker" onclick="this.nextElementSibling.classList.toggle('hidden')">
            ✨ Voir la réécriture à fort impact (Steven Pinker)
          </button>
          <div class="pc-after hidden">
            <h5>✅ Version haute fluidité cognitive (Pinker × ENP7333) :</h5>
            <p class="pc-after-quote">${ch.after}</p>
            <span class="pc-gain">📈 Gain : ${ch.gain}</span>
          </div>
        </div>
      `).join('');
    }

    const textarea = document.getElementById('pinker-scanner-input');
    const btnScan = document.getElementById('btn-run-pinker-scan');
    const btnLoadBad = document.getElementById('btn-load-sample-bad');
    const btnLoadGood = document.getElementById('btn-load-sample-good');

    if (textarea && btnScan) {
      textarea.value = lab.sampleTexts.bureaucratic;
      btnScan.addEventListener('click', () => runPinkerScannerUI(textarea.value));
      btnLoadBad?.addEventListener('click', () => {
        textarea.value = lab.sampleTexts.bureaucratic;
        runPinkerScannerUI(textarea.value);
      });
      btnLoadGood?.addEventListener('click', () => {
        textarea.value = lab.sampleTexts.pinkerized;
        runPinkerScannerUI(textarea.value);
      });
      runPinkerScannerUI(textarea.value);
    }
  }

  function runPinkerScannerUI(text) {
    const res = window.analyzePinkerText(text);
    const out = document.getElementById('pinker-scanner-results');
    if (!res || !out) return;

    const scoreColor = res.score >= 80 ? '#10b981' : res.score >= 55 ? '#f59e0b' : '#ef4444';

    out.innerHTML = `
      <div class="scanner-kpis">
        <div class="scanner-kpi" style="border-color:${scoreColor}">
          <span class="kpi-val" style="color:${scoreColor}">${res.score} / 100</span>
          <span class="kpi-lbl">Score de Fluidité Pinker</span>
        </div>
        <div class="scanner-kpi">
          <span class="kpi-val">${res.zombieCount}</span>
          <span class="kpi-lbl">🧟 Noms zombies</span>
        </div>
        <div class="scanner-kpi">
          <span class="kpi-val">${res.nebulousCount}</span>
          <span class="kpi-lbl">🌫️ Noms nébuleux</span>
        </div>
        <div class="scanner-kpi">
          <span class="kpi-val">${res.hedgeCount}</span>
          <span class="kpi-lbl">✂️ Haies / Métadiscours</span>
        </div>
        <div class="scanner-kpi">
          <span class="kpi-val">${res.avgSentenceLength} mots</span>
          <span class="kpi-lbl">📏 Longueur moy. / phrase</span>
        </div>
      </div>

      <div class="scanner-highlighted-box">
        <h5>Texte annoté (survolez les termes surlignés) :</h5>
        <div class="highlighted-prose">${res.highlightedHtml}</div>
      </div>

      ${res.findings.length > 0 ? `
        <div class="scanner-suggestions">
          <h5>Diagnostic et remplacements recommandés (${res.findings.length} alerte${res.findings.length > 1 ? 's' : ''}) :</h5>
          <ul>
            ${res.findings.map(f => `
              <li>
                <span class="finding-term ${f.colorClass}">« ${f.term} »</span>
                <strong>${f.label} :</strong> ${f.suggestion}
              </li>
            `).join('')}
          </ul>
        </div>
      ` : `<div class="scanner-clean">🎉 Excellent ! Aucun nom zombie, nom nébuleux ni haie compulsive détecté. Votre prose est directe, fluide et percutante.</div>`}
    `;
  }

  // ==================== TOAST NOTIFICATIONS ====================
  function showToast(msg, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const el = document.createElement('div');
    el.className = `toast toast-${type}`;
    el.textContent = msg;
    container.appendChild(el);
    setTimeout(() => {
      el.classList.add('toast-Out');
      setTimeout(() => el.remove(), 300);
    }, 3200);
  }
})();
