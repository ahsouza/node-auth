<p align="center">
 <img width="100px" src="https://res.cloudinary.com/dfrrmx56o/image/upload/v1599431247/ahscode/logomarca/logomarca-800x800.png" align="center" alt="GitHub Readme Stats" />
 <h2 align="center">Autenticar usuarios con Passport</h2>
 <p align="center">  
  Pasaporte con Node.js para API de Google+, Facebook, Twitter y más.</p>
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

# Usando Passaport

Passport es un middleware de autenticación para Node. Está diseñado para cumplir un único propósito: autenticar solicitudes. Al escribir módulos, la encapsulación es una virtud, por lo que Passport delega todas las demás funciones a la aplicación. Esta separación de intereses mantiene el código limpio y sostenible, y hace que Passport sea extremadamente fácil de integrar en una aplicación.

En las aplicaciones web modernas, la autenticación puede tomar muchas formas, como la autenticación para las API de Google+, Facebook, Twitter, LinkedIn y más.


Clone el repositorio del proyecto ejecutando el siguiente comando si usa el **SSH**:

`git clone git@github.com:ahsouza/node-auth.git`

Si vas a usar **HTTPS**:

`git clone https://github.com/ahsouza/node-auth.git`


Estableciendo el `ID_CLIENT` y` KEY_SECRET` de la cuenta de usuario en **config/auth**

`'clientID':        'your-secret-clientID-here', // seu App ID`

`'clientSecret':    'your-client-secret-here', // seu App Secret`

Determine la ubicación de la base de datos en el archivo **config/database.js**

`'url':    'your_database_here' // mongodb://<user>:<pass>@mongo.ahsouza.net:27017/yourdatabase`


Ejecute el siguiente comando para instalar las dependencias **NPM**

`npm install`


Ejecute el siguiente comando para iniciar el servicio

`npm start`

accede a la dirección para ver tu aplicación funcionando: [http://127.0.0.1:8080/](http://127.0.0.1:8080/)
