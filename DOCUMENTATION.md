# Documentation projet Planisphère compliance

## Description de la solution
Application web statique (HTML/CSS/JS) permettant de visualiser des données de conformité par pays via une carte SVG interactive. L'expérience est 100 % locale : toutes les dépendances (données, styles, scripts) sont embarquées dans le projet et la persistance se fait dans le navigateur (localStorage).

## Architecture générale
- **Front unique** : `index.html` charge les styles (`assets/css/styles.css`) et la logique (`assets/js/app.js`). Aucune compilation ni dépendance serveur.
- **Ressources métiers** :
  - Carte mondiale SVG (`assets/world.svg`).
  - Données d'indice de perception de la corruption 2024 (`assets/ICP2024.json`).
- **Données utilisateur** : catalogue de médicaments, priorités éthique & compliance, thématiques de carte et sélecteur de pays stockés en localStorage pour conserver la configuration locale.

## Architecture détaillée
- **Composition de page** (définie dans `index.html`) :
  - En-tête avec contrôle burger, titre et bascule vers le back-office.
  - Menu latéral listant les thématiques disponibles.
  - Panneau principal avec carte interactive, légende et contrôles de zoom.
  - Back-office (formulaires tabulaires) pour gérer thématiques, données associées et catalogues partagés.
  - Footer affichant la version de l'application.
- **Logique applicative** (dans `assets/js/app.js`) :
  - Initialisation des constantes (version, chemins de ressources, valeurs par défaut) et dictionnaires de pays/continents.
  - Gestion d'état globale `state` couvrant thématique active, données pays, catalogues, filtres du sélecteur de pays et notifications UI.
  - Chargement et normalisation des thématiques (`DEFAULT_THEMES`) avec support des codes ISO2/ISO3 et rafraîchissement dynamique de l'indice de corruption depuis `assets/ICP2024.json`.
  - Gestion des catalogues (médicaments, priorités) et du sélecteur de pays avec lecture/écriture dans `localStorage` et mises à jour des vues associées.
  - Rendu interactif de la carte SVG (coloration, infobulles, zoom), de la légende et des tableaux d'insights.
  - Back-office : génération des formulaires dynamiques, validation, création/suppression d'entités et persistance locale.

## Exigences fonctionnelles principales
- Naviguer entre thématiques via le menu et afficher la légende correspondante.
- Colorer la carte ou afficher des info-bulles selon les données de la thématique active.
- Zoom monde/Europe et réinitialisation de la vue.
- Afficher un panneau d'insights pour résumer les données du mode actif.
- Modifier la configuration dans le back-office :
  - Créer, éditer ou supprimer des thématiques et leurs données par pays.
  - Maintenir des catalogues partagés (médicaments, priorités) utilisés par les fiches.
  - Sélectionner des pays via filtres continentaux, recherche et sélection multiple.
- Persister automatiquement les modifications dans le navigateur.

## Données et persistance
- **Thématiques** : stockées sous la clé `complianceThemes`, enrichies à partir de `DEFAULT_THEMES` et normalisées avec les mappings ISO2/ISO3. Chaque thématique contient les données par pays et la configuration de légende (type, palette, labels).
- **Indice de corruption** : récupéré depuis `assets/ICP2024.json`, converti en scores numériques puis injecté dans la thématique `corruptionIndex` (persistée ensuite).
- **Catalogues** :
  - Médicaments sous `medicineCatalog`.
  - Priorités sous `priorityCatalog`.
- **Sélecteur de pays** : filtres et sélection stockés sous `countrySelectorState` (clé constante `COUNTRY_SELECTOR_STORAGE_KEY`).

## Structure des fichiers
- `index.html` : structure de la page, conteneurs UI (menu, carte, back-office, modales) et étiquette de version.
- `assets/css/styles.css` : styles globaux, layout responsive, thématisation des composants (menu, carte, back-office, toasts, modales).
- `assets/js/app.js` : logique métier et UI, gestion d'état, interactions carte/back-office, persistance locale.
- `assets/world.svg` : géométrie de la carte monde.
- `assets/ICP2024.json` : données CPI 2024 (score par pays, ISO3).
- `assets/vendor/` : éventuelles librairies externes livrées statiquement.
- `README.md` : guide rapide (fonctionnalités et démarrage).
