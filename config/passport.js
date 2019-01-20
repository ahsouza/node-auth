var LocalStrategy    = require('passport-local').Strategy,
 FacebookStrategy = require('passport-facebook').Strategy,
 TwitterStrategy  = require('passport-twitter').Strategy,
 GoogleStrategy   = require('passport-google-oauth').OAuth2Strategy,

 User  = require('../app/models/user'),
 configAuth = require('./auth')

module.exports = (passport) => {
// O passaporte precisa ser ativado para serializar 
// e desmarcar os usuários fora da sessão

// Serializando o usuário para a iniciar a sessão
passport.serializeUser((user, done) => {
  done(null, user.id)
})

// Desmarcando o usuário
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) =>{
    done(err, user)
  })
})
// =========================================================================
// LOCAL LOGIN =============================================================
// =========================================================================
passport.use('local-login', new LocalStrategy({
  // Por padrão, a estratégia local usa nome de usuário e senha, nós desabilitaremos 
  // ao uso com o email
  usernameField : 'email',
  passwordField : 'password',
  // Executando um req para verificar se o usuário está logado ou não
  passReqToCallback : true
},
(req, email, password, done) => {
  // asynchronous
  process.nextTick(() =>{
    User.findOne({ 'local.email' :  email }, (err, user)=> {
    // Se houver erro, retorna o erro.
    if (err)
      return done(err)
    // Se nenhum usuário foi encontrado, retorna menssagem
    if (!user)
      return done(null, false, req.flash('loginMessage', 'Usuário não encontrado.'))
    if (!user.validPassword(password))
      return done(null, false, req.flash('loginMessage', 'Oops! Senha errada.'))
    // Se tudo ocorreu bem, retorna usuário
    else
      return done(null, user)
    })
  })
})
)

