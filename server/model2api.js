
module.exports = function(model, router, mongoose) {
    const Schema = mongoose.Schema;

    const schema = new Schema({}, { timestamps: { createdAt: 'created_at' } } );
    for (let i = 0; i < model.schema.length; i++) {
        schema.add(model.schema[i])
    }
    const clz = mongoose.model(model.name, schema);

    function list(req, res) {
        const query = clz.find({});
        query
            .exec()
            .then(objs => {
                res.status(200).json(objs);
            })
            .catch(error => {
                res.status(500).send(error);
                return;
            });
    }
    function save(req, res) {
        clz.create(Array.isArray(req.body)?req.body:[req.body]).
            then(function (objs) {
                res.status(200).json(objs || []);
                return;
            }).
            catch(error => {
                res.status(500).send(error);
                return;
            });

    }
    function update(req, res) {
        const query = clz.update({_id:req.params.id}, req.body, { multi: true }, (err, numAffected)=>{
            if(err)
                res.status(500).send(error);
            else   
                res.status(200).json({});
            return;
        });
    }
    function get(req, res) {
        const query = clz.findOne({_id:req.params.id});
        query
            .exec()
            .then(obj => {
                res.status(200).json(obj);
            })
            .catch(error => {
                res.status(500).send(error);
                return;
            });
    }
    function deleteObj(req, res) {
        clz.findByIdAndRemove(req.params.id, (err, obj)=>{
            if(err)
                res.status(500).send(error);
            else   
                res.status(200).json({});
            return;
        });
    }



    router.put('/' + model.name, (req, res) => {
        save(req, res)
    });
    router.get('/' + model.name, (req, res) => {
        list(req, res)
    });
    router.post('/' + model.name+"/:id", (req, res) => {
        update(req, res)
    });
    router.get('/' + model.name+"/:id", (req, res) => {
        get(req, res)
    });
    router.delete('/' + model.name+"/:id", (req, res) => {
        deleteObj(req, res)
    });

}
