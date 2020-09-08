<p align="center">
 <img width="100px" src="https://res.cloudinary.com/dfrrmx56o/image/upload/v1599431247/ahscode/logomarca/logomarca-800x800.png" align="center" alt="GitHub Readme Stats" />
 <h2 align="center">Passportを使用したユーザーの認証</h2>
 <p align="center">
  Google+ API、Facebook、TwitterなどのNode.jsを使用したパスポート。</p>
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

# パスポートの使用

PassportはNodeの認証ミドルウェアです。リクエストの認証という単一の目的を果たすように設計されています。モジュールを書くとき、カプセル化は美徳なので、Passportは他のすべての機能をアプリケーションに委任します。このような関心の分離により、コードはクリーンで持続可能なものになり、Passportはアプリケーションに非常に簡単に統合できます。


最新のWebアプリケーションでは、認証は、Google + API、Facebook、Twitter、LinkedInなどの認証など、さまざまな形をとることができます。


**SSH**を使用している場合は、以下のコマンドを実行してプロジェクトリポジトリのクローンを作成します。

`git clone git@github.com:ahsouza/node-auth.git`

 **HTTPS**を使用

`git clone https://github.com/ahsouza/node-auth.git`


ユーザーアカウントの `ID_CLIENT` ＆ `KEY_SECRET`を**config/auth**に設定します


`'clientID':        'your-secret-clientID-here', // seu App ID`

`'clientSecret':    'your-client-secret-here', // seu App Secret`

**config/database.js**ファイルでデータベースの場所を決定します


`'url':    'your_database_here' // mongodb://<user>:<pass>@mongo.ahsouza.net:27017/yourdatabase`


以下のコマンドを実行して**NPM**依存関係をインストールします

`npm install`

以下のコマンドを実行してサービスを開始します
`npm start`

アドレスにアクセスして、アプリケーションが機能していることを確認します: [http://127.0.0.1:8080/](http://127.0.0.1:8080/)
