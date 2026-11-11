# Méthode

Comment ce corpus a été produit, filtré et noté. Rien n'est tiré au hasard : les idées viennent d'une grille, et les dix finalistes d'une note.

## 1. Le point de départ : ne pas répéter ce qui existe déjà

Avant de chercher des idées neuves, il a fallu cartographier l'existant. Deux inventaires :

- **les projets déjà construits** : onze applications Forge écrites pour Codegeist 2026, plus une trentaine de projets issus d'autres hackathons (QNX, Kiroween, AWS, NEAR). Chaque projet a été lu — README, manifeste Forge, modules déclarés, mécanique clé — pour en extraire l'**angle occupé**, c'est-à-dire la notion abstraite qu'il couvre.
- **les chantiers en cours** : ce qui tourne déjà, sur quelles machines, à quel stade.

Résultat : une liste de **27 angles occupés** (permission d'agir des agents, délégabilité statistique, collisions de chantiers, preuve d'acceptation, mémoire des builds, coût de la dette, go/no-go de release, merge check métier, regroupement d'incidents, sas anti-injection, etc.). Toute idée recoupant l'un d'eux a été écartée avant d'être notée.

## 2. La grille de génération

Plutôt que d'attendre l'inspiration, l'espace des possibles a été découpé en tranches, chacune correspondant à un produit Atlassian ou à un public :

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

Les 500 idées ont été réduites à dix finalistes sur cette grille, puis chaque finaliste a été vérifiée une seconde fois contre les limites techniques documentées.

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

## 6. Ce que ce site n'est pas

Ces concepts sont des travaux préparatoires personnels pour un hackathon public. Ils ne sont ni des produits Atlassian, ni des engagements de livraison, ni des conseils. Les noms de produits cités appartiennent à leurs propriétaires respectifs.
