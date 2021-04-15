// bluecryptsModel.js
var mongoose = require('mongoose');

// Setup schema
var bluecryptsSchema = mongoose.Schema({
    name: {type: String, required: true},
    symbol: {type: String, required: true},
    price: {type: String, required: true},
    create_date: {type: Date, default: Date.now
    }
});

// Export Bluecrypts model
var Bluecrypts = module.exports = mongoose.model('bluecrypts', bluecryptsSchema);

module.exports.get = function (callback, limit) {
    Bluecrypts.find(callback).limit(limit);
}