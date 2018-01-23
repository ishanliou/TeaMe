const TeaMe = require('../models/TeaMe')

module.exports ={

    index: function (req, res) {
        TeaMe.find({}, function(err, allTeas){
            if(err) return console.log(err)
            res.json(allTeas)
        })
    },


    create: function(req, res){
        TeaMe.create(req.body, function(err, brandNewTea){
            if(err) return console.log(err)
            res.json({message: "New Tea Created...", tea: brandNewTea})
        })
        
    },

    show: function(req, res){
        TeaMe.findById(req.params.id, function(err, thatTea){
            if(err) return console.log(err)
            res.json(thatTea)
        })
    },

    edit: function(req, res){
        TeaMe.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, thatTea){
            if(err) return console.log(err)
            res.json({message:"That tea updated!", thatTea})
        })
    },

    delete: function(req, res){
        TeaMe.findByIdAndRemove(req.params.id, function(err, deletedTea){
            if(err) return console.log(err)
            res.json({message: "That Tea deleted!", tea: deletedTea})
        })
    }

}