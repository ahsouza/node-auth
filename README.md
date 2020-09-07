
<p align="center">
 <img width="100px" src="https://res.cloudinary.com/dfrrmx56o/image/upload/v1599431247/ahscode/logomarca/logomarca-800x800.png" align="center" alt="GitHub Readme Stats" />
 <h2 align="center">Authenticating users with Passport</h2>
 <p align="center">
    Authentication using passport with Node.js to Google+ APIs, Facebook, Twitter.</p>
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

# Authenticating users with Passport

Passport is authentication middleware for Node. It is designed to serve a singular purpose: authenticate requests. When writing modules, encapsulation is a virtue, so Passport delegates all other functionality to the application. This separation of concerns keeps code clean and maintainable, and makes Passport extremely easy to integrate into an application.

In modern web applications, authentication can take a variety of forms. 

Authentication to Google+ APIs, Facebook, Twitter and more.



Clone the project repository by running the command below if you use SSH

`git clone git@github.com:ahsouza/node-auth.git`

If you use https, use this instead

`git clone https://github.com/ahsouza/node-auth.git`


Configures the ID_CLIENT and KEY_SECRET of the user account in config/auth

`  'clientID'    : 'your-secret-clientID-here', // seu App ID`

  `'clientSecret'  : 'your-client-secret-here', // seu App Secret`

Determines the location of the database in the config / database.js file

`'url' : 'your_database_here' // mongodb://<user>:<pass>@mongo.onmodulus.net:27017/yourdatabase`

Run the command below to install NPM dependencies

`npm install`

And

`npm start`

to start the app and visit [http://127.0.0.1:8080/](http://127.0.0.1:8080/) to see the app in action.
