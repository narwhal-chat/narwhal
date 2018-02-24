const models = require('../../models');

userController = {
    newUser(req, res) {
        models.User.create({
            username: req.body.username,
            password: req.body.password
        })
        .then(data => console.log('success', data))
        .catch(error => console.error('error', error))
    }
}

module.exports = userController