import PropTypes from "prop-types";
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "./img/Logo+ 1.svg"

export const Header = ({ property1, logo = "logo-1-4.png" }) => {
    return (
        <div className="header">
            <img
                className="logo"
                alt={Logo}
                src={
                    property1 === "variant-2"
                        ? "image.png"
                        : property1 === "variant-3"
                        ? "logo-1-2.png"
                        : property1 === "variant-4"
                        ? "logo-1-3.png"
                        : property1 === "variant-5"
                        ? "logo-1-4.png"
                        : property1 === "variant-6"
                        ? "logo-1-5.png"
                        : property1 === "variant-7"
                        ? "logo-1-6.png"
                        : logo
                }
            />
            <div className="text-wrapper">Echame la mano</div>
            <div className={`nav ${property1}`}>
                <Link to = "/Inicio" className="inicio">
                    {["default", "variant-3", "variant-4", "variant-5", "variant-6", "variant-7"].includes(property1) && (
                        <>Inicio</>
                    )}

                    {property1 === "variant-2" && <div className="div">Inicio</div>}
                </Link>
                <Link to = "/Home" className="home">
                    {["default", "variant-2", "variant-4", "variant-5", "variant-6", "variant-7"].includes(property1) && (
                        <>Home</>
                    )}

                    {property1 === "variant-3" && <div className="text-wrapper-2">Home</div>}
                </Link>
                <Link to = "/Inicio-Forma ayuda" className="formas-de-ayuda">
                    {["default", "variant-2", "variant-3", "variant-4", "variant-6", "variant-7"].includes(property1) && (
                        <>Formas de Ayuda</>
                    )}

                    {property1 === "variant-5" && <div className="text-wrapper-3">Formas de Ayuda</div>}
                </Link>
                <Link to = "/Inicio_sesion" className="conocenos">
                    {["default", "variant-2", "variant-3", "variant-5", "variant-6", "variant-7"].includes(property1) && (
                        <>Conocenos</>
                    )}

                    {property1 === "variant-4" && <div className="text-wrapper-3">Conocenos</div>}
                </Link>
                <Link to = "/Solicitudes" className="solicitudes">
                    {["default", "variant-2", "variant-3", "variant-4", "variant-5", "variant-7"].includes(property1) && (
                        <>Solicitudes</>
                    )}

                    {property1 === "variant-6" && <div className="text-wrapper-3">Solicitudes</div>}
                </Link>
                <Link to = "/Participa" className="participa">
                    {["default", "variant-2", "variant-3", "variant-4", "variant-5", "variant-6"].includes(property1) && (
                        <>Participa</>
                    )}

                    {property1 === "variant-7" && <div className="text-wrapper-3">Participa</div>}
                </Link>
            </div>
        </div>
    );
};

Header.propTypes = {
    property1: PropTypes.oneOf(["default", "variant-5", "variant-2", "variant-3", "variant-4", "variant-7", "variant-6"]),
    logo: PropTypes.string,
};

export default Header;