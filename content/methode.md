# Méthode

Comment ce corpus de 2 600 idées a été produit, filtré et noté. Rien n'est tiré au hasard : les idées viennent d'une grille, et les finalistes d'une note.

## 1. Le point de départ : ne pas répéter ce qui existe déjà

Avant de chercher des idées neuves, il a fallu cartographier l'existant. Deux inventaires :

- **les projets déjà construits** : onze applications Forge écrites pour Codegeist 2026, plus une trentaine de projets issus d'autres hackathons (QNX, Kiroween, AWS, NEAR). Chaque projet a été lu — README, manifeste Forge, modules déclarés, mécanique clé — pour en extraire l'**angle occupé**, c'est-à-dire la notion abstraite qu'il couvre.
- **les chantiers en cours** : ce qui tourne déjà, sur quelles machines, à quel stade.

Résultat : une liste de **27 angles occupés** (permission d'agir des agents, délégabilité statistique, collisions de chantiers, preuve d'acceptation, mémoire des builds, coût de la dette, go/no-go de release, merge check métier, regroupement d'incidents, sas anti-injection, etc.). Toute idée recoupant l'un d'eux a été écartée avant d'être notée — et ce même contrôle a été refait à chaque passe, cette fois contre un corpus qui grossissait.

## 2. La grille de génération

Plutôt que d'attendre l'inspiration, l'espace des possibles a été découpé en tranches, chacune correspondant à un produit, un métier ou un mécanisme.

### Quatre passes

| Passe | Repères | Idées | Ce qu'elle ajoute |
|---|---|---|---|
| 1 | S01–S11 | 500 | le balayage par produit et par public |
| 2 | N01–N10 | 100 | les angles que la passe 1 n'avait pas franchis |
| 3 | T01–T40 | 1 000 | les fronts inter-produits, métiers et industries |
| 4 | U01–U40 | 1 000 | la déclinaison sectorielle et les mécanismes transversaux |
| | **101 axes** | **2 600** | |

### 2.1 Première passe — le balayage par produit (S01–S11, 500 idées)

| Tranche | Domaine | Idées |
|---|---|---|
| S01 | Jira — planification, sprint, backlog, estimation, rituels, flux | 50 |
| S02 | Jira — qualité, tests, conformité du flux, dette de processus | 50 |
| S03 | JSM — support, portail, files, SLA, astreinte | 50 |
| S04 | Confluence — écriture, structure, cycle de vie, droits | 50 |
| S05 | Bitbucket — dépôts, branches, pull requests, pipelines | 40 |
| S06 | Compass — catalogue de services, dépendances, fiabilité | 40 |
| S07 | Rovo, Teamwork Graph, MCP, plateforme Forge | 50 |
| S08 | Équipes métier — achats, finance, juridique, marketing, retail | 50 |
| S09 | Industries — santé, industrie, automobile, énergie, éducation, public, BTP, agro, culture, sport | 50 |
| S10 | Transversal — site, gouvernance, intégrations, hybridité | 50 |
| S11 | Divers — associations, culture, recherche, gestion de crise | 20 |
| | **Total** | **500** |

### 2.2 Deuxième passe — les dix angles manquants (N01–N10, 100 idées)

La passe 1 a couvert les produits ; elle a laissé de côté des angles entiers, tous vérifiés comme absents du corpus. Dix axes, dix idées chacun :

| Axe | Angle | Idées |
|---|---|---|
| N01 | Chaînes multi-produits (Jira × Confluence × JSM × Bitbucket) | 10 |
| N02 | Forge Realtime et collaboration vivante | 10 |
| N03 | Rovo Chat natif (aucune interface à construire) | 10 |
| N04 | Agents assignables (`rovo:agentConnector`) | 10 |
| N05 | Économie du travail : ce que ça coûte, ce que ça rapporte | 10 |
| N06 | Sécurité, conformité, données | 10 |
| N07 | Qualité des données et hygiène de plateforme | 10 |
| N08 | Métiers sous-équipés (Specialized Industries) | 10 |
| N09 | Transmission du savoir et compétences | 10 |
| N10 | Objets du Teamwork Graph inexploités | 10 |

Aucun nom de cette passe ne recoupe les 500 de la première passe : le contrôle a été fait par script, pas à l'œil.

### 2.3 Troisième passe — les fronts inter-produits (T01–T40, 1 000 idées)

Quarante fronts ouverts en même temps : chaque produit d'abord par son usage réel, puis les métiers, puis les industries. Vingt-cinq idées par tranche, toutes vérifiées sans doublon.

| Bloc | Tranches | Contenu |
|---|---|---|
| Jira (6) | T01–T06 | sprint, backlog, flux, qualité, données, rituels |
| JSM (4) | T07–T10 | client, agents, SLA, interne |
| Confluence (4) | T11–T14 | écriture, structure, droits, données |
| Bitbucket (3) | T15–T17 | dépôts, PR, pipelines |
| Compass et fiabilité (3) | T18–T20 | catalogue, dépendances, incidents |
| Rovo et plateforme (4) | T21–T24 | agents, MCP, graphe, Forge |
| Métiers (6) | T25–T30 | RH, finance, juridique, marketing, ventes, achats |
| Industries (12) | T31–T40 | locaux, logistique, santé, industrie, automobile, énergie, éducation, public, BTP, agro |

### 2.4 Quatrième passe — la déclinaison sectorielle (U01–U40, 1 000 idées)

Les angles transversaux d'abord (périmètre, temps, organisation, cycle de vie, terrain, mesure, gouvernance), puis les secteurs réglementés, puis les verticales une par une — jusqu'aux plus étroites : le textile, l'édition, les mines, le maritime.

| Bloc | Tranches | Contenu |
|---|---|---|
| Périmètre et temps (2) | U01–U02 | parties externes, calendrier et échéances |
| Organisation (4) | U03–U06 | identités et rôles, compétences, adoption du changement, formation |
| Cycle de vie (3) | U07–U09 | rétention et destruction, migrations, langues et accessibilité |
| Terrain (1) | U10 | mobilité, hors-ligne, objets connectés |
| Mesure et gouvernance (5) | U11–U15 | reporting explicable, sécurité, IA générative, automatisations, FinOps |
| Secteurs réglementés (5) | U16–U20 | conformité GxP et bancaire, supply chain étendue, SLI/SLO, post-mortem, assurance |
| Verticales (20) | U21–U40 | banque, immobilier, tourisme, transport, eau, secours, aéronautique, chimie, services professionnels, retail, sport, patrimoine, audiovisuel, télécoms, mécanismes transversaux, maritime, mines, textile, édition, produits internes |

### Le contrat commun

Chaque tranche a reçu le même contrat : le cadre du hackathon (produits autorisés, catégories, bonus), les **limites techniques réelles** de la plateforme (durées d'exécution, déclencheurs planifiés, payload, LLM hébergé, types d'objet du graphe, catalogue fermé des connecteurs), la liste des angles interdits, et un format de sortie strict — une ligne par idée, avec produit, modules, bonus visés et catégorie.

Deux contraintes de qualité étaient imposées : un quota d'idées exploitant des **surfaces jamais touchées** par les projets existants (écriture dans Confluence, `rovo:skill`, Compass, `jira:workflowValidator`, Forge Realtime, objets `test-*` du graphe, modules CSM), et l'interdiction des idées génériques déjà saturées au Marketplace (time tracking, release notes automatiques, résumé de pull request, tableau de bord DORA, chatbot « pose ta question à Jira »).

## 3. La note

Chaque idée candidate a été notée sur cinq critères alignés sur ceux du jury, plus un critère de non-chevauchement :

| Critère | Barème | Ce qu'il mesure |
|---|---|---|
| Impact | /5 | Le problème est-il réel, fréquent, coûteux ? |
| Innovation | /5 | Est-ce que ça existe déjà, au Marketplace ou ailleurs ? |
| Faisabilité | /5 | Tient-elle en cinq semaines, dans les limites de la plateforme ? |
| Bonus | /4 | Combien de bonus techniques empile-t-elle (agents, MCP, graphe, Marketplace) ? |
| Non-chevauchement | /3 | Distance avec les 27 angles déjà occupés |

Chaque passe a été notée séparément sur cette grille, puis chaque finaliste a été vérifiée une seconde fois contre les limites techniques documentées.

| Passe | Classement | Où |
|---|---|---|
| 1 (500 idées) | top 10 | page [Top 10](/top-10.html) |
| 2, 3 et 4 (2 100 idées) | top 10 de chaque passe | page [Classements](/classements.html) |

Puis la **quête du 22/22** : repasser la grille sur les 2 600 idées d'un bloc, à la recherche d'un maximum parfait. Résultat : **2 idées à 22/22** (Contre-preuve et Glose), huit idées à 21/22 avec le point perdu nommé, et une boucle assumée au-delà — chaque mécanisme neuf produit à ce stade retombe dans une famille déjà couverte.

## 4. Les vérifications techniques

Trois points ont été vérifiés dans la documentation officielle avant d'écrire les cahiers des charges, parce qu'ils changeaient l'architecture :

- **Teamwork Graph** : lecture par GraphQL avec requêtes prêtes ou Cypher persisté (le Cypher brut est refusé aux nouvelles applications) ; un droit par type d'objet, et un droit manquant vide le résultat **sans erreur** ; les types `AtlassianGoal` et `AtlassianGoalUpdate` existent, mais aucun type `key-result`.
- **Connecteurs** : le catalogue des types d'objet est fermé (26 types, sans `goal` ni `objective`) ; l'ingestion de données RH, financières, de santé réglementée, d'e-mails, d'agendas et d'enregistrements de réunion est interdite ; une application ne peut pas à la fois consommer l'API du graphe et fournir un connecteur — d'où, quand les deux sont nécessaires, le motif des deux applications jumelles reliées par un pont signé.
- **Modules Rovo** : `rovo:agent` a une fenêtre d'exécution courte et passe un contrôle de sécurité ; `rovo:mcp` et `rovo:skill` sont en Preview ; le manifeste est statique, ce qui interdit de publier dynamiquement un skill par ressource — d'où l'architecture en deux couches (outils paramétrés + export de fichiers de skill).

Ce qui n'a pas pu être tranché par la documentation est consigné dans chaque cahier des charges sous la rubrique « à valider par un prototype la première semaine », **avec sa solution de repli**. Aucun concept ne dépend d'une hypothèse non vérifiée.

## 5. Les cinq concepts documentés

Les cinq cahiers des charges publiés ici suivent le même gabarit : l'idée en une phrase, le problème, les utilisateurs, le vocabulaire, ce que l'application **ne fait pas**, la mécanique détaillée, les exigences fonctionnelles numérotées, les outils exposés, les écrans, l'architecture, le modèle de données, les contraintes vérifiées, les exigences non fonctionnelles, les cas limites, la recette, le scénario de la vidéo de démonstration, le plan jusqu'à la date de soumission, les risques, la vision à long terme, et les liens avec les autres concepts.

Deux règles de fond traversent les cinq documents :

- **Honnêteté de la mesure.** Aucun chiffre sans effectif, aucune moyenne sans fourchette, et « on ne sait pas » est une réponse affichée comme les autres. Une application qui affiche un zéro quand elle n'a pas le droit de lire est pire qu'une application qui dit qu'elle ne voit rien.
- **Zéro duplication.** Chaque concept réutilise les briques des autres au lieu de les réécrire : la même grille de force des preuves, le même moteur de signature d'échec, les mêmes détecteurs, la même discipline de citation, le même refus de conclure sous un seuil.

## 6. Les garde-fous du corpus

Le corpus n'est pas une liste relue à la main, c'est une production vérifiée par script :

- **zéro doublon de nom** sur les 2 600 idées, contrôlé à chaque ajout ;
- **aucune idée sans produit, sans modules, sans bonus ni sans catégorie** ;
- **chaque idée porte une référence stable** : son axe et son numéro dans la passe (`T02·44`, `U11·265`), ce qui permet de retrouver une idée sans la chercher par son nom ;
- **le site se construit et se contrôle** avant publication : liens internes vérifiés, aucune fuite de chemin local, taille des fichiers surveillée ;
- **la CI est plafonnée à cinq minutes par job**, avec concurrence et annulation, pour qu'un garde-fou ne devienne jamais un blocage.

Le corpus complet est consultable et filtrable sur la page [2 600 idées](/idees.html).

## 7. Où la méthode s'arrête

Déclaration honnête, parce qu'elle fait partie de la méthode : à 2 600 idées, la marge de nouveauté réelle s'épuise. Six familles sont couvertes — le registre d'un objet non suivi, la preuve (positive et négative), la dérive, le déclaré contre le réel, la chaîne inter-produits, le coût de ce qui n'est pas mesuré — et ce qui reste à produire n'est plus un mécanisme neuf, mais une déclinaison sectorielle d'un mécanisme existant.

Ce que ça dit concrètement : la grille mesure surtout la **distance à ce qui est déjà construit**, pas la valeur absolue. Les deux 22/22 sont réellement actionnables, mais les cinq cahiers des charges déjà rédigés restent les meilleurs paris en valeur absolue, parce qu'ils sont documentés jusqu'au bout. La suite rentable n'est donc pas de générer : c'est de choisir un projet et de le construire.

## 8. Ce que ce site n'est pas

Ces concepts sont des travaux préparatoires personnels pour un hackathon public. Ils ne sont ni des produits Atlassian, ni des engagements de livraison, ni des conseils. Les noms de produits cités appartiennent à leurs propriétaires respectifs.
