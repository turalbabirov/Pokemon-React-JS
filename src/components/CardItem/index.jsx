import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function CardItem({ id, name, type, base_experience }) {
   const [isToggled, setIsToggled] = useState(false);

   const handleClick = () => {
      setIsToggled(!isToggled);
   };

   function getPokemonUrl(id) {
      const formattedId = id.toString().padStart(3, "0");
      return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formattedId}.png`;
   }

   return (
      <Card style={{ width: "18rem" }} className="text-center">
         <Card.Body>
            <Card.Title className="text-primary">{name}</Card.Title>
            <Card.Img variant="top" src={getPokemonUrl(id)} />
            <Card.Text>
               <span className="text-secondary">Type: {type}</span>
               <br />
               <span className="text-secondary">EXP {base_experience}</span>
            </Card.Text>
            <Button variant="danger" onClick={handleClick}>
               Read More
            </Button>
            {isToggled && (
               <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente sit, possimus quidem sed, sint quis architecto
                  voluptatum similique, molestiae necessitatibus quasi provident
                  rerum expedita nostrum voluptate corrupti nisi soluta iure!
               </div>
            )}
         </Card.Body>
      </Card>
   );
}
