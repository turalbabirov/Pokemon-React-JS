import React from "react";
import "./index.css";
import Button from "./components/Button";

function App() {
   const onSave = function () {
      alert("Saved");
   };
   const onCancel = function () {
      alert("Cancel");
   };

   return (
      <>
         <Button onSave={onSave}>Save</Button>
         <Button onCancel={onCancel}>Cancel</Button>
      </>
   );
}

export default App;
