# Deuxième passe — 100 idées neuves (axes non couverts par les 500)

> Axes : multi-produit, temps réel, Rovo Chat natif, agents assignables, économie du travail,
> sécurité/conformité, hygiène de plateforme, métiers sous-équipés, transmission du savoir,
> objets du graphe inexploités. Format identique au corpus S01-S11.

## N01 — Chaînes multi-produits (Jira × Confluence × JSM × Bitbucket)
1. **Chaînon** — Pour tout objet, reconstruit la chaîne inter-produits (incident → ticket → PR → page) et nomme l'anneau manquant. [Jira+JSM+Bitbucket+Confluence · graphe, consumer] [T/M] [Software]
2. **Perroquet** — Détecte la même information saisie dans deux produits et propose une source unique avec miroir automatique. [Jira+Confluence · trigger, llm] [A/M] [Business]
3. **Contre-sens** — Repère les intégrations qui ne circulent que dans un sens et les incohérences qui en découlent. [Jira+Confluence · sql, scheduledTrigger] [T/P] [Software]
4. **Archipel** — Cartographie quel produit porte quelle part du savoir d'un projet, et où la connaissance est fragmentée. [graphe · globalPage, sql] [T/M] [Business]
5. **Quatre vérités** — Un incident, son bug, son postmortem et sa release racontent quatre versions : l'app les confronte. [JSM+Jira+Confluence+Bitbucket · graphe, llm] [A/T] [Software]
6. **Attache** — À l'ouverture d'un ticket, affiche la page, la demande et la PR qui concernent le même objet, sans recherche. [Jira · issuePanel, graphe] [T/M] [Software]
7. **Copie** — Mesure l'information dupliquée entre produits et son coût de maintenance réel. [Jira+Confluence · sql, llm] [T/P] [Business]
8. **Fenêtre unique** — Une vue par équipe agrégeant les quatre produits, sans aucun de leurs tableaux de bord natifs. [Jira · globalPage, graphe] [T/M] [Business]
9. **Contretemps** — Mesure la latence entre produits : de l'incident au bug, du correctif à la documentation mise à jour. [graphe · sql, scheduledTrigger] [T/M] [Software]
10. **État civil** — Chaque objet reçoit une fiche inter-produits générée et tenue à jour, citable par un humain ou un agent. [graphe · rovo:mcp, macro] [A/M/T] [Software]

