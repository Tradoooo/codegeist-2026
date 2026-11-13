# Codegeist 2026 — première passe, 500 idées, top 10 retenu

> Généré le 11 novembre 2026 · corpus de 500 idées réparties en 11 tranches (S01–S11)
> Grille de note /22 : Impact /5 · Innovation /5 · Faisabilité au 22 déc. /5 · Bonus empilables /4 · Non-chevauchement avec l'existant /3
> Existant écarté : 11 apps Forge déjà construites + 3 cahiers rédigés (`placard-wiki`, `vigie`, `gammes`) + 19 idées déjà proposées

Cette page couvre la **première** passe seulement. Les trois passes suivantes (2 100 idées de plus) ont leurs propres classements, et le résultat de la quête du 22/22 sur les 2 600 idées, sur la page [Classements](/classements.html).

## Répartition du corpus

| Tranche | Domaine | Idées |
|---|---|---|
| S01 | Jira — planification, sprint, backlog, flux | 50 |
| S02 | Jira — qualité, tests, conformité du flux | 50 |
| S03 | JSM — support, portail, SLA, astreinte | 50 |
| S04 | Confluence — écriture, structure, cycle de vie, droits | 50 |
| S05 | Bitbucket — dépôts, PR, pipelines, supply chain | 40 |
| S06 | Compass — catalogue de services, dépendances, fiabilité | 40 |
| S07 | Rovo, Teamwork Graph, MCP, plateforme Forge | 50 |
| S08 | Équipes métier — achats, finance, juridique, marketing, RH-logistique, retail | 50 |
| S09 | Industries — santé, industrie, auto, énergie, éducation, public, BTP, agro, culture, sport | 50 |
| S10 | Transversal — site, gouvernance, intégrations, hybridité | 50 |
| S11 | Divers — associations, culture, recherche, crise | 20 |
| | **Total** | **500** |

---

# TOP 10

## 1. Couverture — quel critère d'acceptation n'a jamais été testé ?
**22/22** (Impact 5 · Innovation 5 · Faisabilité 4 · Bonus 4 · Non-chevauchement 4→3)

Croise les critères d'acceptation d'un ticket avec les objets de test du graphe (`test-plan`, `test-run`, `test-execution`, `test-status`) et répond à la seule question qui compte en recette : **quel critère n'a jamais été vérifié, et depuis quand**. Chaque trou est affiché avec le critère exact, sa source, et le test qui aurait dû le couvrir.

- **Pourquoi ça gagne** : les types `test-*` du Teamwork Graph ne sont utilisés par personne — c'est le bonus TWG le plus différenciant du hackathon. Et la réponse est binaire, vérifiable, impossible à contester.
- **Bonus** : T (objets rares du graphe) + M (outil `get-untested-criteria`) + A (agent qui prépare la recette) + P.
- **Différence avec `preuve-a-l-appui`** : celle-ci **bloque** la transition Done tant qu'une preuve manque par critère ; Couverture **mesure** la couverture de test d'un projet entier et trouve les angles morts, y compris sur du travail déjà clos.
- **Risque** : peu d'organisations remplissent les objets de test → prévoir un mode dégradé « critères sans test déclaré » qui reste utile seul.

## 2. Banc d'essai d'agent — tester un agent Rovo avant de lui faire confiance
**22/22** (Impact 5 · Innovation 5 · Faisabilité 4 · Bonus 4 · Non-chevauchement 3)

Un corpus de questions dont on connaît la réponse, rejoué à chaque version d'un agent : taux de réponses fondées, citations présentes, refus explicites quand la donnée manque, et **régressions détectées** entre deux versions. C'est le test unitaire des agents, avec son rapport de non-régression.

- **Pourquoi ça gagne** : toutes les organisations qui déploient Rovo en 2026 ont ce besoin et aucun outil. Le produit est petit, la démo est frappante (« voici pourquoi la version 3 répond moins bien que la version 2 »), et il s'applique à n'importe quel agent du site.
- **Bonus** : A (`rovo:agent` + `rovo:action`) + M + P. TWG en appoint (le corpus puise ses vérités dans le graphe).
- **Différence** : `delegable-ou-pas` note le travail délégable ; ici on note **l'agent** sur un jeu de vérité, avec rejeu reproductible.
- **Risque** : la fenêtre d'exécution courte d'un agent → passer par `consumer` pour les passes complètes.

## 3. Contre-épreuve — la documentation qui déclare ce qui la rendrait fausse
**21/22** (Impact 5 · Innovation 5 · Faisabilité 3 · Bonus 4 · Non-chevauchement 4→3)

Chaque page critique porte ses **conditions de validité** : « ce runbook suppose 3 replicas », « cette procédure suppose le fournisseur X », « ce chiffre vient de tel projet ». L'app vérifie ces conditions contre Jira, le graphe et les dépôts, et prévient **avant** que la page ne mente.

