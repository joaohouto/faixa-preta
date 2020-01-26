const router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'Online',
        message: 'Seja bem vindo a API do Faixa Preta!'
    });
});

const MoveController = require('./src/controllers/MoveController');

router.route('/moves')
    .get(MoveController.findAll)
    .post(MoveController.create);

router.route('/moves/:move_id')
    .get(MoveController.findOne)
    .put(MoveController.update)
    .delete(MoveController.delete);


const ActivityController = require('./src/controllers/ActivityController');

router.route('/activities')
    .get(ActivityController.findAll)
    .post(ActivityController.create);

router.route('/activities/:activity_id')
    .get(ActivityController.findOne)
    .put(ActivityController.update)
    .delete(ActivityController.delete);

router.route('/activities/tag/:tag_name').get(ActivityController.findByTag);

module.exports = router;