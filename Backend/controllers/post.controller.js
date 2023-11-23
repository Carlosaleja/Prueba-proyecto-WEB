//
const Post = require("../models/Post.model")

const controller = { };

controller.save = async (req, res, next) => {
    try {
        const{ title_don, Email_Don, Nombre_Don, image_don, telefono_don, description_don, Tipo_don, Cantidad_don } = req.body;
        const{ identifier } = req.params;
        
       

        /*const post = new Post({
            title_don: title_don,
            Email_Don: Email_Don,
            Nombre_Don: Nombre_Don,
            image_don: image_don,
            telefono_don: telefono_don,
            description_don: description_don,
            Tipo_don: Tipo_don,
            Cantidad_don: Cantidad_don,
         });*/


         //verifica si el post existe con un identifire de ID
         let post = await  Post.findById(identifier);

        //si el post no existe se crea uno nuevo
         if(!post){
            post = new Post();
         }

         post["title_don"] = title_don;
         post["Email_Don"] = Email_Don;
         post["Nombre_Don"] = Nombre_Don;
         post["image_don"] = image_don;
         post["telefono_don"] = telefono_don;
         post["description_don"] = description_don;
         post["Tipo_don"] = Tipo_don;
         post["Cantidad_don"] = Cantidad_don;

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
        return res.status(500).json({error: "Internal server error"});
        
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

controller.delateById = async (req, res, next) => {

    try {
            const{ identifier} = req.params;

            const post = await Post.findByIdAndDelete(identifier);

            if(!post){
                return res.status(404).json({error:"Post not found"});
            }

            res.status(200).json({message: "Post deleat"})

    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Internar Server error"});
    }

}

module.exports = controller;