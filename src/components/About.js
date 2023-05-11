import React from "react";
import "./styles/about.css";
import javaDev from "../img/javaDevloper.png";
import webDev from '../img/web-dev.png';
import fsd from '../img/fullstack.jpg';
import mern from '../img/mern.png';
function About() {
  return (
    <div id="aboutContainer">
      <div id="aboutHeader">
        <p>Thank You To Give Your Precious Time To Know About Me(｡◕‿◕｡)</p>
      </div>
      <div id="aboutContent">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
        praesentium repudiandae facere modi corporis eaque ratione sint
        inventore adipisci. Magnam adipisci culpa sit omnis. Unde veniam dolore
        eaque sint quia. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Tempore commodi iste iure molestiae architecto libero dicta ut
        possimus! Dolorum facilis labore maiores amet asperiores optio ipsam
        quisquam eaque sit omnis expedita laborum rem, impedit quasi. Fuga
        blanditiis dolorum beatae dignissimos quis aliquid esse iure itaque quod
        exercitationem consectetur alias quidem dicta, sed deleniti praesentium
        sint aperiam maxime quae. Expedita incidunt dolore, earum error
        voluptates, aliquam, asperiores sit tenetur libero quo blanditiis
        voluptas! Magni itaque esse architecto iste nihil iure ullam earum
        recusandae ipsa optio possimus fuga quaerat totam, tenetur dolore? In
        perspiciatis perferendis odio laboriosam ad ex, doloribus iste vitae
        harum ab architecto recusandae earum error magnam repellat velit cum at
        rem expedita? Consequuntur cumque aperiam ipsa ipsum. Quaerat corrupti
        quo aperiam dignissimos eveniet, architecto molestiae sed accusantium
        ipsa sint quasi! Placeat nulla possimus debitis modi temporibus nesciunt
        at quod quibusdam cumque, optio minus porro illum explicabo minima aut
        natus quasi dolor deserunt ipsam maiores ab repellendus deleniti
        voluptates qui! Nam, neque quos non quia quam nobis tenetur provident.
        Quidem natus eaque reiciendis alias illum in dignissimos debitis esse.
        Quam magnam repudiandae architecto? Error doloremque ducimus, ipsum
        exercitationem vitae minus perferendis voluptatem deserunt delectus
        dicta. Aspernatur, cum reiciendis veritatis nisi magni non. Quam
        deleniti eaque dignissimos minus, mollitia rerum magnam voluptatibus
        nostrum facilis perferendis vero iste autem eos quae maxime excepturi
        numquam, rem saepe earum blanditiis! Beatae minima quis omnis nihil
        quibusdam esse ipsa eum dolores nobis voluptate similique, voluptates
        tempore animi repellendus suscipit consectetur sed culpa laboriosam
        asperiores reiciendis magnam? Sequi dolore modi quo, obcaecati ut,
        suscipit voluptas molestias perferendis, qui eaque possimus. Mollitia
        est voluptates rem officiis ea vel! Eaque architecto tenetur minima
        ullam praesentium similique a dolorum dolores, voluptatum consequuntur
        delectus itaque ipsam, temporibus ducimus nostrum voluptatibus sequi
        nemo quod numquam ad velit, voluptatem laboriosam vel! Iusto, voluptatum
        quam asperiores maxime, illo doloremque voluptatibus, beatae dolore
      </div>
      <div id="aboutFooter">
        <div id="card">
          <img id="aboutImg" src={javaDev} alt="not found" />
          <span id="aboutImgContent" >Java Devloper</span>
        </div>
        <div id="card">
          <img id="aboutImg" src={fsd} alt="not found" />
          <span id="aboutImgContent" >Full Stack Devloper</span>
        </div>
        <div id="card">
          <img id="aboutImg" src={webDev} alt="not found" />
          <span id="aboutImgContent" >Web Devloper</span>
        </div>
        <div id="card">
          <img id="aboutImg" src={mern} alt="not found" />
          <span id="aboutImgContent" >Mern Devloper</span>
        </div>
      </div>
    </div>
  );
}

export default About;
