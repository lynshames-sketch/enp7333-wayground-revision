// Partie 1 de la banque de questions ENP7333 (Modules REF, M00, M01, M02, M03, M04)
// Chaque question intègre la Taxonomie de Bloom (niveaux 1 à 6) et les principes de rédaction à impact de Steven Pinker.
// Note : les choix sont mélangés dynamiquement à chaque partie via Fisher-Yates ET pré-équilibrés dans la banque.

window.QUESTIONS_PART1 = [
  // ==================== REF : ÉVALUATIONS, PLAN MAPAQ & PAIF ====================
  {
    id: 'REF-Q1',
    module: 'REF',
    bloomLevel: 1,
    bloomLabel: 'Mémoriser',
    difficulty: 1,
    question: 'Dans le Plan d’agriculture durable 2020-2030 (PAD) du MAPAQ, quelle est la cible chiffrée de réduction de la vente de pesticides de synthèse fixée d’ici 2030 ?',
    options: [
      'Diminuer de 500 000 kilogrammes la quantité de pesticides de synthèse vendus',
      'Interdire 100 % des herbicides chimiques sur l’ensemble des terres agricoles du Québec',
      'Réduire de 50 000 kilogrammes uniquement les fongicides utilisés en serriculture',
      'Remplacer 80 % des engrais minéraux par des crédits carbone internationaux'
    ],
    correctAnswer: 'Diminuer de 500 000 kilogrammes la quantité de pesticides de synthèse vendus',
    explanation: 'Le Plan d’agriculture durable 2020-2030 du MAPAQ fixe comme cible phare de réduire de 500 000 kg la vente de pesticides de synthèse et de diminuer de 40 % les risques pour la santé et l’environnement.',
    pinkerTip: 'Précision concrète (Pinker) : Citer une cible chiffrée vérifiable (« réduire de 500 000 kg ») ancre immédiatement le lecteur dans le réel, contrairement à un nom nébuleux comme « une optimisation environnementale notable ».'
  },
  {
    id: 'REF-Q2',
    module: 'REF',
    bloomLevel: 2,
    bloomLabel: 'Comprendre',
    difficulty: 1,
    question: 'Quelle est l’hypothèse causale centrale qui sous-tend la Politique d’aide internationale féministe (PAIF) du Canada ?',
    options: [
      'La promotion de l’égalité des genres et le renforcement du pouvoir des femmes et des filles constituent le moyen le plus efficace pour éradiquer la pauvreté et bâtir un monde pacifique et inclusif',
      'La libéralisation tarifaire préalable des marchés financiers est la condition sine qua non avant toute réforme sociale ou éducative',
      'Le financement exclusif des infrastructures routières lourdes entraîne mécaniquement la parité salariale dans les pays en développement',
      'La neutralité de genre dans l’allocation des budgets humanitaires garantit l’absence de biais discriminatoires'
    ],
    correctAnswer: 'La promotion de l’égalité des genres et le renforcement du pouvoir des femmes et des filles constituent le moyen le plus efficace pour éradiquer la pauvreté et bâtir un monde pacifique et inclusif',
    explanation: 'La PAIF repose sur la théorie du changement selon laquelle l’autonomisation des femmes et des filles et l’égalité des genres constituent le levier le plus puissant pour réduire durablement la pauvreté.',
    pinkerTip: 'Style classique (Pinker) : Formulez la théorie du changement avec une structure causale directe (« X réduit Y parce que Z ») plutôt que d’empiler des locutions abstraites.'
  },
  {
    id: 'REF-Q3',
    module: 'REF',
    bloomLevel: 4,
    bloomLabel: 'Analyser',
    difficulty: 2,
    question: 'Comment s’articulent logiquement les quatre travaux écrits (Évaluations 1 à 4) du cours ENP7333 autour d’un même enjeu public ?',
    options: [
      'Éval 1 : Définir le problème public → Éval 2 : Cartographier et justifier acteurs et instruments → Éval 3 : Choisir et justifier les techniques d’analyse → Éval 4 : Rédiger l’énoncé de politique et son plan de mise en œuvre',
      'Éval 1 : Budgétiser le programme → Éval 2 : Rédiger le projet de loi → Éval 3 : Diffuser la campagne média → Éval 4 : Auditer les états financiers ex post',
      'Éval 1 : Évaluer les effets symboliques → Éval 2 : Formuler les indicateurs SMART → Éval 3 : Définir le problème → Éval 4 : Cartographier les groupes cibles',
      'Chaque évaluation porte obligatoirement sur un ministère fédéral différent sans aucun lien analytique avec l’évaluation précédente'
    ],
    correctAnswer: 'Éval 1 : Définir le problème public → Éval 2 : Cartographier et justifier acteurs et instruments → Éval 3 : Choisir et justifier les techniques d’analyse → Éval 4 : Rédiger l’énoncé de politique et son plan de mise en œuvre',
    explanation: 'Le cours suit une progression cumulative : 1) Problématique (20 %), 2) Acteurs et instruments (20 %), 3) Techniques d’analyse (20 %), et 4) Énoncé de politique publique et plan de mise en œuvre (30 %), complétés par 10 % de participation.',
    pinkerTip: 'Cohérence narrative (Pinker) : Dans vos travaux successifs, assurez un fil conducteur limpide entre les causes diagnostiquées à l’Éval 1 et les axes d’intervention formulés à l’Éval 4.'
  },
  {
    id: 'REF-Q4',
    module: 'REF',
    bloomLevel: 5,
    bloomLabel: 'Évaluer',
    difficulty: 3,
    question: 'En comparant le Plan d’agriculture durable (MAPAQ) et la Politique d’aide internationale féministe (PAIF), quel constat analytique est le plus rigoureux quant à leur posture d’intervention ?',
    options: [
      'Le Plan du MAPAQ privilégie l’accompagnement volontaire, la rétribution incitative et l’expertise agronomique auprès des producteurs, tandis que la PAIF structure l’allocation de l’aide internationale autour d’une conditionnalité transversale d’égalité des genres dans 6 champs d’action',
      'Le Plan du MAPAQ repose uniquement sur des sanctions pénales coercitives, tandis que la PAIF exclut tout indicateur de rendement chiffré',
      'Les deux politiques refusent de recourir à des données probantes et se limitent à des déclarations purement symboliques sans ressources financières',
      'La PAIF s’applique exclusivement aux municipalités rurales du Québec alors que le Plan du MAPAQ régit les traités commerciaux de l’ONU'
    ],
    correctAnswer: 'Le Plan du MAPAQ privilégie l’accompagnement volontaire, la rétribution incitative et l’expertise agronomique auprès des producteurs, tandis que la PAIF structure l’allocation de l’aide internationale autour d’une conditionnalité transversale d’égalité des genres dans 6 champs d’action',
    explanation: 'Le PAD 2020-2030 mise fortement sur des instruments incitatifs et d’information (accompagnement, R&D, rétribution des pratiques agroenvironnementales), alors que la PAIF oriente l’ensemble des financements internationaux selon 6 champs d’action et des indicateurs de rendement clés (IRC) liés au genre.',
    pinkerTip: 'Comparaison structurée (Pinker) : Utilisez un parallélisme syntaxique net (« Tandis que X mobilise..., Y structure... ») pour alléger la charge mentale du lecteur.'
  },
  {
    id: 'REF-Q5',
    module: 'REF',
    bloomLevel: 6,
    bloomLabel: 'Créer',
    difficulty: 3,
    question: 'Vous rédigez l’introduction de votre travail d’analyse sur le Plan du MAPAQ. Selon les principes de Steven Pinker (fluidité cognitive et chasse aux noms zombies), quelle formulation a le plus d’impact ?',
    options: [
      '« Pour réduire de 500 000 kg l’usage des pesticides d’ici 2030, le MAPAQ rémunère les agriculteurs qui protègent leurs sols et finance la recherche appliquée. »',
      '« Dans le cadre d’une perspective de réductionnalité des intrants phytosanitaires, une démarche d’opérationnalisation incitative est effectuée au niveau ministériel. »',
      '« Il convient de procéder à la mise en place d’une réflexion relativement axée sur la problématique de la durabilité environnementale en milieu agricole. »',
      '« L’effectuation d’un processus d’accompagnement systémique semblerait potentiellement favoriser une certaine amélioration au niveau des pratiques. »'
    ],
    correctAnswer: '« Pour réduire de 500 000 kg l’usage des pesticides d’ici 2030, le MAPAQ rémunère les agriculteurs qui protègent leurs sols et finance la recherche appliquée. »',
    explanation: 'Cette phrase applique le style classique de Pinker : sujet concret (le MAPAQ), verbes d’action conjugués (réduire, rémunère, protègent, finance), cible précise (500 000 kg d’ici 2030) et zéro nom zombie ou haie (« relativement », « au niveau de »).',
    pinkerTip: 'Règle d’or de Pinker : Remplacez « l’effectuation d’un processus d’accompagnement » (noms zombies + nébuleux) par « Qui fait quoi à qui ? » (Sujet + Verbe d’action + Objet).'
  },

  // ==================== M00 : LE CYCLE DES POLITIQUES PUBLIQUES ====================
  {
    id: 'M00-Q1',
    module: 'M00',
    bloomLevel: 1,
    bloomLabel: 'Mémoriser',
    difficulty: 1,
    question: 'Dans quel ordre séquentiel classique se présentent les étapes du cycle des politiques publiques ?',
    options: [
      'Émergence du problème → Mise à l’agenda → Formulation des options → Prise de décision → Mise en œuvre → Évaluation',
      'Prise de décision → Mise en œuvre → Émergence du problème → Évaluation → Mise à l’agenda → Formulation',
      'Évaluation → Mise à l’agenda → Sanctions pénales → Abrogation → Formulation → Émergence',
      'Mise en œuvre → Campagne électorale → Sondage d’opinion → Archivage administratif'
    ],
    correctAnswer: 'Émergence du problème → Mise à l’agenda → Formulation des options → Prise de décision → Mise en œuvre → Évaluation',
    explanation: 'Le modèle séquentiel (inspiré de Lasswell et Jones) découpe l’action publique en 6 grandes phases : émergence/définition du problème, mise à l’agenda, formulation, décision, mise en œuvre et évaluation.',
    pinkerTip: 'Clarté séquentielle (Pinker) : L’ordre des mots dans votre phrase doit refléter l’ordre chronologique des événements dans la réalité.'
  },
  {
    id: 'M00-Q2',
    module: 'M00',
    bloomLevel: 2,
    bloomLabel: 'Comprendre',
    difficulty: 1,
    question: 'Pourquoi les chercheurs en administration publique qualifient-ils le cycle des politiques publiques de modèle « heuristique » plutôt que de description littérale de la réalité ?',
    options: [
      'Parce qu’il sert de grille analytique simplificatrice pour étudier l’action publique, alors qu’en réalité les étapes se chevauchent, s’inversent parfois ou rétroagissent continuellement',
      'Parce qu’une loi constitutionnelle interdit aux fonctionnaires de passer à l’étape suivante sans un vote unanime de l’Assemblée nationale',
      'Parce que le modèle ne s’applique qu’aux régimes présidentiels américains du XIXe siècle',
      'Parce que l’étape de l’évaluation précède toujours l’émergence sociale d’un problème public'
    ],
    correctAnswer: 'Parce qu’il sert de grille analytique simplificatrice pour étudier l’action publique, alors qu’en réalité les étapes se chevauchent, s’inversent parfois ou rétroagissent continuellement',
    explanation: 'Le cycle séquentiel est un idéal-type pédagogique et analytique (heuristique). Dans la pratique gouvernementale, une politique est souvent reformulée pendant sa mise en œuvre ou évaluée dès sa conception (ex ante).',
    pinkerTip: 'Évitez la malédiction du savoir (Pinker) : Lorsque vous utilisez un terme académique comme « heuristique », illustrez-le aussitôt par son sens concret (« une grille d’analyse qui organise une réalité désordonnée »).'
  },
  {
    id: 'M00-Q3',
    module: 'M00',
    bloomLevel: 3,
    bloomLabel: 'Appliquer',
    difficulty: 2,
    question: 'Un comité interministériel compare trois scénarios d’intervention (statu quo, subvention ciblée ou taxe réglementaire) pour contrer la pénurie de logements avant de soumettre un mémoire au ministre. À quelle étape du cycle se situe principalement cette activité ?',
    options: [
      'La formulation des solutions (élaboration et comparaison des options)',
      'L’émergence médiatique initiale du fait social',
      'L’évaluation rétrospective ex post cinq ans après l’abrogation du programme',
      'L’exécution matérielle des travaux de construction sur le terrain'
    ],
    correctAnswer: 'La formulation des solutions (élaboration et comparaison des options)',
    explanation: 'La phase de formulation consiste à concevoir, documenter et soupeser les différentes options et instruments d’intervention possibles une fois le problème inscrit à l’agenda et avant la prise de décision formelle.',
    pinkerTip: 'Verbes précis (Pinker) : Distinguez nettement « concevoir des options » (formulation), « trancher » (décision) et « déployer sur le terrain » (mise en œuvre).'
  },
  {
    id: 'M00-Q4',
    module: 'M00',
    bloomLevel: 4,
    bloomLabel: 'Analyser',
    difficulty: 2,
    question: 'Lorsqu’un rapport du Vérificateur général révèle l’échec d’un programme existant et provoque aussitôt la redéfinition du problème public dans les médias, quel phénomène du cycle observe-t-on ?',
    options: [
      'Une boucle de rétroaction où l’étape de l’évaluation alimente directement une nouvelle phase d’émergence et de remise à l’agenda',
      'Une rupture illégale du principe de séparation des pouvoirs exécutif et judiciaire',
      'La disparition définitive du problème public par extinction budgétaire',
      'Le passage automatique d’un instrument procédural à une politique purement symbolique'
    ],
    correctAnswer: 'Une boucle de rétroaction où l’étape de l’évaluation alimente directement une nouvelle phase d’émergence et de remise à l’agenda',
    explanation: 'Le cycle des politiques publiques est circulaire et dynamique : les constats tirés de l’évaluation d’une politique existante servent fréquemment de déclencheur (input) pour recadrer le problème et relancer un nouveau cycle.',
    pinkerTip: 'Connecteurs logiques (Pinker) : Montrez explicitement la causalité circulaire (« Le bilan d’évaluation révèle X, ce qui force le gouvernement à remettre Y à l’agenda »).'
  },
  {
    id: 'M00-Q5',
    module: 'M00',
    bloomLevel: 5,
    bloomLabel: 'Évaluer',
    difficulty: 3,
    question: 'Quelle est la principale critique adressée au modèle séquentiel du cycle des politiques publiques par la littérature contemporaine (Hassenteufel, Howlett) ?',
    options: [
      'Il donne une vision trop légaliste, linéaire et « par le haut » (top-down), en sous-estimant le fait que des solutions préexistantes cherchent parfois un problème auquel s’arrimer',
      'Il accorde trop d’importance aux citoyens et néglige totalement le rôle de l’État et des ministères',
      'Il interdit toute forme d’évaluation quantitative ou qualitative des programmes publics',
      'Il confond systématiquement les entreprises privées multinationales avec les tribunaux administratifs'
    ],
    correctAnswer: 'Il donne une vision trop légaliste, linéaire et « par le haut » (top-down), en sous-estimant le fait que des solutions préexistantes cherchent parfois un problème auquel s’arrimer',
    explanation: 'Le modèle séquentiel est critiqué pour son biais linéaire et rationaliste : comme l’a montré Kingdon, des solutions sont souvent conçues par des experts bien avant qu’un problème ne s’ouvre une fenêtre politique.',
    pinkerTip: 'Nuance sans « haies » (Pinker) : Exprimez une limite théorique avec fermeté (« Le modèle séquentiel sous-estime... ») plutôt qu’avec des atténuateurs mous (« Il semblerait dans une certaine mesure que... »).'
  },

  // ==================== M01 : CARACTÉRISTIQUES DES POLITIQUES PUBLIQUES ====================
  {
    id: 'M01-Q1',
    module: 'M01',
    bloomLevel: 1,
    bloomLabel: 'Mémoriser',
    difficulty: 1,
    question: 'Selon Jean-Claude Thoenig (2019), quelles sont les cinq composantes fondamentales qui caractérisent toute politique publique ?',
    options: [
      'Un contenu, un programme, une orientation normative, un facteur de coercition et un ressort social',
      'Un slogan électoral, un parti politique, un scrutin majoritaire, un sondage et un budget équilibré',
      'Une loi constitutionnelle, une sanction carcérale, un tribunal pénal, une police et une prison',
      'Un problème privé, une entreprise commerciale, un contrat civil, un profit net et un dividende'
    ],
    correctAnswer: 'Un contenu, un programme, une orientation normative, un facteur de coercition et un ressort social',
    explanation: 'Thoenig (2019) identifie 5 éléments constitutifs : 1) un contenu (actes/résultats), 2) un programme (cadre d’action cohérent), 3) une orientation normative (valeurs et buts), 4) un facteur de coercition (autorité publique légitime) et 5) un ressort social (publics et ressortissants touchés).',
    pinkerTip: 'Énumération lisible (Pinker) : Quand vous mobilisez les 5 critères de Thoenig dans votre Évaluation 1, associez chaque critère à un fait précis de votre cas d’étude.'
  },
  {
    id: 'M01-Q2',
    module: 'M01',
    bloomLevel: 2,
    bloomLabel: 'Comprendre',
    difficulty: 1,
    question: 'Que signifie le « facteur de coercition » dans la définition d’une politique publique selon Thoenig (2019) ?',
    options: [
      'L’action publique émane d’une autorité investie de la légitimité et de la puissance publique, capable d’imposer des obligations ou d’engager collectivement la société',
      'Toute politique publique doit obligatoirement prévoir des peines d’emprisonnement pour les citoyens récalcitrants',
      'Les fonctionnaires sont contraints d’obéir aux groupes de pression privés sous peine de destitution',
      'Le gouvernement ne peut jamais utiliser de subventions ni de campagnes d’information volontaires'
    ],
    correctAnswer: 'L’action publique émane d’une autorité investie de la légitimité et de la puissance publique, capable d’imposer des obligations ou d’engager collectivement la société',
    explanation: 'Le facteur de coercition ne signifie pas que tout outil est punitif, mais que l’intervention procède de l’autorité légale et légitime de l’État (puissance publique), même lorsqu’elle choisit d’octroyer des subventions ou d’informer.',
    pinkerTip: 'Définition limpide (Pinker) : Clarifiez immédiatement les faux-amis théoriques : « coercition » désigne ici l’autorité légale de l’État, et non la seule répression policière.'
  },
  {
    id: 'M01-Q3',
    module: 'M01',
    bloomLevel: 3,
    bloomLabel: 'Appliquer',
    difficulty: 2,
    question: 'Face à la hausse fulgurante des loyers dans un quartier urbain, un gouvernement étudie les demandes de plafonnement réglementaire mais décide délibérément de ne pas intervenir afin de laisser jouer le marché privé. Selon le Module 1, comment qualifie-t-on cette posture ?',
    options: [
      'Une politique publique par « non-décision » (inaction intentionnelle d’une autorité publique face à un problème reconnu)',
      'Une absence totale de politique publique puisque aucun texte de loi nouveau n’a été voté au Parlement',
      'Une erreur administrative purement involontaire relevant du droit privé des contrats',
      'Un instrument procédural de co-construction citoyenne ascendante (bottom-up)'
    ],
    correctAnswer: 'Une politique publique par « non-décision » (inaction intentionnelle d’une autorité publique face à un problème reconnu)',
    explanation: 'Comme le rappellent Dye (« whatever governments choose to do or not to do »), Hassenteufel et Savard, le refus délibéré d’intervenir (non-décision) constitue un choix politique normatif à part entière.',
    pinkerTip: 'Paradoxe éclairant (Pinker) : « Ne rien faire est déjà un choix d’État » : une phrase courte et nerveuse capte l’attention du correcteur bien mieux qu’un long détour abstrait.'
  },
  {
    id: 'M01-Q4',
    module: 'M01',
    bloomLevel: 4,
    bloomLabel: 'Analyser',
    difficulty: 2,
    question: 'Dans le Plan d’agriculture durable 2020-2030 du MAPAQ, à quelle composante de Thoenig (2019) correspond l’énoncé suivant : « Concilier la prospérité économique des entreprises agricoles québécoises avec la préservation de l’environnement et la santé de la population » ?',
    options: [
      'L’orientation normative (les valeurs et finalités qui guident l’intervention publique)',
      'Le facteur de coercition réglementaire et fiscal',
      'Le ressort social strictement limité aux inspecteurs ministériels',
      'Un extrant administratif opérationnel (output) de fin d’exercice'
    ],
    correctAnswer: 'L’orientation normative (les valeurs et finalités qui guident l’intervention publique)',
    explanation: 'Toute politique publique exprime une orientation normative : elle traduit une vision du monde, des valeurs priorisées (ici l’équilibre entre rentabilité agricole, écologie et santé publique) et des objectifs souhaitables.',
    pinkerTip: 'Vocabulaire actif (Pinker) : Au lieu d’écrire « Il y a une présence d’orientation normative au niveau du PAD », écrivez : « Le PAD affirme son orientation normative en conciliant rentabilité agricole et santé écologique. »'
  },
  {
    id: 'M01-Q5',
    module: 'M01',
    bloomLevel: 5,
    bloomLabel: 'Évaluer',
    difficulty: 3,
    question: 'Un organisme communautaire local lance de sa propre initiative, avec des dons privés et sans mandat ni financement de l’État, une distribution alimentaire hebdomadaire. Pourquoi cette initiative ne constitue-t-elle PAS, à elle seule, une politique publique au sens strict du Module 1 ?',
    options: [
      'Parce qu’elle n’émane pas d’une autorité investie de la puissance publique (ni par action directe, ni par délégation officielle de l’État)',
      'Parce qu’elle vise à résoudre un problème social concret touchant des citoyens vulnérables',
      'Parce qu’elle mobilise des ressources humaines, matérielles et financières sur un territoire donné',
      'Parce qu’elle produit des effets tangibles et mesurables sur la nutrition des bénéficiaires'
    ],
    correctAnswer: 'Parce qu’elle n’émane pas d’une autorité investie de la puissance publique (ni par action directe, ni par délégation officielle de l’État)',
    explanation: 'Bien que les acteurs privés et communautaires participent à l’action publique, une politique publique requiert l’implication (directe ou par mandat/délégation) d’une autorité politico-administrative investie de puissance publique.',
    pinkerTip: 'Distinction tranchante (Pinker) : Distinguez clairement « initiative privée d’intérêt général » et « politique publique mandatée par l’État » dès votre premier paragraphe.'
  },
  {
    id: 'M01-Q6',
    module: 'M01',
    bloomLevel: 6,
    bloomLabel: 'Créer',
    difficulty: 3,
    question: 'Quelle réécriture applique le mieux le « Style classique » de Steven Pinker pour présenter la théorie du changement d’une politique publique ?',
    options: [
      '« En subventionnant les bandes riveraines, le MAPAQ incite les agriculteurs à filtrer le phosphore à la source, ce qui assainit les cours d’eau du Québec. »',
      '« Dans le cadre de cette section, nous allons tenter de procéder à la démonstration de la façon dont la mécanique incitative agit au niveau hydrique. »',
      '« La problématique de la théorisation du changement s’inscrit dans une perspective de réduisibilité des externalités négatives agricoles. »',
      '« Il est relativement possible de constater une certaine corrélation institutionnelle entre le cadre budgétaire et l’amélioration environnementale. »'
    ],
    correctAnswer: '« En subventionnant les bandes riveraines, le MAPAQ incite les agriculteurs à filtrer le phosphore à la source, ce qui assainit les cours d’eau du Québec. »',
    explanation: 'Le style classique (Thomas & Turner, repris par Pinker) supprime le métadiscours (« Dans le cadre de cette section, nous allons tenter de... ») et montre directement la chaîne causale avec des acteurs et des verbes concrets.',
    pinkerTip: 'Bannissez le métadiscours (Pinker) : Ne racontez pas ce que vous allez analyser (« Nous allons procéder à l’analyse de... ») ; montrez directement le phénomène au lecteur !'
  },

  // ==================== M02 : LES PROBLÈMES OU ENJEUX PUBLICS ====================
  {
    id: 'M02-Q1',
    module: 'M02',
    bloomLevel: 1,
    bloomLabel: 'Mémoriser',
    difficulty: 1,
    question: 'Selon l’approche constructiviste (Sheppard-Sellam, 2019 ; Garraud, 2019 ; Hassenteufel, 2010), comment un fait social devient-il un « problème public » ?',
    options: [
      'Lorsqu’il est construit, cadré et problématisé par des acteurs comme une situation anormale qui exige une intervention des autorités publiques',
      'Dès que le phénomène dépasse un seuil statistique universel fixé automatiquement par les Nations Unies',
      'Uniquement lorsqu’un tribunal suprême déclare la situation anticonstitutionnelle à l’unanimité',
      'Lorsqu’il touche exclusivement des fonctionnaires travaillant au sein d’un ministère central'
    ],
    correctAnswer: 'Lorsqu’il est construit, cadré et problématisé par des acteurs comme une situation anormale qui exige une intervention des autorités publiques',
    explanation: 'Un problème public n’existe pas « en soi » de façon purement objective : il résulte d’un travail de construction sociale, de cadrage (naming, blaming, claiming) et de mobilisation qui appelle l’État à agir.',
    pinkerTip: 'Verbes de construction (Pinker) : Montrez qui construit le problème : « Les coalitions écologistes cadrent la dégradation des sols comme une urgence publique ».'
  },
  {
    id: 'M02-Q2',
    module: 'M02',
    bloomLevel: 2,
    bloomLabel: 'Comprendre',
    difficulty: 2,
    question: 'Dans le modèle de la fenêtre d’opportunité de John Kingdon, quels sont les trois « courants » (streams) qui doivent converger pour qu’un enjeu soit inscrit à l’agenda décisionnel ?',
    options: [
      'Le courant des problèmes (problem stream), le courant des politiques/solutions (policy stream) et le courant de la politique (political stream)',
      'Le courant législatif, le courant exécutif et le courant judiciaire',
      'Le courant municipal, le courant provincial et le courant fédéral',
      'Le courant médiatique, le courant syndical et le courant bancaire'
    ],
    correctAnswer: 'Le courant des problèmes (problem stream), le courant des politiques/solutions (policy stream) et le courant de la politique (political stream)',
    explanation: 'Chez Kingdon, une fenêtre d’opportunité s’ouvre lorsque convergent : 1) la reconnaissance d’un problème pressant, 2) l’existence d’une solution techniquement viable, et 3) un contexte politique favorable (alternance, climat d’opinion), reliés par un entrepreneur politique.',
    pinkerTip: 'Métaphore maîtrisée (Pinker) : La métaphore des « trois courants qui convergent pour ouvrir une fenêtre » est un modèle d’écriture visuelle que Pinker salue pour sa clarté cognitive.'
  },
  {
    id: 'M02-Q3',
    module: 'M02',
    bloomLevel: 3,
    bloomLabel: 'Appliquer',
    difficulty: 2,
    question: 'À la suite d’une enquête journalistique révélant la contamination de puits ruraux par des pesticides, une coalition de médecins et d’agronomes publie un manifeste désignant l’usage intensif d’intrants chimiques comme cause et réclamant un plan gouvernemental. Quel rôle joue cette coalition selon Sheppard-Sellam et Garraud ?',
    options: [
      'Celui d’entrepreneurs politiques (ou entrepreneurs de cause) qui cadrent l’enjeu, attribuent une responsabilité causale et mobilisent leurs ressources pour forcer la mise à l’agenda',
      'Celui d’autorités administratives exerçant un pouvoir de coercition réglementaire direct',
      'Celui d’évaluateurs ex post chargés de la reddition de comptes budgétaires au Conseil du trésor',
      'Celui de groupes cibles passifs cherchant à maintenir le statu quo dans un « État immergé »'
    ],
    correctAnswer: 'Celui d’entrepreneurs politiques (ou entrepreneurs de cause) qui cadrent l’enjeu, attribuent une responsabilité causale et mobilisent leurs ressources pour forcer la mise à l’agenda',
    explanation: 'Les entrepreneurs politiques traduisent un fait (contamination) en problème public en proposant un récit causal (cadrage) et en mobilisant expertise et médias pour inscrire l’enjeu à l’agenda gouvernemental.',
    pinkerTip: 'Concrétisez les concepts (Pinker) : Dans l’Évaluation 1, ne parlez pas abstraitement d’« entrepreneurs politiques » sans nommer précisément les syndicats, ONG ou experts qui jouent ce rôle.'
  },
  {
    id: 'M02-Q4',
    module: 'M02',
    bloomLevel: 4,
    bloomLabel: 'Analyser',
    difficulty: 2,
    question: 'Pourquoi le « cadrage » (framing) d’un problème public est-il un acte éminemment stratégique et conflictuel lors de la conception d’une politique publique ?',
    options: [
      'Parce que la manière de définir les causes du problème prédétermine les solutions jugées légitimes, désigne les groupes cibles qui devront changer de comportement et écarte d’autres pistes d’action',
      'Parce qu’il se limite à choisir la police de caractères et la mise en page graphique du rapport annuel du ministère',
      'Parce qu’un problème public ne possède jamais qu’une seule cause scientifique incontestable qui fait l’unanimité chez tous les acteurs',
      'Parce que le cadrage intervient uniquement dix ans après l’abrogation complète de la politique publique'
    ],
    correctAnswer: 'Parce que la manière de définir les causes du problème prédétermine les solutions jugées légitimes, désigne les groupes cibles qui devront changer de comportement et écarte d’autres pistes d’action',
    explanation: 'Cadrer la crise du logement comme un « manque d’offre locative » oriente vers des incitatifs aux promoteurs, tandis que la cadrer comme une « spéculation financière » oriente vers un contrôle des loyers : définir le problème, c’est déjà orienter la solution.',
    pinkerTip: 'Mise en contraste (Pinker) : Montrez comment deux cadrages concurrents d’un même problème mènent à deux instruments opposés.'
  },
  {
    id: 'M02-Q5',
    module: 'M02',
    bloomLevel: 5,
    bloomLabel: 'Évaluer',
    difficulty: 3,
    question: 'Un étudiant rédige l’Évaluation 1 en affirmant : « La hausse de l’itinérance au Québec est un problème public uniquement parce que le nombre de personnes sans abri a augmenté de 44 %. » Quelle critique méthodologique tirée du Module 2 devez-vous formuler ?',
    options: [
      'L’analyse commet une erreur objectiviste : un indicateur statistique ne suffit pas à lui seul à créer un problème public ; il faut analyser comment les acteurs sociaux, médiatiques et politiques ont interprété, cadré et porté ce chiffre à l’agenda gouvernemental',
      'L’analyse est parfaite car les statistiques démographiques créent automatiquement des lois sans aucune intervention d’acteurs',
      'L’étudiant aurait dû supprimer toute donnée chiffrée car les données probantes sont interdites dans la définition d’un problème public',
      'L’itinérance relève uniquement de la sphère privée et ne peut jamais faire l’objet d’une politique publique au Québec'
    ],
    correctAnswer: 'L’analyse commet une erreur objectiviste : un indicateur statistique ne suffit pas à lui seul à créer un problème public ; il faut analyser comment les acteurs sociaux, médiatiques et politiques ont interprété, cadré et porté ce chiffre à l’agenda gouvernemental',
    explanation: 'Les données objectives (indicateurs) sont nécessaires pour documenter l’ampleur du problème, mais selon l’approche constructiviste du Module 2, c’est le travail de problématisation, de médiatisation et de mise à l’agenda par les acteurs qui transforme cette condition en problème public.',
    pinkerTip: 'Allier chiffres et acteurs (Pinker) : Combinez la force factuelle du chiffre (« +44 % ») avec l’action des acteurs (« ...un bond que les municipalités et organismes communautaires ont porté à l’agenda gouvernemental »).'
  },
  {
    id: 'M02-Q6',
    module: 'M02',
    bloomLevel: 6,
    bloomLabel: 'Créer',
    difficulty: 3,
    question: 'Dans le cadre de l’Évaluation 1, vous devez formuler le diagnostic causal d’un problème public. Laquelle de ces phrases respecte à la fois la rigueur du Module 2 et l’impératif de Steven Pinker d’éliminer les « noms nébuleux » ?',
    options: [
      '« L’usage intensif de pesticides dégrade la biodiversité des sols québécois, tandis que les consommateurs et les agronomes pressent le MAPAQ de soutenir financièrement les pratiques écologiques. »',
      '« Au niveau de la problématique phytosanitaire, il existe un processus de dégradation qui s’inscrit dans un cadre de mobilisation multi-niveaux. »',
      '« Dans une perspective d’émergence systémique, la mécanique environnementale interpelle le dispositif gouvernemental. »',
      '« Il apparaît relativement évident que le phénomène se situe au niveau d’une dynamique complexe d’acteurs. »'
    ],
    correctAnswer: '« L’usage intensif de pesticides dégrade la biodiversité des sols québécois, tandis que les consommateurs et les agronomes pressent le MAPAQ de soutenir financièrement les pratiques écologiques. »',
    explanation: 'Cette phrase identifie la cause matérielle ET la mobilisation des acteurs qui inscrivent le problème à l’agenda, tout en bannissant les noms nébuleux (« niveau », « cadre », « perspective », « processus », « dynamique »).',
    pinkerTip: 'Chasse aux mots-écrans (Pinker) : Supprimez « au niveau de la problématique de » et nommez directement le phénomène réel.'
  },

  // ==================== M03 : LES NIVEAUX D'ACTION PUBLIQUE ====================
  {
    id: 'M03-Q1',
    module: 'M03',
    bloomLevel: 1,
    bloomLabel: 'Mémoriser',
    difficulty: 1,
    question: 'Du niveau le plus stratégique et abstrait au niveau le plus opérationnel et concret sur le terrain, quel est l’ordre exact de la chaîne d’action publique (Module 3) ?',
    options: [
      'Politique publique → Programme → Mesure / Projet / Activité',
      'Mesure → Activité quotidienne → Programme → Politique publique',
      'Projet ponctuel → Politique publique → Extrant administratif → Programme',
      'Cible chiffrée → Règlement municipal → Constitution → Programme'
    ],
    correctAnswer: 'Politique publique → Programme → Mesure / Projet / Activité',
    explanation: 'La chaîne d’action publique part de la Politique publique (orientations normatives et stratégiques), se décline en Programmes (cadres budgétaires et organisationnels) et s’opérationnalise par des Mesures, Projets et Activités concrètes.',
    pinkerTip: 'Hiérarchie visuelle (Pinker) : Gardez toujours la même échelle conceptuelle lorsque vous comparez deux éléments (ne comparez pas une politique entière avec une simple mesure ponctuelle).'
  },
  {
    id: 'M03-Q2',
    module: 'M03',
    bloomLevel: 2,
    bloomLabel: 'Comprendre',
    difficulty: 2,
    question: 'Quelle est la distinction fondamentale entre un « extrant » (output) et un « résultat / effet » (outcome) d’une politique publique ?',
    options: [
      'L’extrant (output) désigne le produit direct de l’activité administrative (ex. nombre de subventions accordées), tandis que le résultat (outcome) désigne le changement réel produit sur le problème et les comportements (ex. réduction effective de la pollution)',
      'L’extrant (output) mesure les effets à long terme sur 30 ans, tandis que le résultat (outcome) désigne le budget voté au début de l’année',
      'Il n’existe aucune différence entre les deux termes : ce sont des synonymes parfaits en évaluation des politiques publiques',
      'L’extrant concerne uniquement les ministères fédéraux tandis que le résultat concerne uniquement les municipalités'
    ],
    correctAnswer: 'L’extrant (output) désigne le produit direct de l’activité administrative (ex. nombre de subventions accordées), tandis que le résultat (outcome) désigne le changement réel produit sur le problème et les comportements (ex. réduction effective de la pollution)',
    explanation: 'Une administration peut produire beaucoup d’outputs (ex. distribuer 10 000 brochures ou verser 500 aides) sans nécessairement atteindre l’outcome visé (changer durablement les pratiques ou résoudre le problème public).',
    pinkerTip: 'Verbes de réalisation vs verbes d’impact (Pinker) : Pour un output, écrivez « Le ministère verse 2 000 aides » ; pour un outcome, écrivez « Les producteurs réduisent de 30 % leurs rejets de phosphore ».'
  },
  {
    id: 'M03-Q3',
    module: 'M03',
    bloomLevel: 3,
    bloomLabel: 'Appliquer',
    difficulty: 2,
    question: 'Dans la capsule interactive du Module 3 consacrée à la crise du logement, à quel niveau de la chaîne d’action publique correspond « l’octroi d’une aide financière directe de 15 000 $ aux ménages à faible revenu pour l’achat d’une première propriété » ?',
    options: [
      'Une mesure (ou intervention concrète) inscrite à l’intérieur d’un programme d’accès à la propriété, lui-même rattaché à la politique nationale de l’habitation',
      'La politique publique globale de l’habitation dans son intégralité normative',
      'Un problème social émergent non encore inscrit à l’agenda gouvernemental',
      'Une évaluation rétrospective ex post de l’efficience interne du ministère'
    ],
    correctAnswer: 'Une mesure (ou intervention concrète) inscrite à l’intérieur d’un programme d’accès à la propriété, lui-même rattaché à la politique nationale de l’habitation',
    explanation: 'La capsule sur la crise du logement illustre que le versement d’une aide précise à un ménage constitue une mesure opérationnelle concrète, qui découle d’un programme structuré au service d’une politique publique d’habitation.',
    pinkerTip: 'Ancrage concret (Pinker) : Nommer le montant, le bénéficiaire et l’action (« verser 15 000 $ aux ménages à faible revenu ») dissipe instantanément le brouillard théorique.'
  },
  {
    id: 'M03-Q4',
    module: 'M03',
    bloomLevel: 4,
    bloomLabel: 'Analyser',
    difficulty: 2,
    question: 'Dans le Plan d’agriculture durable 2020-2030 du MAPAQ, comment s’articulent le Plan lui-même, le programme « Prime-Vert » et le financement d’un équipement de désherbage mécanique pour une ferme maraîchère ?',
    options: [
      'Le Plan d’agriculture durable est la politique publique (orientation stratégique), Prime-Vert est un programme (cadre opérationnel et budgétaire), et la subvention pour l’équipement de désherbage mécanique est une mesure concrète',
      'Prime-Vert est la politique publique globale, le Plan d’agriculture durable est une simple activité ponctuelle, et l’équipement mécanique est un indicateur mondial',
      'Les trois éléments se situent exactement au même niveau d’abstraction dans la taxonomie de Howlett et Cashore',
      'Il s’agit de trois instruments purement procéduraux qui ne distribuent aucune ressource matérielle'
    ],
    correctAnswer: 'Le Plan d’agriculture durable est la politique publique (orientation stratégique), Prime-Vert est un programme (cadre opérationnel et budgétaire), et la subvention pour l’équipement de désherbage mécanique est une mesure concrète',
    explanation: 'Cet emboîtement illustre parfaitement la chaîne d’action publique : Politique (PAD 2020-2030) → Programme (Prime-Vert / Rétribution des pratiques agroenvironnementales) → Mesure concrète (aide à l’achat d’un sarcleur mécanique).',
    pinkerTip: 'Exemple filé (Pinker) : Utiliser un même exemple concret du sommet stratégique jusqu’au terrain permet au lecteur de visualiser toute la chaîne d’action sans effort.'
  },
  {
    id: 'M03-Q5',
    module: 'M03',
    bloomLevel: 5,
    bloomLabel: 'Évaluer',
    difficulty: 3,
    question: 'Selon la taxonomie des composantes des politiques publiques de Howlett et Cashore (2020), quel risque majeur court un gouvernement lorsqu’il modifie le « calibre » des mesures sur le terrain sans vérifier leur cohérence avec les buts abstraits de la politique ?',
    options: [
      'Créer une dissonance entre les moyens opérationnels déployés et la finalité normative de la politique, rendant l’intervention inefficace ou contre-productive',
      'Rendre la politique automatiquement inconstitutionnelle devant la Cour suprême du Canada',
      'Transformer instantanément tous les acteurs privés en fonctionnaires titulaires de l’État',
      'Supprimer le besoin de collecter des données probantes lors de l’évaluation concomitante'
    ],
    correctAnswer: 'Créer une dissonance entre les moyens opérationnels déployés et la finalité normative de la politique, rendant l’intervention inefficace ou contre-productive',
    explanation: 'Howlett et Cashore (2020) montrent que la réussite d’une politique exige un alignement vertical entre les buts généraux (niveau abstrait), les objectifs/programmes (niveau méso) et le calibrage précis des instruments sur le terrain (niveau micro).',
    pinkerTip: 'Diagnostic d’incohérence (Pinker) : Dans vos évaluations critiques, pointez avec précision tout décalage entre l’ambition affichée d’une politique et la modestie de ses calibres opérationnels.'
  },

  // ==================== M04 : ACTEURS, INSTRUMENTS ET INSTITUTIONS ====================
  {
    id: 'M04-Q1',
    module: 'M04',
    bloomLevel: 1,
    bloomLabel: 'Mémoriser',
    difficulty: 1,
    question: 'Dans le « triangle des acteurs » d’une politique publique (Module 4), quels sont les trois pôles fondamentaux qui interagissent autour du problème public ?',
    options: [
      '1) Les autorités politico-administratives (acteurs publics), 2) Les groupes cibles (dont le comportement est jugé à l’origine du problème), et 3) Les bénéficiaires finaux (qui subissent le problème et profitent de sa résolution)',
      '1) Le Premier ministre, 2) Le ministre des Finances, et 3) Le Vérificateur général',
      '1) Les journalistes, 2) Les sondeurs d’opinion, et 3) Les professeurs d’université',
      '1) Les banques centrales, 2) Les tribunaux internationaux, et 3) Les municipalités rurales'
    ],
    correctAnswer: '1) Les autorités politico-administratives (acteurs publics), 2) Les groupes cibles (dont le comportement est jugé à l’origine du problème), et 3) Les bénéficiaires finaux (qui subissent le problème et profitent de sa résolution)',
    explanation: 'Le triangle de base (complété par les groupes tiers positivement ou négativement affectés) relie les autorités publiques qui régulent, les groupes cibles dont le comportement doit changer, et les bénéficiaires finaux dont la situation s’améliore.',
    pinkerTip: 'Précision des rôles (Pinker) : Ne confondez jamais « groupe cible » (qui doit modifier son comportement) et « bénéficiaire final » (qui bénéficie de l’amélioration) dans votre Évaluation 2 !'
  },
  {
    id: 'M04-Q2',
    module: 'M04',
    bloomLevel: 2,
    bloomLabel: 'Comprendre',
    difficulty: 2,
    question: 'Quelle est la différence fondamentale entre un instrument « substantif » et un instrument « procédural » (Howlett, Halpern, Flückiger) ?',
    options: [
      'L’instrument substantif agit directement sur la livraison de biens et services ou sur le comportement des groupes cibles (ex. taxe, subvention, interdiction), tandis que l’instrument procédural modifie les règles du jeu, l’organisation des réseaux d’acteurs ou le processus décisionnel (ex. créer une table de concertation ou une obligation de consultation)',
      'L’instrument substantif est purement symbolique et gratuit, tandis que l’instrument procédural consiste uniquement à construire des autoroutes',
      'L’instrument substantif relève du droit privé alors que l’instrument procédural est réservé aux ONG internationales',
      'Il n’y a aucune différence : tout instrument législatif est exclusivement procédural'
    ],
    correctAnswer: 'L’instrument substantif agit directement sur la livraison de biens et services ou sur le comportement des groupes cibles (ex. taxe, subvention, interdiction), tandis que l’instrument procédural modifie les règles du jeu, l’organisation des réseaux d’acteurs ou le processus décisionnel (ex. créer une table de concertation ou une obligation de consultation)',
    explanation: 'Les instruments substantifs affectent directement la substance sociale ou économique (produire, réglementer, taxer, subventionner, informer), alors que les instruments procéduraux agissent sur les processus et les relations entre acteurs (comités, accès à l’information, réorganisation administrative).',
    pinkerTip: 'Clarté conceptuelle (Pinker) : Retenez ce repère simple : Substantif = agit sur le problème sur le terrain ; Procédural = agit sur la façon dont les acteurs se concertent et décident.'
  },
  {
    id: 'M04-Q3',
    module: 'M04',
    bloomLevel: 2,
    bloomLabel: 'Comprendre',
    difficulty: 2,
    question: 'Dans sa capsule vidéo sur la théorie du « Nudge » (Thaler & Sunstein), comment le professeur Stéphane Paquin définit-il cet instrument d’intervention inspiré de l’économie comportementale et des travaux de Daniel Kahneman ?',
    options: [
      'Un aspect de l’architecture de choix qui modifie de façon prévisible le comportement des gens (en sollicitant le Système 1 rapide et intuitif, ex. option par défaut) sans interdire aucune option ni changer significativement leurs incitatifs économiques',
      'Une taxe carbone lourdement punitive accompagnée d’une interdiction pénale stricte pour forcer un calcul rationnel de Système 2',
      'Une réforme constitutionnelle centralisant tous les pouvoirs municipaux entre les mains du ministère des Finances',
      'Une subvention massive couvrant 100 % des coûts de production d’une entreprise industrielle'
    ],
    correctAnswer: 'Un aspect de l’architecture de choix qui modifie de façon prévisible le comportement des gens (en sollicitant le Système 1 rapide et intuitif, ex. option par défaut) sans interdire aucune option ni changer significativement leurs incitatifs économiques',
    explanation: 'Comme l’explique Stéphane Paquin (citant Thaler, Sunstein et Kahneman), le nudge repose sur le « paternalisme libertarien » : il utilise les biais cognitifs du Système 1 (automatique/intuitif), comme l’inscription automatique par défaut à un régime d’épargne-retraite ou le don d’organes par consentement présumé, tout en laissant la liberté de se retirer à coût nul.',
    pinkerTip: 'Illustrez par l’exemple (Pinker) : Comme le fait Stéphane Paquin avec la mouche gravée dans les urinoirs d’Amsterdam ou l’option par défaut d’épargne-retraite, un exemple concret vaut dix définitions abstraites.'
  },
  {
    id: 'M04-Q4',
    module: 'M04',
    bloomLevel: 3,
    bloomLabel: 'Appliquer',
    difficulty: 2,
    question: 'Dans la capsule interactive du Module 4 sur la hausse de l’itinérance, une municipalité souhaite agir rapidement avec un budget très restreint et une faible acceptabilité sociale pour la coercition policière. Quel choix d’instruments est le plus cohérent à court terme ?',
    options: [
      'Combiner des instruments informationnels (sensibilisation, orientation vers les ressources) et des instruments incitatifs/partenariaux ciblés en appui aux organismes communautaires de première ligne',
      'Adopter immédiatement une loi pénale incarcérant toute personne sans abri tout en construisant 50 000 tours d’habitation en trois semaines',
      'Supprimer tous les refuges existants et attendre dix ans les résultats d’une étude économétrique internationale',
      'Utiliser uniquement un tarif douanier sur les importations de matériaux de construction'
    ],
    correctAnswer: 'Combiner des instruments informationnels (sensibilisation, orientation vers les ressources) et des instruments incitatifs/partenariaux ciblés en appui aux organismes communautaires de première ligne',
    explanation: 'La capsule du Module 4 montre que le choix d’un instrument d’intervention doit toujours être justifié au regard des contraintes budgétaires, temporelles, légales, de l’acceptabilité sociale et de la nature du groupe cible.',
    pinkerTip: 'Justification multicritère (Pinker) : Dans l’Évaluation 2, justifiez chaque instrument par 3 critères explicites : coût/ressources, acceptabilité politique et efficacité sur le groupe cible.'
  },
  {
    id: 'M04-Q5',
    module: 'M04',
    bloomLevel: 4,
    bloomLabel: 'Analyser',
    difficulty: 3,
    question: 'D’après la vidéo de rétroaction du Module 4 sur la cartographie de la Politique d’aide internationale féministe (PAIF), comment se répartissent les rôles entre Affaires mondiales Canada (AMC), les ONG locales partenaires dans les pays en développement et les femmes et filles de ces communautés ?',
    options: [
      'AMC agit comme autorité publique maître d’œuvre qui finance et encadre la politique ; les ONG partenaires et autorités locales agissent comme acteurs intermédiaires de mise en œuvre (et cibles des exigences de reddition) ; les femmes et les filles sont les bénéficiaires finales dont le pouvoir d’action est renforcé',
      'Les femmes et les filles des pays en développement sont les autorités politico-administratives qui votent le budget fédéral canadien à Ottawa',
      'AMC est un acteur privé à but lucratif tandis que les ONG internationales détiennent le monopole de la coercition fiscale au Canada',
      'La PAIF ne comporte aucun acteur non étatique car toute l’aide est distribuée directement par l’armée canadienne'
    ],
    correctAnswer: 'AMC agit comme autorité publique maître d’œuvre qui finance et encadre la politique ; les ONG partenaires et autorités locales agissent comme acteurs intermédiaires de mise en œuvre (et cibles des exigences de reddition) ; les femmes et les filles sont les bénéficiaires finales dont le pouvoir d’action est renforcé',
    explanation: 'La rétroaction vidéo du Module 4 insiste sur la nécessité de bien distinguer, dans la PAIF, l’autorité publique canadienne (AMC), le réseau d’acteurs partenaires/intermédiaires (ONG, organisations multilatérales, États récipiendaires) et les bénéficiaires finaux (femmes et filles).',
    pinkerTip: 'Cartographie nette (Pinker) : Attribuez à chaque acteur un verbe qui reflète son rôle exact dans le triangle : « AMC finance et encadre », « les ONG déploient », « les femmes et les filles bénéficient ».'
  },
  {
    id: 'M04-Q6',
    module: 'M04',
    bloomLevel: 5,
    bloomLabel: 'Évaluer',
    difficulty: 3,
    question: 'Quelle est la limite principale des instruments de type « Nudge » soulignée par Stéphane Paquin dans sa capsule vidéo du Module 4 ?',
    options: [
      'Les nudges produisent souvent des effets modestes ou de court terme et ne peuvent pas remplacer des réformes structurelles (fiscales, réglementaires ou financières) face à des problèmes publics majeurs comme les changements climatiques ou la pauvreté systémique',
      'Les nudges coûtent systématiquement plusieurs milliards de dollars de plus que les grands travaux d’infrastructure',
      'Les nudges sont interdits par toutes les démocraties occidentales car ils violent le droit criminel',
      'Les nudges ne fonctionnent que sur des ordinateurs quantiques et jamais sur des comportements humains quotidiens'
    ],
    correctAnswer: 'Les nudges produisent souvent des effets modestes ou de court terme et ne peuvent pas remplacer des réformes structurelles (fiscales, réglementaires ou financières) face à des problèmes publics majeurs comme les changements climatiques ou la pauvreté systémique',
    explanation: 'Stéphane Paquin rappelle que si les nudges sont peu coûteux et politiquement attrayants, ils constituent des compléments (« coups de pouce ») et non des substituts aux instruments substantifs lourds (réglementation, fiscalité, investissements publics) lorsque des obstacles structurels existent.',
    pinkerTip: 'Jugement équilibré (Pinker) : Dans vos travaux, montrez la complémentarité des instruments : « Un nudge facilite l’adhésion quotidienne, mais seule une subvention ou une norme lève la barrière financière. »'
  }
];
