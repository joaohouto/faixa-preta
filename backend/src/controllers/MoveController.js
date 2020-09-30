const Move = require('../models/Move');
const { move } = require('../routes');

module.exports = {

    async findAll(req, res) {

        const { page = 1 } = req.query;
        
        var category = new RegExp(req.query.category, 'i');
        var name = new RegExp(req.query.name, 'i');
    
        try {
            const moves = await Move.paginate({ name, category }, { page, limit: 10 });
            res.send(moves);

        } catch(err) {
            res.status(500).send({ error: err.message || "Algo deu errado!" });
        }
    },
    
    async create(req, res) {

        if(!req.body) {
            return res.status(400).send({ message: "Conteúdo não pode estar em branco!" });
        }
    
        try {
            const move = new Move({
                name: req.body.name,
                category: req.body.category,
                details: req.body.details,
                imageUrl: req.body.imageUrl,
                videoUrl: req.body.videoUrl
            });

            const created = await move.save();
            res.send(created);

        }  catch(err) {
            res.status(500).send({ message: err.message || "Algo deu errado!" });
        }
    },
    
    async findOne(req, res) {

        try {
            const move = await Move.findById(req.params.move_id);

            if(!move) {
                return res.status(404).send({
                    message: "Item não encontrado com o id " + req.params.move_id
                });            
            }

            res.send(move);

        } catch(err) {
            if(err.kind === "ObjectId") {
                return res.status(404).send({
                    message: "Item não encontrado com o id " + req.params.move_id
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
            const move = await Move.findByIdAndUpdate(req.params.move_id, {
                name: req.body.name,
                category: req.body.category,
                details: req.body.details,
                difficulty: req.body.difficulty,
                imageUrl: req.body.imageUrl,
                videoUrl: req.body.videoUrl
            }, {new: true});
    
            if(!move) {
                return res.status(404).send({
                    message: "Item não encontrado com o id " + req.params.move_id
                });
            }
    
            res.send(move);

        } catch(err) {

            if(err.kind === "ObjectId") {
                return res.status(404).send({
                    message: "Item não encontrado com o id " + req.params.move_id
                });            
            }

            res.status(500).send({ message: err.message || "Algo deu errado!" });
        }

    },
    
    async delete(req, res) {
        try {
            const move = await Move.findByIdAndRemove(req.params.move_id);

            if(!move) {
                return res.status(404).send({
                    message: "Item não encontrado com o id " + req.params.move_id
                });
            }

            res.send({ message: 'Deletado com sucesso!' });

        } catch(err) {
            if(err.kind === "ObjectId") {
                return res.status(404).send({
                    message: "Item não encontrado com o id " + req.params.move_id
                });            
            }

            res.status(500).send({ message: err.message || "Algo deu errado!" });
        }
    
    }
}