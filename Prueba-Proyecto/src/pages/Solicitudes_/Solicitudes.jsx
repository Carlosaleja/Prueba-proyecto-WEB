import React from "react";
import { Header } from "../../assets/Header/Header";
import { BtnDona } from "../../assets/btn/BtnDona";
import { BtnSolicitar } from "../../assets/btn/BtnSolicitar";
import { Footer } from "../../assets/Footer/Footer";
import añadir from "../../assets/Solicitudes/img/anadir-1.png"
import casa from "../../assets/Solicitudes/img/casa-1.png"
import elSalvador from "../../assets/Solicitudes/img/el-salvador-3.png"
import logo1 from "../../assets/Solicitudes/img/logo-1-2.png"
import ojo from "../../assets/Solicitudes/img/ojo-1.png"
import rectangulo from "../../assets/Solicitudes/img/rectangle-614.png"

import "./Solicitudes.css";

export const Solicitudes = () => {
    return (
        <div className="solicitudes">
            <div className="div-2">
                <div className="overlap-2">
                    <div className="fondo-header">
                        <div className="ellipse" />
                        <div className="btn-home-wrapper">
                            <div className="btn-home">
                                <div className="overlap-group-2">
                                    <BtnSolicitar className="design-component-instance-node" text="Home" />
                                    <img className="casa" alt="Casa" src={casa} />
                                </div>
                            </div>
                        </div>
                        <div className="btn-crear">
                            <div className="overlap-group-2">
                                <BtnDona className="design-component-instance-node" text="Crear solicitud" />
                                <img className="anadir" alt="Anadir" src={añadir} />
                            </div>
                        </div>
                        <div className="text-wrapper-9">Solicitudes de donaciones</div>
                        <p className="text-wrapper-10">Tu ayuda marca la diferencia</p>
                    </div>
                    <Header
                        className="header-instance"
                        divClassName="header-2"
                        divClassNameOverride="header-3"
                        logo={logo1}
                        property1="default"
                    />
                </div>
                <div className="frame-2">
                    <div className="text-wrapper-11">Solicitud</div>
                    <div className="div-wrapper">
                        <div className="text-wrapper-12">Resumen</div>
                    </div>
                    <div className="frame-wrapper">
                        <div className="frame-3">
                            <div className="rectangle-wrapper">
                                <img className="img" alt="Rectangle" src={rectangulo} />
                            </div>
                        </div>
                    </div>
                    <div className="btn-ver">
                        <div className="overlap-group-3">
                            <BtnDona className="btn-dona-2" divClassName="btn-dona-instance" text="Ver" />
                            <img className="ojo" alt="Ojo" src={ojo} />
                        </div>
                    </div>
                </div>
                <div className="frame-4">
                    <div className="text-wrapper-11">Solicitud</div>
                    <div className="div-wrapper">
                        <div className="text-wrapper-12">Resumen</div>
                    </div>
                    <div className="frame-wrapper">
                        <div className="frame-3">
                            <div className="rectangle-wrapper">
                                <img className="img" alt="Rectangle" src={rectangulo} />
                            </div>
                        </div>
                    </div>
                    <div className="btn-ver">
                        <div className="overlap-group-3">
                            <BtnDona className="btn-dona-2" divClassName="btn-dona-instance" text="Ver" />
                            <img className="ojo" alt="Ojo" src={ojo} />
                        </div>
                    </div>
                </div>
                <div className="frame-5">
                    <div className="text-wrapper-11">Solicitud</div>
                    <div className="div-wrapper">
                        <div className="text-wrapper-12">Resumen</div>
                    </div>
                    <div className="frame-wrapper">
                        <div className="frame-3">
                            <div className="rectangle-wrapper">
                                <img className="img" alt="Rectangle" src={rectangulo} />
                            </div>
                        </div>
                    </div>
                    <div className="btn-ver">
                        <div className="overlap-group-3">
                            <BtnDona className="btn-dona-2" divClassName="btn-dona-instance" text="Ver" />
                            <img className="ojo" alt="Ojo" src={ojo} />
                        </div>
                    </div>
                </div>
                <div className="frame-6">
                    <div className="text-wrapper-11">Solicitud</div>
                    <div className="div-wrapper">
                        <div className="text-wrapper-12">Resumen</div>
                    </div>
                    <div className="frame-wrapper">
                        <div className="frame-3">
                            <div className="rectangle-wrapper">
                                <img className="img" alt="Rectangle" src={rectangulo} />
                            </div>
                        </div>
                    </div>
                    <div className="btn-ver">
                        <div className="overlap-group-3">
                            <BtnDona className="btn-dona-2" divClassName="btn-dona-instance" text="Ver" />
                            <img className="ojo" alt="Ojo" src={ojo} />
                        </div>
                    </div>
                </div>
                <div className="frame-7">
                    <div className="text-wrapper-11">Solicitud</div>
                    <div className="div-wrapper">
                        <div className="text-wrapper-12">Resumen</div>
                    </div>
                    <div className="frame-wrapper">
                        <div className="frame-3">
                            <div className="rectangle-wrapper">
                                <img className="img" alt="Rectangle" src={rectangulo} />
                            </div>
                        </div>
                    </div>
                    <div className="btn-ver">
                        <div className="overlap-group-3">
                            <BtnDona className="btn-dona-2" divClassName="btn-dona-instance" text="Ver" />
                            <img className="ojo" alt="Ojo" src={ojo} />
                        </div>
                    </div>
                </div>
                <div className="frame-8">
                    <div className="text-wrapper-11">Solicitud</div>
                    <div className="div-wrapper">
                        <div className="text-wrapper-12">Resumen</div>
                    </div>
                    <div className="frame-wrapper">
                        <div className="frame-3">
                            <div className="rectangle-wrapper">
                                <img className="img" alt="Rectangle" src={rectangulo} />
                            </div>
                        </div>
                    </div>
                    <div className="btn-ver">
                        <div className="overlap-group-3">
                            <BtnDona className="btn-dona-2" divClassName="btn-dona-instance" text="Ver" />
                            <img className="ojo" alt="Ojo" src={ojo} />
                        </div>
                    </div>
                </div>
                <div className="frame-9">
                    <div className="text-wrapper-11">Solicitud</div>
                    <div className="div-wrapper">
                        <div className="text-wrapper-12">Resumen</div>
                    </div>
                    <div className="frame-wrapper">
                        <div className="frame-3">
                            <div className="rectangle-wrapper">
                                <img className="img" alt="Rectangle" src={rectangulo} />
                            </div>
                        </div>
                    </div>
                    <div className="btn-ver">
                        <div className="overlap-group-3">
                            <BtnDona className="btn-dona-2" divClassName="btn-dona-instance" text="Ver" />
                            <img className="ojo" alt="Ojo" src={ojo} />
                        </div>
                    </div>
                </div>
                <div className="frame-10">
                    <div className="text-wrapper-11">Solicitud</div>
                    <div className="div-wrapper">
                        <div className="text-wrapper-12">Resumen</div>
                    </div>
                    <div className="frame-wrapper">
                        <div className="frame-3">
                            <div className="rectangle-wrapper">
                                <img className="img" alt="Rectangle" src={rectangulo} />
                            </div>
                        </div>
                    </div>
                    <div className="btn-ver">
                        <div className="overlap-group-3">
                            <BtnDona className="btn-dona-2" divClassName="btn-dona-instance" text="Ver" />
                            <img className="ojo" alt="Ojo" src={ojo} />
                        </div>
                    </div>
                </div>
                <div className="frame-11">
                    <div className="text-wrapper-11">Solicitud</div>
                    <div className="div-wrapper">
                        <div className="text-wrapper-12">Resumen</div>
                    </div>
                    <div className="frame-wrapper">
                        <div className="frame-3">
                            <div className="rectangle-wrapper">
                                <img className="img" alt="Rectangle" src={rectangulo} />
                            </div>
                        </div>
                    </div>
                    <div className="btn-ver">
                        <div className="overlap-group-3">
                            <BtnDona className="btn-dona-2" divClassName="btn-dona-instance" text="Ver" />
                            <img className="ojo" alt="Ojo" src={ojo} />
                        </div>
                    </div>
                </div>
                <Footer
                    className="footer-instance"
                    elSalvador={elSalvador}
                    nuestrosProyectosClassName="footer-2"
                    property1="default"
                />
            </div>
        </div>
    );
};



export default Solicitudes;