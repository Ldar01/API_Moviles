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
}