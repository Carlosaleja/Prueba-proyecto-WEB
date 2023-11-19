import React from "react";
import "./BtnDona.css";

export const BtnDona = ({ className }) => {
    return (
        <div className={`btn-dona ${className}`}>
            <div className="text-wrapper">Donar</div>
        </div>
    );
};

export default BtnDona;