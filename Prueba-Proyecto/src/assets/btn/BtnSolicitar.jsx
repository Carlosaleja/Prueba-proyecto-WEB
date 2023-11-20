import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";

export const BtnSolicitar = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`inline-flex items-center gap-[10px] px-[30px] py-[15px] rounded-[5px] justify-center relative ${
        state.property1 === "variant-2" ? "border-2 border-solid" : ""
      } ${state.property1 === "variant-2" ? "border-[#113946]" : ""} ${
        state.property1 === "variant-2" ? "bg-[#bca37f]" : "bg-white"
      } ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div
        className={`[font-family:'Quando-Regular',Helvetica] w-fit tracking-[0] text-[24px] font-normal text-center leading-[normal] relative ${
          state.property1 === "variant-2" ? "mt-[-2.00px]" : "mt-[-1.00px]"
        } ${state.property1 === "variant-2" ? "text-white" : "text-[#113946]"}`}
      >
        Solicitar
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

BtnSolicitar.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
