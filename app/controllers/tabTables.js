/**
 * Created by Mizan on 11/1/13.
 */
/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Tab = mongoose.model('TabTable'),
    _ = require('underscore');

/**
 * List of Articles
 */
exports.all = function(req, res) {
    Tab.find().exec(function(err, tabTables) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(tabTables);
        }
    });
};

/**
 * Create a article
 */
exports.create = function(req, res) {
    var tab = new Tab(req.body);
    tab.save();
    res.jsonp(tab);
};