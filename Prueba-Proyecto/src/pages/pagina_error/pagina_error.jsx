import React from "react";
import gif from "./video-de-la-roca.gif"


export const Pagina_error= () => {
    return (
        <div>
            <h1>Error pagina no encontrada :(</h1>
            <img src={gif} alt="Gif roca" />
        </div>
    );
};


export default Pagina_error;