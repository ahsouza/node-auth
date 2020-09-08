<p align="center">
 <img width="100px" src="https://res.cloudinary.com/dfrrmx56o/image/upload/v1599431247/ahscode/logomarca/logomarca-800x800.png" align="center" alt="GitHub Readme Stats" />
 <h2 align="center">使用Passport驗證用戶</h2>
 <p align="center">  
   適用於Google+ API，Facebook，Twitter等的Node.js護照。</p>
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

# 使用護照

Passport是Node的身份驗證中間件。它旨在用於一個目的：對請求進行身份驗證。在編寫模塊時，封裝是一種優點，因此Passport將所有其他功能委託給應用程序。利益的分離使代碼保持乾淨和可持續，並使Passport非常易於集成到應用程序中。

在現代網絡應用程序中，身份驗證可以採用多種形式，例如Google+ API，Facebook，Twitter，LinkedIn等的身份驗證。


如果使用**SSH**，請通過執行以下命令來克隆項目存儲庫：

`git clone git@github.com:ahsouza/node-auth.git`

如果使用**HTTPS**：

`git clone https://github.com/ahsouza/node-auth.git`

將用戶帳戶`ID_CLIENT`和`KEY_SECRET`設置為**config/auth**

`'clientID':        'your-secret-clientID-here', // seu App ID`

`'clientSecret':    'your-client-secret-here', // seu App Secret`

 確定數據庫在文件**config/database.js**中的位置

`'url':    'your_database_here' // mongodb://<user>:<pass>@mongo.ahsouza.net:27017/yourdatabase`

運行以下命令以安裝依賴項 **NPM**

`npm install`

運行以下命令以啟動服務

`npm start`

訪問該地址以查看您的應用程序正常工作 [http://127.0.0.1:8080/](http://127.0.0.1:8080/)
