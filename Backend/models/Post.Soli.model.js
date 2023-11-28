const Mongoose = require("mongoose")
const Schema = Mongoose.Schema;

const PostSoliSchema = new Schema({
    title_Soli: {
        type: String,
        trim: true,
        required: true,
    },
    Email_Soli:{
        type: String,
        trim: true,
        require: true,
    },
    Nombre_Soli:{
        type: String,
        trim: true,
        require: true,
    },
    image_Soli: { 
        //url de la imagen 
        type: String,
        required: true,
    },
    telefono_Soli:{
        type: Number,
        require: true,
    },
    direccion_Soli: {
        type: String,
        trim: true,
        required: true,
    },
    motivo_Soli: {
        type: String,
        trim: true,
        required: true,
    },
    informacion_Soli: {
        type: String,
        trim: true,
        required: true,
    },
    //no mostrar post y actvar o descativar 
    hidden: {
        type: Boolean,
        default: false
    },
},{ timestamps: true });

module.exports = Mongoose.model("postSoli", PostSoliSchema);