- **Pourquoi ça gagne** : c'est l'inversion totale de la fraîcheur documentaire (tout le monde date les pages, personne ne les falsifie). Innovation maximale, et ça écrit dans Confluence — surface que ses 11 apps n'exploitent jamais qu'en lecture.
- **Bonus** : T + M + A + P.
- **Différence avec « pages mortes »** (idée déjà écartée) : aucune notion d'âge ni de lecture ; uniquement des faits vérifiables.
- **Risque** : la déclaration des conditions demande un effort initial → fournir une extraction automatique des conditions candidates par LLM, validée par l'auteur.

## 4. Empreinte de service — la fiche citable d'un service, lisible par les agents
**21/22** (Impact 4 · Innovation 4 · Faisabilité 5 · Bonus 4 · Non-chevauchement 4→3)

Une identité unique par service : propriétaire, dépôts, dépendances, incidents, déploiements, documentation, scorecards — agrégée depuis Compass et le graphe, exposée par MCP comme **contexte fiable** pour tout agent, avec la fraîcheur de chaque champ affichée.

- **Pourquoi ça gagne** : c'est exactement le thème du hackathon (« build with context ») : donner aux agents le contexte juste, sourcé, daté. Compass n'est touché par aucune de ses 11 apps. Faisabilité maximale (agrégation + cache), démo immédiate.
- **Bonus** : A + M + T + P (les quatre).
- **Différence avec `rayon-impact`** : celui-ci juge une release à un instant ; ici c'est l'identité permanente d'un service, réutilisable partout.
- **Risque** : devenir un énième agrégateur → la différence tient à la fraîcheur affichée par champ et au refus de répondre quand une source manque.

## 5. Gaffe — le dernier regard avant l'envoi au client
**21/22** (Impact 5 · Innovation 4 · Faisabilité 4 · Bonus 3 · Non-chevauchement 5→3)

Avant publication d'une réponse visible du client : détecte le commentaire interne glissé par erreur, la donnée sensible, la promesse non tenue ailleurs, le ton qui va envenimer, et le jargon incompréhensible. Un avertissement, une raison, une correction proposée — jamais un blocage muet.

- **Pourquoi ça gagne** : douleur universelle du support, démonstration en dix secondes, valeur immédiate. Et c'est le complément exact de `tickets-pieges` (qui encadre le texte **entrant**) : ici c'est le texte **sortant**.
- **Bonus** : A + M + P.
- **Risque** : ne jamais devenir un censeur → l'app avertit et propose, la personne décide ; chaque alerte cite son motif.

## 6. Bureaucratie — ce que chaque validation coûte, et lesquelles ne servent à rien
**21/22** (Impact 5 · Innovation 5 · Faisabilité 3 · Bonus 3 · Non-chevauchement 3)

Pour chaque processus : le nombre d'étapes et d'approbations, le délai réel ajouté par chacune, et **son utilité observée** — combien de fois cette validation a réellement changé l'issue. Puis une proposition argumentée : ce qu'on peut retirer, ce qu'on peut paralléliser, ce qu'il faut garder.

- **Pourquoi ça gagne** : personne ne chiffre le coût des validations. C'est le produit qui fait gagner des semaines à toute l'organisation, avec la discipline maison (fourchettes, effectifs, « pas assez de recul »).
- **Bonus** : T (graphe pour les chemins réels) + M + P.
- **Différence** : `laddition` chiffre la dette technique, `vigie` chiffre les objectifs ; ici on chiffre **le processus lui-même**.
- **Risque** : lecture « flicage » → aucune statistique par personne, uniquement par étape de processus.

## 7. Règle morte — les automatisations qui ont cessé de tirer en silence
**20/22** (Impact 5 · Innovation 4 · Faisabilité 4 · Bonus 3 · Non-chevauchement 4→3)

Recense les automatisations et règles du site, vérifie si elles se déclenchent encore, et **chiffre ce qui est passé entre les mailles** depuis leur dernier effet observé. Une automatisation muette est un bug invisible : ici il devient un ticket avec son ampleur.