## N02 — Forge Realtime et collaboration vivante
11. **Couloir** — Présence en direct : qui lit ou modifie cette page ou ce ticket maintenant, pour éviter le travail doublé. [Confluence+Jira · realtime, globalPage] [M/P] [Business]
12. **Grand écran** — Mur d'affichage pour un plateau : files, items qui vieillissent, qui fait quoi, sans interaction. [Jira · globalPage, realtime] [M/P] [Business]
13. **Premier arrivé** — Revendication en direct d'un item : le premier qui clique l'obtient, la contention est visible. [JSM · queuePage, realtime] [M/P] [Business]
14. **Pouls** — Le pouls de l'organisation en direct : créations et clôtures par minute, pics cliquables jusqu'à leur source. [Jira · globalPage, realtime] [T/M] [Business]
15. **Sablier commun** — Un chronomètre partagé et synchronisé entre navigateurs pour les décisions à temps limité. [Jira · realtime, macro] [P] [Business]
16. **File vive** — La file d'attente physique affichée en direct avec position et estimation d'attente. [JSM · Assets, realtime] [M/P] [Specialized]
17. **Signal** — Accusés de réception légers (« vu », « je m'en occupe ») qui remplacent le bruit des commentaires. [Jira · issuePanel, realtime] [M/P] [Software]
18. **Table commune** — Tableau de planification multi-utilisateurs où les conflits de capacité apparaissent pendant la saisie. [Jira · globalPage, realtime] [M/T] [Business]
19. **Regard** — Journal en direct des consultations d'items sensibles : qui regarde quoi, pour la conformité. [Jira+Confluence · realtime, sql] [T/P] [Business]
20. **Cloche** — Notifie en direct les seules personnes concernées par un changement, au lieu de tout un espace. [Confluence · realtime, trigger] [M/P] [Business]

## N03 — Rovo Chat natif (aucune interface à construire)
21. **Guichet parlé** — Une demande JSM créée entièrement dans Rovo Chat : le formulaire se remplit en conversation. [JSM+Rovo · rovo:agent, rovo:action] [A/M/P] [Business]
22. **Jargon** — Explique en chat les acronymes et le jargon interne à partir des pages de l'organisation, source citée. [Confluence+Rovo · rovo:agent, graphe] [A/M/T] [Business]
23. **Garde-fou parlé** — Avant un geste à risque, l'agent annonce ce que l'objet entraîne : « cette page alimente 12 tickets ». [Rovo · rovo:action, graphe] [A/M/T] [Business]
24. **Ticket dicté** — Crée un ticket bien formé en conversation : l'agent pose les champs manquants jusqu'à le rendre actionnable. [Jira+Rovo · rovo:agent, llm] [A/M] [Software]
25. **Suivi personnel** — L'agent se souvient de vos questions et revient vous dire quand ce que vous attendiez est débloqué. [Rovo · rovo:agent, sql] [A/M] [Business]
26. **Comparateur** — « Compare ces deux projets / services / sprints » : réponse en chat, tableau à l'appui, sources citées. [Rovo · rovo:agent, graphe] [A/M/T] [Business]
27. **Mode d'emploi du chiffre** — N'importe quel nombre de n'importe quel tableau de bord expliqué en chat : calcul, sources, réserves. [Rovo · rovo:agent, rovo:mcp] [A/M] [Business]
28. **Baromètre** — Une question unique posée chaque semaine en chat, agrégée anonymement, avec la dérive dans le temps. [Rovo · rovo:agent, sql] [A/P] [Business]
29. **Gazette** — Transforme les changements de la semaine en une courte lettre interne sourcée, prête à relire. [Confluence+Rovo · rovo:agent, llm] [A/M] [Business]
30. **Miroir des faits** — En cas de désaccord entre équipes, pose les faits des deux côtés sans trancher, avec leurs sources. [Rovo · rovo:agent, graphe] [A/M/T] [Business]

## N04 — Agents assignables (`rovo:agentConnector`)
31. **Trieur** — Agent assignable à une file : il catégorise, route, fixe la priorité et réclame le champ manquant. [JSM · rovo:agentConnector, trigger] [A/M/P] [Business]
32. **Balayeur** — Agent assignable à un projet : il parcourt tous les items et signale les périmés et les ambigus, avec correction proposée. [Jira · rovo:agentConnector, consumer] [A/M] [Software]
33. **Rapprochement** — Agent qui réconcilie deux ensembles d'objets (commandes/réceptions, actifs/inventaire) et liste les non-appariés. [Jira · rovo:agentConnector, sql] [A/M/T] [Business]
34. **Transcripteur** — Agent qui transforme une pièce jointe (rapport, tableur, photo de tableau) en champs structurés, avec confiance et relecture. [Jira · rovo:agentConnector, llm] [A/M] [Business]
35. **Dossier de clôture** — Agent qui assemble le paquet de clôture : preuves, synthèse, pièces manquantes réclamées avant fermeture. [Jira · rovo:agentConnector, llm] [A/M] [Software]
36. **Escalade** — Agent qui surveille les items vieillissants et escalade avec un dossier déjà préparé au bon destinataire. [JSM · rovo:agentConnector, scheduledTrigger] [A/M] [Business]
37. **Fusion** — Agent qui trouve les doublons entre projets et propose la fusion avec son plan de migration. [Jira · rovo:agentConnector, llm] [A/M] [Software]
38. **Contrôleur** — Agent qui vérifie chaque item contre une politique déclarée et rapporte les exceptions avec la règle citée. [Jira · rovo:agentConnector, sql] [A/M/P] [Business]
39. **Ordonnanceur** — Agent qui propose un ordonnancement sous contraintes et demande l'approbation avant d'écrire. [Jira · rovo:agentConnector, llm] [A/M] [Business]
40. **Rapporteur** — Agent qui produit le rapport périodique à partir des données vivantes, jamais d'un gabarit rempli à la main. [Jira+Confluence · rovo:agentConnector, llm] [A/M] [Business]

## N05 — Économie du travail : ce que ça coûte, ce que ça rapporte
41. **Coût de recherche** — Mesure le temps passé à retrouver une information : requêtes, sauts de page, questions répétées. [Jira+Confluence · sql, graphe] [T/M] [Business]
42. **Prix du retard** — Chiffre ce qu'un retard coûte en aval : items bloqués, personnes en attente, engagements décalés. [Jira · sql, graphe] [T/M] [Business]
43. **Balance d'arbitrage** — Pour un projet proposé, montre ce qu'il faut abandonner pour lui faire de la place, option par option. [Jira · globalPage, llm] [A/M/T] [Business]
44. **Capital documentaire** — Indice composite : quelle part du savoir est écrite, à jour et trouvable, avec ses composantes affichées. [Confluence · graphe, sql] [T/M] [Business]
45. **Dette d'attention** — Mesure le coût cumulé des interruptions : fréquence, origine, et ce qu'elles ont déplacé. [Jira · sql, trigger] [T/P] [Business]
46. **Stock dormant** — Traite le backlog comme un stock : distribution d'âge, coût de portage, ce qui périme s'il n'est jamais fait. [Jira · sql, dashboardGadget] [T/M] [Software]
47. **Élasticité** — Mesure si ajouter de la capacité ajoute vraiment du débit, par équipe, avec taille d'effet et refus de conclure. [Jira · sql, graphe] [T/M] [Business]
48. **Balance qualité** — Compare ce que la prévention coûte à ce que coûte son absence, par équipe et par trimestre. [Jira · sql, llm] [T/M] [Software]
49. **Seuil de rupture** — Détecte à quel volume un processus casse (file, guichet, revue) et nomme le seuil observé. [Jira+JSM · sql, scheduledTrigger] [T/M] [Business]
50. **Ligne de charge** — Prévoit la charge du trimestre suivant depuis la tendance des entrées, avec intervalles et hypothèses. [Jira · sql, llm] [A/M] [Business]
