// bluecryptsController.js
// Import bluecrypts model
Bluecrypts = require('./bluecryptsModel');
// Handle index actions
exports.index = function (req, res) {
    Bluecrypts.get(function (err, bluecrypts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Bluecrypts retrieved successfully",
            data: bluecrypts
        });
    });
};
// Handle create bluecrypts actions
exports.new = function (req, res) {
    var bluecrypts = new Bluecrypts();
    bluecrypts.name = req.body.name ? req.body.name : bluecrypts.name;
    bluecrypts.symbol = req.body.symbol;
    bluecrypts.price = req.body.price;
// save the bluecrypts and check for errors
    bluecrypts.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New bluecrypts created!',
            data: bluecrypts
        });
    });
};
// Handle view bluecrypts info
exports.view = function (req, res) {
    Bluecrypts.findById(req.params.bluecrypts_id, function (err, bluecrypts) {
        if (err)
            res.send(err);
        res.json({
            message: 'bluecrypts details loading..',
            data: bluecrypts
        });
    });
};
// Handle update bluecrypts info
exports.update = function (req, res) {
    Bluecrypts.findById(req.params.bluecrypts_id, function (err, bluecrypts) {
        if (err)
            res.send(err);
        bluecrypts.name = req.body.name ? req.body.name : bluecrypts.name;
        bluecrypts.symbol = req.body.symbol;
        bluecrypts.price = req.body.price;
// save the bluecrypts and check for errors
        bluecrypts.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'bluecrypts Info updated',
                data: bluecrypts
            });
        });
    });
};
// Handle delete bluecrypts
exports.delete = function (req, res) {
    Bluecrypts.remove({
        _id: req.params.bluecrypts_id
    }, function (err, bluecrypts) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'bluecrypts deleted'
        });
    });
}; 