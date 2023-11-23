const express = require("express");
const router = express.Router();

//linea para coroborar las validaciones
const { createPostValidator, idInParamsValidator } = require("../validators/post.validators");
//impirmir el erro que tiene los validadores
const validateFilds = require("../validators/index.middleware");
//genera los posto luego de las validaciones
const postController = require("../controllers/post.controller");


//las rutas van a llegar desde /api/post/....
router.get("/", postController.findAll);



router.get("/:identifier",
    idInParamsValidator,                     //valida las condiciones
    validateFilds,                          //retorna el valor del erro de los campos
    postController.findOneById);            //genera el post


router.post(["/","/:identifier"],
    createPostValidator,               //valida las condiciones
    validateFilds,                     //valida y retorna si hay algun erro
    postController.save);            //publica el post si no hay ningun error

router.delete("/:identifier",
    idInParamsValidator,
    postController.delateById);

module.exports = router;