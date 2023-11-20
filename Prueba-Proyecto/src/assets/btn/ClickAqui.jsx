import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";

export const ClickAqui = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`relative ${state.property1 === "variant-2" ? "[border-bottom-style:solid]" : ""} ${
        state.property1 === "variant-2" ? "border-white" : ""
      } ${state.property1 === "default" ? "w-[107px]" : ""} ${state.property1 === "variant-2" ? "inline-flex" : ""} ${
        state.property1 === "variant-2" ? "items-center" : ""
      } ${state.property1 === "variant-2" ? "gap-[10px]" : ""} ${state.property1 === "default" ? "h-[20px]" : ""} ${
        state.property1 === "variant-2" ? "border-b-2" : ""
      } ${state.property1 === "variant-2" ? "justify-center" : ""} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div
        className={`[font-family:'Cantata_One-Regular',Helvetica] tracking-[0] text-[20px] text-white font-normal leading-[20px] whitespace-nowrap ${
          state.property1 === "variant-2" ? "w-fit" : ""
        } ${state.property1 === "default" ? "left-0" : ""} ${state.property1 === "variant-2" ? "mt-[-2.00px]" : ""} ${
          state.property1 === "default" ? "-top-px" : ""
        } ${state.property1 === "variant-2" ? "relative" : "absolute"}`}
      >
        Click Aqui
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

ClickAqui.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};

export default ClickAqui;