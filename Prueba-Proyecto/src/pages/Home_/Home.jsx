import React from "react";
import Header from "../../assets/Header/Header";
import { BtnDona } from "../../assets/btn/BtnDona";
import { BtnSolicitar } from "../../assets/btn/BtnSolicitar";
import { Footer } from "../../assets/Footer/Footer";
import { Link } from "react-router-dom";
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
        <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full h-[7421px] relative">
        <div className="absolute w-full h-[2724px] top-[4697px] left-[-198px]">
          <div className="w-full h-[2724px] left-[196px] bg-[#113946] absolute top-0" />
          <div className="absolute w-full h-[922px] top-[136px] left-0">
            <p className="absolute w-[826px] top-[302px] left-[760px] [font-family:'Cantata_One-Regular',Helvetica] font-normal text-white text-[50px] text-right tracking-[0] leading-[normal]">
              Crear tu perfil para que más personas puedan ofrecerte el apoyo que necesitas. Puedes describir tu
              situación y cómo te pueden contactar para ayudarte a avanzar.
            </p>
            <div className="absolute top-0 left-[873px] [text-shadow:0px_4px_4px_#00000040] [font-family:'Quando-Regular',Helvetica] font-normal text-white text-[80px] tracking-[0] leading-[normal]">
              Perfil de Ayuda
            </div>
            <div className="absolute w-[725px] h-[725px] top-[53px] left-0">
              <img className="absolute w-[527px] h-[725px] top-0 left-[198px]" alt="Ellipse" src={ellipse4} />
              <div className="absolute w-[656px] h-[656px] top-[26px] left-0 bg-[#fff2d8] rounded-[328px]" />
              <img
                className="absolute w-[351px] h-[351px] top-[137px] left-[240px] object-cover"
                alt="Usuario"
                src={usuario}
              />
            </div>
            <div className="absolute w-[236px] h-[100px] top-[822px] left-[1262px]">
              <div className="relative h-[100px] rounded-[8.42px]">
                <Link to = "/Inicio_sesion">
                <BtnSolicitar
                  className="!rounded-[8.42px] !gap-[16.83px] !pl-[25.5px] !pr-[110px] !py-[25.25px] !absolute !left-0 !top-0"
                  divClassName="!mt-[-1.68px] !text-[40.4px]"
                  property1="default"
                  text="click"
                />
                </Link>
                <img
                  className="absolute w-[63px] h-[63px] top-[18px] left-[154px] object-cover"
                  alt="Avion de papel"
                  src={avion1}
                />
              </div>
            </div>
          </div>
          <div className="absolute w-[1571px] h-[858px] top-[1283px] left-[246px]">
            <div className="absolute w-[1567px] h-[725px] top-0 left-0">
              <div className="absolute w-[1567px] h-[725px] top-0 left-0">
                <img className="absolute w-[555px] h-[725px] top-0 left-[837px]" alt="Ellipse" src={ellipse5} />
                <p className="absolute w-[837px] top-[259px] left-0 [font-family:'Quando-Regular',Helvetica] font-normal text-white text-[50px] tracking-[0] leading-[normal]">
                  Crea un anuncio de donación para dar lo que no usas y brindar a otros una segunda oportunidad,
                  recordando que tu donación puede marcar la diferencia.
                </p>
                <div className="absolute w-[663px] h-[663px] top-[31px] left-[904px] bg-[#bca37f] rounded-[331.5px]" />
                <img
                  className="absolute w-[351px] h-[351px] top-[196px] left-[1002px] object-cover"
                  alt="Donacion"
                  src={donacion1_1}
                />
              </div>
              <div className="absolute w-[770px] top-[97px] left-[27px] [text-shadow:0px_4px_4px_#00000040] [font-family:'Quando-Regular',Helvetica] font-normal text-white text-[80px] tracking-[0] leading-[normal]">
                Dona tu Ayuda
              </div>
            </div>
            <div className="absolute w-[236px] h-[100px] top-[757px] left-[243px]">
              <div className="relative h-[100px] rounded-[8.42px]">
                <Link to = "/Inicio_sesion">
                <BtnSolicitar
                  className="!rounded-[8.42px] !gap-[16.83px] !pl-[25.5px] !pr-[110px] !py-[25.25px] !absolute !left-0 !top-0"
                  divClassName="!mt-[-1.68px] !text-[40.4px]"
                  property1="default"
                  text="click"
                />
                </Link>
                <img
                  className="absolute w-[63px] h-[63px] top-[18px] left-[154px] object-cover"
                  alt="Avion de papel"
                  src={avion1}
                />
              </div>
            </div>
          </div>
          <Footer
            className="!absolute !left-[198px] !top-[2379px]"
            elSalvador="el-salvador-3-2.png"
            nuestrosProyectosClassName="!mt-[-9.00px] !mb-[-5.00px]"
            property1="default"
          />
        </div>
        <div className="absolute w-full h-[627px] top-0 left-0">
          <div className="w-full h-[627px] left-0 bg-[#fff2d8] overflow-hidden absolute top-0">
            <div className="absolute w-[746px] h-[792px] top-[-215px] left-[823px]">
              <div className="absolute w-[391px] h-[400px] top-0 left-[355px] bg-[#bca37f] rounded-[195.5px/200px]" />
              <div className="absolute w-[452px] h-[452px] top-[340px] left-0 bg-[#ead7bb] rounded-[226px]" />
              <img
                className="w-[452px] h-[452px] top-[325px] absolute left-0 object-cover"
                alt="Image"
                src={image1}
              />
            </div>
            <p className="absolute w-[384px] top-[415px] left-[230px] [font-family:'Quando-Regular',Helvetica] font-normal text-[#00000080] text-[24px] text-center tracking-[0] leading-[normal]">
              Tu ayuda marca la diferencia
            </p>
            <div className="absolute w-[464px] top-[208px] left-[190px] [font-family:'Quando-Regular',Helvetica] font-normal text-black text-[128px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Home
            </div>
          </div>
          <Header
            className="!absolute !left-0 !bg-transparent !top-0"
            divClassName="!text-[#00000080]"
            divClassNameOverride="!text-black"
            logo={logo_1_3}
            property1="default"
          />
        </div>
        <div className="absolute w-[1111px] h-[760px] top-[3686px] left-[181px]">
          <div className="relative h-[760px]">
            <div className="absolute w-[1066px] h-[604px] top-[156px] left-[45px] bg-[#113946]" />
            <img className="w-[1060px] h-[706px] top-0 absolute left-0 object-cover" alt="Image" src={image2} />
          </div>
        </div>
        <div className="absolute w-[1102px] h-[697px] top-[1641px] left-[190px]">
          <div className="relative h-[697px]">
            <div className="absolute w-[1045px] h-[648px] top-[49px] left-[57px] bg-[#113946]" />
            <img className="w-[1060px] h-[644px] top-0 absolute left-0 object-cover" alt="Image" src={image3} />
          </div>
        </div>
        <div className="absolute w-[1554px] h-[786px] top-[710px] left-[25px]">
          <div className="absolute w-[700px] h-[786px] top-0 left-[850px]">
            <div className="absolute w-[700px] h-[700px] top-0 left-0 bg-[#ead7bb] rounded-[350px]" />
            <div className="absolute w-[250px] h-[250px] top-[536px] left-[403px] bg-[#bca37f] rounded-[125px]" />
            <img
              className="absolute w-[330px] h-[330px] top-[159px] left-[185px] object-cover"
              alt="Solicitud de"
              src={solicitud}
            />
          </div>
          <div className="absolute w-[560px] top-[82px] left-0 [font-family:'Quando-Regular',Helvetica] font-normal text-black text-[80px] text-center tracking-[0] leading-[20px]">
            Solicitudes
          </div>
          <p className="absolute w-[805px] top-[250px] left-[19px] [font-family:'Quando-Regular',Helvetica] font-normal text-black text-[50px] tracking-[0] leading-[normal]">
            Descubre los perfiles de aquellos que buscan tu apoyo y obtén más información sobre sus solicitudes.
          </p>
          <div className="absolute w-[280px] h-[122px] top-[600px] left-[187px]">
            <div className="relative h-[122px] rounded-[10.17px]">
                <Link to = "/Inicio_sesion">
              <BtnDona
                className="!rounded-[10.17px] !gap-[20.33px] !pl-[30.5px] !pr-[130px] !py-[30.5px] !absolute !left-0 !top-0"
                divClassName="!mt-[-2.03px] !text-[48.8px]"
                property1="default"
                text="click"
              />
              </Link>
              <img
                className="absolute w-[67px] h-[67px] top-[25px] left-[184px] object-cover"
                alt="Avion de papel"
                src={avion2}
              />
            </div>
          </div>
        </div>
        <div className="absolute w-[1541px] h-[993px] top-[2530px] left-[-120px]">
          <div className="relative w-[1537px] h-[993px]">
            <div className="absolute w-[560px] top-[219px] left-[977px] [font-family:'Quando-Regular',Helvetica] font-normal text-black text-[80px] text-center tracking-[0] leading-[20px]">
              Donativos
            </div>
            <div className="absolute w-[1480px] h-[993px] top-0 left-0">
              <p className="absolute w-[616px] top-[337px] left-[864px] [font-family:'Cantata_One-Regular',Helvetica] font-normal text-black text-[50px] text-right tracking-[0] leading-[normal]">
                Únete a nuestra iniciativa &#34;Dona tu ayuda&#34;, donde descubrirás artículos que otras personas están
                donando con el propósito de ayudar.
              </p>
              <div className="absolute w-[900px] h-[900px] top-0 left-0 bg-[#bca37f] rounded-[450px]" />
              <div className="absolute w-[187px] h-[186px] top-[807px] left-[373px] bg-[#113946] rounded-[93.5px/93px]" />
              <img
                className="absolute w-[512px] h-[512px] top-[161px] left-[207px] object-cover"
                alt="Donacion"
                src={donacion1}
              />
            </div>
            <div className="absolute w-[280px] h-[122px] top-[871px] left-[1131px]">
              <div className="relative h-[122px] rounded-[10.17px]">
                <Link to = "/Inicio_sesion">
                <BtnDona
                  className="!rounded-[10.17px] !gap-[20.33px] !pl-[30.5px] !pr-[130px] !py-[30.5px] !left-0 !absolute !top-0"
                  divClassName="!mt-[-2.03px] !text-[48.8px]"
                  property1="default"
                  text="click"
                />
                </Link>
                <img
                  className="absolute w-[67px] h-[67px] top-[25px] left-[184px] object-cover"
                  alt="Avion de papel"
                  src={avion2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};


export default Home;