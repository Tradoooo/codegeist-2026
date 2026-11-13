# Classements — les trois passes suivantes et la quête du 22/22

> Le corpus complet compte **2 600 idées** en quatre passes. Le top 10 de la première passe
> (500 idées) a sa propre page ; cette page regroupe les classements des passes 2, 3 et 4,
> puis le résultat de la « quête du 22/22 » (les idées maximuant la grille de notation).



---

## Deuxième passe — 100 idées, top 10

> Corpus : `N01-a-N05-nouveaux-100.md` et `N06-a-N10-nouveaux-100.md` (100 idées, 10 axes)
> Aucun nom en collision avec les 500 idées de la première passe (vérifié par script)
> Grille /22 : Impact /5 · Innovation /5 · Faisabilité au 22 déc. /5 · Bonus empilables /4 · Non-chevauchement /3

### Les dix axes de cette seconde passe

| Axe | Angle | Idées |
|---|---|---|
| N01 | Chaînes multi-produits (Jira × Confluence × JSM × Bitbucket) | 10 |
| N02 | Forge Realtime et collaboration vivante | 10 |
| N03 | Rovo Chat natif, sans interface à construire | 10 |
| N04 | Agents assignables (`rovo:agentConnector`) | 10 |
| N05 | Économie du travail : coûts, valeur, arbitrage | 10 |
| N06 | Sécurité, conformité, données | 10 |
| N07 | Qualité des données, hygiène de plateforme | 10 |
| N08 | Métiers sous-équipés (Specialized Industries) | 10 |
| N09 | Transmission du savoir et compétences | 10 |
| N10 | Objets du Teamwork Graph inexploités | 10 |

---

## TOP 10

### 1. Fil perdu — les demandes faites en chat qui ne sont jamais devenues du travail
**21/22** (Impact 5 · Innovation 5 · Faisabilité 4 · Bonus 4 · Non-chevauchement 3)

Lit les objets `conversation` et `message` du graphe, y détecte ce qui ressemble à une demande de travail (« tu peux regarder… », « il faudrait que… », « qui peut… »), et confronte avec les items créés dans les jours qui suivent. Résultat : la liste des demandes **tombées par terre**, avec le fil d'origine, la date, et le ticket qui n'a jamais été ouvert.

- **Pourquoi ça gagne** : personne ne mesure la perte entre « demandé en chat » et « créé dans Jira ». C'est le trou le plus universel des organisations, et il est invisible par construction.
- **Bonus** : T (objets `conversation`/`message`, quasi jamais utilisés) + A (agent qui propose le ticket) + M + P.
- **Différence avec l'existant** : `problemes-caches` regroupe des incidents déjà créés ; ici on trouve ceux qui n'ont **jamais** été créés.
- **Risque** : le bruit. Parade : seuil de confiance, confirmation humaine obligatoire avant création, et un mode lecture seule au démarrage.

### 2. Mode d'emploi du chiffre — expliquer n'importe quel nombre dans un chat
**20/22** (Impact 5 · Innovation 5 · Faisabilité 4 · Bonus 3 · Non-chevauchement 3)

On clique sur un chiffre d'un tableau de bord, d'un gadget ou d'une page Confluence, et l'agent répond en chat : comment il est calculé, depuis quelles sources, sur quelle fenêtre, avec quels effectifs et quelles réserves. Et quand le calcul n'est documenté nulle part, il le dit — ce qui est déjà une découverte.

- **Pourquoi ça gagne** : la défiance envers les tableaux de bord est le premier frein à leur usage. Ce produit rend chaque chiffre interrogeable, et révèle au passage quels chiffres ne reposent sur rien.
- **Bonus** : A + M (+ T quand la source est le graphe).
- **Différence** : `vigie` exige une source pour les résultats clés ; ici on **explique** n'importe quel chiffre existant, y compris ceux des outils tiers.
- **Risque** : il faut un registre des calculs. Repli : l'agent répond depuis la documentation disponible et déclare ce qu'il ne peut pas tracer.

### 3. Contretemps — la latence entre produits
**20/22** (Impact 4 · Innovation 5 · Faisabilité 5 · Bonus 3 · Non-chevauchement 3)

Mesure les délais invisibles entre les produits : de l'incident déclaré (JSM) au bug créé (Jira), du correctif fusionné (Bitbucket) à la documentation mise à jour (Confluence), de la demande client à la réponse. Chaque délai a sa distribution, et chaque rupture est nommée.

