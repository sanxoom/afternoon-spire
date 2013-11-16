/**
 * Created by Mizan on 11/1/13.
 */
/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    TableData = mongoose.model('TableData'),
    _ = require('underscore');

/**
 * List of tabtable data
 */
exports.all = function(req, res) {
    TableData.find().exec(function(err, tableData) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(tableData);
        }
    });
};

/**
 * Create a TableData
 */
exports.create = function(req, res) {
    var tableData = new TableData(req.body);
    tableData.save();
    res.jsonp(tableData);
};