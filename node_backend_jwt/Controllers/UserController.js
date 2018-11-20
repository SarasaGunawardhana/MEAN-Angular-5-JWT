// Import user model
User = require('../Models/User');

// Handle index actions
exports.index = function(req, res) {
    User.find({},/*{ password: 0 },*/ function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
};

// Handle create user actions
// exports.new = function(req, res) {
//     // var user = new User();
//     // user.name = req.body.name ? req.body.name : user.name;
//     // user.gender = req.body.gender;
//     // user.email = req.body.email;
//     // user.phone = req.body.phone;
//     // user.password = req.body.password;

//     // // save the user and check for errors
//     // user.save(function (err) {
//     //     if (err)
//     //         res.json(err);

//     //     res.json({
//     //         message: 'New user created!',
//     //         data: user
//     //     });
//     // });
//     User.create({
//         name : req.body.name,
//         email : req.body.email,
//         password : req.body.password
//     }, 
//     function (err, user) {
//         if (err) return res.status(500).send("There was a problem adding the information to the database.");
//         res.status(200).send(user);
//     });
// };

// Handle view user info
exports.view = function(req, res) {
    // User.findById(req.params.contact_id, function (err, user) {
    //     if (err)
    //         res.send(err);
    //     res.json({
    //         message: 'User details loading..',
    //         data: user
    //     });
    // });
    User.findById(req.params.id,{ password: 0 }, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
};

// Handle update user info
exports.update = function(req, res) {

    // User.findById(req.params.contact_id, function (err, user) {
    //     if (err)
    //         res.send(err);

    //     user.name = req.body.name ? req.body.name : user.name;
    //     user.gender = req.body.gender;
    //     user.email = req.body.email;
    //     user.phone = req.body.phone;
    //     user.password = req.body.password;

    //     // save the user and check for errors
    //     user.save(function (err) {
    //         if (err)
    //             res.json(err);
    //         res.json({
    //             message: 'User Info updated',
    //             data: user
    //         });
    //     });
    // });
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
};

// Handle delete user
exports.delete = function(req, res) {
    // User.remove({
    //     _id: req.params.contact_id
    // }, function (err, user) {
    //     if (err)
    //         res.send(err);

    // res.json({
    //         status: "success",
    //         message: 'User deleted'
    //     });
    // });
    User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User: "+ user.name +" was deleted.");
    });
};