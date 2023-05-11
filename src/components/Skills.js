import React, { useEffect, useState } from "react";
import "./styles/skills.css";
import SkillCard from "./SkillCard";

function Skills() {
  let arrCards = [
    <SkillCard num={1} lang={"Java"} changer={changer}/>,
    <SkillCard num={2} lang={"JavaScript"} changer={changer}/>,
    <SkillCard num={1} lang={"Html"} changer={changer}/>,
    <SkillCard num={2} lang={"Css"} changer={changer}/>,
    <SkillCard num={1} lang={"React Js"} changer={changer}/>,
    <SkillCard num={2} lang={"Node Js"} changer={changer}/>,
  ];
  const [card, setCard] = useState(0);
  function changer(flag) {
    if (flag === false) {
      if (card == 0) {
        setCard(arrCards.length - 1);
      } else {
        setCard(card - 1);
      }
    } else {
      if (card == 5) {
        setCard(0);
      } else {
        setCard(card + 1);
      }
    }
  }
  return (
    <div id="skillsContainer">
      <div id="skillsHeader">
        <p id="skillsCardContent">
          Schooling doesn't assure employment but skill does(✿◕‿◕✿)
        </p>
      </div>
      <div id="skillsContent">
        
        {arrCards[card]}
        
      </div>
    </div>
  );
}

export default Skills;