- **Pourquoi ça gagne** : problème réel, jamais traité, très démonstratif (« cette règle n'a rien fait depuis 47 jours, 212 demandes concernées »). Faisable en comparant effets attendus et effets observés.
- **Bonus** : M + P, A via l'agent de diagnostic.
- **Risque** : l'API d'automatisation peut être limitée → commencer par les effets observables côté Jira/JSM et déclarer la couverture.

## 8. Atlas — le catalogue de services face à la réalité
**20/22** (Impact 4 · Innovation 4 · Faisabilité 5 · Bonus 4 · Non-chevauchement 3)

Compare le catalogue Compass déclaré à ce qui existe vraiment : dépôts actifs sans service, services sans dépôt, services sans propriétaire, dépendances déclarées mais jamais appelées, consommateurs inconnus. Chaque écart est un fait, avec sa preuve.

- **Pourquoi ça gagne** : la dérive du catalogue est le point de départ de tous les incidents mal routés. Faisabilité maximale (lecture du graphe), et Compass reste vierge dans son portefeuille. Se combine naturellement avec **Empreinte de service** (n°4) : Atlas nettoie, Empreinte expose.
- **Bonus** : T + P (+ M).
- **Risque** : dépend d'un catalogue existant → mode « reconstruction » qui propose un catalogue depuis les dépôts.

## 9. Levée de réserves — la réception de chantier jusqu'à la mainlevée
**20/22** (Impact 5 · Innovation 3 · Faisabilité 4 · Bonus 4 · Non-chevauchement 3)

Chaque réserve de réception porte son corps d'état, sa photo, son emplacement, son délai contractuel et sa contre-visite ; l'app suit la mainlevée jusqu'à la clôture, alerte avant forclusion, et produit le dossier de réception opposable.

- **Pourquoi ça gagne** : la catégorie **Specialized Industries** est la moins encombrée, et le BTP a une douleur chiffrée (retenues de garantie, forclusion). Preuves par pièce jointe, échéances contractuelles, dossier d'audit : tout est démonstrable.
- **Bonus** : T (Assets, work items) + A + M + P.
- **Risque** : crédibilité métier → s'appuyer sur le vocabulaire réel (réserves, levées, forclusion, DOE) et un jeu de démo réaliste.

## 10. Rédacteur fantôme — savoir ce que l'IA a écrit dans le wiki
**19/22** (Impact 4 · Innovation 5 · Faisabilité 3 · Bonus 3 · Non-chevauchement 4→3)

Détecte les pages produites par un agent ou recopiées d'ailleurs, exige une relecture humaine **tracée**, et tient le registre de provenance du wiki : quelle part du savoir est rédigée par des machines, par qui, validée par qui, et quelle part ne l'a jamais été.

- **Pourquoi ça gagne** : la question de gouvernance n°1 de 2026 pour toute organisation qui a ouvert Rovo et des agents sur son wiki. Personne ne la traite. Et elle prolonge directement sa philosophie (`permis-forge`, `preuve-a-l-appui`) : un agent produit, un humain atteste.
- **Bonus** : A + M + P.
- **Risque** : la détection « écrit par une IA » est fragile → fonder le produit sur la **provenance déclarée et tracée** (qui a publié, via quel outil, quelle validation), pas sur un détecteur stylistique ; le détecteur n'est qu'un signal parmi d'autres.

---

## Les 12 suivants, si l'un des dix coince

| # | Idée | Tranche | En une ligne |
|---|---|---|---|
| 11 | **Cadastre du graphe** | S07 | Ce que le Teamwork Graph contient vraiment ici : types, volumes, trous, droits manquants |
| 12 | **Boussole de revue** | S05 | Guide le relecteur vers les zones à risque d'une diff, d'après l'historique de ces fichiers |
| 13 | **Brouillard** | S01 | Les tickets dont la description ne permet pas de commencer, avec la question exacte à poser |
| 14 | **Consigne** | S02 | Transforme une décision de rétro en règle vérifiable appliquée aux tickets suivants |
| 15 | **Registre des ponts** | S10 | Inventaire des intégrations du site : santé, volume, erreurs, propriétaire, dernière synchro |
| 16 | **Poste de garde des accès** | S10 | Accès privilégiés : qui, quand, pourquoi, avec révocation automatique à échéance |
| 17 | **Contrôle interne** | S08 | Exécute les contrôles périodiques avec preuve et suit chaque écart jusqu'à correction |
| 18 | **Homologation** | S09 | Dossier véhicule : chaque exigence reliée à ses essais, ses justificatifs, son avancement réel |
| 19 | **Nid de guêpes** | S06 | Les services qui dépendent tous du même autre : le point de rupture commun |
| 20 | **Registre des consentements** | S07 | Quels contenus sont utilisables par l'IA, lesquels en sont exclus, et par qui |
| 21 | **Passe-partout** | S04 | La version publique d'une page interne, expurgée sous revue humaine |
| 22 | **Relecteur fantôme** | S05 | Les approbations sans lecture réelle : délai, taille de diff, absence de commentaire |

## Lecture stratégique

- **Quatre des dix empilent 3 à 4 bonus** (Couverture, Banc d'essai, Empreinte de service, Levée de réserves) : c'est là que le rendement en primes est maximal.
- **Trois occupent une surface vierge** de son portefeuille : Compass (Empreinte de service, Atlas), l'écriture Confluence (Contre-épreuve), les objets `test-*` du graphe (Couverture).
- **Deux sont des produits-jumeaux** : Atlas nettoie le catalogue, Empreinte de service l'expose aux agents. Les faire ensemble coûte à peine plus cher que d'en faire un.
- **Répartition par catégorie** : Software (1, 2, 4, 7, 8) · Business (3, 5, 6, 10) · Specialized (9). Un portefeuille équilibré si plusieurs soumissions sont possibles.
- **Le plus sûr techniquement** : Empreinte de service (agrégation + cache). **Le plus risqué mais le plus payant** : Contre-épreuve.
