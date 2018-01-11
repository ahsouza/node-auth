const mongoose = require('mongoose');
const bcrypt   = require('bcrypt-nodejs');

// Definindo Schema de nosso modelo de usuário
const userSchema = mongoose.Schema({

    local            : {
        email        : String,
        password     : String,
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }

});

// Gerando hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// Verificando se a senha é válida
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// Criando o modelo para usuários e expondo em todo nosso app
module.exports = mongoose.model('User', userSchema);