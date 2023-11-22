const { body, param } = require("express-validator");
const validators = {};

validators.createPostValidator = [

    //utilizando libreria express validator

    body("title")
        //validar que no esta vacia si no enviar el mensaje que es requerido
        .notEmpty().withMessage("title es requerido"),
    body("description")
        .notEmpty().withMessage("description es requerido")
        //longitud maxima de la descripcion
        .isLength({max: 280 }).withMessage("Description max length is 280"),
    body("image")
        .notEmpty().withMessage("image is requerido")
        //validacion que la imagen sea una URL
        .isURL().withMessage("image tiene que ser una url")
    
];

validators.idInParamsValidator = [

        param("identifier")
            .notEmpty().withMessage("Identifire es requerido")
            .isMongoId().withMessage("Identificador debe de ser mongo ID")
]

module.exports = validators;