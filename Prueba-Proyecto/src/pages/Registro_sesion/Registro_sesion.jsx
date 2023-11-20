import React from "react";
import { BtnDona } from "../../assets/btn/BtnDona";
import { ClickAqui } from "../../assets/btn/ClickAqui";
import { Footer } from "../../assets/Footer/Footer";
import { Link } from "react-router-dom";
import contra1_1 from "../../assets/Registro_sesion/img/contra-1-1.png"
import contra1 from "../../assets/Registro_sesion/img/contra-1.png"
import elSalvador from "../../assets/Registro_sesion/img/el-salvador-3.png"
import ingresar from "../../assets/Registro_sesion/img/ingresar-1.png"
import logo from "../../assets/Registro_sesion/img/logo2-1.png"
import manos from "../../assets/Registro_sesion/img/manos-1.png"
import user_1_1 from "../../assets/Registro_sesion/img/user-1-1.png"
import user1 from "../../assets/Registro_sesion/img/user-1.png"

export const Registro_sesion = () => {
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
        <div className="absolute w-[656px] h-[676px] top-[63px] left-[80px] bg-[#bca37f] rounded-[25px_0px_0px_25px] overflow-hidden">
          <div className="absolute w-[199px] h-[58px] top-[578px] left-[228px]">
            <div className="relative h-[58px]">
              <BtnDona
                className="!pl-[30px] !pr-[60px] !py-[10px] !absolute !left-0 !top-[4px]"
                property1="default"
                text="Ingresar"
              />
              <img
                className="absolute w-[57px] h-[58px] top-0 left-[139px] object-cover"
                alt="Ingresar"
                src={ingresar}
              />
            </div>
          </div>
          <Link to = "/Inicio_sesion">
          <ClickAqui className="!absolute !left-[367px] !top-[645px]" property1="default" />
          </Link>
          <div className="absolute top-[644px] left-[158px] [font-family:'Cantata_One-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[20px] whitespace-nowrap">
            ¿Ya tienes cuenta?
          </div>
          <img
            className="absolute w-[145px] h-[135px] top-[23px] left-[256px] object-cover"
            alt="Manos"
            src={manos}
          />
          <div className="absolute w-[401px] h-[403px] top-[158px] left-[127px]">
            <div className="w-[403px] h-[85px] top-[318px] absolute left-0">
              <div className="w-[401px] h-[50px] top-[35px] bg-[#ead7bb] rounded-[10px] absolute left-0">
                <div className="absolute w-[65px] h-[50px] top-0 left-0 bg-[#ffffffcc] rounded-[10px_0px_0px_10px]" />
                <img
                  className="absolute w-[35px] h-[39px] top-[5px] left-[15px] object-cover"
                  alt="Contra"
                  src={contra1_1}
                />
                <input
                        type="text"
                        className="absolute w-[300px] h-[40px] top-[5px] left-[64px] p-[5px] bg-transparent border-none outline-none"
                        placeholder="Ingrese su telefono"
                />
              </div>
              <div className="top-0 [font-family:'Cantata_One-Regular',Helvetica] font-normal text-black text-[30px] tracking-[0] leading-[20px] whitespace-nowrap absolute left-0">
                Teléfono:
              </div>
            </div>
            <div className="absolute w-[403px] h-[85px] top-[211px] left-0">
              <div className="w-[401px] h-[50px] top-[35px] bg-[#ead7bb] rounded-[10px] absolute left-0">
                <div className="absolute w-[65px] h-[50px] top-0 left-0 bg-[#ffffffcc] rounded-[10px_0px_0px_10px]" />
                <img
                  className="absolute w-[31px] h-[31px] top-[9px] left-[16px] object-cover"
                  alt="Contra"
                  src={contra1}
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
            <div className="w-[403px] h-[88px] top-[106px] absolute left-0">
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
                        placeholder="Ingrese su DUI"
                    />
              </div>
              <div className="top-0 [font-family:'Cantata_One-Regular',Helvetica] font-normal text-black text-[30px] tracking-[0] leading-[20px] whitespace-nowrap absolute left-0">
                DUI:
              </div>
            </div>
            <div className="w-[403px] h-[88px] absolute top-0 left-0">
              <div className="absolute w-[401px] h-[50px] top-[38px] left-0 bg-[#ead7bb] rounded-[10px]">
                <div className="absolute w-[64px] h-[50px] top-0 left-0 bg-[#ffffffcc] rounded-[10px_0px_0px_10px]" />
                <img
                  className="absolute w-[47px] h-[40px] top-[5px] left-[9px] object-cover"
                  alt="User"
                  src={user_1_1}
                />
                <input
                        type="text"
                        className="absolute w-[300px] h-[40px] top-[5px] left-[64px] p-[5px] bg-transparent border-none outline-none"
                        placeholder="Ingrese su usuario"
                    />
              </div>
              <div className="[font-family:'Cantata_One-Regular',Helvetica] font-normal text-black text-[30px] tracking-[0] leading-[20px] whitespace-nowrap absolute top-0 left-0">
                Usuario:
              </div>
            </div>
          </div>
        </div>
        <Footer
          className="!absolute !left-0 !top-[800px]"
          elSalvador="el-salvador-3-2.png"
          nuestrosProyectosClassName="!mt-[-9.00px] !mb-[-5.00px]"
          property1="default"
        />
      </div>
    </div>
  );
};

export default Registro_sesion;