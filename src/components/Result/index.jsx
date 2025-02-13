import React from "react";
import CardItem from "../CardItem";

export default function Result({ team, resultTeam }) {
   const { result, score } = resultTeam;

   return (
      <div style={{background:'#FEE5C7', margin: '30px', padding: '30px', borderRadius: "12px"}}>
         <div className="text-center">
            <h2 className={result == "win" ? "text-success" : "text-danger"}>
               {result.toUpperCase()}
            </h2>
            <strong className="fs-4">{score}</strong>
         </div>

         <div className="d-flex flex-wrap justify-content-evenly gap-4 my-3 ">
            {team.map((pokemon) => (
               <CardItem key={`pokemon-${pokemon.id}`} {...pokemon} />
            ))}
         </div>
      </div>
   );
}
