/**
 * Created by Mizan on 11/16/13.
 */

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    env = process.env.NODE_ENV || 'development',
    config = require('../../config/config')[env],
    Schema = mongoose.Schema;

/**
 * Article Schema
 */
var TabTableDataSchema = new Schema({
    tableName: String,
    columnName:String,
    type: String
});

/**
 * Statics
 */
TabTableDataSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).exec(cb);
    }
};

mongoose.model('TabTableData', TabTableDataSchema);