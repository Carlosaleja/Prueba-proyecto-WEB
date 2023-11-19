import React from "react";
import { Header } from "../../assets/Header/Header";
import { BtnDona } from "../../assets/btn/BtnDona";
import { BtnSolicitar } from "../../assets/btn/BtnSolicitar";
import { Footer } from "../../assets/Footer/Footer";
import "./Inicio.css";
import Manoabierta from "../../assets/Inicio/img/mano-abierta-1.png";
import image1 from "../../assets/Inicio/img/image-1.png";
import image4 from "../../assets/Inicio/img/image-4.png";
import logo12 from "../../assets/Inicio/img/logo-1-2.png";
import elsalvador from "../../assets/Inicio/img/el-salvador-3.png";
import donar1 from "../../assets/Inicio/img/donar-1.png";
import personacamisa from "../../assets/Inicio/img/personacamisa.png";
import personadonando from "../../assets/Inicio/img/personadonando.png";
import ellipse5 from "../../assets/Inicio/img/ellipse-5.svg";
import Logo from "../../assets/Header/img/Logo+ 1.svg"



export const Inicio = () => {
    return (
        <div className="inicio">
            <div className="div-2">
                <div className="overlap-2">
                    <div className="fondo-header">
                        <div className="overlap-3">
                            <div className="overlap-group-2">
                                <BtnDona className="btn-dona-instance" divClassName="btn-dona-2" text="click" />
                                <img className="donar" alt="Donar" src={donar1} />
                            </div>
                            <div className="overlap-4">
                                <BtnSolicitar className="design-component-instance-node" />
                                <img className="mano-abierta" alt="Mano_abierta" src= {Manoabierta} />
                            </div>
                            <div className="overlap-5">
                                <div className="ellipse" />
                                <div className="ellipse-2" />
                                <img className="image" alt="Image" src={image1} />
                                <p className="bienvenido-a-chame"> ¡Bienvenido a Échame la Mano!</p>
                            </div>
                            <p className="text-wrapper-11">Tu ayuda marca la diferencia</p>
                        </div>
                    </div>
                    <Header className="header-instance" logo= {Logo} property1="default" />
                </div>
                <div className="overlap-6">
                    <div id="Conocenos_" className="conocenos">
                        <div className="overlap-7">
                            <img className="img" alt="Image" src={image4} />
                            <div className="ellipse-3" />
                        </div>
                        <div className="text-wrapper-12">Conócenos</div>
                        <p className="nuestro-objetivo-es">
                            Nuestro objetivo es conectar a personas interesadas <br />
                            en donar productos de alta calidad y no perecederos <br />
                            con aquellas que los necesitan y recurren a nuestra <br />
                            plataforma en busca de ayuda. La inspiración para <br />
                            crear esta iniciativa, proviene de la voluntad de llevar a cabo un proyecto con un impacto social
                            significativo. <br />
                            Con esta plataforma, buscamos abordar desafíos <br />
                            sociales actuales, como la pobreza, el desempleo, <br />
                            la discriminación, la falta de vivienda, entre otros
                        </p>
                    </div>
                    <div className="fondo-azul" />
                    <div id="Formadeayuda" className="formas-de-ayudar">
                        <p className="text-wrapper-13">
                            En nuestra plataforma, brindamos a las personas la oportunidad de realizar donaciones significativas.
                            Aquí, los usuarios pueden contribuir con productos de alta calidad y no perecederos, ya sea alimentos,
                            artículos de higiene, ropa o cualquier otro producto esencial. Cada acto de generosidad cuenta y, a través
                            de nuestra plataforma, facilitamos el proceso de donación, asegurando que su ayuda llegue a las manos
                            adecuadas.
                        </p>
                        <div className="text-wrapper-14">Donar</div>
                        <div className="text-wrapper-15">Formas de ayudar</div>
                        <div className="pngtreevolunteer-wrapper">
                            <img
                                className="pngtreevolunteer"
                                alt="Pngtreevolunteer"
                                src= {personacamisa}
                            />
                        </div>
                    </div>
                    <div className="solicitar">
                        <div className="overlap-8">
                            <img className="ellipse-4" alt="Ellipse" src={ellipse5} />
                            <div className="solicitar-2">
                                <div className="text-wrapper-16">Solicitar</div>
                                <p className="text-wrapper-17">
                                    Nuestra plataforma no solo permite donar, sino también solicitar donaciones en momentos de necesidad.
                                    Ofrecemos un espacio donde los usuarios pueden expresar sus necesidades y recibir apoyo de la
                                    comunidad. Si atraviesas dificultades y necesitas alimentos, ropa u otros productos esenciales, puedes
                                    utilizar nuestra plataforma. Buscamos fomentar la solidaridad y conectar a quienes pueden ayudar con
                                    quienes necesitan asistencia, marcando una diferencia positiva en sus vidas.
                                </p>
                            </div>
                            <img
                                className="personas-donando"
                                alt="Personas donando"
                                src={personadonando}
                            />
                        </div>
                    </div>
                    
                </div>
                <Footer
                        className="footer-instance"
                        elSalvador= {elsalvador}
                        nuestrosProyectosClassName="footer-2"
                        property1="default"
                    />
            </div>
        </div>
    );
};



export default Inicio;