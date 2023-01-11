# Base de code du projet de site de location saisonnière
Il est demandé un site vitrine de présentation de bien immobilier pour location saisonnière:
 - Une page d'accueil présentant une liste de 20 logements (actuellement un seul). Chaque logement est cliquable et peut être vu de façon détaillée
 - Une page A propos décrivant l'environnement des (du) bien(s)

## Installation
 - git clone https://github.com/MenAllen/loceane.git
 - npm install pour installer l'application
 - npm start pour lancer l'application qui s'affiche sous localhost:3000

## Page netlify
Une page netlify est disponible sous : https://stellular-marshmallow-ca39e0.netlify.app/

## Inputs
 - Maquette FIGMA Desktop
 - Tableau JSON pour un appartement avec description photos, points forts et rating

## Code
 - Main App: src\index.js qui inclue le routage vers les différentes pages
 - Pages: src\pages\Accueil.jsx, Apropos.jsx et Logements.jsx
 - Composants: src\components\Banner, Card, Carrousel, Dropdown, Error, Footer, Header, Pitch (jsx et css)

## Outils utilisés
 - React Create App
 - HTML, CSS, Javascript
 - ESlint Linter
 - Prettier Code formateur
 - Styled-Components
 - P42 code analyseur et amelioreur
