/**
 * Created by User on 11/1/13.
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
var TabTableSchema = new Schema({
    tableName: String,
    columnName:String,
    type: String
});

/**
 * Statics
 */
TabTableSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).exec(cb);
    }
};

mongoose.model('TabTable', TabTableSchema);