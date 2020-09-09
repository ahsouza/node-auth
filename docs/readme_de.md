<p align="center">
 <img width="100px" src="https://res.cloudinary.com/dfrrmx56o/image/upload/v1599431247/ahscode/logomarca/logomarca-800x800.png" align="center" alt="GitHub Readme Stats" />
 <h2 align="center">Benutzer mit Passport authentifizieren</h2>
 <p align="center">
  Reisepass mit Node.js für Google+ APIs, Facebook, Twitter und mehr.</p>
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

# Pass verwenden

Passport ist eine Authentifizierungs-Middleware für Node. Es dient einem einzigen Zweck: der Authentifizierung von Anforderungen. Beim Schreiben von Modulen ist die Kapselung eine Tugend, sodass Passport alle anderen Funktionen an die Anwendung delegiert. Diese Interessentrennung hält den Code sauber und nachhaltig und macht die Integration von Passport in eine Anwendung äußerst einfach.

In modernen Webanwendungen kann die Authentifizierung viele Formen annehmen, z. B. die Authentifizierung für Google+ APIs, Facebook, Twitter, LinkedIn und mehr.


Klonen Sie das Projekt-Repository, indem Sie den folgenden Befehl ausführen, wenn Sie **SSH** verwenden:


`git clone git@github.com:ahsouza/node-auth.git`


Bei Verwendung von **HTTPS**:

`git clone https://github.com/ahsouza/node-auth.git`

Setzen Sie `ID_CLIENT` & `KEY_SECRET` des Benutzerkontos auf **config/auth**

`'clientID':        'your-secret-clientID-here', // seu App ID`

`'clientSecret':    'your-client-secret-here', // seu App Secret`

Bestimmen Sie den Speicherort der Datenbank in der Datei **config/database.js**

`'url':    'your_database_here' // mongodb://<user>:<pass>@mongo.ahsouza.net:27017/yourdatabase`

Führen Sie den folgenden Befehl aus, um die **NPM** -Abhängigkeiten zu installieren

`npm install`

Führen Sie den folgenden Befehl aus, um den Dienst zu starten

`npm start`

Greifen Sie auf die Adresse zu, damit Ihre Anwendung funktioniert: [http://127.0.0.1:8080/](http://127.0.0.1:8080/)
