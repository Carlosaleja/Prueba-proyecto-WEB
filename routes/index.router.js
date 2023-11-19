const express = require("express");
const router = express.Router();

const postRouter = require("./post.router");

//enrutadores por defecto /api/...
router.use("/post", postRouter);


module.exports = router;