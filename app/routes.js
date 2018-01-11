module.exports = function(app, passport) {

// normal routes ===============================================================

    // Exibir home page
    app.get('/', function(req, res) {
        res.render('index.ejs');
    });

    // PROFILE  =========================
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user
        });
    });

    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

// =============================================================================
// AUTENTICAÇÃO (FIRST LOGIN) ==================================================
// =============================================================================

    // locally --------------------------------
        // LOGIN ===============================
        // Exibindo formulário de login
        app.get('/login', function(req, res) {
            res.render('login.ejs', { message: req.flash('loginMessage') });
        });

        // processa o formulário de login
        app.post('/login', passport.authenticate('local-login', {
            // Redirecionamento seguro para sessão de perfil (PROFILE)
            successRedirect : '/profile',
            // Redireciona de volta para a página de inscrição se houver algum erro
            failureRedirect : '/login',
            // Permitir mensagens instantâneas
            failureFlash : true 
        }));

        // INSCREVA-SE =================================
        // Exibir formulário de inscrição
        app.get('/signup', function(req, res) {
            res.render('signup.ejs', { message: req.flash('loginMessage') });
        });

        // processa o formulário de inscrição
        app.post('/signup', passport.authenticate('local-signup', {
            // Redirecionamento seguro para sessão de perfil (PROFILE)
            successRedirect : '/profile', 
            // Redireciona de volta para a página de inscrição se houver algum erro
            failureRedirect : '/signup',
            // Permitir mensagens instantâneas
            failureFlash : true
        }));

    // facebook -------------------------------

        // Enviando autenticação para o Facebook
        app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

        // Atenção no retorno de chamada depois que o Facebook autenticou o usuário
        app.get('/auth/facebook/callback',
            passport.authenticate('facebook', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));

    // twitter --------------------------------

        // Enviando autenticação para o Twitter
        app.get('/auth/twitter', passport.authenticate('twitter', { scope : 'email' }));

        // Atenção no retorno de chamada depois que o Twitter autenticou o usuário
        app.get('/auth/twitter/callback',
            passport.authenticate('twitter', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));


    // google ---------------------------------

        // Enviando autenticação para o Google
        app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

        // Atenção no retorno de chamada depois que o Google autenticou o usuário
        app.get('/auth/google/callback',
            passport.authenticate('google', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));

// =============================================================================
// AUTORIZAR (ENCONTRADO / CONECTANDO EM OUTRA CONTA SOCIAL) =============
// =============================================================================

    // LOCALMENTE --------------------------------
        app.get('/connect/local', function(req, res) {
            res.render('connect-local.ejs', { message: req.flash('loginMessage') });
        });
        app.post('/connect/local', passport.authenticate('local-signup', {
            // Redirecionamento seguro para sessão de perfil (PROFILE)
            successRedirect : '/profile',
            // Redireciona de volta para a página de inscrição se houver algum erro
            failureRedirect : '/connect/local',
            // Permitir mensagens instantâneas
            failureFlash : true
        }));

    // facebook -------------------------------

        // Enviando autenticação para o Facebook
        app.get('/connect/facebook', passport.authorize('facebook', { scope : 'email' }));

        // Atenção no retorno de chamada depois que o Facebook autenticou o usuário
        app.get('/connect/facebook/callback',
            passport.authorize('facebook', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));

    // twitter --------------------------------

        // Enviando autenticação para o Twitter
        app.get('/connect/twitter', passport.authorize('twitter', { scope : 'email' }));

        // Atenção no retorno de chamada depois que o Twitter autenticou o usuário
        app.get('/connect/twitter/callback',
            passport.authorize('twitter', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));


    // google ---------------------------------

        // Enviando autenticação para o Google
        app.get('/connect/google', passport.authorize('google', { scope : ['profile', 'email'] }));

        // Atenção no retorno de chamada depois que o Google autenticou o usuário
        app.get('/connect/google/callback',
            passport.authorize('google', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));

// =============================================================================
// CONTAS DESMARCADAS =============================================================
// =============================================================================
// usado para desvincular contas. para contas sociais, basta remover o token
// para conta local, remova e-mail e senha
// conta de usuário permanecerá ativa no caso de quereR se reconectar novamente no futuro

    // local -----------------------------------
    app.get('/unlink/local', function(req, res) {
        var user            = req.user;
        user.local.email    = undefined;
        user.local.password = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

    // facebook -------------------------------
    app.get('/unlink/facebook', function(req, res) {
        var user            = req.user;
        user.facebook.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

    // twitter --------------------------------
    app.get('/unlink/twitter', function(req, res) {
        var user           = req.user;
        user.twitter.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

    // google ---------------------------------
    app.get('/unlink/google', function(req, res) {
        var user          = req.user;
        user.google.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });


};

// Rota para garantir que o usuário esteja logado
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}
