/**
 * Created by Mizan on 11/1/13.
 */
/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Tab = mongoose.model('TabTableData'),
    _ = require('underscore');

/**
 * List of tabtable data
 */
exports.all = function(req, res) {
    Tab.find().exec(function(err, tabTableData) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(tabTableData);
        }
    });
};

/**
 * Create a TabTable
 */
exports.create = function(req, res) {
    var tab = new Tab(req.body);
    tab.save();
    res.jsonp(tab);
};