# ⚡ ENP7333 × Wayground — Studio Interactif de Révision (Bloom × Steven Pinker × NotebookLM)

Application web de révision gamifiée inspirée de **Wayground** (*Quizizz*) conçue pour le cours **ENP7333 — Conception et mise en œuvre des politiques publiques** (ENAP).

Elle connecte l'intégralité de la matière du cours (**146 ressources** : PDF, transcriptions intégrales des vidéos Panopto, capsules interactives Storyline, exercices et corrigés déverrouillés) répartie dans **11 Notebooks NotebookLM** (`REF` et `M00` à `M09`), la **Taxonomie de Bloom** (6 niveaux cognitifs) et votre notebook sur l'écriture à impact de **Steven Pinker** (*Rendez vos écrits plus puissants et persuasifs* — *The Sense of Style*).

---

## 🧠 Architecture NotebookLM Connectée (12 Notebooks • 146 Ressources)

| Code | Titre du NotebookLM | Sources | Lien Direct NotebookLM |
| :--- | :--- | :---: | :--- |
| **REF** | **ENP7333 - Références, Évaluations & Politiques (MAPAQ & Aide féministe)** | 31 | [Ouvrir REF](https://notebooklm.google.com/notebook/a70f3776-7009-4de8-9af6-da32638e4243) |
| **M00** | **ENP7333 - M00 : Introduction - Le cycle des politiques publiques** | 2 | [Ouvrir M00](https://notebooklm.google.com/notebook/fbfe0031-6e10-4c18-bde9-ebea22e54d32) |
| **M01** | **ENP7333 - M01 : Les caractéristiques des politiques publiques** | 8 | [Ouvrir M01](https://notebooklm.google.com/notebook/00364e65-88f6-4e1f-9c03-9b51fd785996) |
| **M02** | **ENP7333 - M02 : Les problèmes ou enjeux publics** | 9 | [Ouvrir M02](https://notebooklm.google.com/notebook/9d7e8853-ff91-4c1f-8fcf-d508b08acd14) |
| **M03** | **ENP7333 - M03 : Les niveaux d'action publique** | 7 | [Ouvrir M03](https://notebooklm.google.com/notebook/53be10b1-a8eb-466d-9ee2-7af137a7cd3c) |
| **M04** | **ENP7333 - M04 : Les acteurs, instruments et institutions** | 19 | [Ouvrir M04](https://notebooklm.google.com/notebook/2dd0b2ae-7d0e-4307-a868-c0be6aa3cd6e) |
| **M05** | **ENP7333 - M05 : Le processus de prise de décision** | 21 | [Ouvrir M05](https://notebooklm.google.com/notebook/271b5bf0-246c-4f43-8591-fde4df7c4db4) |
| **M06** | **ENP7333 - M06 : Les techniques d'analyse** | 11 | [Ouvrir M06](https://notebooklm.google.com/notebook/02070845-a7ac-477a-a1f9-0b14b9f415ba) |
| **M07** | **ENP7333 - M07 : L'énoncé de politique publique et le plan de mise en œuvre** | 21 | [Ouvrir M07](https://notebooklm.google.com/notebook/374e8cef-dd5b-42fe-b6a4-049e89b87ca8) |
| **M08** | **ENP7333 - M08 : Les canaux de diffusion d'une politique publique** | 6 | [Ouvrir M08](https://notebooklm.google.com/notebook/ed7f2996-4d51-48f7-b407-d92fdd39c574) |
| **M09** | **ENP7333 - M09 : Les effets réels et symboliques et l'évaluation** | 11 | [Ouvrir M09](https://notebooklm.google.com/notebook/bba288e4-35e1-4f5a-8cdd-fdc13935d94f) |
| **PINKER** | **Rendez vos écrits plus puissants et persuasifs (Steven Pinker)** | Synthèse | [Ouvrir Pinker](https://notebooklm.google.com/notebook/a109ad5c-834d-4f3d-82a0-fe41aa72318e) |

---

## 🎮 Fonctionnalités Inspirées de Wayground (*Quizizz*)

1. **Arène de Quiz Gamifiée** :
   - **Filtres combinables** par **Module** (`REF`, `M00` à `M09`, `PINKER`) et par **Niveau de la Taxonomie de Bloom** (`1. Mémoriser`, `2. Comprendre`, `3. Appliquer`, `4. Analyser`, `5. Évaluer`, `6. Créer`).
   - **Série (Streak) & Multiplicateur dynamique** (`×1`, `×1.5`, `×2`, `×2.5`).
   - **5 Power-ups Wayground** :
     - ✂️ **50/50** : Élimine deux choix erronés au hasard.
     - ⚡ **Double ×2** : Double les points sur la question active.
     - 🛡️ **Seconde Chance** : Protège la série et permet un deuxième essai en cas d'erreur.
     - ❄️ **Gel du Temps** : Arrête le chronomètre de 45 secondes.
     - 💡 **Indice Pinker & Bloom** : Affiche un indice méthodologique et rédactionnel.
   - **Mode Rattrapage Intelligent** : Relance automatiquement une partie centrée sur les questions ratées.

2. **Distribution Aléatoire Garantie (Algorithme Cryptographique Fisher-Yates)** :
   - À chaque lancement de manche et à chaque question, l'ordre des questions et la position des 4 choix (`A, B, C, D`) sont mélangés via `fisherYatesShuffle` appuyé sur `crypto.getRandomValues`.
   - Un panneau **Audit de Distribution Aléatoire** affiche en temps réel la répartition `A / B / C / D` et permet de lancer une simulation Monte-Carlo de 2 000 tirages directement dans l'interface.

3. **Laboratoire d'Impact Rédactionnel Steven Pinker × ENP7333** :
   - **Scanner de Fluidité Cognitive en temps réel** : Détecte et surligne les *noms zombies* (nominalisations), les *noms nébuleux* (`au niveau de`, `dans le cadre de`, `problématique`, `processus`, `mécanisme`), les *haies compulsives* (`relativement`, `dans une certaine mesure`) et les *passifs sans acteur imputable*, et calcule un score `/100`.
   - **Défis Avant / Après** calibrés pour les **Évaluations 1, 2, 3 et 4**.

4. **Cartes Mémoire 3D (Flashcards)** :
   - Cartes retournables en 3D par module pour mémoriser rapidement les définitions, auteurs et études de cas (MAPAQ & PAIF).
