import React from "react";
import { Header } from "../../assets/Header/Header";
import { BtnDona } from "../../assets/btn/BtnDona";
import { BtnSolicitar } from "../../assets/btn/BtnSolicitar";
import { Footer } from "../../assets/Footer/Footer";
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
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full h-[4176px] relative">
        <div className="absolute w-full h-[627px] top-0 left-0">
          <div className="h-[627px] top-0 left-0 bg-[#fff2d8] overflow-hidden absolute w-full">
            <div className="relative w-[1585px] h-[792px] top-[-215px] left-[-16px]">
              <div className="absolute w-[180px] h-[60px] top-[679px] left-[117px] rounded-[5px]">
                <BtnDona className="!left-0 !pl-[30px] !pr-[70px] !py-[15px] !absolute !top-0" property1="default" />
                <img
                  className="absolute w-[32px] h-[30px] top-[15px] left-[128px] object-cover"
                  alt="Donar"
                  src={donar1}
                />
              </div>
              <div className="absolute w-[207px] h-[60px] top-[679px] left-[363px] rounded-[5px]">
                <BtnSolicitar
                  className="!pl-[30px] !pr-[70px] !py-[15px] !absolute !left-0 !top-0"
                  property1="default"
                />
                <img
                  className="absolute w-[54px] h-[47px] top-[7px] left-[145px] object-cover"
                  alt="Mano abierta"
                  src={Manoabierta}
                />
              </div>
              <div className="absolute w-[1585px] h-[792px] top-0 left-0">
                <div className="absolute w-[452px] h-[452px] top-[340px] left-[839px] bg-[#ead7bb] rounded-[226px]" />
                <div className="absolute w-[391px] h-[400px] top-0 left-[1194px] bg-[#bca37f] rounded-[195.5px/200px]" />
                <img
                  className="w-[452px] h-[452px] top-[340px] left-[845px] absolute object-cover"
                  alt="Image"
                  src={image1}
                />
                <p className="absolute w-[874px] top-[372px] left-0 [font-family:'Quando-Regular',Helvetica] font-normal text-black text-[75px] text-center tracking-[0] leading-[normal]">
                  {" "}
                  ¡Bienvenido a Échame la Mano!
                </p>
              </div>
              <p className="absolute w-[384px] top-[595px] left-[134px] [font-family:'Quando-Regular',Helvetica] font-normal text-[#00000080] text-[24px] text-center tracking-[0] leading-[normal]">
                Tu ayuda marca la diferencia
              </p>
            </div>
          </div>
          <Header className="!absolute !left-0 !bg-transparent !top-0" logo= {Logo} property1="default" />
        </div>
        <div className="absolute w-full h-[3405px] top-[771px] left-[-183px]">
          <div className="absolute w-full h-[1163px] top-0 left-[204px]">
            <div className="absolute w-[788px] h-[1163px] top-0 left-[855px]">
              <img className="w-[547px] h-[577px] top-0 left-0 absolute object-cover" alt="Image" src={image4} />
              <div className="absolute w-[609px] h-[609px] top-[554px] left-[179px] bg-[#ead7bb] rounded-[304.5px]" />
            </div>
            <div className="absolute w-[560px] top-[71px] left-0 [font-family:'Quando-Regular',Helvetica] font-normal text-black text-[80px] text-center tracking-[0] leading-[20px]">
              Conócenos
            </div>
            <p className="absolute w-[835px] top-[191px] left-[20px] [font-family:'Quando-Regular',Helvetica] font-normal text-black text-[30px] tracking-[0] leading-[50px]">
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
          <div className="h-[2420px] top-[985px] left-[183px] bg-[#113946] absolute w-full" />
          <div className="absolute w-[1559px] h-[912px] top-[1145px] left-0">
            <p className="absolute w-[797px] top-[313px] left-[756px] [font-family:'Quando-Regular',Helvetica] font-normal text-white text-[30px] text-right tracking-[0] leading-[50px]">
              En nuestra plataforma, brindamos a las personas la oportunidad de realizar donaciones significativas.
              Aquí, los usuarios pueden contribuir con productos de alta calidad y no perecederos, ya sea alimentos,
              artículos de higiene, ropa o cualquier otro producto esencial. Cada acto de generosidad cuenta y, a través
              de nuestra plataforma, facilitamos el proceso de donación, asegurando que su ayuda llegue a las manos
              adecuadas.
            </p>
            <div className="absolute top-[135px] left-[1232px] [text-shadow:0px_4px_4px_#00000040] [font-family:'Quando-Regular',Helvetica] font-normal text-white text-[80px] tracking-[0] leading-[normal]">
              Donar
            </div>
            <div className="absolute w-[816px] top-0 left-[452px] [font-family:'Quando-Regular',Helvetica] font-normal text-white text-[80px] text-center tracking-[0] leading-[19.2px]">
              Formas de ayudar
            </div>
            <div className="absolute w-[547px] h-[725px] top-[187px] left-[183px] bg-[url(ellipse-4.svg)] bg-[100%_100%]">
              <img
                className="absolute w-[471px] h-[462px] top-[126px] left-0 object-cover"
                alt="Pngtreevolunteer"
                src={personacamisa}
              />
            </div>
          </div>
          <div className="absolute w-full h-[725px] top-[2171px] left-[203px]">
            <div className="relative w-[1420px] h-[725px]">
              <img className="absolute w-[624px] h-[725px] top-0 left-[796px]" alt="Ellipse" src={ellipse5} />
              <div className="absolute w-[821px] h-[712px] top-[13px] left-0">
                <div className="absolute w-[452px] top-0 left-[26px] [text-shadow:0px_4px_4px_#00000040] [font-family:'Quando-Regular',Helvetica] font-normal text-white text-[80px] tracking-[0] leading-[normal]">
                  Solicitar
                </div>
                <p className="absolute w-[817px] top-[162px] left-0 [font-family:'Quando-Regular',Helvetica] font-normal text-white text-[30px] tracking-[0] leading-[50px]">
                  Nuestra plataforma no solo permite donar, sino también solicitar donaciones en momentos de necesidad.
                  Ofrecemos un espacio donde los usuarios pueden expresar sus necesidades y recibir apoyo de la
                  comunidad. Si atraviesas dificultades y necesitas alimentos, ropa u otros productos esenciales, puedes
                  utilizar nuestra plataforma. Buscamos fomentar la solidaridad y conectar a quienes pueden ayudar con
                  quienes necesitan asistencia, marcando una diferencia positiva en sus vidas.
                </p>
              </div>
              <img
                className="absolute w-[603px] h-[408px] top-[159px] left-[817px] object-cover"
                alt="Personas donando"
                src={personadonando}
              />
            </div>
          </div>
          <Footer
            className="!absolute !left-[183px] !top-[3060px]"
            elSalvador={elsalvador}
            nuestrosProyectosClassName="!mt-[-9.00px] !mb-[-5.00px]"
            property1="default"
          />
        </div>
      </div>
    </div>
  );
};




export default Inicio;