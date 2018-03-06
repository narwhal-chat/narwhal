const promise = require('bluebird');
const utils = require('./shared/utility')
const options = {
    // Initialization Options
    promiseLib: promise
};
const bcrypt = require('bcrypt');

const pgp = require('pg-promise')(options);
const connectionString = 'postgres://localhost:5432/narwhal';
const db = pgp(connectionString);

// add query functions
function createUser(req, res, next) {
    var user = { 
                    username: req.username,
                    password: req.password,
                    email_address: req.email_address,
                    avatar: 'avatar',
                    create_date: req.create_date
                }
    
    db.none('insert into users(username, password, email_address, avatar, create_date)' +
        'values(${username}, ${password}, ${email_address}, ${avatar}, ${create_date})', user)
        .then(function () {
            var token = utils.generateToken(user)
            console.log('successfully entered user', token)
            res.status(200)
                .json({
                    token: token,
                    userId: user.username
                });
        })
        .catch(function (err) {
            console.log(err);
            return next(err)
        });
}

function loginUser(req, res, next) {
    db.one(`SELECT * FROM users WHERE username = '${req.username}'`,
    {
        username: req.username
    })
    .then(user => {
        console.log('this is the user when you loginUser', user)
        bcrypt.compare(req.password, user.password, (err, valid) => {
            if (!valid) {
                return res.status(404).json({
                    error: true,
                    message: 'Username or Password is Wrong'
                });
            }

            let token = utils.generateToken(user)

            res.json({
                user: user,
                token: token
            })
        })
    })
    .catch(error => {
        console.error(error)
    })
}

module.exports = {
    createUser: createUser,
    loginUser: loginUser
};