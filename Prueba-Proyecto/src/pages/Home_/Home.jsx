import React from "react";
import Header from "../../assets/Header/Header";
import "./Home.css";
import { BtnDona } from "../../assets/btn/BtnDona";
import { BtnSolicitar } from "../../assets/btn/BtnSolicitar";
import { Footer } from "../../assets/Footer/Footer";
import avion1 from "../../assets/Home./img/avion-de-papel-1-1.png";
import avion2 from "../../assets/Home./img/avion-de-papel-2.png";
import elsalvador from "../../assets/Inicio/img/el-salvador-3.png";
import donacion1 from "../../assets/Home./img/donacion-1.png";
import donacion1_1 from "../../assets/Home./img/donacion-1-1.png";
import image1 from "../../assets/Home./img/image-1.png";
import image2 from "../../assets/Home./img/image-2.png";
import image3 from "../../assets/Home./img/image-3.png";
import logo_1_3 from "../../assets/Home./img/logo-1-3.png";
import solicitud from "../../assets/Home./img/solicitud-de-cotizacion-1.png";
import usuario from "../../assets/Home./img/usuario-1.png";
import ellipse4 from "../../assets/Home./img/ellipse-4.svg";
import ellipse5 from "../../assets/Home./img/ellipse-5.svg";

export const Home = () => {
    return (
        <div className="home">
            <div className="div-2">
                <div className="overlap-2">
                    <div className="fondo-azul" />
                    <div className="perfil-ayuda">
                        <p className="p">
                            Crear tu perfil para que más personas puedan ofrecerte el apoyo que necesitas. Puedes describir tu
                            situación y cómo te pueden contactar para ayudarte a avanzar.
                        </p>
                        <div className="text-wrapper-10">Perfil de Ayuda</div>
                        <div className="overlap-3">
                            <img className="ellipse" alt="Ellipse" src={ellipse4} />
                            <div className="ellipse-2" />
                            <img className="usuario" alt="Usuario" src={usuario} />
                        </div>
                        <div className="btn">
                            <div className="overlap-group-2">
                                <BtnSolicitar
                                    className="btn-solicitar-instance"
                                    divClassName="design-component-instance-node"
                                    text="click"
                                />
                                <img className="avion-de-papel" alt="Avion de papel" src={avion1} />
                            </div>
                        </div>
                    </div>
                    <div className="dona-tu-ayuda">
                        <div className="overlap-4">
                            <div className="overlap-4">
                                <img className="ellipse-3" alt="Ellipse" src={ellipse5} />
                                <p className="text-wrapper-11">
                                    Crea un anuncio de donación para dar lo que no usas y brindar a otros una segunda oportunidad,
                                    recordando que tu donación puede marcar la diferencia.
                                </p>
                                <div className="ellipse-4" />
                                <img className="donacion" alt="Donacion" src={donacion1_1} />
                            </div>
                            <div className="text-wrapper-12">Dona tu Ayuda</div>
                        </div>
                        <div className="overlap-group-wrapper">
                            <div className="overlap-group-2">
                                <BtnSolicitar
                                    className="btn-solicitar-instance"
                                    divClassName="design-component-instance-node"
                                    text="click"
                                />
                                <img className="avion-de-papel" alt="Avion de papel" src={avion1} />
                            </div>
                        </div>
                    </div>
                 
                </div>
                <div className="overlap-5">
                    <div className="fondo-header">
                        <div className="overlap-group-3">
                            <div className="ellipse-5" />
                            <div className="ellipse-6" />
                            <img className="image" alt="Image" src={image1} />
                        </div>
                        <p className="text-wrapper-13">Tu ayuda marca la diferencia</p>
                        <div className="text-wrapper-14">Home</div>
                    </div>
                    <Header
                        className="header-instance"
                        divClassName="header-2"
                        divClassNameOverride="header-3"
                        logo={logo_1_3}
                        property1="default"
                    />
                </div>
                <div className="imagen">
                    <div className="overlap-6">
                        <div className="rectangle-2" />
                        <img className="image-2" alt="Image" src={image2} />
                    </div>
                </div>
                <div className="overlap-wrapper">
                    <div className="overlap-7">
                        <div className="rectangle-3" />
                        <img className="image-3" alt="Image" src={image3} />
                    </div>
                </div>
                <div className="solicitudes">
                    <div className="overlap-8">
                        <div className="ellipse-7" />
                        <div className="ellipse-8" />
                        <img className="solicitud-de" alt="Solicitud de" src={solicitud} />
                    </div>
                    <div className="text-wrapper-15">Solicitudes</div>
                    <p className="text-wrapper-16">
                        Descubre los perfiles de aquellos que buscan tu apoyo y obtén más información sobre sus solicitudes.
                    </p>
                    <div className="div-wrapper">
                        <div className="overlap-group-4">
                            <BtnDona className="btn-dona-instance" divClassName="btn-dona-2" text="click" />
                            <img className="avion-de-papel-2" alt="Avion de papel" src={avion2} />
                        </div>
                    </div>
                </div>
                <div className="donativos">
                    <div className="overlap-9">
                        <div className="text-wrapper-17">Donativos</div>
                        <div className="overlap-10">
                            <p className="nete-a-nuestra">
                                Únete a nuestra iniciativa &#34;Dona tu ayuda&#34;, donde descubrirás artículos que otras personas están
                                donando con el propósito de ayudar.
                            </p>
                            <div className="ellipse-9" />
                            <div className="ellipse-10" />
                            <img className="donacion-2" alt="Donacion" src={donacion1} />
                        </div>
                        <div className="btn-2">
                            <div className="overlap-group-4">
                                <BtnDona className="btn-dona-instance" divClassName="btn-dona-2" text="click" />
                                <img className="avion-de-papel-2" alt="Avion de papel" src={avion2} />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer
                        className="footer-instance"
                        elSalvador= "hola"
                        nuestrosProyectosClassName="footer-2"
                        property1="default"
                    />
            </div>
        </div>
    );
};


export default Home;