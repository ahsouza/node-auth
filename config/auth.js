
// Exportando nossa configuração diretamente para nossa aplicação usando module.exports
module.exports = {
  
  'facebookAuth' : {
    'clientID'    : 'your-secret-clientID-here', // seu App ID
    'clientSecret'  : 'your-client-secret-here', // seu App Secret
    'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
  },
  'twitterAuth' : {
    'consumerKey'     : 'your-consumer-key-here',
    'consumerSecret'  : 'your-client-secret-here',
    'callbackURL'     : 'http://localhost:8080/auth/twitter/callback'
  },
  'googleAuth' : {
    'clientID'    : 'a',
    'clientSecret'  : 'a',
    'callbackURL'   : 'http://localhost:8080/oauth2callback'
  }

};
