var mongoose = require('mongoose');
var coinModel = require ('../models/coin');

module.exports.getAll = function(req, res){
    coinModel.find({},function(err,coins){
        if(err){
            res.status(500);
        }
        else{
            res.json(coins)
        }
    });
};

module.exports.getOne = function(req, res){
    if(req.params.id){
        coinModel.findById(req.params.id, function(err, coin){
            if(err){
                res.status(500);
                return res.json({"Ok": false, error: err});
            }
            else{
                res.json(coin);
            }
        });
    }
    else{
        res.status(400);
        console.log("No se brindo nada");
    }
};

module.exports.getByName = function(req, res){
    if(req.params.name){
        //console.log(req.params.name);
        coinModel.findOne({name:req.params.name}, function(err, coin){
            if(err){
                res.status(500);
                return res.json({"Ok": false, error: err});
            }
            else{
                res.json(coin);
            }
        });
    }
    else{
        res.status(400);
        console.log("No se brindo nada");
    }
};

module.exports.getByCountry = function(req, res){
    if(req.params.country){
        //console.log(req.params.name);
        coinModel.findOne({country:req.params.country}, function(err, coin){
            if(err){
                res.status(500);
                return res.json({"Ok": false, error: err});
            }
            else{
                res.json(coin);
            }
        });
    }
    else{
        res.status(400);
        console.log("No se brindo nada");
    }
};

module.exports.getAvailable = function(req, res){
    if(req.params.isAvailable){
        //console.log(req.params.name);
        coinModel.find({isAvailable:req.params.isAvailable}, function(err, coin){
            if(err){
                res.status(500);
                return res.json({"Ok": false, error: err});
            }
            else{
                res.json(coin);
            }
        });
    }
    else{
        res.status(400);
        console.log("No se brindo nada");
    }
};

module.exports.getByYear = function(req, res){
    if(req.params.year){
        //console.log(req.params.name);
        coinModel.findOne({year:req.params.year}, function(err, coin){
            if(err){
                res.status(500);
                return res.json({"Ok": false, error: err});
            }
            else{
                res.json(coin);
            }
        });
    }
    else{
        res.status(400);
        console.log("No se brindo nada");
    }
};

module.exports.Create = function(req, res){
    var nuevo = new coin({name: req.body.name,
                                country:req.body.country,
                                value: req.body.value,
                                value_us: req.body.value_us,
                                year: req.body.year,
                                review: req.body.review,
                                isAvailable:req.body.isAvailable,
                                img: req.body.img});
    nuevo.save(function(err, guardado){
        if(err){
            res.status(500);
            return res.json({"Ok": false, error: err});
        }
        else{
            res.json(guardado);
        }
    });
}

module.exports.Update = function(req, res){   
    if(req.params.id){
        var update =  {name: req.body.name,
                country:req.body.country,
                value: req.body.value,
                value_us: req.body.value_us,
                year: req.body.year,
                review: req.body.review,
                isAvailable:req.body.isAvailable,
                img: req.body.img};
        coinModel.findByIdAndUpdate(req.params.id, update,function(err,coin){
            if(err){
                res.status(500);
                return res.json({"Ok": false, error: err});
            }
            else{
                res.json({"Ok": true, old: coin, new: update});
            }
        });
    }
    else{
        res.status(400);
        console.log("No se brindo nada");
    }
}

module.exports.Delete = function(req, res){
    if(req.params.id){
        coinModel.findByIdAndDelete(req.params.id,function(err,coin){
            if(err){
                res.status(500);
                return res.json({"Ok": false, error: err});
            }
            else{
                res.json({"Ok": true, deleted: coin});
            }
        });
    }
    else{
        res.status(400);
        console.log("No se brindo nada");
    }
}