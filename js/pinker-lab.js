// Laboratoire de Rédaction à Impact : Steven Pinker (Notebook ID: a109ad5c-834d-4f3d-82a0-fe41aa72318e) × ENP7333

window.PINKER_LAB_DATA = {
  notebookId: 'a109ad5c-834d-4f3d-82a0-fe41aa72318e',
  notebookTitle: 'Rendez vos écrits plus puissants et persuasifs (Steven Pinker — The Sense of Style)',
  notebookUrl: 'https://notebooklm.google.com/notebook/a109ad5c-834d-4f3d-82a0-fe41aa72318e',
  pillars: [
    {
      id: 'curse',
      icon: '🧠',
      title: '1. Vaincre la « Malédiction du savoir » (Curse of Knowledge)',
      theory: 'Lorsqu’un analyste maîtrise un dossier complexe, il oublie que son lecteur ne possède pas le même contexte implicite. Il emploie alors des abstractions et des raccourcis incompréhensibles.',
      enpApplication: 'Dans vos Évaluations 1 à 4, ne mentionnez jamais un concept (« instrument procédural », « effet interprétatif », « ADS+ ») sans l’ancrer immédiatement dans un acteur réel et une action concrète sur le terrain.',
      badExample: '« La dynamique multi-acteurs induit une asymétrie d’appropriation au niveau du dispositif. »',
      goodExample: '« Les petites fermes maraîchères manquent de temps pour remplir les formulaires du programme Prime-Vert, ce qui freine leur adhésion. »'
    },
    {
      id: 'fluency',
      icon: '⚡',
      title: '2. Maximiser la « Fluidité cognitive » (Oppenheimer, 2006)',
      theory: 'Contrairement au mythe académique, utiliser un jargon pompeux (legalese / academese) réduit la crédibilité de l’auteur. Plus le cerveau du lecteur décode facilement une phrase, plus il juge le raisonnement rigoureux et persuasif.',
      enpApplication: 'Un mémoire au Conseil des ministres (13 rubriques, Robert Baril) est lu par des ministres pressés : une syntaxe limpide augmente directement le poids persuasif de votre recommandation.',
      badExample: '« L’utilisation d’une phraséologie érudite nonobstant l’absence de nécessité intrinsèque... »',
      goodExample: '« Écrire simplement rend vos arguments politiques immédiatement crédibles et mémorables. »'
    },
    {
      id: 'classic',
      icon: '🪟',
      title: '3. Adopter le « Style classique » (Thomas & Turner) & bannir le métadiscours',
      theory: 'Le style classique conçoit la prose comme une fenêtre transparente ouverte sur l’objet étudié. Le lecteur doit voir les acteurs agir, et non regarder l’étudiant commenter son propre plan (« Dans le cadre de cette section, nous allons procéder à... »).',
      enpApplication: 'Supprimez les préambules scolaires (« Nous allons maintenant tenter d’analyser la pertinence de l’AIR ») et attaquez chaque paragraphe par votre thèse analytique directe.',
      badExample: '« Dans cette deuxième partie de notre travail, nous allons tenter de nous pencher sur la question du choix des instruments. »',
      goodExample: '« Trois instruments complémentaires permettent au MAPAQ de réduire l’usage des pesticides sans compromettre la rentabilité des fermes. »'
    },
    {
      id: 'zombies',
      icon: '🧟',
      title: '4. Chasser les « Noms zombies » (Nominalisations)',
      theory: 'Les noms zombies sont des verbes ou adjectifs momifiés en substantifs abstraits (terminaisons en -tion, -ment, -ance, -age) accompagnés de verbes vides (effectuer, procéder à, réaliser, assurer). Ils dévorent l’action et masquent qui fait quoi.',
      enpApplication: 'Ressuscitez systématiquement le verbe d’action : « procéder à la mise en place d’une réglementation » devient « réglementer » ; « effectuer une évaluation » devient « évaluer ».',
      badExample: '« L’effectuation d’une bonification du financement permet la réalisation d’une diminution de l’itinérance. »',
      goodExample: '« En haussant le financement des refuges, le ministère réduit l’itinérance chronique. »'
    },
    {
      id: 'nebulous',
      icon: '🌫️',
      title: '5. Bannir les « Noms nébuleux » & dégrouper les empilements',
      theory: 'La prose bureaucratique regorge de mots-écrans vides de sens matériel : « cadre », « niveau », « perspective », « processus », « mécanisme », « démarche », « problématique », « dispositif ». Les supprimer allège la phrase de 30 % sans perdre aucune information.',
      enpApplication: 'Traquez impitoyablement « au niveau de », « dans le cadre de » et « dans une perspective de » dans vos énoncés d’axes et d’objectifs (Module 7).',
      badExample: '« Au niveau du cadre du processus décisionnel, la problématique se situe dans une perspective budgétaire. »',
      goodExample: '« Le manque de budget freine la décision du Conseil des ministres. »'
    },
    {
      id: 'hedges',
      icon: '✂️',
      title: '6. Éliminer les « Haies » compulsives (Hedging) & maîtriser le passif',
      theory: 'Les atténuateurs réflexes (« relativement », « dans une certaine mesure », « en quelque sorte », « potentiellement ») trahissent un manque d’assurance analytique. Quant au passif, il ne doit jamais servir à camoufler l’acteur imputable.',
      enpApplication: 'Dans l’Évaluation 3 (justification des techniques d’analyse) et l’Évaluation 4 (reddition de comptes), remplacez les adverbes mous par des conditions précises et nommez toujours l’acteur imputable.',
      badExample: '« Des retards relativement importants ont été observés dans une certaine mesure au niveau de la collecte des indicateurs. »',
      goodExample: '« Les directions régionales ont accumulé six mois de retard dans la collecte des indicateurs faute de personnel dédié. »'
    }
  ],

  challenges: [
    {
      id: 'CH-EVAL1',
      evalBadge: 'Évaluation 1 (20%) • Définition du problème public (M01-M02)',
      context: 'Vous rédigez le diagnostic causal de la hausse de l’itinérance au Québec.',
      before: '« Dans le cadre de cette première section, il convient de souligner qu’au niveau de la problématique de l’itinérance, on observe l’existence d’un processus de précarisation résidentielle qui est relativement lié à une insuffisance de la disponibilité des logements abordables. »',
      issues: [
        'Métadiscours inutile : « Dans le cadre de cette première section, il convient de souligner que... »',
        'Noms nébuleux : « au niveau de », « problématique », « processus »',
        'Noms zombies : « l’existence d’un processus de précarisation », « insuffisance de la disponibilité »',
        'Haie molle : « relativement lié »'
      ],
      after: '« La pénurie de logements abordables précarise les ménages à faible revenu et accélère la hausse de l’itinérance dans les villes québécoises. »',
      gain: 'De 39 mots lourds et abstraits à 21 mots percutants avec deux verbes d’action causaux (« précarise », « accélère »).'
    },
    {
      id: 'CH-EVAL2',
      evalBadge: 'Évaluation 2 (20%) • Cartographie des acteurs et instruments (M03-M04)',
      context: 'Vous justifiez le choix d’un instrument incitatif dans le Plan d’agriculture durable du MAPAQ.',
      before: '« L’utilisation d’un mécanisme de rétribution financière par le dispositif ministériel procède d’une démarche visant la modification comportementale au niveau des producteurs agricoles dans une perspective de réduction des pesticides. »',
      issues: [
        'Noms zombies : « L’utilisation », « rétribution », « modification comportementale », « réduction »',
        'Noms nébuleux : « mécanisme », « dispositif », « démarche », « au niveau des », « dans une perspective de »',
        'Verbe terne : « procède de »'
      ],
      after: '« En rémunérant les pratiques écologiques, le MAPAQ incite les producteurs agricoles à réduire de 500 000 kg leur usage de pesticides d’ici 2030. »',
      gain: 'Identification immédiate de l’autorité publique (MAPAQ), de l’instrument (rémunérer/inciter), du groupe cible (producteurs agricoles) et de la cible chiffrée.'
    },
    {
      id: 'CH-EVAL3',
      evalBadge: 'Évaluation 3 (20%) • Choix et justification des techniques d’analyse (M06)',
      context: 'Vous expliquez pourquoi l’ADS+ est plus pertinente que l’analyse coûts-avantages (ACA) pour la Politique d’aide internationale féministe (PAIF).',
      before: '« Il semblerait dans une certaine mesure que la réalisation d’une analyse différenciée selon les genres (ADS+) soit relativement plus adéquate au niveau de l’identification de la problématique de la PAIF que l’effectuation d’une démarche coût-bénéfice. »',
      issues: [
        'Triple haie : « Il semblerait », « dans une certaine mesure », « relativement »',
        'Noms zombies : « la réalisation d’une analyse », « l’identification », « l’effectuation d’une démarche »',
        'Absence de justification causale concrète'
      ],
      after: '« L’ADS+ surpasse l’analyse coûts-avantages pour diagnostiquer les causes de la PAIF, car elle débusque les barrières culturelles et juridiques qui privent les femmes de ressources, là où le seul calcul monétaire reste aveugle aux inégalités de genre. »',
      gain: 'Prise de position analytique claire (Bloom niveau 5 - Évaluer) appuyée sur un verbe fort (« surpasse », « débusque »).'
    },
    {
      id: 'CH-EVAL4',
      evalBadge: 'Évaluation 4 (30%) • Énoncé de politique et Plan de mise en œuvre (M07-M08-M09)',
      context: 'Vous formulez un axe, un objectif SMART et un mécanisme d’évaluation concomitante.',
      before: '« Des mesures de suivi seront potentiellement mises en place au niveau régional afin d’assurer une certaine vérification de l’atteinte des objectifs dans le cadre du plan de mise en œuvre. »',
      issues: [
        'Voix passive évasive qui masque l’acteur imputable : « Des mesures de suivi seront mises en place »',
        'Haies : « potentiellement », « une certaine »',
        'Noms zombies & nébuleux : « assurer une vérification de l’atteinte », « au niveau régional », « dans le cadre du »'
      ],
      after: '« Les directions régionales du ministère publieront chaque trimestre le taux d’implantation des bandes riveraines afin de corriger sans délai tout écart par rapport à la cible de 2030. »',
      gain: 'Désigne l’acteur imputable (directions régionales), la fréquence (chaque trimestre), l’indicateur (taux d’implantation) et la fonction d’évaluation concomitante (corriger sans délai).'
    }
  ],

  sampleTexts: {
    bureaucratic: "Dans le cadre de la problématique de la crise du logement, il semblerait dans une certaine mesure que la mise en œuvre d'un processus de régulation au niveau du marché locatif doive faire l'objet d'une réflexion relativement approfondie. En effet, l'effectuation d'une bonification de l'accessibilité résidentielle a été identifiée comme une perspective prioritaire à travers le dispositif gouvernemental.",
    pinkerized: "Pour endiguer la crise du logement, la Société d'habitation du Québec financera 12 000 logements abordables d'ici 2028 et encadrera la hausse des loyers. Ces deux mesures protègent directement les ménages à faible revenu contre l'éviction."
  }
};

