const router = require('express').Router();

const MoveController = require('./src/controllers/MoveController');
const ActivityController = require('./src/controllers/ActivityController');

//Root
router.get('/', function (req, res) {
    res.json({
        status: 'Online',
        message: 'Seja bem vindo a API do Faixa Preta!'
    });
});

//Move
router.route('/moves')
    .get(MoveController.findAll)
    .post(MoveController.create);

router.route('/moves/:move_id')
    .get(MoveController.findOne)
    .put(MoveController.update)
    .delete(MoveController.delete);


//Activity
router.route('/activities')
    .get(ActivityController.findAll)
    .post(ActivityController.create);

router.route('/activities/:activity_id')
    .get(ActivityController.findOne)
    .put(ActivityController.update)
    .delete(ActivityController.delete);

router.route('/activities/tag/:tag_name').get(ActivityController.findByTag);


module.exports = router;