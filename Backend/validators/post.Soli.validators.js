const { body, param } = require("express-validator");
const validatorsSoli = {};

validatorsSoli.createPostSoliValidator = [


    param("identifire")
        .optional()
        .isMongoId().withMessage("Identificador debe de ser mongo ID"),

    //utilizando libreria express validator

    body("title_Soli")
        //validar que no esta vacia si no enviar el mensaje que es requerido
        .notEmpty().withMessage("title es requerido"),


    body("Email_Soli")
        .notEmpty().withMessage("Email es requerido")
        //longitud maxima de la descripcion
        .isEmail().withMessage("No es un correo electronico"),


    body("Nombre_Soli")
        .notEmpty().withMessage("Nombre es requerido")
        //longitud maxima de la descripcion
        .isLength({ max: 64 }).withMessage("No es un nombre electronico"),

    body("image_Soli")
        .notEmpty().withMessage("image is requerido")
        //validacion que la imagen sea una URL
        .isURL().withMessage("image tiene que ser una url"),


    body("telefono_Soli")
        .notEmpty().withMessage("telefono es requerido")
        //longitud maxima de la descripcion
        .isMobilePhone().withMessage("No es un numero telefonico"),


    body("direccion_Soli")
        .notEmpty().withMessage("description es requerido")
        //longitud maxima de la descripcion
        .isLength({ max: 280 }).withMessage("Description max length is 280"),

    body("motivo_Soli")
        .notEmpty().withMessage("description es requerido")
        //longitud maxima de la descripcion
        .isLength({ max: 280 }).withMessage("tipo max length is 280"),

    body("informacion_Soli")
        .notEmpty().withMessage("description es requerido")
        //longitud maxima de la descripcion
        .isLength({ max: 280 }).withMessage("tipo max length is 280"),




];

validatorsSoli.idInParamsValidator = [

    param("identifier")
        .notEmpty().withMessage("Identifire es requerido")
        .isMongoId().withMessage("Identificador debe de ser mongo ID")
]

module.exports = validatorsSoli;