// Analyseur linguistique en temps réel basé sur la méthode Steven Pinker
window.analyzePinkerText = function(rawText) {
  const text = (rawText || '').trim();
  if (!text) {
    return null;
  }

  const nebulousPatterns = [
    { regex: /\bau niveau (de|du|des|d')\b/gi, label: 'Locution nébuleuse (« au niveau de »)', suggestion: 'Supprimez ou remplacez par « dans », « chez » ou « pour ».' },
    { regex: /\bdans le cadre (de|du|des|d')\b/gi, label: 'Locution nébuleuse (« dans le cadre de »)', suggestion: 'Remplacez par « dans », « lors de » ou « par ».' },
    { regex: /\bdans une perspective (de|d')\b/gi, label: 'Locution nébuleuse (« dans une perspective de »)', suggestion: 'Remplacez par « pour » suivi d’un verbe d’action à l’infinitif.' },
    { regex: /\b(problématique|processus|mécanisme|dispositif|démarche|dynamique)\b/gi, label: 'Nom nébuleux bureaucratique', suggestion: 'Nommez directement le problème réel, l’outil ou l’action concrète.' }
  ];

  const zombiePatterns = [
    { regex: /\b(procéder à la |effectuer une |réaliser une |assurer la |faire l'objet d'une )([a-zéèêàùîôûç]+(tion|ment|ance|age))\b/gi, label: 'Combo Verbe vide + Nom zombie', suggestion: 'Transformez directement le nom en verbe conjugué (ex. « procéder à l’évaluation » → « évaluer »).' },
    { regex: /\b(mise en œuvre|mise en place|effectuation|opérationnalisation|visibilisation|bonification|optimisation|mobilisation|élaboration|formulation|vérification|identification|modification|réduction|diminution|amélioration)\b/gi, label: 'Nom zombie (nominalisation)', suggestion: 'Vérifiez si vous pouvez le remplacer par un verbe d’action conjugué avec un acteur sujet.' }
  ];

  const hedgePatterns = [
    { regex: /\b(relativement|dans une certaine mesure|en quelque sorte|potentiellement|semblerait|il convient de souligner que|nous allons tenter de|un certain|une certaine)\b/gi, label: 'Haie / Atténuateur ou métadiscours', suggestion: 'Supprimez cet atténuateur : affirmez votre constat directement avec des faits ou une condition précise.' }
  ];

  const passivePatterns = [
    { regex: /\b(a été|ont été|sera|seront|est|sont) ([a-zéèêàùîôûç]+(é|ée|és|ées|i|ie|is|ies|u|ue|us|ues))\b(?!\s+par\b)/gi, label: 'Voix passive sans acteur explicite (« par... »)', suggestion: 'Désignez l’acteur imputable comme sujet actif (« Le ministère évalue... »).' }
  ];

  const words = text.split(/\s+/).filter(Boolean);
  const sentences = text.split(/[.!?]+/).map(s => s.trim()).filter(Boolean);
  const avgSentenceLength = sentences.length ? Math.round(words.length / sentences.length) : words.length;

  const findings = [];
  let nebulousCount = 0;
  let zombieCount = 0;
  let hedgeCount = 0;
  let passiveCount = 0;

  const collectMatches = (patterns, category, colorClass) => {
    patterns.forEach(p => {
      let match;
      const re = new RegExp(p.regex.source, p.regex.flags);
      while ((match = re.exec(text)) !== null) {
        findings.push({
          term: match[0],
          category,
          label: p.label,
          suggestion: p.suggestion,
          colorClass
        });
        if (category === 'nebulous') nebulousCount++;
        if (category === 'zombie') zombieCount++;
        if (category === 'hedge') hedgeCount++;
        if (category === 'passive') passiveCount++;
      }
    });
  };

  collectMatches(nebulousPatterns, 'nebulous', 'hl-nebulous');
  collectMatches(zombiePatterns, 'zombie', 'hl-zombie');
  collectMatches(hedgePatterns, 'hedge', 'hl-hedge');
  collectMatches(passivePatterns, 'passive', 'hl-passive');

  // Calcul du score d'impact Pinker (/100)
  const wordCount = Math.max(words.length, 1);
  const densityPenalty = ((nebulousCount * 8) + (zombieCount * 6) + (hedgeCount * 9) + (passiveCount * 6)) * (35 / Math.max(wordCount, 20));
  const lengthPenalty = avgSentenceLength > 28 ? Math.min(25, (avgSentenceLength - 28) * 1.5) : 0;
  const rawScore = Math.round(Math.max(12, Math.min(100, 100 - densityPenalty - lengthPenalty)));

  // Génération du texte surligné
  let highlightedHtml = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  const applyHighlight = (patterns, cssClass, badgeTitle) => {
    patterns.forEach(p => {
      highlightedHtml = highlightedHtml.replace(p.regex, (m) => `<mark class="pinker-mark ${cssClass}" title="${badgeTitle}: ${p.suggestion}">${m}</mark>`);
    });
  };

  applyHighlight(nebulousPatterns, 'hl-nebulous', 'Nom nébuleux');
  applyHighlight(hedgePatterns, 'hl-hedge', 'Haie / Métadiscours');
  applyHighlight(zombiePatterns, 'hl-zombie', 'Nom zombie');
  applyHighlight(passivePatterns, 'hl-passive', 'Passif sans acteur');

  return {
    wordCount: words.length,
    sentenceCount: sentences.length,
    avgSentenceLength,
    nebulousCount,
    zombieCount,
    hedgeCount,
    passiveCount,
    score: rawScore,
    findings,
    highlightedHtml
  };
};
