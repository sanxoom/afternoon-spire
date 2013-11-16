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
 * Tab Schema
 */
var TabSchema = new Schema({
    name: {
        type: String,
        default: '',
        trim: true
    }
});

/**
 * Statics
 */
TabSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).exec(cb);
    }
};

mongoose.model('Tab', TabSchema);