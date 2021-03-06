const express = require('express'),
 app = express(),
 port = process.env.PORT || 8080,
 mongoose = require('mongoose'),
 passport = require('passport'),
 flash = require('connect-flash'),
 configDB = require('./config/database.js')
// Conecta com o banco de dados
mongoose.connect(configDB.url)
// chamando arquivos de configuração dos passport de APIs
require('./config/passport')(passport)

app.configure(()=> {
  // Levantando nossa aplicação no servidor express

  // Registrar cada solicitação para o console. (Salvar LOGGERS)
  app.use(express.logger('dev'))
  // lendo Cookies que é necessário para autenticação.
  app.use(express.cookieParser())
  // Obter dados de formulários HTML
  app.use(express.bodyParser())
  // Determinando a configuração EJS
  app.set('view engine', 'ejs')
  // Requerimentos para o PASSPORT
  // Sessão secreta de login
  app.use(express.session({ secret: 'frasesecretaaqui' }))
  // Inicialização da sessão
  app.use(passport.initialize())
  // Persistindo sessão de login
  app.use(passport.session())
  app.use(flash()) // Usando connect-flash para menssagens armazenadas na sessão

})

// Rotas
// carrega rotas e entra como argumento nosso aplicativo e passaporte totalmente configurado
require('./app/routes.js')(app, passport)

// Disparando aplicação para levantamento do servidor.
app.listen(port)
console.log('Aplicação sendo executada na porta: ' + port)