import React, { useState } from "react";
import Button from "../Button";
import Result from "../Result";
import PokemonJson from "../../Json/pokemon.json";

let Team1;
let Team2;
let resultTeams;

export default function Container() {
	const [isOpened, setOpen] = useState(false);

   function changeOpen() {
      if (isOpened) {
         // isOpened=='true' ise setle sonecek:
         Team1 = Team2 = undefined;
      } else {
         // isOpened=='false' ise setle yanacaq:
         function shuffleArray(array) {
            return array
               .map((value) => ({ value, sort: Math.random() }))
               .sort((a, b) => a.sort - b.sort)
               .map(({ value }) => value);
         }

         const shuffledCharacters = shuffleArray(PokemonJson);
         const [team1, team2] = [
            shuffledCharacters.slice(0, 4),
            shuffledCharacters.slice(4, 8),
         ];

         Team1 = team1;
			Team2 = team2;
			
			resultTeams = resultTeam(team1, team2);
      }

      setOpen((prev) => {
         return !prev;
      });
   }

   function resultTeam(team1, team2) {

      const getTotalBaseExperience = (team) =>
         team.reduce(
            (total, { base_experience }) => total + base_experience,
            0
         );

      const team1Score = getTotalBaseExperience(team1);
      const team2Score = getTotalBaseExperience(team2);

      const result = {
         team1: {
            score: team1Score,
            result: team1Score > team2Score ? "win" : "lose",
         },
         team2: {
            score: team2Score,
            result: team2Score > team1Score ? "win" : "lose",
         },
      };

		return result;
	}
	
   return (
      <>
         <header className="d-flex flex-column align-items-center my-5">
            <h2>Pokedex</h2>
            <Button variant={!isOpened ? 'success' : 'info'} onClick={changeOpen}>
               {!isOpened ? 'Start Game' : 'Reply Game?'}
            </Button>
         </header>

         {isOpened && (
            <section>
               <Result team={Team1} resultTeam={resultTeams.team1} />
               <div className="text-center my-5 lead fw-bold">VS</div>
               <Result team={Team2} resultTeam={resultTeams.team2} />
            </section>
         )}
      </>
   );
}