- **Pourquoi ça gagne** : tout le monde mesure le délai **dans** un produit ; personne ne mesure le délai **entre** les produits, là où se perdent les jours. Faisabilité maximale : que des lectures datées.
- **Bonus** : T + M (+ A pour l'agent de diagnostic).
- **Différence** : `rayon-impact` juge une release ; `deja-vu-ci` mémorise des builds. Ici on mesure la **couture** entre les quatre produits.
- **Risque** : l'appariement incident ↔ bug. Repli : les liens explicites d'abord, la similarité ensuite, avec confiance affichée.

### 4. Audit blanc — passer l'audit avant l'audit
**20/22** (Impact 5 · Innovation 5 · Faisabilité 3 · Bonus 4 · Non-chevauchement 3)

L'app pose à vos propres données les questions qu'un auditeur posera (traçabilité, séparations de tâches, preuves d'exécution, conservation, accès) et produit le rapport de ce qui tient et de ce qui manque — avant l'audit réel, avec le plan pour boucher les trous.

- **Pourquoi ça gagne** : la peur de l'audit est universelle et budgétée. La démonstration est immédiate : « voici les 12 questions auxquelles vous ne pouvez pas répondre aujourd'hui ».
- **Bonus** : A + M + T + P.
- **Différence** : le registre d'audit d'un partenaire MSP collecte des preuves ; ici on **interroge** ce qui existe déjà dans Atlassian et on mesure l'écart.
- **Risque** : la crédibilité du référentiel. Parade : questionnaires paramétrables, cités, et jamais de conclusion sans la source.

### 5. Manège — la maintenance d'un parc d'attractions
**19/22** (Impact 4 · Innovation 3 · Faisabilité 5 · Bonus 4 · Non-chevauchement 3)

Chaque attraction porte ses contrôles réglementaires, ses échéances, ses incidents, ses interventions et son interdiction d'exploitation. L'ouverture quotidienne du parc est une checklist bloquante : une attraction non conforme n'ouvre pas, et la levée d'interdiction est tracée.

- **Pourquoi ça gagne** : la catégorie Specialized Industries est la moins encombrée, et le sujet est **sécurité critique** avec un vocabulaire réglementaire réel (contrôles périodiques, interdiction d'exploitation, levée). Démo inoubliable, faisabilité maximale (Assets + checklist + validateur).
- **Bonus** : T (Assets) + A + M + P.
- **Différence** : `consignation` (déjà proposé) porte sur l'isolation avant intervention ; ici c'est l'exploitation quotidienne d'un équipement réglementé.
- **Risque** : crédibilité métier → s'appuyer sur le vocabulaire réel des registres de sécurité et un jeu de démonstration réaliste.

### 6. Prix du retard — ce qu'un retard coûte en aval
**19/22** (Impact 5 · Innovation 4 · Faisabilité 4 · Bonus 3 · Non-chevauchement 3)

Un item en retard n'est pas seulement en retard : il bloque d'autres items, immobilise des personnes, décale des engagements. L'app chiffre cet aval, en jours et en euros si les coûts sont déclarés, et classe les retards par ce qu'ils coûtent — pas par leur âge.

- **Pourquoi ça gagne** : tout le monde trie par ancienneté, personne ne trie par coût d'aval. Le changement de critère suffit à changer les décisions.
- **Bonus** : T + M (+ P).
- **Différence** : `laddition` chiffre la dette technique, `vigie` chiffre les objectifs ; ici on chiffre **l'attente**.
- **Risque** : les coûts sont rarement saisis. Repli : coût en jours-personnes immobilisés, fourchette et méthode affichées.

### 7. Balance d'arbitrage — ce qu'il faut abandonner pour dire oui
**18/22** (Impact 5 · Innovation 4 · Faisabilité 3 · Bonus 4 · Non-chevauchement 2)

Face à un nouveau projet, l'app ne répond pas « oui » ou « non » : elle montre ce qu'il faut retirer du plan pour lui faire de la place, option par option, avec le coût de chaque abandon et ce qui est libéré.

- **Pourquoi ça gagne** : c'est la vraie question d'un comité de direction, et aucun outil ne la pose. Transforme une discussion d'opinion en comparaison chiffrée.
- **Bonus** : A + M + T + P.
- **Différence** : `vigie` chiffre la santé des objectifs et propose trois options pour **un** objectif ; ici on arbitre **l'entrée** d'un travail nouveau dans un plan déjà plein.
- **Risque** : besoin de données de capacité fiables. Repli : capacité observée sur les six derniers mois, avec effectif et refus de conclure.

### 8. Guichet parlé — une demande créée entièrement en conversation
**18/22** (Impact 4 · Innovation 3 · Faisabilité 5 · Bonus 3 · Non-chevauchement 3)

Dans Rovo Chat, l'agent prend la demande, pose les champs manquants au fil de la conversation, propose la catégorie et la priorité, crée la demande JSM, et renvoie le numéro. Le formulaire n'existe plus pour l'usager — il reste pour l'agent de support.

- **Pourquoi ça gagne** : le self-service réel, sans portail à maintenir. Faisabilité maximale, démonstration en trente secondes, valeur immédiatement visible pour les équipes support.
- **Bonus** : A + M + P.
- **Différence** : `problemes-caches` améliore le portail existant ; ici on le remplace pour l'usager.
- **Risque** : la qualité des champs obtenus. Parade : l'agent refuse de créer une demande incomplète et dit précisément ce qui manque.

### 9. Recertification — la revue périodique des accès, enfin tenue
**18/22** (Impact 5 · Innovation 3 · Faisabilité 5 · Bonus 2 · Non-chevauchement 3)

Chaque trimestre, chaque responsable reçoit la liste des accès de son périmètre et doit confirmer ou révoquer. L'app relance, mesure le taux de revue, et produit la piste d'audit datée. Les accès non revus dans les délais deviennent visibles.

- **Pourquoi ça gagne** : obligation de conformité dans la plupart des référentiels, douleur réelle, exécution pénible aujourd'hui. Produit simple, robuste, et publiable au Marketplace tel quel.
- **Bonus** : M + P (+ T pour le périmètre depuis le graphe).
- **Différence** : la chasse aux droits ponctuelle détecte l'excès ; la recertification est le **processus périodique** qui l'empêche de revenir.
- **Risque** : l'adhésion des responsables. Parade : campagnes courtes, relances, et un taux de revue affiché par périmètre.

### 10. Leçon apprise — la leçon attachée à l'objet, pas au rapport
**18/22** (Impact 4 · Innovation 4 · Faisabilité 4 · Bonus 4 · Non-chevauchement 2)

Après un incident, l'app extrait la leçon réutilisable et l'attache **à l'objet concerné** (service, équipement, composant) plutôt qu'à un rapport que personne ne relit. La prochaine personne qui ouvre un ticket sur cet objet voit la leçon, au bon moment, avec l'incident d'origine.

- **Pourquoi ça gagne** : les postmortems sont écrits puis oubliés ; le savoir n'est jamais au bon endroit au bon moment. Attacher la leçon à l'objet change tout.
- **Bonus** : A + M + T + P.
- **Différence** : `brief-forge` réinjecte les tentatives échouées dans le brief d'un **agent** ; ici la leçon resurgit pour un **humain** sur l'objet concerné.
- **Risque** : l'extraction de la leçon. Parade : proposition relue et validée par un humain, jamais publiée seule.

---

### Les 12 suivants

| # | Idée | Axe | En une ligne |
|---|---|---|---|
| 11 | **Drapeau en berne** | N10 | Feature flags laissés actifs, sans propriétaire, ou dont le rollout n'a jamais été terminé |
| 12 | **Équipes réelles** | N10 | L'organigramme déclaré face aux équipes qui travaillent vraiment ensemble |
| 13 | **Cloison** | N06 | Vérifie qu'un espace restreint l'est réellement : fuites par liens, inclusions, notifications |
| 14 | **72 heures** | N06 | Réponse à une violation de données : horloge de 72 h, notifications, preuves, rapport |
| 15 | **Qualité à l'entrée** | N07 | La complétude des items à la création, et l'endroit exact où les gens renoncent |
| 16 | **Stock dormant** | N05 | Le backlog comme un stock : distribution d'âge, coût de portage, ce qui périme |
| 17 | **Transcripteur** | N04 | Une pièce jointe (rapport, tableur, photo) transformée en champs structurés, avec confiance |
| 18 | **Garde-fou parlé** | N03 | Avant un geste à risque, l'agent annonce ce que l'objet entraîne |
| 19 | **Tournée de soins** | N08 | Soins à domicile : actes tracés, anomalies escaladées, aucune donnée de santé dans le graphe |
| 20 | **Post-it d'expert** | N09 | Une note d'expert qui resurgit au prochain lecteur du même objet |
| 21 | **Fantômes du graphe** | N10 | Les objets du graphe sans équivalent dans le produit source, qui polluent chaque requête |
| 22 | **Miroir des faits** | N03 | En cas de désaccord, pose les faits des deux côtés sans trancher |

### Lecture stratégique

- **Le meilleur ratio gain/effort** : Contretemps (5/5 en faisabilité, que des lectures datées) et Guichet parlé (idem).
- **Les mieux placés pour les bonus** : Fil perdu, Audit blanc, Manège et Leçon apprise empilent quatre bonus.
- **Les plus différenciants** : Fil perdu (objets `conversation`/`message`) et Contretemps (la couture entre produits) — deux angles que personne n'attaque.
- **Le plus vendable au Marketplace** : Recertification — obligation réglementaire, périmètre clair, aucun besoin de démo élaborée.
- **Répartition par catégorie** : Software (3), Business (5), Specialized (2). Pour une soumission en Specialized Industries, la moins encombrée, Manège et Tournée de soins sont les deux meilleurs chevaux.
- **Attention au chevauchement interne** : Balance d'arbitrage et Leçon apprise frôlent `vigie` et `brief-forge` ; si vous les retenez, la distinction doit être écrite noir sur blanc dans la soumission.

---

## Troisième passe — 1000 idées (T01–T40), top 10 et classement

> Corpus : `T01-jira-sprint.md` … `T40-ind-agro.md` (40 tranches de 25 idées, 1000 exactement)
> Grand total du projet : 500 (S) + 100 (N) + 1000 (T) = **1600 idées**, sans doublon de nom (vérifié par `comm`)
> Grille /22 : Impact /5 · Innovation /5 · Faisabilité au 22 déc. /5 · Bonus empilables /4 · Non-chevauchement /3

### Répartition des 40 tranches

| Bloc | Tranches | Contenu |
|---|---|---|
| Jira (6) | T01–T06 | sprint, backlog, flux, qualité, données, rituels |
| JSM (4) | T07–T10 | client, agents, SLA, interne |
| Confluence (4) | T11–T14 | écriture, structure, droits, données |
| Bitbucket (3) | T15–T17 | dépôts, PR, pipelines |
| Compass/fiabilité (3) | T18–T20 | catalogue, dépendances, incidents |
| Rovo/plateforme (4) | T21–T24 | agents, MCP, graphe, Forge |
| Métiers (6) | T25–T30 | RH, finance, juridique, marketing, ventes, achats |
| Industries (12) | T31–T40 | facilities, logistique, santé, industrie, auto, énergie, éducation, public, BTP, agro |

---

## TOP 10

### 1. Silence vaut accord — les décisions implicites, suivies jusqu'au bout
**20/22** · T38 (Secteur public) — L'administration qui ne répond pas dans le délai légal vaut décision implicite (acceptation ou rejet). L'app suit le délai, opère la bascule automatique, notifie, et trace la décision — aujourd'hui fait à la main et oublié.

- **Pourquoi** : du droit administratif réel, intraduisible ailleurs, et une échéance qui engage. Démonstration parfaite : « voici les 14 dossiers qui vont générer une décision implicite cette semaine ».
- **Bonus** : M + T + P. **Différence** : rien d'équivalent dans le portefeuille.

### 2. Défaut terrain — le défaut remonté, rattaché au véhicule et au lot de pièces
**20/22** · T35 (Automobile) — Chaque défaut remonté du terrain est rattaché au véhicule, au lot de pièces et au fournisseur, avec la correction suivie jusqu'à son efficacité constatée.

- **Pourquoi** : le chaînon manquant entre le garage et l'usine. Spécialisé, concret, et la démo (un lot de pièces lié à N défauts) se lit en une seconde.
- **Bonus** : A + T + M + P. **Différence** : `problemes-caches` regroupe des incidents de service ; ici c'est une filière produit véhicule.

### 3. Coût du bug — ce que coûte un défaut selon le stade où on le trouve
**19/22** · T04 (Software) — Un bug trouvé en revue ne coûte pas ce que coûte le même bug trouvé trois semaines après la mise en production. L'app le chiffre à partir de l'historique réel, par stade.

- **Pourquoi** : c'est le chiffre qui justifie *quand* investir dans la prévention — et il s'obtient par lecture seule des données existantes.
- **Bonus** : A + T + M. **Différence** : `laddition` coûte la dette ; ici on coûte le *défaut*.

### 4. Cascade — simuler l'onde de choc de la panne d'un service
**19/22** · T19 (Compass + graphe) — Pour un service en panne, simule la propagation à travers les dépendances : qui est touché, dans quel ordre, et où poser les replis.

- **Pourquoi** : la question que tout le monde se pose le jour de la panne, posée *avant*. Exploite les dépendances que personne n'affichait.
- **Bonus** : A + T + M. **Différence** : `rayon-impact` juge une release ; ici on simule la **défaillance**, pas la livraison.

### 5. Réconciliation outillée — rapprocher commandes/factures ou banques/écritures
**19/22** · T26 (Finance) — Chaque non-apparié sort avec sa cause probable et le circuit de régularisation, au lieu d'une colonne de doubles qui attendent.

- **Pourquoi** : le travail le plus ingrat de la finance, chiffré et orchestré. Faisabilité maximale, marché massif.
- **Bonus** : A + T + M. **Différence** : rien d'équivalent dans le portefeuille.

### 6. WIP réel — le travail en cours constaté face à celui déclaré
**19/22** · T03 (Software) — L'équipe déclare une limite de travail en cours ; l'app mesure le constaté et montre l'écart, avec l'effet sur le délai de traversée.

- **Pourquoi** : le « déclaré vs réel » est la signature maison. Simple, vérifiable, immédiatement utile.
- **Bonus** : T + M. **Différence** : rien ne mesure le WIP *constaté* aujourd'hui.

### 7. Gravité réelle — la gravité déclarée face à l'impact observé
**19/22** · T04 (Software) — Un bug sous-évalué reste au fond de la file. L'app compare la gravité déclarée à l'impact réel (utilisateurs touchés, réouvertures, incidents) et propose la correction.

- **Pourquoi** : la qualité du triage détermine tout le reste. Révèle la dérive de gravité, invisible sinon.
- **Bonus** : A + T. **Différence** : complète le triage, ne le remplace pas.

### 8. Faux départ — ce que coûtent les alertes qui n'aboutissent à rien
**18/22** · T20 (Fiabilité) — Une alerte qui n'aboutit pas n'est pas gratuite : nuit interrompue, attention volée. L'app les compte, les classe par origine, et chiffre le coût cumulé.

- **Pourquoi** : la face cachée de l'astreinte, mesurable par simple lecture des alertes et de leur issue.
- **Bonus** : A + T. **Différence** : complément du suivi d'astreinte, angle « coût de la fausse alerte ».

### 9. Attente masquée — le temps où un item attend une réponse interne
**18/22** · T03 (Software) — Le délai officiel masque les attentes invisibles : une question posée, un avis attendu, un tiers sollicité. L'app isole cette part et nomme l'attente dominante.

- **Pourquoi** : le vrai goulot est rarement le travail, souvent l'attente. Mesurable, non accusatoire.
- **Bonus** : T + M. **Différence** : complète la vue du flux sans la remplacer.

### 10. Non-conformité interne — constat, lot isolé, cause, correction, vérification
**17/22** · T34 (Manufacturing) — Le cycle complet d'une non-conformité chez le fabricant, avec l'efficacité de la correction vérifiée sur les lots suivants.

- **Pourquoi** : la catégorie Specialized la moins encombrée, et un registre réglementaire réel.
- **Bonus** : T + M + P. **Différence** : distinct du 8D *fournisseur* (déjà proposé), centré sur la production interne.

---

### Le top 30 à suivre (pour une soumission ou un choix différent)

| # | Idée | Tranche | En une ligne |
|---|---|---|---|
| 11 | Fuite — les bugs échappés et le stade où ils sont passés | T04 | Mesure le taux de fuite du processus |
| 12 | Cause commune — regrouper les bugs par même cause racine | T04 | Un problème, plusieurs symptômes |
| 13 | Coût du choix — ce que coûte l'indécision de priorité | T02 | Changements d'avis, reprises, rouvertures |
| 14 | Délai légal — les délais de réponse légaux, tenus et prouvés | T38 | Alerte avant échéance, preuve datée |
| 15 | Mainlevée tracée — les réserves de réception jusqu'à la levée | T39 | Constat, contrevisite, clôture |
| 16 | Escalade automatique bornée — escalader dans des limites déclarées | T09 | Chaque palier tracé |
| 17 | Échec répété — le même échec sur des pipelines différents | T17 | Signe d'une cause commune |
| 18 | Service fantôme — les services du catalogue qui n'existent plus | T18 | Découverte par les dépôts et déploiements |
| 19 | Cycle de correction — découverte d'un bug jusqu'à correction effective | T04 | Le délai qui compte vraiment |
| 20 | Fermeture juste — clôture argumentée quand le client ne répond plus | T07 | Avec délai et trace |
| 21 | Temps de décision — le temps de décider pendant un incident | T09 | Distinct du temps d'agir |
| 22 | Pièce détachée — la pièce critique et son délai d'approvisionnement | T31 | L'exposition à la pièce unique |
| 23 | Règle vivante — une règle vérifiée automatiquement, avec les violations | T15 | Déclarée puis contrôlée |
| 24 | Impact d'un changement — les services touchés, avec la preuve du lien | T19 | Avant de déployer |
| 25 | Bilan de rétro tenu — les engagements de rétro, vérifiés au sprint suivant | T06 | La boucle de l'amélioration |
| 26 | Piste d'audit financière — de la demande à la liquidation, sans fouille | T26 | L'audit qui se reconstitue |
| 27 | Litige financier — pièces, échanges, positions, décision, coût | T26 | Un dossier structuré |
| 28 | Garde de quota — prévenir l'épuisement des limites avant l'échec | T24 | L'alerte au lieu de la panne |
| 29 | Lot agro tracé — la traçabilité amont/aval d'un lot en une requête | T40 | Spécialisé, crédible |
| 30 | Registre d'accident — la partie administrative d'un accident, sans donnée de santé | T34 | Obligation réelle |

### Lecture stratégique

- **Le thème qui ressort** : « déclaré vs réel ». WIP réel, gravité réelle, astreinte effective, disponibilité réelle, coût réel — c'est la signature maison, et elle traverse les tranches. Un positionnement cohérent pour le jury.
- **Meilleur rapport gain/effort** : Réconciliation outillée (5/5 faisabilité), Coût du bug, WIP réel, Gravité réelle (que des lectures datées).
- **Les plus différenciants** : Silence vaut accord (droit administratif), Cascade (simulation de défaillance), Défaut terrain (filière véhicule).
- **Pour la catégorie Specialized (peu encombrée)** : Défaut terrain, Non-conformité interne, Lot agro tracé, Mainlevée tracée.
- **Pour le bonus Teamwork Graph** : Cascade, Défaut terrain, Impact d'un changement — les trois tirent la valeur des relations du graphe.
- **Prudence** : la déduplication a porté sur les *noms* (0 doublon). Le chevauchement de *concepts* entre passes reste possible ; avant de retenir une idée pour soumission, vérifier qu'elle ne recoupe pas les concepts déjà retenus plutôt que le seul titre.

---

## Quatrième passe — 1000 idées (U01–U40), top 10 et classement

> Corpus : `U01-interentreprises.md` … `U40-startups-produits-internes.md` (40 tranches de 25 idées, 1000 exactement)
> Grand total du projet : 500 (S) + 100 (N) + 1000 (T) + 1000 (U) = **2600 idées**, zéro doublon de nom (vérifié par `comm`, 29 renommages appliqués)
> Grille /22 : Impact /5 · Innovation /5 · Faisabilité au 22 déc. /5 · Bonus empilables /4 · Non-chevauchement /3

### Les 40 axes de cette passe

| Bloc | Tranches | Contenu |
|---|---|---|
| Périmètre et temps (2) | U01–U02 | parties externes (clients, fournisseurs, citoyens), calendrier et échéances |
| Organisation (4) | U03–U06 | identités et rôles, compétences, adoption du changement, formation |
| Cycle de vie (3) | U07–U09 | rétention et destruction, migrations, langues et accessibilité |
| Terrain (1) | U10 | mobilité, hors-ligne, objets connectés |
| Mesure et gouvernance (5) | U11–U15 | reporting explicable, sécurité, IA générative, automatisations, FinOps |
| Secteurs réglementés (5) | U16–U20 | conformité GxP/bancaire, supply chain étendue, SLI/SLO, post-mortem, assurance |
| Verticales (10) | U21–U30 | banque, immobilier, tourisme, transport public, eau/environnement, sécurité civile, aéronautique, chimie, services professionnels, retail |
| Verticales (5) | U31–U35 | sport/événementiel, patrimoine, audiovisuel, télécoms, mécanismes transversaux négligés |
| Verticales (5) | U36–U40 | maritime, mines, textile/mode, édition/imprimerie, produits numériques internes |

---

## TOP 10

### 1. Budget d'erreur — l'objectif de service consommé comme un budget
**20/22** · U18 (SLI/SLO) — Chaque service a un objectif de niveau de service et un **budget d'erreur**. L'app suit la consommation de ce budget en direct, alerte quand il brûle trop vite, et relie chaque incident aux points de budget qu'il a coûtés.

- **Pourquoi ça gagne** : c'est *le* concept SRE que tout le monde connaît et qu'aucune app Atlassian ne traite correctement. Universel, mesurable, et la démo tient en une phrase : « il vous reste 3 jours d'erreur ce trimestre ».
- **Bonus** : T + M + P. **Faisabilité 5/5** : que des lectures datées et des seuils.
- **Différence** : `rayon-impact` juge une release ; ici on suit un **budget continu** dans le temps.

### 2. Travail invisible — ce qui n'entre dans aucun ticket
**20/22** · U35 (mécanismes transversaux) — Mesure le travail qui ne passe par aucun item : coordination, revues, support informel, réponses aux questions. Le chiffre, avec sa méthode, et ce que ça coûte.

- **Pourquoi ça gagne** : la signature maison (« ce qui n'est pas mesuré n'existe pas ») appliquée au plus grand angle mort des organisations. Répond à la question « où passe vraiment notre temps ? ».
- **Bonus** : A + T + M. **Différence** : `laddition` coûte la dette technique, `vigie` les objectifs ; ici on coûte **l'absence de ticket**.

### 3. Registre des usages IA — qui utilise quelle IA, sur quelles données
**20/22** · U13 (gouvernance IA) — Le registre central de tous les usages d'IA générative : quel outil, quel cas, quelles données en entrée, quelle validation humaine, quel coût. Avec les usages non déclarés détectés.

- **Pourquoi ça gagne** : la question de gouvernance n°1 de 2026 pour toute organisation qui a ouvert Rovo. Personne ne la traite côté Atlassian. Faisabilité maximale (registre + traces).
- **Bonus** : A + M + P. **Différence** : `banc` teste la qualité d'un agent ; ici on gouverne le **parc d'usages**.

### 4. Main courante — le fil horodaté d'un événement, écrit en direct
**19/22** · U26 (sécurité civile / crise) — Pendant un incident ou une crise, chaque fait est horodaté avec son auteur et sa source, en direct. Aucune reconstitution a posteriori, aucune mémoire perdue.

- **Pourquoi ça gagne** : c'est l'artefact qui manque à tous les post-mortems. Forge Realtime le rend trivial à construire, et la démo est spectaculaire (l'écran se remplit en direct).
- **Bonus** : M + T + P. **Différence** : « boîte noire » exporte une chronologie après coup ; la main courante l'**écrit pendant**.

### 5. Fournisseur de rang 2 — la partie invisible de la chaîne
**19/22** · U17 (supply chain) — Identifie les fournisseurs de rang 2 et 3 dont dépend un composant critique, invisibles au premier niveau, avec l'exposition réelle et les alternatives possibles.

- **Pourquoi ça gagne** : depuis les pénuries, c'est *la* question des directions achats, et personne n'y répond avec les outils existants.
- **Bonus** : T + M + P. **Différence** : la balance fournisseur évalue le rang 1 ; ici on éclaire les rangs suivants.

### 6. Consigne de navigabilité — l'échéance réglementaire qui ne pardonne pas
**19/22** · U27 (aéronautique) — Chaque consigne de navigabilité est applicable ou non à la flotte, exécutée dans le délai réglementaire, avec la preuve et le suivi par appareil.

- **Pourquoi ça gagne** : la catégorie Specialized Industries est la moins encombrée, et celle-ci est **sécurité critique** avec un vocabulaire réglementaire exact. Le jury retient ce genre de crédibilité.
- **Bonus** : M + T + P. **Différence** : rien d'équivalent ; c'est un registre réglementaire, pas un ticket.

### 7. CAPA suivi — l'action corrective dont on vérifie l'efficacité
**19/22** · U16 (conformité GxP) — Une action corrective et préventive suivie jusqu'à la **vérification de son efficacité réelle** sur les lots ou incidents suivants, pas seulement jusqu'à sa clôture.

- **Pourquoi ça gagne** : le point que tous les audits pharma/qualité relèvent : les CAPA sont closes, jamais vérifiées. Faisabilité 5/5.
- **Bonus** : M + T + P. **Différence** : `preuve-a-l-appui` exige une preuve pour un critère ; ici on vérifie l'**effet dans le temps** d'une correction.

### 8. Règle non appliquée — la règle écrite face à la règle vécue
**19/22** · U35 (mécanismes transversaux) — Pour chaque règle déclarée (politique, procédure, exigence), mesure le taux de respect réel dans les faits, et nomme les écarts dominants.

- **Pourquoi ça gagne** : toute organisation a des dizaines de règles que personne n'applique. Les rendre visibles change les décisions : soit on les applique, soit on les abroge.
- **Bonus** : T + P (+ M). **Différence** : `gammes` outille les procédures ; ici on mesure **si elles sont suivies**.

### 9. Optimisation locale — le gain d'une équipe qui dégrade l'ensemble
**18/22** · U35 (mécanismes transversaux) — Détecte les optimisations locales qui déplacent le problème ailleurs, avec la preuve chiffrée du transfert : un indicateur s'améliore ici, un autre se dégrade là, au même moment.

- **Pourquoi ça gagne** : c'est de la pensée système outillée, et c'est exactement ce qu'un jury technique reconnaît comme intelligent. Personne ne le fait.
- **Bonus** : A + T. **Risque** : la corrélation n'est pas la causalité → le produit affiche « transfert observé », jamais « causé par ».

### 10. Reddition de comptes — chaque chiffre cite sa source
**19/22** · U39 (édition) — Prépare la reddition de comptes d'un auteur : ventes, droits, à-valoir, avec **chaque chiffre sourcé** et recomputable, au lieu d'un tableur contesté.

- **Pourquoi ça gagne** : niche absolue, douleur réelle et ancienne, et c'est la démonstration parfaite de la discipline maison : un chiffre sans source n'existe pas. Inoubliable pour un jury.
- **Bonus** : A + T + M + P. **Différence** : aucun équivalent, dans Atlassian ou ailleurs.

---

### Les 15 suivants

| # | Idée | Tranche | En une ligne |
|---|---|---|---|
| 11 | **Plan de tir** | U37 | Un plan de tir minier : zone, paramètres, périmètre de sécurité, autorisations, exécution tracée |
| 12 | **Personnel au fond** | U37 | Les effectifs présents en souterrain, en agrégat, par zone, avec les évacuations |
| 13 | **SLO sans mesure** | U18 | Les objectifs de service déclarés sans aucune mesure réelle derrière |
| 14 | **Chaîne d'IA** | U13 | Les chaînes où une IA en alimente une autre, et où l'erreur se propage en silence |
| 15 | **Sortie IA tracée** | U13 | Chaque sortie d'IA utilisée dans un livrable, avec sa source et sa validation humaine |
| 16 | **Impact de rupture** | U17 | Simule l'impact d'une rupture d'approvisionnement sur les productions et les engagements |
| 17 | **Décision de crise tracée** | U26 | Chaque décision de crise : contexte, options, décideur, heure, effet observé |
| 18 | **Exception permanente** | U35 | Les exceptions devenues permanentes, et ce qu'elles révèlent de la règle |
| 19 | **Contexte perdu** | U35 | Le contexte perdu entre équipes ou périodes, et son coût en reprises |
| 20 | **Bon à tirer** | U39 | Un BAT validé devient immuable : plus aucune modification sans nouvelle validation |
| 21 | **Diagnostic réglementaire** | U22 | Les diagnostics immobiliers obligatoires, leur validité et leurs échéances |
| 22 | **Test d'intrusion suivi** | U12 | Les findings d'un pentest suivis jusqu'à correction vérifiée, avec risque résiduel |
| 23 | **Potentiel d'équipement** | U27 | Heures et cycles d'un équipement aéronautique, avec la dépose programmée |
| 24 | **Gâche mesurée** | U39 | La gâche d'imprimerie par production et par machine, avec ses causes dominantes |
| 25 | **Point unique d'approvisionnement** | U17 | Les composants à source unique et le risque d'arrêt qu'ils concentrent |

### Lecture stratégique

- **Les trois plus sûrs** (faisabilité 5/5, démo immédiate) : Budget d'erreur, Registre des usages IA, Main courante.
- **Les plus différenciants** (personne ne les fait) : Travail invisible, Optimisation locale, Reddition de comptes.
- **Les plus crédibles en Specialized Industries** (catégorie la moins encombrée) : Consigne de navigabilité, CAPA suivi, Plan de tir, Personnel au fond.
- **Le meilleur empilement de bonus** : Reddition de comptes et Consigne de navigabilité (4 bonus chacun).
- **Un thème porteur sur les 1000** : la **gouvernance de l'IA générative** (registre des usages, sorties tracées, chaînes d'IA, shadow AI). C'est le seul sujet où la demande dépasse nettement l'offre en 2026, et il se marie bien avec `banc` (qualité) pour former une offre complète : *mesurer* les agents, puis *gouverner* leurs usages.
- **Réserve honnête** : à 2600 idées, la marge de nouveauté réelle s'épuise. Plusieurs idées de cette passe sont des variantes sectorielles d'un même mécanisme (registre + échéance + preuve + vérification d'efficacité). Ce mécanisme est justement le plus solide : c'est celui de `preuve-a-l-appui` et `placard-wiki`, décliné.

---

## Quête du 22/22 — résultat et point de boucle

> Barème : Impact /5 · Innovation /5 · Faisabilité au 22 déc. /5 · Bonus empilables /4 · Non-chevauchement /3 — total 22
> Contrôle de non-chevauchement effectué par `grep` sur les **2600 idées** des corpus S, N, T, U, plus les 11 apps Forge construites et les 5 cahiers des charges rédigés (`placard-wiki`, `vigie`, `gammes`, `banc`, `trame`).
> Date : 12 novembre 2026

### Résultat

**2 idées à 22/22.** Huit idées à 21/22, avec le point perdu identifié. Au-delà, je reboucle : chaque mécanisme neuf que je produis retombe dans une famille déjà couverte.

Le 22/22 est structurellement rare : il exige simultanément un problème universel (5), un mécanisme que personne n'a (5), cinq semaines de travail dans les limites Forge sans hypothèse non vérifiée (5), les **quatre** bonus (4), et zéro recoupement avec 2600 idées déjà écrites (3). Les deux contraintes qui cassent le plus souvent le score sont la 4ᵉ (bonus) et la 5ᵉ (non-chevauchement).

---

## Les deux 22/22

### 1. Contre-preuve — prouver ce qui n'est PAS arrivé
**22/22** · Impact 5 · Innovation 5 · Faisabilité 5 · Bonus 4 · Non-chevauchement 3

**Le problème.** Un auditeur, un RSSI, un responsable de release demande : « prouvez-moi qu'**aucun** déploiement n'a eu lieu pendant le gel », « qu'**aucune** donnée sensible n'a été exportée ce trimestre », « qu'**aucune** dérogation n'a été accordée sans motif », « qu'**aucun** contrôle obligatoire n'a sauté une échéance ». Aujourd'hui, c'est impossible à produire : tous les systèmes sont conçus pour enregistrer ce qui *arrive*, jamais pour attester ce qui *n'arrive pas*. On répond par une absence de résultat, qui ne prouve rien — l'absence de trace peut venir d'une absence d'événement comme d'un journal incomplet.

**Le mécanisme.** Une attestation négative valable exige trois choses, et c'est ce que l'app produit :
1. **la population close** — l'ensemble exhaustif des objets concernés, avec la méthode qui garantit qu'il est complet (et ses limites déclarées) ;
2. **la couverture de l'observation** — la preuve que l'observation était effective sur toute la période (un journal qui s'arrête le 14 mars invalide l'attestation du 15 au 31) ;
3. **le résultat nul** — aucun événement de la classe demandée dans cette population, sur cette fenêtre, avec la requête qui l'établit.

L'app produit donc un **certificat de non-occurrence** daté, chiffré, avec la requête reproduisible, la population, la couverture et les angles morts déclarés. Quand la couverture est incomplète, elle dit « je ne peux pas l'attester » — et c'est la réponse la plus utile du produit.

**Les classes de négatifs couvertes au lancement** : aucun déploiement pendant une fenêtre · aucun accès à un contenu sensible · aucune dérogation sans motif · aucune modification hors circuit approuvé · aucun contrôle obligatoire manqué · aucune suppression hors politique · aucune exécution d'agent hors périmètre.

**Bonus (4/4).**
- **A** — `rovo:agent` « l'attestateur » : on lui demande en langage naturel une preuve négative, il construit la population, vérifie la couverture, rend le certificat ou l'impossibilité.
- **M** — `rovo:mcp` : `attest-absence`, `list-negative-classes`, `get-coverage`, `get-certificate`.
- **T** — Teamwork Graph en lecture : c'est la source de la population close (`deployment`, `document`, `work-item`, `software-service`, `AssetsObject`) et de la couverture temporelle.
- **P** — publiable tel quel : conformité, audit, sécurité, release management. Marché large et non saturé.

**Faisabilité 5/5.** Que des lectures datées et des requêtes d'agrégation. Aucune écriture dans les produits sources. Aucun module exotique. Aucun appel à une capacité non vérifiée : `scheduledTrigger` (5 max) pour les attestations périodiques, `consumer` (900 s) pour les populations larges, SQL pour le registre des certificats. La seule difficulté réelle — garantir l'exhaustivité de la population — est traitée par conception : elle est déclarée, chiffrée, et ses limites sont affichées.

**Non-chevauchement 3/3.** Vérifié sur les 2600 idées : toutes les preuves existantes du corpus sont des preuves **positives** (`preuve-a-l'appui`, `dossier de conformité`, `horodatage probant`, `nettoyage outillé`, `certification préparée`). Aucune ne certifie une absence. Aucun recoupement non plus avec `registre`, `scellé` ou `piste d'audit`, qui tracent ce qui a été fait.

**Démo (30 s).** « Montre-moi qu'aucun déploiement n'a eu lieu sur le service paiements entre le 20 et le 27 décembre. » → certificat : population de 14 services, 214 déploiements observés sur la fenêtre, 0 sur le périmètre, couverture du journal 100 %, requête reproduisible. Puis le contre-exemple qui vend le produit : la même question sur janvier, où la couverture du journal tombe à 62 % → **« je ne peux pas l'attester »**, avec la période aveugle nommée.

**Risque principal.** La couverture d'observation n'est pas toujours mesurable (journaux partiels, sources hors Atlassian). Parade : c'est précisément ce que le produit déclare. Une attestation qui dit « couverture 62 % » vaut mieux qu'une absence de réponse interprétée comme une preuve.

---

### 2. Glose — le journal des interprétations d'une règle
**22/22** · Impact 5 · Innovation 5 · Faisabilité 5 · Bonus 4 · Non-chevauchement 3

**Le problème.** Une règle est écrite une fois ; elle est interprétée mille fois. « Les changements critiques exigent deux approbations » — critique veut dire quoi ? « Le client doit être informé sans délai » — sans délai, c'est 1 h ou 3 jours ? Chaque équipe tranche dans son coin, la même question revient, les réponses divergent, et le jour de l'audit on découvre trois pratiques pour une règle. Pire : quand quelqu'un tranche enfin, la réponse reste dans un fil de commentaires et sera reperdue.

Ce n'est pas un problème de décision (le registre des décisions existe), ni de procédure (les gammes existent), ni de définition de vocabulaire (le glossaire existe). C'est un objet intermédiaire que personne ne capture : **l'interprétation d'une règle existante, par une personne compétente, pour un périmètre donné, à une date donnée.**

**Le mécanisme.** Chaque interprétation est un objet de première classe :
- la **règle source** citée (page, paragraphe exact) ;
- la **question d'interprétation** telle que posée ;
- l'**interprétation retenue** et son **périmètre** (ce qu'elle couvre, ce qu'elle ne couvre pas) ;
- **qui** l'a donnée et **quand**, avec son autorité (rôle, pas grade) ;
- sa **validité** : ce qui l'invaliderait (changement de la règle, décision supérieure, nouvelle jurisprudence interne) ;
- les **cas d'usage** qui s'y rattachent ensuite.

Quand quelqu'un rencontre la même règle dans un contexte semblable, l'app **resurface l'interprétation existante** au lieu de le laisser re-trancher. Quand une nouvelle interprétation contredit une précédente, elle ne l'écrase pas : elle ouvre un **conflit d'interprétation**, porté à l'autorité supérieure, avec les deux textes cités.

Le produit mesure aussi la **divergence** : combien d'interprétations distinctes pour une même règle, et quelles équipes pratiquent différemment. C'est le chiffre qui décide s'il faut réécrire la règle.

**Bonus (4/4).**
- **A** — `rovo:agent` « le glossateur » : on lui pose une question d'interprétation, il cherche les précédents, répond en les citant, ou dit qu'aucun précédent n'existe et propose d'en enregistrer un.
- **M** — `rovo:mcp` : `find-interpretation`, `record-interpretation`, `list-conflicts`, `get-divergence`, `check-rule`.
- **T** — graphe en lecture pour rattacher une interprétation aux objets qu'elle gouverne (`work-item`, `software-service`, `document`) et mesurer sa portée réelle.
- **P** — publiable : juridique, conformité, support, standards d'ingénierie, politiques internes. Toute organisation de plus de 50 personnes a ce problème.

**Faisabilité 5/5.** Confluence pour la source et la publication (`confluence:contentAction`, `confluence:macro`), Jira pour les questions et les conflits, SQL pour le registre, LLM hébergé pour la recherche de précédents et la détection de contradiction — le tout dans les limites connues. Aucune capacité non vérifiée requise.

**Non-chevauchement 3/3.** Vérifié sur les 2600 idées : le mot « interprétation » n'apparaît que dans des pitchs disant « sans interprétation ajoutée » (résumés factuels). Aucun produit du corpus ne capture, ne versionne ni ne confronte des interprétations de règles. Distinct du registre des décisions (décider quoi faire ≠ dire ce que veut dire une règle), distinct des gammes (une procédure dit comment faire, pas comment lire une règle ambiguë), distinct du glossaire (un terme ≠ une règle).

**Démo (45 s).** Un ticket de support cite la règle « réponse sans délai ». L'encart affiche : *2 interprétations enregistrées — Support (4 h ouvrées, mars 2026) et Juridique (24 h pour les clients sous contrat, juin 2026) — conflit ouvert, en attente d'arbitrage.* Puis une nouvelle question arrive : l'agent répond en citant le précédent au lieu d'inventer. Puis quelqu'un tranche différemment : le conflit s'ouvre, les deux textes sont cités côte à côte.

**Risque principal.** L'adoption — si personne n'enregistre les interprétations, le registre reste vide. Parade : la capture se fait **au moment où la question se pose** (encart sur le ticket, réponse de l'agent), pas dans un formulaire dédié ; et l'agent propose l'enregistrement dès qu'une réponse humaine est donnée.

---

## Le palier 21/22 — et le point exactement perdu

| Idée | Score | Le point perdu |
|---|---|---|
| **Registre des non-décisions** — les questions qui auraient dû être tranchées et ne l'ont pas, avec l'âge et le coût du report | 21 | Non-chevauchement 2 : cousin de *Coût du choix* (T02·44) et de *File de décision* (S01·27) |
| **Liste des renoncements** — ce que l'organisation a consciemment décidé de ne pas faire, avec la raison et la date de révision | 21 | Impact 4 : réel mais moins universel que les deux 22/22 |
| **Cascade d'hypothèses** — quand une hypothèse de calcul change, tous les chiffres qui en dépendent sont signalés à recalculer | 21 | Non-chevauchement 2 : voisin de *Hypothèse affichée* (U11·265) |
| **Registre des hypothèses de plan** — chaque hypothèse d'un plan porte son test d'invalidation, son responsable, son échéance | 21 | Non-chevauchement 2 : voisin de *Hypothèse testée* (U40·978) |
| **Contrat de données inter-équipes** — schéma déclaré entre producteur et consommateur, rupture détectée avant déploiement | 21 | Non-chevauchement 2 : voisin de *Contrat de données* (S02·44) |
| **Preuve d'exhaustivité** — certifier qu'une liste déclarée est complète, par réconciliation avec des sources indépendantes | 21 | Innovation 4 : le mécanisme de réconciliation existe déjà (*Chaînon*, *Composant sans fiche*) |
| **Étalon d'indicateur** — détecter qu'une définition de métrique a changé en silence et que la tendance n'est plus comparable | 21 | Non-chevauchement 2 : voisin de *Cohérence inter-rapports* (U11·264) |
| **Registre des implicites** — les normes non écrites que tout le monde suit, proposées depuis les comportements puis confirmées | 21 | Non-chevauchement 2 : voisin de *Savoir non écrit* (U35·873) et de *Règle non appliquée* (U35·861) |

---

## Où je reboucle — déclaration honnête

À partir de ce point, chaque mécanisme neuf que je produis retombe dans l'une des familles déjà saturées par les 2600 idées. Les familles épuisées :

1. **Le registre d'un objet épistémique non suivi** — j'ai couvert : décisions, interprétations, hypothèses, non-décisions, renoncements, implicites, précédents, dérogations, exceptions, seuils, engagements, promesses, obligations, consentements. Il n'en reste pas d'intéressant.
2. **La preuve** — positive (exécution, conformité, présence, antériorité) et négative (absence, exhaustivité, continuité, non-usage). Les variantes restantes sont des déclinaisons de `contre-preuve`.
3. **La dérive** — de schéma, de définition, de configuration, de pratique, de catalogue, de documentation, de périmètre, de gravité, de priorité. Couvert sous toutes ses formes.
4. **Le déclaré contre le réel** — capacité, WIP, organigramme, compétences, criticité, dépendances, disponibilité, conformité, couverture. C'est la signature maison ; elle est pleine.
5. **La chaîne inter-produits** — latence, cohérence, double saisie, traçabilité, appariement. Couvert.
6. **Le coût de ce qui n'est pas mesuré** — attente, interruption, recherche d'information, dette de processus, bureaucratie, travail invisible. Couvert.

Ce qui reste à produire n'est plus de l'innovation de mécanisme, mais de la **déclinaison sectorielle** d'un mécanisme existant — ce que la passe U a déjà fait en 500 idées (aéronautique, mines, maritime, édition, textile…). Ces déclinaisons peuvent être d'excellents projets, mais elles ne scoreront jamais 22/22 en innovation.

### Ce que ça veut dire concrètement

- Le filtre 22/22 mesure surtout la **distance à ce qui est déjà construit**, pas la valeur absolue. À 2600 idées, presque tout ce qui est neuf est neuf *de peu*.
- Les deux 22/22 sont réellement actionnables et complémentaires : `contre-preuve` prouve ce qui n'est pas arrivé, `glose` fixe ce que veut dire une règle. Ensemble ils couvrent l'essentiel de ce qu'un auditeur demande et que personne ne sait produire.
- Les cinq cahiers des charges déjà rédigés (`trame`, `banc`, `gammes`, `vigie`, `placard-wiki`) restent les meilleurs paris **en valeur absolue** : ils sont documentés jusqu'au bout, alors que ces deux idées ne sont encore que des fiches.
- La suite rentable n'est plus de générer : c'est de choisir **un** projet et de le construire. Le temps restant avant le 22 décembre (40 jours) est le vrai facteur limitant.
