import React from "react";
import ButtonBS from "react-bootstrap/Button";

export default function Button({ children, ...props }) {
   const { variant, onClick } = props;
   // console.log(props);

   const handleBtn = () => {
      onClick();
   };

   if (!children) return null;

   return (
      <ButtonBS
         onClick={handleBtn}
         className={`${variant ? "btn btn-" + variant : ""}`}
      >
         {children[0]}
      </ButtonBS>
   );
}
