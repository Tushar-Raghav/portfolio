import React, { useEffect,useState } from "react";
import "./styles/skillCard.css";
function SkillCard(props) {
  return (
    <>
      <div
        onClick={() => {
          props.changer(false);
        }}
      >
        &lt;
      </div>
      <div id={`skillsCard-${props.num}`}>
        <header id="skillsCardHeader">{props.lang}</header>
        <p id="skillsCardContent">These are my skills in this language</p>
        <button>UpVote</button>
      </div>
      <div
        onClick={() => {
          props.changer(true);
        }}
      >
        &gt;
      </div>
    </>
  );
}

export default SkillCard;
