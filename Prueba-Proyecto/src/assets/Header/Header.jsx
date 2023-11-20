import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./img/Logo+ 1.svg"

export const Header = ({ property1, className }) => {
    return (
      <div className={`w-[1440px] h-[144px] overflow-hidden relative ${className}`}>
        <img
          className="w-[141px] left-[14px] top-0 object-cover h-[144px] absolute"
          alt="Logo"
          src= {Logo}
        />
        <div className="[font-family:'Quando-Regular',Helvetica] w-[229px] left-[170px] tracking-[0] text-[24px] top-[57px] text-[#113946] absolute font-normal leading-[normal]">
          Echame la mano
        </div>
        <div
          className={`w-[720px] left-[745px] top-[54px] absolute ${property1 === "variant-2" ? "h-[44px]" : "h-[33px]"} ${
            ["variant-4", "variant-5", "variant-6", "variant-7"].includes(property1) ? "overflow-hidden" : ""
          }`}
        >
          <div
            className={`absolute ${property1 === "variant-2" ? "border-black" : ""} ${
              property1 === "variant-2" ? "inline-flex" : ""
            } ${property1 === "variant-2" ? "items-center" : ""} ${
              property1 === "variant-2" ? "top-[-6px]" : "top-[3px]"
            } ${
              ["default", "variant-3", "variant-4", "variant-5", "variant-6", "variant-7"].includes(property1)
                ? "text-black"
                : ""
            } ${property1 === "variant-2" ? "p-[10px]" : ""} ${property1 === "variant-2" ? "border-b" : ""} ${
              ["default", "variant-3", "variant-4", "variant-5", "variant-6", "variant-7"].includes(property1)
                ? "[font-family:'Quando-Regular',Helvetica]"
                : ""
            } ${
              ["default", "variant-3", "variant-4", "variant-5", "variant-6", "variant-7"].includes(property1)
                ? "leading-[normal]"
                : ""
            } ${
              ["default", "variant-3", "variant-4", "variant-5", "variant-6", "variant-7"].includes(property1)
                ? "w-[50px]"
                : ""
            } ${
              ["default", "variant-3", "variant-4", "variant-5", "variant-6", "variant-7"].includes(property1)
                ? "font-normal"
                : ""
            } ${
              ["default", "variant-3", "variant-4", "variant-5", "variant-6", "variant-7"].includes(property1)
                ? "text-[16px]"
                : ""
            } ${property1 === "variant-2" ? "gap-[10px]" : ""} ${
              property1 === "variant-2" ? "[border-bottom-style:solid]" : ""
            } ${property1 === "variant-2" ? "left-0" : "left-[10px]"} ${
              ["default", "variant-3", "variant-4", "variant-5", "variant-6", "variant-7"].includes(property1)
                ? "tracking-[0]"
                : ""
            } ${property1 === "variant-2" ? "justify-center" : ""}`}
          >
            {["default", "variant-3", "variant-4", "variant-5", "variant-6", "variant-7"].includes(property1) && (
              <Link to= "/Inicio">Inicio</Link>
            )}
  
            {property1 === "variant-2" && (
              <div className="relative w-[49px] h-[18px] mt-[-1.00px] [font-family:'Quando-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                Inicio
              </div>
            )}
          </div>
          <div
            className={`absolute ${property1 === "variant-3" ? "border-black" : ""} ${
              property1 === "variant-3" ? "inline-flex" : ""
            } ${property1 === "variant-3" ? "items-center" : ""} ${
              property1 === "variant-3" ? "top-[-6px]" : "top-[3px]"
            } ${
              ["default", "variant-2", "variant-4", "variant-5", "variant-6", "variant-7"].includes(property1)
                ? "text-[#00000080]"
                : ""
            } ${property1 === "variant-3" ? "p-[10px]" : ""} ${property1 === "variant-3" ? "border-b" : ""} ${
              ["default", "variant-2", "variant-4", "variant-5", "variant-6", "variant-7"].includes(property1)
                ? "[font-family:'Quando-Regular',Helvetica]"
                : ""
            } ${
              ["default", "variant-2", "variant-4", "variant-5", "variant-6", "variant-7"].includes(property1)
                ? "leading-[normal]"
                : ""
            } ${
              ["default", "variant-2", "variant-4", "variant-5", "variant-6", "variant-7"].includes(property1)
                ? "w-[60px]"
                : ""
            } ${
              ["default", "variant-2", "variant-4", "variant-5", "variant-6", "variant-7"].includes(property1)
                ? "font-normal"
                : ""
            } ${
              ["default", "variant-2", "variant-4", "variant-5", "variant-6", "variant-7"].includes(property1)
                ? "text-[16px]"
                : ""
            } ${property1 === "variant-3" ? "gap-[10px]" : ""} ${
              property1 === "variant-3" ? "[border-bottom-style:solid]" : ""
            } ${property1 === "variant-3" ? "left-[74px]" : "left-[84px]"} ${
              ["default", "variant-2", "variant-4", "variant-5", "variant-6", "variant-7"].includes(property1)
                ? "tracking-[0]"
                : ""
            } ${property1 === "variant-3" ? "h-[39px]" : ""} ${property1 === "variant-3" ? "justify-center" : ""}`}
          >
            {["default", "variant-2", "variant-4", "variant-5", "variant-6", "variant-7"].includes(property1) && (
              <Link to= "/Home" >Home</Link>
            )}
  
            {property1 === "variant-3" && (
              <div className="relative w-fit mt-[-1.50px] [font-family:'Quando-Regular',Helvetica] font-normal text-[#00000080] text-[16px] tracking-[0] leading-[normal]">
                Home
              </div>
            )}
          </div>
          <div
            className={`absolute ${property1 === "variant-5" ? "border-black" : ""} ${
              property1 === "variant-5" ? "inline-flex" : ""
            } ${property1 === "variant-5" ? "items-center" : ""} ${
              property1 === "variant-5" ? "top-[-6px]" : "top-[3px]"
            } ${
              ["default", "variant-2", "variant-3", "variant-4", "variant-6", "variant-7"].includes(property1)
                ? "text-[#00000080]"
                : ""
            } ${property1 === "variant-5" ? "p-[10px]" : ""} ${property1 === "variant-5" ? "border-b-2" : ""} ${
              ["default", "variant-2", "variant-3", "variant-4", "variant-6", "variant-7"].includes(property1)
                ? "[font-family:'Quando-Regular',Helvetica]"
                : ""
            } ${
              ["default", "variant-2", "variant-3", "variant-4", "variant-6", "variant-7"].includes(property1)
                ? "leading-[normal]"
                : ""
            } ${
              ["default", "variant-2", "variant-3", "variant-4", "variant-6", "variant-7"].includes(property1)
                ? "w-[154px]"
                : ""
            } ${
              ["default", "variant-2", "variant-3", "variant-4", "variant-6", "variant-7"].includes(property1)
                ? "font-normal"
                : ""
            } ${
              ["default", "variant-2", "variant-3", "variant-4", "variant-6", "variant-7"].includes(property1)
                ? "text-[16px]"
                : ""
            } ${property1 === "variant-5" ? "gap-[10px]" : ""} ${
              property1 === "variant-5" ? "[border-bottom-style:solid]" : ""
            } ${property1 === "variant-5" ? "left-[279px]" : "left-[289px]"} ${
              ["default", "variant-2", "variant-3", "variant-4", "variant-6", "variant-7"].includes(property1)
                ? "tracking-[0]"
                : ""
            } ${property1 === "variant-5" ? "justify-center" : ""}`}
          >
            {["default", "variant-2", "variant-3", "variant-4", "variant-6", "variant-7"].includes(property1) && (
              <>Formas de Ayuda</>
            )}
  
            {property1 === "variant-5" && (
              <div className="relative w-fit mt-[-2.00px] [font-family:'Quando-Regular',Helvetica] font-normal text-[#00000080] text-[16px] tracking-[0] leading-[normal]">
                Formas de Ayuda
              </div>
            )}
          </div>
          <div
            className={`absolute ${property1 === "variant-4" ? "border-black" : ""} ${
              property1 === "variant-4" ? "inline-flex" : ""
            } ${property1 === "variant-4" ? "items-center" : ""} ${
              property1 === "variant-4" ? "top-[-6px]" : "top-[3px]"
            } ${
              ["default", "variant-2", "variant-3", "variant-5", "variant-6", "variant-7"].includes(property1)
                ? "text-[#00000080]"
                : ""
            } ${property1 === "variant-4" ? "p-[10px]" : ""} ${property1 === "variant-4" ? "border-b-2" : ""} ${
              ["default", "variant-2", "variant-3", "variant-5", "variant-6", "variant-7"].includes(property1)
                ? "[font-family:'Quando-Regular',Helvetica]"
                : ""
            } ${
              ["default", "variant-2", "variant-3", "variant-5", "variant-6", "variant-7"].includes(property1)
                ? "leading-[normal]"
                : ""
            } ${
              ["default", "variant-2", "variant-3", "variant-5", "variant-6", "variant-7"].includes(property1)
                ? "w-[97px]"
                : ""
            } ${
              ["default", "variant-2", "variant-3", "variant-5", "variant-6", "variant-7"].includes(property1)
                ? "font-normal"
                : ""
            } ${
              ["default", "variant-2", "variant-3", "variant-5", "variant-6", "variant-7"].includes(property1)
                ? "text-[16px]"
                : ""
            } ${property1 === "variant-4" ? "gap-[10px]" : ""} ${
              property1 === "variant-4" ? "[border-bottom-style:solid]" : ""
            } ${property1 === "variant-4" ? "left-[158px]" : "left-[168px]"} ${
              ["default", "variant-2", "variant-3", "variant-5", "variant-6", "variant-7"].includes(property1)
                ? "tracking-[0]"
                : ""
            } ${property1 === "variant-4" ? "justify-center" : ""}`}
          >
            {["default", "variant-2", "variant-3", "variant-5", "variant-6", "variant-7"].includes(property1) && (
              <>Conocenos</>
            )}
  
            {property1 === "variant-4" && (
              <div className="relative w-fit mt-[-2.00px] [font-family:'Quando-Regular',Helvetica] font-normal text-[#00000080] text-[16px] tracking-[0] leading-[normal]">
                Conocenos
              </div>
            )}
          </div>
          <div
            className={`absolute ${property1 === "variant-6" ? "border-black" : ""} ${
              property1 === "variant-6" ? "inline-flex" : ""
            } ${property1 === "variant-6" ? "items-center" : ""} ${
              property1 === "variant-6" ? "top-[-6px]" : "top-[3px]"
            } ${
              ["default", "variant-2", "variant-3", "variant-4", "variant-5", "variant-7"].includes(property1)
                ? "text-[#00000080]"
                : ""
            } ${property1 === "variant-6" ? "p-[10px]" : ""} ${property1 === "variant-6" ? "border-b-2" : ""} ${
              ["default", "variant-2", "variant-3", "variant-4", "variant-5", "variant-7"].includes(property1)
                ? "[font-family:'Quando-Regular',Helvetica]"
                : ""
            } ${
              ["default", "variant-2", "variant-3", "variant-4", "variant-5", "variant-7"].includes(property1)
                ? "leading-[normal]"
                : ""
            } ${
              ["default", "variant-2", "variant-3", "variant-4", "variant-5", "variant-7"].includes(property1)
                ? "w-[99px]"
                : ""
            } ${
              ["default", "variant-2", "variant-3", "variant-4", "variant-5", "variant-7"].includes(property1)
                ? "font-normal"
                : ""
            } ${
              ["default", "variant-2", "variant-3", "variant-4", "variant-5", "variant-7"].includes(property1)
                ? "text-[16px]"
                : ""
            } ${property1 === "variant-6" ? "gap-[10px]" : ""} ${
              property1 === "variant-6" ? "[border-bottom-style:solid]" : ""
            } ${property1 === "variant-6" ? "left-[457px]" : "left-[467px]"} ${
              ["default", "variant-2", "variant-3", "variant-4", "variant-5", "variant-7"].includes(property1)
                ? "tracking-[0]"
                : ""
            } ${property1 === "variant-6" ? "justify-center" : ""}`}
          >
            {["default", "variant-2", "variant-3", "variant-4", "variant-5", "variant-7"].includes(property1) && (
              <Link to= "/Solicitudes">Solicitudes</Link>
            )}
  
            {property1 === "variant-6" && (
              <div className="relative w-fit mt-[-2.00px] [font-family:'Quando-Regular',Helvetica] font-normal text-[#00000080] text-[16px] tracking-[0] leading-[normal]">
                Solicitudes
              </div>
            )}
          </div>
          <div
            className={`absolute ${property1 === "variant-7" ? "border-black" : ""} ${
              property1 === "variant-7" ? "inline-flex" : ""
            } ${property1 === "variant-7" ? "items-center" : ""} ${
              property1 === "variant-7" ? "top-[-6px]" : "top-[3px]"
            } ${
              ["default", "variant-2", "variant-3", "variant-4", "variant-5", "variant-6"].includes(property1)
                ? "text-[#00000080]"
                : ""
            } ${property1 === "variant-7" ? "p-[10px]" : ""} ${property1 === "variant-7" ? "border-b-2" : ""} ${
              ["default", "variant-2", "variant-3", "variant-4", "variant-5", "variant-6"].includes(property1)
                ? "[font-family:'Quando-Regular',Helvetica]"
                : ""
            } ${
              ["default", "variant-2", "variant-3", "variant-4", "variant-5", "variant-6"].includes(property1)
                ? "leading-[normal]"
                : ""
            } ${
              ["default", "variant-2", "variant-3", "variant-4", "variant-5", "variant-6"].includes(property1)
                ? "w-[84px]"
                : ""
            } ${
              ["default", "variant-2", "variant-3", "variant-4", "variant-5", "variant-6"].includes(property1)
                ? "font-normal"
                : ""
            } ${
              ["default", "variant-2", "variant-3", "variant-4", "variant-5", "variant-6"].includes(property1)
                ? "text-[16px]"
                : ""
            } ${property1 === "variant-7" ? "gap-[10px]" : ""} ${
              property1 === "variant-7" ? "[border-bottom-style:solid]" : ""
            } ${property1 === "variant-7" ? "left-[580px]" : "left-[590px]"} ${
              ["default", "variant-2", "variant-3", "variant-4", "variant-5", "variant-6"].includes(property1)
                ? "tracking-[0]"
                : ""
            } ${property1 === "variant-7" ? "justify-center" : ""}`}
          >
            {["default", "variant-2", "variant-3", "variant-4", "variant-5", "variant-6"].includes(property1) && (
              <Link to = "/Participa">Participa</Link>
            )}
  
            {property1 === "variant-7" && (
              <div className="relative w-fit mt-[-2.00px] [font-family:'Quando-Regular',Helvetica] font-normal text-[#00000080] text-[16px] tracking-[0] leading-[normal]">
                Participa
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  Header.propTypes = {
    property1: PropTypes.oneOf(["default", "variant-5", "variant-2", "variant-3", "variant-4", "variant-7", "variant-6"]),
  };
  
  
  

export default Header;