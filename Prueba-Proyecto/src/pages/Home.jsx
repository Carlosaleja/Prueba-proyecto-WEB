import React from "react";
import Header from "../assets/Header";
import "./Home.css";

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
                            <img className="ellipse" alt="Ellipse" src="ellipse-4.svg" />
                            <div className="ellipse-2" />
                            <img className="usuario" alt="Usuario" src="usuario-1.png" />
                        </div>
                        <div className="btn">
                            <div className="overlap-group-2">
                          
                                <img className="avion-de-papel" alt="Avion de papel" src="avion-de-papel-1-1.png" />
                            </div>
                        </div>
                    </div>
                    <div className="dona-tu-ayuda">
                        <div className="overlap-4">
                            <div className="overlap-4">
                                <img className="ellipse-3" alt="Ellipse" src="ellipse-5.svg" />
                                <p className="text-wrapper-11">
                                    Crea un anuncio de donación para dar lo que no usas y brindar a otros una segunda oportunidad,
                                    recordando que tu donación puede marcar la diferencia.
                                </p>
                                <div className="ellipse-4" />
                                <img className="donacion" alt="Donacion" src="donacion-1-1.png" />
                            </div>
                            <div className="text-wrapper-12">Dona tu Ayuda</div>
                        </div>
                        <div className="overlap-group-wrapper">
                            <div className="overlap-group-2">
                   
                                <img className="avion-de-papel" alt="Avion de papel" src="image.png" />
                            </div>
                        </div>
                    </div>
     
                </div>
                <div className="overlap-5">
                    <div className="fondo-header">
                        <div className="overlap-group-3">
                            <div className="ellipse-5" />
                            <div className="ellipse-6" />
                            <img className="image" alt="Image" src="image-1.png" />
                        </div>
                        <p className="text-wrapper-13">Tu ayuda marca la diferencia</p>
                        <div className="text-wrapper-14">Home</div>
                    </div>
                    <Header
                        className="header-instance"
                        divClassName="header-2"
                        divClassNameOverride="header-3"
                        logo="logo-1-2.png"
                        property1="default"
                    />
                </div>
                <div className="imagen">
                    <div className="overlap-6">
                        <div className="rectangle-2" />
                        <img className="image-2" alt="Image" src="image-2.png" />
                    </div>
                </div>
                <div className="overlap-wrapper">
                    <div className="overlap-7">
                        <div className="rectangle-3" />
                        <img className="image-3" alt="Image" src="image-3.png" />
                    </div>
                </div>
                <div className="solicitudes">
                    <div className="overlap-8">
                        <div className="ellipse-7" />
                        <div className="ellipse-8" />
                        <img className="solicitud-de" alt="Solicitud de" src="solicitud-de-cotizacion-1.png" />
                    </div>
                    <div className="text-wrapper-15">Solicitudes</div>
                    <p className="text-wrapper-16">
                        Descubre los perfiles de aquellos que buscan tu apoyo y obtén más información sobre sus solicitudes.
                    </p>
                    <div className="div-wrapper">
                        <div className="overlap-group-4">
                          
                            <img className="avion-de-papel-2" alt="Avion de papel" src="avion-de-papel-1.png" />
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
                            <img className="donacion-2" alt="Donacion" src="donacion-1.png" />
                        </div>
                        <div className="btn-2">
                            <div className="overlap-group-4">
                    
                                <img className="avion-de-papel-2" alt="Avion de papel" src="avion-de-papel-2.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Home;