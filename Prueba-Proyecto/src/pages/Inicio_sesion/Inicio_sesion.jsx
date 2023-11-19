import React from "react";
import { BtnDona } from "../../assets/btn/BtnDona";
import { BtnSolicitar } from "../../assets/btn/BtnSolicitar";
import { Footer } from "../../assets/Footer/Footer";
import "./Inicio_sesion.css";

export const Inicio_sesion = () => {
    return (
        <div className="inicio-sesin">
            <div className="div-2">
                <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                        <div className="rectangle-2" />
                        <div className="rectangle-3" />
                        <img className="img" alt="Logo" src="logo2-1.png" />
                        <div className="flexcontainer">
                            <p className="text">
                                <span className="text-wrapper-3">
                                    Échame <br />
                                </span>
                            </p>
                            <p className="text">
                                <span className="text-wrapper-3">
                                    La
                                    <br />
                                </span>
                            </p>
                            <p className="text">
                                <span className="text-wrapper-3">Mano</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="inicio-sesion">
                    <div className="btn-ingresar">
                        <div className="overlap-group-3">
                            <BtnDona className="design-component-instance-node" text="Ingresar" />
                            <img className="ingresar" alt="Ingresar" src="ingresar-1.png" />
                        </div>
                    </div>
                    <div className="btn-registrarse">
                        <div className="overlap-group-3">
                            <BtnSolicitar className="design-component-instance-node" text="Registrarse" />
                            <img className="editar" alt="Editar" src="editar-1.png" />
                        </div>
                    </div>
                    <img className="manos" alt="Manos" src="manos-1.png" />
                    <div className="div-3">
                        <div className="DUI">
                            <div className="overlap-group-4">
                                <div className="rectangle-4" />
                                <img className="user" alt="User" src="user-1.png" />
                            </div>
                            <div className="text-wrapper-4">Contraseña:</div>
                        </div>
                        <div className="usuario">
                            <div className="overlap-group-4">
                                <div className="rectangle-4" />
                                <img className="user-2" alt="User" src="image.png" />
                            </div>
                            <div className="text-wrapper-4">DUI:</div>
                        </div>
                    </div>
                </div>
                <Footer
                    className="footer-instance"
                    elSalvador="el-salvador-3-2.png"
                    nuestrosProyectosClassName="footer-2"
                    property1="default"
                />
            </div>
        </div>
    );
};

export default Inicio_sesion;