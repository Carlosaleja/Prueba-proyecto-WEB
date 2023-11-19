import PropTypes from "prop-types";
import React from "react";
import "./Footer.css";

export const Footer = ({ property1, elSalvador = "el-salvador-3.png", nuestrosProyectosClassName }) => {
    return (
        <div className="footer">
            <div className="derechos-reservados">
                <div className="overlap-group">
                    <p className="text-wrapper">© 2023 Échame la Mano. All Rights Reserved.</p>
                </div>
            </div>
            <div className="overlap">
                <div className="rectangle" />
                <div className="logo">
                    <img className="el-salvador" alt="El salvador" src={elSalvador} />
                    <p className="div">Entidad sin fines de lucro registrada en El Salvador</p>
                </div>
                <div className="texto">
                    <div className="frame">
                        <p className={`nuestros-proyectos ${nuestrosProyectosClassName}`}>
                            <span className="span">
                                Nuestros Proyectos :<br />
                            </span>
                            <span className="text-wrapper-2">
                                <br />
                                Ayuda solidaria <br />
                                <br />
                                Recibe tu ayuda <br />
                            </span>
                        </p>
                    </div>
                    <div className="cont-ctanos-wrapper">
                        <p className="cont-ctanos">
                            <span className="span">
                                Contáctanos :<br />
                                <br />
                            </span>
                            <span className="text-wrapper-2">echamelamano@gmail.com</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

Footer.propTypes = {
    property1: PropTypes.oneOf(["default"]),
    elSalvador: PropTypes.string,
};
