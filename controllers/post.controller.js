//
const Post = require("../models/Post.model")

const controller = { };

controller.create = async (req, res, next) => {
    try {
        const{ title, description, image} = req.body;

        const post = new Post({
            title: title,
            description: description,
            image: image
         });

        //comit de los cambios en la bace o actialziza los campos la funcion save
          const postSave = await post.save();
        
          //separando el errro interno del servidor con el errro creando el post
          if(!postSave){
            //conflicto
            return res.status(409).json({error: "Error Creating post"})
          }

          return res.status(201).json(postSave)
    } catch (error) {

        console.error(error);
        return res.Status(500).Json({error: "Internar Server error"});
        
    }
}

controller.findAll = async (req, res, next) => {
    try {
        
        const posts = await Post.find({ hidden: false });
        return res.status(200).json({ posts });

    } catch (error) {

        console.error(error);
        return res.status(500).json({error: "Internar Server error"});
        
    }
}

controller.findOneById = async (req, res, next) => {
    try {
        const { identifier } = req.params;

        const post = await Post.findById(identifier);

        if(!post) {
            return res.status(404).json({erorr: "Post not found"})
        }



        return res.status(200).json(post);
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internar Server error"});
    }
}

module.exports = controller;