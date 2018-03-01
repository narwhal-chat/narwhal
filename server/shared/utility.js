var jwt = require('jsonwebtoken');

function generateToken(user) {
    var u = {
        _id: user._id.toString(),
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        avatar: user.avatar,
        createdAt: user.createdAt
    };
    
    return token = jwt.sign(u, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24 // expires in 24 hours
    });
}

module.exports = {
    generateToken: generateToken
}