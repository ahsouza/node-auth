<p align="center">
 <img width="100px" src="https://res.cloudinary.com/dfrrmx56o/image/upload/v1599431247/ahscode/logomarca/logomarca-800x800.png" align="center" alt="GitHub Readme Stats" />
 <h2 align="center">Autenticando usuários com Passport</h2>
 <p align="center">  
  Passaport com Node.js para APIs do Google+, Facebook, Twitter e mais.</p>
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

Passport é um middleware de autenticação para Node. Ele é projetado para servir a um propósito único: autenticar solicitações. Ao escrever módulos, o encapsulamento é uma virtude, portanto, o Passport delega todas as outras funcionalidades ao aplicativo. Essa separação de interesses mantém o código limpo e sustentável, e torna o Passport extremamente fácil de integrar em um aplicativo.


Em aplicativos da web modernos, a autenticação pode assumir várias formas, como autenticação para APIs do Google+, Facebook, Twitter, LinkedIn e mais.


Clone o repositório do projeto executando o comando abaixo se for utilizar o **SSH**:

`git clone git@github.com:ahsouza/node-auth.git`

Se for usar **HTTPS**:

`git clone https://github.com/ahsouza/node-auth.git`


Configurando o `ID_CLIENT` & `KEY_SECRET` da conta do usuário em **config/auth**

`'clientID':        'your-secret-clientID-here', // seu App ID`

`'clientSecret':    'your-client-secret-here', // seu App Secret`

Determine a localização do Banco De Dados no arquivo **config/database.js**

`'url':    'your_database_here' // mongodb://<user>:<pass>@mongo.ahsouza.net:27017/yourdatabase`

Execute o comando abaixo para instalar as dependências **NPM**

`npm install`


Execute o comando abaixo para iniciar o serviço
`npm start`

acesse o endereço para ver sua aplicação funcionando: [http://127.0.0.1:8080/](http://127.0.0.1:8080/)
