var bcrypt = require('bcrypt-nodejs');

module.exports = function(sequelize, Datatypes) {
    var User = sequelize.define('User', {
        username: {type: DataTypes.STRING, unique: true, validate: {notNull: true, notEmpty: true}},
        password: {type: DataTypes.STRING, validate: {notNull: true, notEmpty: true}}
    },
    {
        classMethods: {
            validPassword: function(password, passwd, done, user) {
                bcrypt.compare(password, passwd, function(err, isMatch) {
                    if(err) {
                        console.log(err)
                    }
                    if(isMatch) {
                        return done(null, user)
                    } else {
                        return done(null, false);
                    }
                })
            }
        }
    },
    {
        dialect: 'mysql'
    }
);
