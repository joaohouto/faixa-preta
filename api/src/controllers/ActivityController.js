const Activity = require('../models/Activity');

module.exports = {

    async findAll(req, res) {
        const { page = 1 } = req.query;
        
        var tags = new RegExp(req.query.tags, 'i');
        var name = new RegExp(req.query.name, 'i');
    
        try {
            const activities = await Activity.paginate(
                { name, tags }, 
                { page, populate: 'moves.move_id', limit: 10, sort: { createdAt: -1 } 
            });
            
            res.send(activities);

        } catch(err) {
            res.status(500).send({ error: err.message || "Algo deu errado!" });
        }
    },
    
    async create(req, res) {
        if(!req.body) {
            return res.status(400).send({ message: "Conteúdo não pode estar em branco!" });
        }
    
        try {
            const { name, details, tags, imageUrl, moves } = req.body;

            const activity = new Activity({
                name, details, tags, imageUrl, moves
            });

            const created = await activity.save();
            res.send(created);

        }  catch(err) {
            res.status(500).send({ message: err.message || "Algo deu errado!" });
        }
    },
    
    async findOne(req, res) {
        const { activity_id } = req.params;

        try {
            const activity = await Activity.findById(activity_id).populate('moves.move_id');

            if(!activity) {
                return res.status(404).send({
                    message: "Item não encontrado com o id " + activity_id
                });            
            }

            res.send(activity);

        } catch(err) {
            if(err.kind === "ObjectId") {
                return res.status(404).send({
                    message: "Item não encontrado com o id " + activity_id
                });            
            }

            res.status(500).send({ message: err.message || "Algo deu errado!" });
        }

    },
    
    async update(req, res) {
        if(!req.body) {
            return res.status(400).send({
                message: "Conteúdo não pode estar em branco!"
            });
        }
    
        try {
            const activity = await Activity.findByIdAndUpdate(req.params.activity_id, {
                name: req.body.name,
                details: req.body.details,
                tags: req.body.tags,
                imageUrl: req.body.imageUrl,
                moves: req.body.moves
            }, {new: true});
    
            if(!activity) {
                return res.status(404).send({
                    message: "Item não encontrado com o id " + req.params.activity_id
                });
            }
    
            res.send(activity);

        } catch(err) {
            if(err.kind === "ObjectId") {
                return res.status(404).send({
                    message: "Item não encontrado com o id " + req.params.activity_id
                });            
            }

            res.status(500).send({ message: err.message || "Algo deu errado!" });
        }

    },
    
    async delete(req, res) {
        try {
            const activity = await Activity.findByIdAndRemove(req.params.activity_id);

            if(!activity) {
                return res.status(404).send({
                    message: "Item não encontrado com o id " + req.params.activity_id
                });
            }

            res.send({ message: 'Deletado com sucesso!' });

        } catch(err) {
            if(err.kind === "ObjectId") {
                return res.status(404).send({
                    message: "Item não encontrado com o id " + req.params.activity_id
                });            
            }

            res.status(500).send({ message: err.message || "Algo deu errado!" });
        }
    }
}
