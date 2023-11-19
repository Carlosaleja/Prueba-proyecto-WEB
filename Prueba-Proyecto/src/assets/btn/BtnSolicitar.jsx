import React from "react";
import "./BtnSolicitar.css";

export const BtnSolicitar = ({ className }) => {
    return (
        <div className={`btn-solicitar ${className}`}>
            <div className="text-wrapper">Solicitar</div>
        </div>
    );
};

export default BtnSolicitar;