// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'Moat API is working',
        message: 'Make it happen',
    });
});
// Import bluecrypts controller
var bluecryptsController = require('./bluecryptsController');
// bluecrypts routes
router.route('/bluecrypts')
    .get(bluecryptsController.index)
    .post(bluecryptsController.new);
    
router.route('/bluecrypts/:bluecrypts_id')
    .get(bluecryptsController.view)
    .patch(bluecryptsController.update)
    .put(bluecryptsController.update)
    .delete(bluecryptsController.delete);
// Export API routes
module.exports = router; 