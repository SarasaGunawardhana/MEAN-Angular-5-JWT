var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var VerifyToken = require(__root + 'auth/VerifyToken');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Import contact controller
var userController = require('../Controllers/UserController');

//GET ALL USERS
router.get('/', VerifyToken, (req, res) => {
    userController.index(req, res);
});
// CREATES A NEW USER
// router.post('/', (req, res) => {
//     userController.new(req, res);
// });

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', (req, res) => {
    userController.view(req, res);
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id', (req, res) => {
    userController.update(req, res);
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', /* VerifyToken, */  (req, res) => {
    userController.delete(req, res);
});

// router.get('/', userController.index(req, res));

// CREATES A NEW USER
// router.post('/users', userController.new(req, res));

// GETS A SINGLE USER FROM THE DATABASE
// router.get('/users/:id', userController.view(req, res));

// DELETES A USER FROM THE DATABASE
// router.delete('/users/:id', userController.update(req, res));

// UPDATES A SINGLE USER IN THE DATABASE
// router.put('/users/:id', userController.delete(req, res));

module.exports = router;

// var express = require('express');
// var router = express.Router();
// var bodyParser = require('body-parser');

// router.use(bodyParser.urlencoded({ extended: true }));
// router.use(bodyParser.json());

// // Import contact controller
// var userController = require('../Controllers/UserController');

// // CREATES A NEW USER
// router.post('/users', function (req, res) {
//     userController.new(req, res);
// });

// router.get('/', function (req, res) {
//     userController.index(req, res);
// });

// // GETS A SINGLE USER FROM THE DATABASE
// router.get('/users/:id', function (req, res) {
//     userController.view(req, res);
// });

// // DELETES A USER FROM THE DATABASE
// router.delete('/users/:id', function (req, res) {
//     userController.update(req, res);
// });

// // UPDATES A SINGLE USER IN THE DATABASE
// router.put('/users/:id', function (req, res) {
//     userController.delete(req, res);
// });


// module.exports = router;