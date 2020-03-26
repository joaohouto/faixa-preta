const Move = require('../models/Move');

exports.findAll = (req, res) => {
    const { page = 1 } = req.query;
    
    var category = new RegExp(req.query.category, 'i');
    var name = new RegExp(req.query.name, 'i');

    Move.paginate({ name, category }, { page, limit: 5 })
        .then(moves => {
            res.send(moves);

        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something went wrong while retrieving moves"
            });
        });
};

exports.create = (req, res) => {

    if(!req.body) {
        return res.status(400).send({
            message: "Item content can not be empty"
        });
    }

    const move = new Move({
        name: req.body.name,
        category: req.body.category,
        details: req.body.details,
        videoUrl: req.body.videoUrl,
        image: req.body.image
    });

    move.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the move"
        });
    });
};

exports.findOne = (req, res) => {
    Move.findById(req.params.move_id).then(move => {

        if(!move) {
            return res.status(404).send({
                message: "Item not found with id " + req.params.move_id
            });            
        }

        res.send(move);

    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Item not found with id " + req.params.move_id
            });                
        }
        return res.status(500).send({
            message: "Something went wrong retrieving product with id " + req.params.move_id
        });
    });
};

exports.update = (req, res) => {

    if(!req.body) {
        return res.status(400).send({
            message: "Item content can not be empty"
        });
    }

    Move.findByIdAndUpdate(req.params.move_id, {
        name: req.body.name,
        category: req.body.category,
        details: req.body.details,
        videoUrl: req.body.videoUrl,
        image: req.body.image
    }, {new: true})
    .then(move => {

        if(!move) {
            return res.status(404).send({
                message: "Item not found with id " + req.params.move_id
            });
        }

        res.send(move);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Item not found with id " + req.params.move_id
            });                
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.move_id
        });
    });
};

exports.delete = (req, res) => {
    Move.findByIdAndRemove(req.params.move_id)
    .then(move => {

        if(!move) {
            return res.status(404).send({
                message: "Item not found with id " + req.params.move_id
            });
        }

        res.send({message: "Item deleted successfully!"});
    }).catch(err => {

        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Item not found with id " + req.params.move_id
            });                
        }
        return res.status(500).send({
            message: "Could not delete item with id " + req.params.move_id
        });
    });
};