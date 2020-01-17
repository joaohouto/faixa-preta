const router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API Online',
        message: 'Seja bem vindo ao Faixa Preta!'
    });
});

const MoveController = require('./src/controllers/MoveController');

router.route('/moves')
    .get(MoveController.findAll);

router.route('/moves/:move_id')
    .get(MoveController.findOne);


const ActivityController = require('./src/controllers/ActivityController');

router.route('/activities')
    .get(ActivityController.findAll);

router.route('/activities/:activity_id')
    .get(ActivityController.findOne);

module.exports = router;