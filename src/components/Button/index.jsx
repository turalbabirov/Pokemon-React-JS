import React from "react";
import ButtonBS from "react-bootstrap/Button";

export default function Button({ children, ...props }) {
   const { variant, onClick } = props;

   const handleBtn = () => {
      onClick();
   };

   if (!children) return null;

   return (
      <ButtonBS
         onClick={handleBtn}
         className={`${variant ? "btn btn-" + variant : ""}`}
      >
         {Array.isArray(children) ? children[0] : children}
      </ButtonBS>
   );
}
