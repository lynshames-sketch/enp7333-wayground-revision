# ⚡ ENP7333 × Wayground — Studio Interactif de Révision (Bloom × Steven Pinker × NotebookLM)

Application web de révision gamifiée inspirée de **Wayground** (*Quizizz*) conçue pour le cours **ENP7333 — Conception et mise en œuvre des politiques publiques** (ENAP).

Elle connecte l'intégralité de la matière du cours (**146 ressources** : PDF, transcriptions intégrales des vidéos Panopto, capsules interactives Storyline, exercices et corrigés déverrouillés) répartie dans **11 Notebooks NotebookLM** (`REF` et `M00` à `M09`), la **Taxonomie de Bloom** (6 niveaux cognitifs) et votre notebook sur l'écriture à impact de **Steven Pinker** (*Rendez vos écrits plus puissants et persuasifs* — *The Sense of Style*).

---

## 🧠 Architecture NotebookLM Connectée (12 Notebooks • 146 Ressources)

| Code | Titre du NotebookLM (`lynshames@gmail.com`) | Sources | Lien Direct NotebookLM (`lynshames@gmail.com`) |
| :--- | :--- | :---: | :--- |
| **REF** | **ENP7333 - Références, Évaluations & Politiques (MAPAQ & Aide féministe)** | 31 | [Ouvrir REF](https://notebooklm.google.com/notebook/42234051-b2f5-45d0-a481-f82ee6c2967b?authuser=lynshames@gmail.com) |
| **M00** | **ENP7333 - M00 : Introduction - Le cycle des politiques publiques** | 2 | [Ouvrir M00](https://notebooklm.google.com/notebook/9f7ccefc-32e5-4ab2-986f-645ba3907de5?authuser=lynshames@gmail.com) |
| **M01** | **ENP7333 - M01 : Les caractéristiques des politiques publiques** | 8 | [Ouvrir M01](https://notebooklm.google.com/notebook/86bbc52b-b84c-4701-87af-4396a88a7df7?authuser=lynshames@gmail.com) |
| **M02** | **ENP7333 - M02 : Les problèmes ou enjeux publics** | 9 | [Ouvrir M02](https://notebooklm.google.com/notebook/61d7b4a0-50fb-4bb7-89c9-3c6c49c8bb25?authuser=lynshames@gmail.com) |
| **M03** | **ENP7333 - M03 : Les niveaux d'action publique** | 7 | [Ouvrir M03](https://notebooklm.google.com/notebook/1f7ec92a-2558-4d18-87de-13b0a7499220?authuser=lynshames@gmail.com) |
| **M04** | **ENP7333 - M04 : Les acteurs, instruments et institutions** | 19 | [Ouvrir M04](https://notebooklm.google.com/notebook/63a36b08-80c5-433b-928c-742578c4c623?authuser=lynshames@gmail.com) |
| **M05** | **ENP7333 - M05 : Le processus de prise de décision** | 21 | [Ouvrir M05](https://notebooklm.google.com/notebook/9f3ac56f-96c0-4a7a-9b16-02ff358080e5?authuser=lynshames@gmail.com) |
| **M06** | **ENP7333 - M06 : Les techniques d'analyse** | 11 | [Ouvrir M06](https://notebooklm.google.com/notebook/0607be04-08e2-4651-9753-71688539184e?authuser=lynshames@gmail.com) |
| **M07** | **ENP7333 - M07 : L'énoncé de politique publique et le plan de mise en œuvre** | 21 | [Ouvrir M07](https://notebooklm.google.com/notebook/f3dcf6a6-1477-4a82-8939-15e1258d4e3e?authuser=lynshames@gmail.com) |
| **M08** | **ENP7333 - M08 : Les canaux de diffusion d'une politique publique** | 6 | [Ouvrir M08](https://notebooklm.google.com/notebook/b41e8b2b-e7d1-4fa7-9b74-0f341a21da3d?authuser=lynshames@gmail.com) |
| **M09** | **ENP7333 - M09 : Les effets réels et symboliques et l'évaluation** | 11 | [Ouvrir M09](https://notebooklm.google.com/notebook/b345decb-3d9f-44a8-a98a-317d5d9fe5c3?authuser=lynshames@gmail.com) |
| **PINKER** | **Ecrits plus puissants et persuasifs (Steven Pinker)** | 19 | [Ouvrir Pinker](https://notebooklm.google.com/notebook/82a57ebf-b5e7-4586-b12c-97599cde4599?authuser=lynshames@gmail.com) |
| **BLOOM** | **UQTR Guide to Bloom’s Taxonomy and Pedagogical Strategies** | 2 | [Ouvrir Bloom](https://notebooklm.google.com/notebook/776b0741-d50d-4e57-bd6f-be0e5639f9d9?authuser=lynshames@gmail.com) |

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

