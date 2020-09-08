<p align="center">
 <img width="100px" src="https://res.cloudinary.com/dfrrmx56o/image/upload/v1599431247/ahscode/logomarca/logomarca-800x800.png" align="center" alt="GitHub Readme Stats" />
 <h2 align="center">Authentification des utilisateurs avec Passport</h2>
 <p align="center">
  Passeport avec Node.js pour les API Google+, Facebook, Twitter et plus encore.</p>
 </p>
  <p align="center">
    <a href="https://github.com/ahsouza/github-readme-stats/actions">
      <img alt="GitHub issues" src="https://img.shields.io/github/issues/ahsouza/node-auth">
    </a>
    <a href="https://codecov.io/gh/ahsouza/github-readme-stats">
      <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/ahsouza/node-auth">
    </a>
    <a href="https://a.paddle.com/v2/click/16413/119403?link=1227">
      <img alt="GitHub Release Date" src="https://img.shields.io/github/release-date/ahsouza/node-auth">
    </a>
    <a href="https://a.paddle.com/v2/click/16413/119403?link=2345">
      <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/ahsouza/node-auth">
    </a>
  </p>
   
  <p align="center">
    <a href="/docs/readme_fr.md">Français </a>
    ·
    <a href="/docs/readme_cn.md">简体中文</a>
    ·
    <a href="/docs/readme_es.md">Español</a>
    ·
    <a href="/docs/readme_de.md">Deutsch</a>
    ·
    <a href="/docs/readme_ja.md">日本語</a>
    ·
    <a href="/docs/readme_pt-BR.md">Português Brasileiro</a>
    ·
    <a href="/docs/readme_it.md">Italiano</a>
    ·
    <a href="/docs/readme_kr.md">한국어</a>
  </p>
</p>

# En utilisant un Passport

Passport est un middleware d'authentification pour Node.js Il est conçu pour servir un seul objectif: authentifier les demandes. Lors de l'écriture de modules, l'encapsulation est une vertu, donc Passport délègue toutes les autres fonctionnalités à l'application. Cette séparation des intérêts maintient le code propre et durable, et rend Passport extrêmement facile à intégrer dans une application.


Dans les applications Web modernes, l'authentification peut prendre de nombreuses formes, telles que l'authentification pour les API Google+, Facebook, Twitter, LinkedIn, etc.


Clonez le référentiel du projet en exécutant la commande ci-dessous si vous utilisez **SSH**:

`git clone git@github.com:ahsouza/node-auth.git`

Si vous utilisez **HTTPS**:

`git clone https://github.com/ahsouza/node-auth.git`


Définition du compte utilisateur `ID_CLIENT` & `KEY_SECRET` sur **config/auth**

`'clientID':        'your-secret-clientID-here', // seu App ID`

`'clientSecret':    'your-client-secret-here', // seu App Secret`


Déterminez l'emplacement de la base de données dans le fichier **config/database.js**


`'url':    'your_database_here' // mongodb://<user>:<pass>@mongo.ahsouza.net:27017/yourdatabase`

Exécutez la commande ci-dessous pour installer les dépendances **NPM**

`npm install`

Exécutez la commande ci-dessous pour démarrer le service

`npm start`

accédez à l'adresse pour voir votre application fonctionner: [http://127.0.0.1:8080/](http://127.0.0.1:8080/)
