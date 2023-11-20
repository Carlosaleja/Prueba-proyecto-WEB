import React from "react";
import { Header } from "../assets/Header";

export const Inicio = () => {
    return (
        <div className="inicio">
            <div className="div-2">
                <div className="overlap-2">
                    <div className="fondo-header">
                        <div className="overlap-3">
                
                            <div className="overlap-5">
                                <div className="ellipse" />
                                <div className="ellipse-2" />
                                <img className="image" alt="Image" src="image-1.png" />
                                <p className="bienvenido-a-chame"> ¡Bienvenido a Échame la Mano!</p>
                            </div>
                            <p className="text-wrapper-11">Tu ayuda marca la diferencia</p>
                        </div>
                    </div>
                    <Header className="header-instance" logo="image.png" property1="default" />
                </div>
                <div className="overlap-6">
                    <div className="conocenos">
                        <div className="overlap-7">
                            <img className="img" alt="Image" src="image-4.png" />
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
                    <div className="formas-de-ayudar">
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
                                src="pngtree-volunteer-clothes-and-supplies-donation-6685997-1.png"
                            />
                        </div>
                    </div>
                    <div className="solicitar">
                        <div className="overlap-8">
                            <img className="ellipse-4" alt="Ellipse" src="ellipse-5.svg" />
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
                                src="personas-donando-ropa-libros-comida-caja-embalaje-voluntarios-donacion-ilustracion-dibujos-animados-74855-14479-1.png"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default Inicio;