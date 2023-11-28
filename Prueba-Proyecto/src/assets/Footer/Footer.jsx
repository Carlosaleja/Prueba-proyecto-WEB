import PropTypes from "prop-types";
import React from "react";
import Logo from "./img/el-salvador-3.png"
import { Link } from "react-router-dom";

export const Footer = ({ property1, className }) => {
    return (
      <div className="absolute bottom -0 w-full h-[350px] top-[8px] bg-[#898b8a] flex items-center">

        <div >
        <img
              className="absolute w-[136px] h-[148px] top-[8px] p-2 left-0 object-cover"
              alt="El salvador"
              src={Logo}
        />

        <p className="absolute w-[274px] p-2 top-[167px] left-[2px] [font-family:'Quando-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
              Entidad sin fines de lucro registrada en El Salvador
         </p>
        </div>

        <div>

        <div className="flex w-[320px] h-[100vh] items-center justify-center gap-[10px] p-[10px] absolute top-0 left-0 border-l-2 [border-left-style:solid] border-black">
              <p className="relative w-fit mt-[-13.50px] mb-[-9.50px] [font-family:'Quando-Regular',Helvetica] font-normal text-black text-[27px] tracking-[0] leading-[normal]">
                <span className="[font-family:'Quando-Regular',Helvetica] font-normal text-black text-[27px] tracking-[0]">
                  Nuestros Proyectos :<br />
                </span>
                <span className="text-[24px]">
                  <br />
                  Ayuda solidaria <br />
                  <br />
                  Recibe tu ayuda <br />
                </span>
              </p>
         </div>

          <div className="flex w-[402px] h-[107px] items-center justify-center gap-[10px] p-[10px] absolute top-0 left-[371px] border-l-2 [border-left-style:solid] border-black">
              <p className="relative w-[372px] mt-[-7.58px] mb-[-3.58px] [font-family:'Quando-Regular',Helvetica] font-normal text-black text-[27px] tracking-[0] leading-[normal]">
                <span className="[font-family:'Quando-Regular',Helvetica] font-normal text-black text-[27px] tracking-[0]">
                  Contáctanos :<br />
                  <br />
                </span>
                <span className="text-[24px]">echamelamano@gmail.com</span>
              </p>
            </div>
        </div>

        <div className="absolute bottom-0 flex items-center w-full h-[104px] bg-black p-2">
        <p className="font-sans text-white text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              © 2023 Échame la Mano. All Rights Reserved.
        </p>
        </div>
      </div>
    );
  };
  
  Footer.propTypes = {
    property1: PropTypes.oneOf(["default"]),
  };