import React from "react";
import { BtnDona } from "../../assets/btn/BtnDona";
import { BtnSolicitar } from "../../assets/btn/BtnSolicitar";
import { Footer } from "../../assets/Footer/Footer";
import { Header } from "../../assets/Header/Header";

export const Participa = () => {
  return (
    <div className="bg-[#bca37f] flex flex-row justify-center w-full">
      <div className="bg-[#bca37f] w-full h-[2917px] relative">
        <div className="absolute w-full h-[1184px] top-0 left-0">
          <div className="absolute w-full h-[1184px] top-0 left-0 bg-[#fff2d8] overflow-hidden">
            <div className="absolute w-[391px] h-[400px] top-[-215px] left-[1178px] bg-[#bca37f] rounded-[195.5px/200px]" />
            <div className="absolute w-[452px] h-[452px] top-[381px] left-[-179px] bg-[#ead7bb] rounded-[226px]" />
            <div className="absolute w-[1232px] h-[720px] top-[536px] left-[311px]">
              <div className="absolute w-[266px] h-[266px] top-[454px] left-[966px] bg-[#ead7bb] rounded-[133px]" />
              <div className="absolute w-[319px] h-[60px] top-[542px] left-[780px]">
                <div className="relative h-[60px] rounded-[5px]">
                  <BtnDona
                    className="!pl-[30px] !pr-[70px] !py-[15px] !absolute !left-0 !top-0"
                    property1="default"
                    text="Crea tu donacion"
                  />
                  <img
                    className="absolute w-[41px] h-[41px] top-[9px] left-[267px] object-cover"
                    alt="Anadir"
                    src="anadir-2.png"
                  />
                </div>
              </div>
              <p className="absolute w-[1078px] top-0 left-0 [font-family:'Quando-Regular',Helvetica] font-normal text-black text-[30px] tracking-[0] leading-[50px]">
                En esta sección, te invitamos a participar en cualquiera de las rifas de donaciones disponibles,
                brindándote la oportunidad de ganar el valioso premio en juego. Sin embargo, es importante tener en
                cuenta que solo puedes participar en una rifa a la vez. <br />
                <br />
                Esta medida se implementa para asegurar que cada participante tenga una oportunidad justa de ganar y
                para que la distribución de donaciones sea equitativa. Así, garantizamos que cada contribución tenga un
                impacto significativo y que más personas tengan la oportunidad de recibir ayuda cuando más la necesitan.
              </p>
            </div>
            <div className="absolute w-[830px] top-[203px] left-[377px] [font-family:'Quando-Regular',Helvetica] font-normal text-black text-[96px] text-center tracking-[0] leading-[normal]">
              Participa por tu <br />
              donacion
            </div>
            <p className="absolute w-[384px] top-[468px] left-[578px] [font-family:'Quando-Regular',Helvetica] font-normal text-[#00000080] text-[24px] text-center tracking-[0] leading-[normal]">
              Tu ayuda marca la diferencia
            </p>
            <div className="absolute w-[177px] h-[60px] top-[1078px] left-[67px]">
              <div className="relative h-[60px] rounded-[5px]">
                <BtnSolicitar
                  className="!pl-[30px] !pr-[70px] !py-[15px] !absolute !left-0 !top-0"
                  property1="default"
                  text="Home"
                />
                <img
                  className="absolute w-[38px] h-[38px] top-[11px] left-[123px] object-cover"
                  alt="Casa"
                  src="casa-1.png"
                />
              </div>
            </div>
          </div>
          <Header
            className="!absolute !left-0 !bg-transparent !top-0"
            divClassName="!text-[#00000080]"
            divClassNameOverride="!text-black"
            logo="logo-1-2.png"
            property1="default"
          />
        </div>
        <div className="absolute w-[427px] h-[364px] top-[1242px] left-[33px] bg-[#ead7bb] rounded-[20.18px] overflow-hidden">
          <div className="absolute w-[234px] top-[21px] left-[104px] [font-family:'Quando-Regular',Helvetica] font-normal text-[#113946] text-[32.3px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Donacion
          </div>
          <div className="absolute w-[211px] h-[181px] top-[90px] left-[193px] bg-[#fff2d8] rounded-[0px_20.18px_20.18px_0px] overflow-hidden">
            <div className="absolute w-[132px] top-[78px] left-[40px] [font-family:'Quando-Regular',Helvetica] font-normal text-[#00000080] text-[19.4px] text-center tracking-[0] leading-[normal]">
              descripcion
            </div>
          </div>
          <div className="absolute w-[168px] h-[181px] top-[90px] left-[25px] bg-[#bca37f] rounded-[20.18px_0px_0px_20.18px]">
            <div className="inline-flex flex-col items-start gap-[8.07px] p-[8.07px] relative top-[5px] left-[4px]">
              <div className="inline-flex flex-col items-start gap-[8.07px] px-[16.14px] py-[32.28px] relative flex-[0_0_auto] rounded-[20.18px] border-[4.04px] border-dashed border-black">
                <img
                  className="relative w-[115.8px] h-[90.39px] object-cover"
                  alt="Rectangle"
                  src="rectangle-614-9.png"
                />
              </div>
            </div>
          </div>
          <div className="absolute w-[184px] h-[48px] top-[293px] left-[153px]">
            <div className="relative h-[48px] rounded-[4.04px]">
              <BtnDona
                className="!rounded-[4.04px] !gap-[8.07px] !pl-[24.21px] !pr-[56.5px] !py-[12.11px] !absolute !left-0 !top-0"
                divClassName="!mt-[-0.81px] !text-[19.4px]"
                property1="default"
                text="Participar"
              />
              <img
                className="absolute w-[30px] h-[30px] top-[9px] left-[149px] object-cover"
                alt="Intimidad"
                src="intimidad-1.png"
              />
            </div>
          </div>
        </div>
        <div className="absolute w-[427px] h-[364px] top-[1242px] left-[981px] bg-[#ead7bb] rounded-[20.18px] overflow-hidden">
          <div className="absolute w-[234px] top-[21px] left-[104px] [font-family:'Quando-Regular',Helvetica] font-normal text-[#113946] text-[32.3px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Donacion
          </div>
          <div className="absolute w-[211px] h-[181px] top-[90px] left-[193px] bg-[#fff2d8] rounded-[0px_20.18px_20.18px_0px] overflow-hidden">
            <div className="absolute w-[132px] top-[78px] left-[40px] [font-family:'Quando-Regular',Helvetica] font-normal text-[#00000080] text-[19.4px] text-center tracking-[0] leading-[normal]">
              descripcion
            </div>
          </div>
          <div className="absolute w-[168px] h-[181px] top-[90px] left-[25px] bg-[#bca37f] rounded-[20.18px_0px_0px_20.18px]">
            <div className="inline-flex flex-col items-start gap-[8.07px] p-[8.07px] relative top-[5px] left-[4px]">
              <div className="inline-flex flex-col items-start gap-[8.07px] px-[16.14px] py-[32.28px] relative flex-[0_0_auto] rounded-[20.18px] border-[4.04px] border-dashed border-black">
                <img
                  className="relative w-[115.8px] h-[90.39px] object-cover"
                  alt="Rectangle"
                  src="rectangle-614-2.png"
                />
              </div>
            </div>
          </div>
          <div className="absolute w-[184px] h-[48px] top-[293px] left-[153px]">
            <div className="relative h-[48px] rounded-[4.04px]">
              <BtnDona
                className="!rounded-[4.04px] !gap-[8.07px] !pl-[24.21px] !pr-[56.5px] !py-[12.11px] !absolute !left-0 !top-0"
                divClassName="!mt-[-0.81px] !text-[19.4px]"
                property1="default"
                text="Participar"
              />
              <img
                className="absolute w-[30px] h-[30px] top-[9px] left-[149px] object-cover"
                alt="Intimidad"
                src="intimidad-1-2.png"
              />
            </div>
          </div>
        </div>
        <div className="absolute w-[427px] h-[364px] top-[1242px] left-[507px] bg-[#ead7bb] rounded-[20.18px] overflow-hidden">
          <div className="absolute w-[234px] top-[21px] left-[104px] [font-family:'Quando-Regular',Helvetica] font-normal text-[#113946] text-[32.3px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Donacion
          </div>
          <div className="absolute w-[211px] h-[181px] top-[90px] left-[193px] bg-[#fff2d8] rounded-[0px_20.18px_20.18px_0px] overflow-hidden">
            <div className="absolute w-[132px] top-[78px] left-[40px] [font-family:'Quando-Regular',Helvetica] font-normal text-[#00000080] text-[19.4px] text-center tracking-[0] leading-[normal]">
              descripcion
            </div>
          </div>
          <div className="absolute w-[168px] h-[181px] top-[90px] left-[25px] bg-[#bca37f] rounded-[20.18px_0px_0px_20.18px]">
            <div className="inline-flex flex-col items-start gap-[8.07px] p-[8.07px] relative top-[5px] left-[4px]">
              <div className="inline-flex flex-col items-start gap-[8.07px] px-[16.14px] py-[32.28px] relative flex-[0_0_auto] rounded-[20.18px] border-[4.04px] border-dashed border-black">
                <img
                  className="relative w-[115.8px] h-[90.39px] object-cover"
                  alt="Rectangle"
                  src="rectangle-614.png"
                />
              </div>
            </div>
          </div>
          <div className="absolute w-[184px] h-[48px] top-[293px] left-[153px]">
            <div className="relative h-[48px] rounded-[4.04px]">
              <BtnDona
                className="!rounded-[4.04px] !gap-[8.07px] !pl-[24.21px] !pr-[56.5px] !py-[12.11px] !absolute !left-0 !top-0"
                divClassName="!mt-[-0.81px] !text-[19.4px]"
                property1="default"
                text="Participar"
              />
              <img
                className="absolute w-[30px] h-[30px] top-[9px] left-[149px] object-cover"
                alt="Intimidad"
                src="image.png"
              />
            </div>
          </div>
        </div>
        <div className="absolute w-[427px] h-[364px] top-[2086px] left-[33px] bg-[#ead7bb] rounded-[20.18px] overflow-hidden">
          <div className="absolute w-[234px] top-[21px] left-[104px] [font-family:'Quando-Regular',Helvetica] font-normal text-[#113946] text-[32.3px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Donacion
          </div>
          <div className="absolute w-[211px] h-[181px] top-[90px] left-[193px] bg-[#fff2d8] rounded-[0px_20.18px_20.18px_0px] overflow-hidden">
            <div className="absolute w-[132px] top-[78px] left-[40px] [font-family:'Quando-Regular',Helvetica] font-normal text-[#00000080] text-[19.4px] text-center tracking-[0] leading-[normal]">
              descripcion
            </div>
          </div>
          <div className="absolute w-[168px] h-[181px] top-[90px] left-[25px] bg-[#bca37f] rounded-[20.18px_0px_0px_20.18px]">
            <div className="inline-flex flex-col items-start gap-[8.07px] p-[8.07px] relative top-[5px] left-[4px]">
              <div className="inline-flex flex-col items-start gap-[8.07px] px-[16.14px] py-[32.28px] relative flex-[0_0_auto] rounded-[20.18px] border-[4.04px] border-dashed border-black">
                <img
                  className="relative w-[115.8px] h-[90.39px] object-cover"
                  alt="Rectangle"
                  src="rectangle-614-6.png"
                />
              </div>
            </div>
          </div>
          <div className="absolute w-[184px] h-[48px] top-[293px] left-[153px]">
            <div className="relative h-[48px] rounded-[4.04px]">
              <BtnDona
                className="!rounded-[4.04px] !gap-[8.07px] !pl-[24.21px] !pr-[56.5px] !py-[12.11px] !absolute !left-0 !top-0"
                divClassName="!mt-[-0.81px] !text-[19.4px]"
                property1="default"
                text="Participar"
              />
              <img
                className="absolute w-[30px] h-[30px] top-[9px] left-[149px] object-cover"
                alt="Intimidad"
                src="intimidad-1-6.png"
              />
            </div>
          </div>
        </div>
        <div className="absolute w-[427px] h-[364px] top-[2086px] left-[981px] bg-[#ead7bb] rounded-[20.18px] overflow-hidden">
          <div className="absolute w-[234px] top-[21px] left-[104px] [font-family:'Quando-Regular',Helvetica] font-normal text-[#113946] text-[32.3px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Donacion
          </div>
          <div className="absolute w-[211px] h-[181px] top-[90px] left-[193px] bg-[#fff2d8] rounded-[0px_20.18px_20.18px_0px] overflow-hidden">
            <div className="absolute w-[132px] top-[78px] left-[40px] [font-family:'Quando-Regular',Helvetica] font-normal text-[#00000080] text-[19.4px] text-center tracking-[0] leading-[normal]">
              descripcion
            </div>
          </div>
          <div className="absolute w-[168px] h-[181px] top-[90px] left-[25px] bg-[#bca37f] rounded-[20.18px_0px_0px_20.18px]">
            <div className="inline-flex flex-col items-start gap-[8.07px] p-[8.07px] relative top-[5px] left-[4px]">
              <div className="inline-flex flex-col items-start gap-[8.07px] px-[16.14px] py-[32.28px] relative flex-[0_0_auto] rounded-[20.18px] border-[4.04px] border-dashed border-black">
                <img
                  className="relative w-[115.8px] h-[90.39px] object-cover"
                  alt="Rectangle"
                  src="rectangle-614-7.png"
                />
              </div>
            </div>
          </div>
          <div className="absolute w-[184px] h-[48px] top-[293px] left-[153px]">
            <div className="relative h-[48px] rounded-[4.04px]">
              <BtnDona
                className="!rounded-[4.04px] !gap-[8.07px] !pl-[24.21px] !pr-[56.5px] !py-[12.11px] !absolute !left-0 !top-0"
                divClassName="!mt-[-0.81px] !text-[19.4px]"
                property1="default"
                text="Participar"
              />
              <img
                className="absolute w-[30px] h-[30px] top-[9px] left-[149px] object-cover"
                alt="Intimidad"
                src="intimidad-1-7.png"
              />
            </div>
          </div>
        </div>
        <div className="absolute w-[427px] h-[364px] top-[2086px] left-[507px] bg-[#ead7bb] rounded-[20.18px] overflow-hidden">
          <div className="absolute w-[234px] top-[21px] left-[104px] [font-family:'Quando-Regular',Helvetica] font-normal text-[#113946] text-[32.3px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Donacion
          </div>
          <div className="absolute w-[211px] h-[181px] top-[90px] left-[193px] bg-[#fff2d8] rounded-[0px_20.18px_20.18px_0px] overflow-hidden">
            <div className="absolute w-[132px] top-[78px] left-[40px] [font-family:'Quando-Regular',Helvetica] font-normal text-[#00000080] text-[19.4px] text-center tracking-[0] leading-[normal]">
              descripcion
            </div>
          </div>
          <div className="absolute w-[168px] h-[181px] top-[90px] left-[25px] bg-[#bca37f] rounded-[20.18px_0px_0px_20.18px]">
            <div className="inline-flex flex-col items-start gap-[8.07px] p-[8.07px] relative top-[5px] left-[4px]">
              <div className="inline-flex flex-col items-start gap-[8.07px] px-[16.14px] py-[32.28px] relative flex-[0_0_auto] rounded-[20.18px] border-[4.04px] border-dashed border-black">
                <img
                  className="relative w-[115.8px] h-[90.39px] object-cover"
                  alt="Rectangle"
                  src="rectangle-614-8.png"
                />
              </div>
            </div>
          </div>
          <div className="absolute w-[184px] h-[48px] top-[293px] left-[153px]">
            <div className="relative h-[48px] rounded-[4.04px]">
              <BtnDona
                className="!rounded-[4.04px] !gap-[8.07px] !pl-[24.21px] !pr-[56.5px] !py-[12.11px] !absolute !left-0 !top-0"
                divClassName="!mt-[-0.81px] !text-[19.4px]"
                property1="default"
                text="Participar"
              />
              <img
                className="absolute w-[30px] h-[30px] top-[9px] left-[149px] object-cover"
                alt="Intimidad"
                src="intimidad-1-8.png"
              />
            </div>
          </div>
        </div>
        <div className="absolute w-[427px] h-[364px] top-[1664px] left-[35px] bg-[#ead7bb] rounded-[20.18px] overflow-hidden">
          <div className="absolute w-[234px] top-[21px] left-[104px] [font-family:'Quando-Regular',Helvetica] font-normal text-[#113946] text-[32.3px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Donacion
          </div>
          <div className="absolute w-[211px] h-[181px] top-[90px] left-[193px] bg-[#fff2d8] rounded-[0px_20.18px_20.18px_0px] overflow-hidden">
            <div className="absolute w-[132px] top-[78px] left-[40px] [font-family:'Quando-Regular',Helvetica] font-normal text-[#00000080] text-[19.4px] text-center tracking-[0] leading-[normal]">
              descripcion
            </div>
          </div>
          <div className="absolute w-[168px] h-[181px] top-[90px] left-[25px] bg-[#bca37f] rounded-[20.18px_0px_0px_20.18px]">
            <div className="inline-flex flex-col items-start gap-[8.07px] p-[8.07px] relative top-[5px] left-[4px]">
              <div className="inline-flex flex-col items-start gap-[8.07px] px-[16.14px] py-[32.28px] relative flex-[0_0_auto] rounded-[20.18px] border-[4.04px] border-dashed border-black">
                <img
                  className="relative w-[115.8px] h-[90.39px] object-cover"
                  alt="Rectangle"
                  src="rectangle-614-3.png"
                />
              </div>
            </div>
          </div>
          <div className="absolute w-[184px] h-[48px] top-[293px] left-[153px]">
            <div className="relative h-[48px] rounded-[4.04px]">
              <BtnDona
                className="!rounded-[4.04px] !gap-[8.07px] !pl-[24.21px] !pr-[56.5px] !py-[12.11px] !absolute !left-0 !top-0"
                divClassName="!mt-[-0.81px] !text-[19.4px]"
                property1="default"
                text="Participar"
              />
              <img
                className="absolute w-[30px] h-[30px] top-[9px] left-[149px] object-cover"
                alt="Intimidad"
                src="intimidad-1-3.png"
              />
            </div>
          </div>
        </div>
        <div className="absolute w-[427px] h-[364px] top-[1664px] left-[983px] bg-[#ead7bb] rounded-[20.18px] overflow-hidden">
          <div className="absolute w-[234px] top-[21px] left-[104px] [font-family:'Quando-Regular',Helvetica] font-normal text-[#113946] text-[32.3px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Donacion
          </div>
          <div className="absolute w-[211px] h-[181px] top-[90px] left-[193px] bg-[#fff2d8] rounded-[0px_20.18px_20.18px_0px] overflow-hidden">
            <div className="absolute w-[132px] top-[78px] left-[40px] [font-family:'Quando-Regular',Helvetica] font-normal text-[#00000080] text-[19.4px] text-center tracking-[0] leading-[normal]">
              descripcion
            </div>
          </div>
          <div className="absolute w-[168px] h-[181px] top-[90px] left-[25px] bg-[#bca37f] rounded-[20.18px_0px_0px_20.18px]">
            <div className="inline-flex flex-col items-start gap-[8.07px] p-[8.07px] relative top-[5px] left-[4px]">
              <div className="inline-flex flex-col items-start gap-[8.07px] px-[16.14px] py-[32.28px] relative flex-[0_0_auto] rounded-[20.18px] border-[4.04px] border-dashed border-black">
                <img
                  className="relative w-[115.8px] h-[90.39px] object-cover"
                  alt="Rectangle"
                  src="rectangle-614-4.png"
                />
              </div>
            </div>
          </div>
          <div className="absolute w-[184px] h-[48px] top-[293px] left-[153px]">
            <div className="relative h-[48px] rounded-[4.04px]">
              <BtnDona
                className="!rounded-[4.04px] !gap-[8.07px] !pl-[24.21px] !pr-[56.5px] !py-[12.11px] !absolute !left-0 !top-0"
                divClassName="!mt-[-0.81px] !text-[19.4px]"
                property1="default"
                text="Participar"
              />
              <img
                className="absolute w-[30px] h-[30px] top-[9px] left-[149px] object-cover"
                alt="Intimidad"
                src="intimidad-1-4.png"
              />
            </div>
          </div>
        </div>
        <div className="absolute w-[427px] h-[364px] top-[1664px] left-[509px] bg-[#ead7bb] rounded-[20.18px] overflow-hidden">
          <div className="absolute w-[234px] top-[21px] left-[104px] [font-family:'Quando-Regular',Helvetica] font-normal text-[#113946] text-[32.3px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Donacion
          </div>
          <div className="absolute w-[211px] h-[181px] top-[90px] left-[193px] bg-[#fff2d8] rounded-[0px_20.18px_20.18px_0px] overflow-hidden">
            <div className="absolute w-[132px] top-[78px] left-[40px] [font-family:'Quando-Regular',Helvetica] font-normal text-[#00000080] text-[19.4px] text-center tracking-[0] leading-[normal]">
              descripcion
            </div>
          </div>
          <div className="absolute w-[168px] h-[181px] top-[90px] left-[25px] bg-[#bca37f] rounded-[20.18px_0px_0px_20.18px]">
            <div className="inline-flex flex-col items-start gap-[8.07px] p-[8.07px] relative top-[5px] left-[4px]">
              <div className="inline-flex flex-col items-start gap-[8.07px] px-[16.14px] py-[32.28px] relative flex-[0_0_auto] rounded-[20.18px] border-[4.04px] border-dashed border-black">
                <img
                  className="relative w-[115.8px] h-[90.39px] object-cover"
                  alt="Rectangle"
                  src="rectangle-614-5.png"
                />
              </div>
            </div>
          </div>
          <div className="absolute w-[184px] h-[48px] top-[293px] left-[153px]">
            <div className="relative h-[48px] rounded-[4.04px]">
              <BtnDona
                className="!rounded-[4.04px] !gap-[8.07px] !pl-[24.21px] !pr-[56.5px] !py-[12.11px] !absolute !left-0 !top-0"
                divClassName="!mt-[-0.81px] !text-[19.4px]"
                property1="default"
                text="Participar"
              />
              <img
                className="absolute w-[30px] h-[30px] top-[9px] left-[149px] object-cover"
                alt="Intimidad"
                src="intimidad-1-5.png"
              />
            </div>
          </div>
        </div>
        <Footer
          className="!absolute !left-0 !top-[2572px]"
          elSalvador="el-salvador-3-2.png"
          nuestrosProyectosClassName="!mt-[-9.00px] !mb-[-5.00px]"
          property1="default"
        />
      </div>
    </div>
  );
};



export default Participa;