<p align="center">
 <img width="100px" src="https://res.cloudinary.com/dfrrmx56o/image/upload/v1599431247/ahscode/logomarca/logomarca-800x800.png" align="center" alt="GitHub Readme Stats" />
 <h2 align="center">Passport로 사용자 인증</h2>
 <p align="center">  
  Google+ API, Facebook, Twitter 등을위한 Node.js가 포함 된 Passport.</p>
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

# 여권 사용

Passport는 Node.js 용 인증 미들웨어입니다. 요청을 인증하는 단일 목적을 제공하도록 설계되었습니다. 모듈을 작성할 때 캡슐화는 미덕이므로 Passport는 다른 모든 기능을 응용 프로그램에 위임합니다. 이러한 이해 관계의 분리는 코드를 깨끗하고 지속 가능하게 유지하고 Passport를 응용 프로그램에 매우 쉽게 통합 할 수 있도록합니다.


최신 웹 애플리케이션에서 인증은 Google+ API, Facebook, Twitter, LinkedIn 등에 대한 인증과 같은 다양한 형식을 취할 수 있습니다.


**SSH**를 사용하는 경우 아래 명령을 실행하여 프로젝트 저장소를 복제합니다.

`git clone git@github.com:ahsouza/node-auth.git`

**HTTPS**를 사용하는 경우 :

`git clone https://github.com/ahsouza/node-auth.git`


사용자 계정의`ID_CLIENT` & `KEY_SECRET`을 **config/auth**로 설정

`'clientID':        'your-secret-clientID-here', // seu App ID`

`'clientSecret':    'your-client-secret-here', // seu App Secret`

**config/database.js** 파일에서 데이터베이스 위치 확인

`'url':    'your_database_here' // mongodb://<user>:<pass>@mongo.ahsouza.net:27017/yourdatabase`

**NPM** 종속성을 설치하려면 아래 명령을 실행하십시오.

`npm install`

아래 명령을 실행하여 서비스를 시작하십시오.

`npm start`

응용 프로그램이 작동하는지 확인하려면 주소에 액세스하십시오.: [http://127.0.0.1:8080/](http://127.0.0.1:8080/)
