import React, { useState } from "react";
import { BtnDona } from "../../assets/btn/BtnDona";
import { BtnSolicitar } from "../../assets/btn/BtnSolicitar";
import { Footer } from "../../assets/Footer/Footer";
import { Link } from "react-router-dom";
import editar from "../../assets/Inicio_sesion/img/editar-1.png"
import ingresar from "../../assets/Inicio_sesion/img/ingresar-1.png"
import logo from "../../assets/Inicio_sesion/img/logo2-1.png"
import manos from "../../assets/Inicio_sesion/img/manos-1.png"
import user1_1 from "../../assets/Inicio_sesion/img/user-1-1.png"
import user1 from "../../assets/Inicio_sesion/img/user-1.png"


export const Inicio_sesion = () => {
    const [texto, setTexto] = useState('');
    return (
        <div className="bg-[#fff2d8] flex flex-row justify-center w-full">
      <div className="bg-[#fff2d8] w-full h-[1145px] relative">
        <div className="absolute w-[644px] h-[676px] top-[63px] left-[736px]">
          <div className="relative w-[646px] h-[676px]">
            <div className="absolute w-[642px] h-[676px] top-0 left-0 bg-[#ead7bb] rounded-[0px_30px_30px_0px]" />
            <div className="absolute w-[356px] h-[492px] top-[91px] left-[143px] bg-[#bca37f] rounded-[20px] shadow-[0px_4px_4px_#00000040]" />
            <img
              className="absolute w-[364px] h-[346px] top-0 left-[282px] object-cover"
              alt="Logo"
              src={logo}
            />
            <div className="flex flex-col items-start gap-[60px] absolute w-[372px] h-[209px] top-[338px] left-[160px]">
              <p className="relative self-stretch [font-family:'Cantata_One-Regular',Helvetica] font-normal text-white text-[80px] tracking-[0] leading-[20px]">
                <span className="[font-family:'Cantata_One-Regular',Helvetica] font-normal text-white text-[80px] tracking-[0] leading-[20px]">
                  Échame <br />
                </span>
              </p>
              <p className="relative self-stretch [font-family:'Cantata_One-Regular',Helvetica] font-normal text-white text-[80px] tracking-[0] leading-[20px]">
                <span className="[font-family:'Cantata_One-Regular',Helvetica] font-normal text-white text-[80px] tracking-[0] leading-[20px]">
                  La
                  <br />
                </span>
              </p>
              <p className="relative self-stretch [font-family:'Cantata_One-Regular',Helvetica] font-normal text-white text-[80px] tracking-[0] leading-[20px]">
                <span className="[font-family:'Cantata_One-Regular',Helvetica] font-normal text-white text-[80px] tracking-[0] leading-[20px]">
                  Mano
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="absolute w-[656px] h-[676px] top-[63px] left-[80px]">
          <div className="relative h-[676px] bg-[#bca37f] rounded-[25px_0px_0px_25px] overflow-hidden">
            <div className="absolute w-[209px] h-[60px] top-[573px] left-[58px]">
              <div className="relative h-[60px] rounded-[5px]">
                <Link to = "/Solicitudes">
                <BtnDona
                  className="!pl-[30px] !pr-[70px] !py-[15px] !absolute !left-0 !top-0"
                  property1="default"
                  text="Ingresar"
                />
                </Link>
                <img
                  className="absolute w-[57px] h-[58px] top-[2px] left-[144px] object-cover"
                  alt="Ingresar"
                  src={ingresar}
                />
              </div>
            </div>
            <div className="absolute w-[246px] h-[60px] top-[573px] left-[339px]">
              <div className="relative h-[60px] rounded-[5px]">
                <Link to = "/Registro_sesion">
                <BtnSolicitar
                  className="!pl-[30px] !pr-[70px] !py-[15px] !absolute !left-0 !top-0"
                  property1="default"
                  text="Registrarse"
                />
                </Link>
                <img
                  className="absolute w-[45px] h-[44px] top-[8px] left-[189px] object-cover"
                  alt="Editar"
                  src={editar}
                />
              </div>
            </div>
            <img
              className="absolute w-[208px] h-[194px] top-[40px] left-[235px] object-cover"
              alt="Manos"
              src={manos}
            />
            <div className="absolute w-[401px] h-[198px] top-[298px] left-[146px]">
              <div className="w-[403px] h-[88px] top-[110px] absolute left-0">
                <div className="absolute w-[401px] h-[50px] top-[38px] left-0 bg-[#ead7bb] rounded-[10px]">
                  <div className="absolute w-[64px] h-[50px] top-0 left-0 bg-[#ffffffcc] rounded-[10px_0px_0px_10px]" />
                  <img
                    className="absolute w-[40px] h-[40px] top-[5px] left-[12px] object-cover"
                    alt="User"
                    src={user1_1}
                  />
                  <input
                        type="text"
                        className="absolute w-[300px] h-[40px] top-[5px] left-[64px] p-[5px] bg-transparent border-none outline-none"
                        placeholder="Ingrese su contraseña"
                    />
                </div>
                <div className="absolute top-0 left-0 [font-family:'Cantata_One-Regular',Helvetica] font-normal text-black text-[30px] tracking-[0] leading-[20px] whitespace-nowrap">
                  Contraseña:
                </div>
              </div>
              <div className="absolute w-[403px] h-[88px] top-0 left-0">
                <div className="absolute w-[401px] h-[50px] top-[38px] left-0 bg-[#ead7bb] rounded-[10px]">
                  <div className="absolute w-[64px] h-[50px] top-0 left-0 bg-[#ffffffcc] rounded-[10px_0px_0px_10px]" />
                  <img
                    className="absolute w-[47px] h-[40px] top-[5px] left-[9px] object-cover"
                    alt="User"
                    src={user1}
                  />
                  <input
                        type="text"
                        className="absolute w-[300px] h-[40px] top-[5px] left-[64px] p-[5px] bg-transparent border-none outline-none"
                        placeholder="Ingrese tu DUI"
                    />
                </div>
                <div className="top-0 [font-family:'Cantata_One-Regular',Helvetica] font-normal text-black text-[30px] tracking-[0] leading-[20px] whitespace-nowrap absolute left-0">
                  DUI:
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Inicio_sesion;