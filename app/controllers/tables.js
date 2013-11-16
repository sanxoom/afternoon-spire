/**
 * Created by Mizan on 11/1/13.
 */
/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Table = mongoose.model('Table'),
    _ = require('underscore');

/**
 * List of Articles
 */
exports.all = function(req, res) {
    Table.find().exec(function(err, tables) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(tables);
        }
    });
};

/**
 * Create a article
 */
exports.create = function(req, res) {
    var table = new Table(req.body);
    table.save();
    res.jsonp(table);
};