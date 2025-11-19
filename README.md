# Planisphère compliance

Application web statique 100% locale permettant d'afficher des informations compliance par pays.

## Fonctionnalités principales
- Navigation par menu burger pour activer une thématique (fiches pays, indice de corruption, CA, type de filiale, produits, zones Area Manager).
- Planisphère SVG interactif avec zones colorées ou info-bulles par pays.
- Légende dynamique adaptée au mode (numérique, catégoriel, info-bulles).
- Panneau d'insights qui résume les données de la thématique active.
- Back-office embarqué : modification des données, ajout de produits, types de filiales, etc., avec persistance locale (localStorage).
- Interface responsive adaptée aux écrans plus petits.

## Démarrage
Ouvrez simplement `index.html` dans votre navigateur ; aucune dépendance externe n'est requise.

## Structure
- `index.html` : structure de l'application.
- `assets/css/styles.css` : thème et mise en page.
- `assets/js/app.js` : carte interactive, logique des thématiques, back-office.
