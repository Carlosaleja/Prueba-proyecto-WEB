const Mongoose = require("mongoose")
const Schema = Mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        trim: true,
        required: true,
    },
    image: { 
        //url de la imagen 
        type: String,
        required: true,},
    //no mostrar post y actvar o descativar 
    hidden: {
        type: Boolean,
        default: false
    },
},{ timestamps: true });

module.exports = Mongoose.model("post", PostSchema);