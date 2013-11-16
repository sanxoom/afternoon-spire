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
var TableSchema = new Schema({
    tableName: {
        type: String,
        default: '',
        trim: true
    }
});

/**
 * Statics
 */
TableSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).exec(cb);
    }
};

mongoose.model('Table', TableSchema);