// =========================================================================
// LOCAL DE INSCRIÇÃO ======================================================
// =========================================================================
passport.use('local-signup', new LocalStrategy({
    // Por padrão, a estratégia local usa nome de usuário e senha, nós anularemos com o email
    usernameField : 'email',
    passwordField : 'password',
    // Executando um req para verificar se o usuário está logado ou não
    passReqToCallback : true
},
(req, email, password, done) => {

  // asynchronous
  process.nextTick(() => {
    // Se estamos conectando uma conta, precisaremos de um endereço de e-mail está sendo utilizado
    User.findOne({'local.email': email}, (err, existingUser) => {
    // Se houver algum erro, retorna o erro.
    if (err)
      return done(err)
    // Verificando se já existe um usuário com este email
    if (existingUser) 
      return done(null, false, req.flash('signupMessage', 'Contém registros desse email.'))

    // Se logado, estamos conectados a uma nova conta local.
    if(req.user) {
      var user            = req.user
      user.local.email    = email
      user.local.password = user.generateHash(password)
      user.save((err) => {
        if (err)
          throw err
          return done(null, user)
      })
    } 
    // Se não estiver logado, então estamos criando um novo usuário
    else {
    // Criando um usuário
      var newUser            = new User()
      newUser.local.email    = email
      newUser.local.password = newUser.generateHash(password)
      newUser.save((err) => {
        if (err)
          throw err
          return done(null, newUser)
      })
    }
    })
  })
})
)
// =========================================================================
// FACEBOOK ================================================================
// =========================================================================
passport.use(new FacebookStrategy({

    clientID        : configAuth.facebookAuth.clientID,
    clientSecret    : configAuth.facebookAuth.clientSecret,
    callbackURL     : configAuth.facebookAuth.callbackURL,
    // Executando um req para verificar se o usuário está logado ou não
    passReqToCallback : true 
},
(req, token, refreshToken, profile, done) =>{
  process.nextTick(() => {
  // Verificando se o usuário está logado
  if (!req.user) {
    User.findOne({ 'facebook.id' : profile.id }, (err, user) => {
      if (err)
        return done(err)

      if (user) {
        // Se houver um Id de usuário mas nenhum Token, o usuário foi vinculado em um ponto e depois removido
        if (!user.facebook.token) {
          user.facebook.token = token
          user.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName
          user.facebook.email = profile.emails[0].value
          user.save(function(err) {
          if (err)
            throw err;
            return done(null, user)
          });
      }
      // Usuário não encontrado
        return done(null, user)
      } else {
        // Se este não é um usuário, então cria
        var newUser            = new User()
        newUser.facebook.id    = profile.id
        newUser.facebook.token = token
        newUser.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName
        newUser.facebook.email = profile.emails[0].value

        newUser.save((err) => {
          if (err)
            throw err
            return done(null, newUser)
          })
      }
    })

    } else {
    // O usuário já existe e está logado, vinculação de contas
    // Encerrar sessão do usuário logado
    var user   = req.user
        user.facebook.id    = profile.id
        user.facebook.token = token
        user.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName
        user.facebook.email = profile.emails[0].value

        user.save(function(err) {
          if (err)
            throw err
            return done(null, user)
        })
    }
  })
})
)
// =========================================================================
// TWITTER =================================================================
// =========================================================================
passport.use(new TwitterStrategy({
    consumerKey     : configAuth.twitterAuth.consumerKey,
    consumerSecret  : configAuth.twitterAuth.consumerSecret,
    callbackURL     : configAuth.twitterAuth.callbackURL,
    // Executando um req para verificar se o usuário está logado ou não
    passReqToCallback : true
},
(req, token, tokenSecret, profile, done) => {
  // asynchronous
  process.nextTick(() => {
  // Verificando se o usuário está logado
  if (!req.user) {

  User.findOne({ 'twitter.id' : profile.id }, (err, user) => {
    if (err)
      return done(err)

    if (user) {
      // Se houver um Id de usuário mas nenhum Token, o usuário foi vinculado em um ponto e depois removido
      if (!user.twitter.token) {
        user.twitter.token       = token;
        user.twitter.username    = profile.username
        user.twitter.displayName = profile.displayName

        user.save((err) => {
          if (err)
            throw err;
            return done(null, user)
        })
      }
        // Usuário não encontrado
        return done(null, user)
    } else {
      // Se não é um usuário, então criar um novo.
      var newUser                 = new User()

      newUser.twitter.id          = profile.id
      newUser.twitter.token       = token
      newUser.twitter.username    = profile.username
      newUser.twitter.displayName = profile.displayName

      newUser.save((err) => {
        if (err)
          throw err
        return done(null, newUser)
      })
    }
  })

  } else {
    // O usuário já existe e está logado, vinculação de contas
    // Encerrar sessão do usuário logado
    var user                 = req.user

    user.twitter.id          = profile.id
    user.twitter.token       = token
    user.twitter.username    = profile.username
    user.twitter.displayName = profile.displayName

    user.save((err) => {
      if (err)
        throw err
      return done(null, user)
    })
  }
  })
}))
// =========================================================================
// GOOGLE ==================================================================
// =========================================================================
passport.use(new GoogleStrategy({

    clientID        : configAuth.googleAuth.clientID,
    clientSecret    : configAuth.googleAuth.clientSecret,
    callbackURL     : configAuth.googleAuth.callbackURL,
    // Executando um req para verificar se o usuário está logado ou não
    passReqToCallback : true

},
(req, token, refreshToken, profile, done) => {
  // asynchronous
  process.nextTick(() =>{
  // Verificando se o usuário está logado
  if (!req.user) {
    User.findOne({ 'google.id' : profile.id }, (err, user) => {
    if (err)
        return done(err)
    if (user) {
      // Se houver um Id de usuário mas nenhum Token, o usuário foi vinculado em um ponto e depois removido
      if (!user.google.token) {
        user.google.token = token
        user.google.name  = profile.displayName
        // Colocar primeiro
        user.google.email = profile.emails[0].value

        user.save((err) => {
          if (err)
            throw err
            return done(null, user)
        })
      }
        // Usuário não encontrado
        return done(null, user)
    } else {
      var newUser          = new User()

      newUser.google.id    = profile.id
      newUser.google.token = token
      newUser.google.name  = profile.displayName
      // Colocar primeiro
      newUser.google.email = profile.emails[0].value

      newUser.save((err) => {
        if (err)
          throw err
        return done(null, newUser)
      })
    }
  })

  } else {
    // O usuário já existe e está logado, vinculação de contas
    // Encerrar sessão do usuário logado
    var user               = req.user
    user.google.id    = profile.id
    user.google.token = token
    user.google.name  = profile.displayName
    // Colocar primeiro email
    user.google.email = profile.emails[0].value
    user.save((err) => {
      if (err)
          throw err
      return done(null, user)
    })
  }
  })

})
)

}