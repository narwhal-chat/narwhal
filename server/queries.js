const promise = require('bluebird');

const options = {
    // Initialization Options
    promiseLib: promise
};

const pgp = require('pg-promise')(options);
const connectionString = 'postgres://localhost:5432/narwhal';
const db = pgp(connectionString);

// add query functions
function createUser(req, res, next) {
    db.none('insert into users(id, username, password, first_name, last_name, email_address, avatar, create_date)' +
        'values(${id}, ${username}, ${password}, ${first_name}, ${last_name}, ${email_address}, ${avatar}, ${create_date})',
        {
            id: 1,
            username: 'testUsername',
            password: 'testpassword1',
            first_name: 'samfirst',
            last_name: 'leelast',
            email_address: 'email@gmail.com',
            avatar: 'avatar',
            create_date: '11/12/2017'
        })
        .then(function () {
            console.log('successfully input user')
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one puppy'
                });
        })
        .catch(function (err) {
            console.log(err);
            return next(err)
        });
}

module.exports = {
    createUser: createUser
};