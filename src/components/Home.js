import React from 'react'
import { useState } from 'react';
import './styles/home.css'
import { useEffect } from 'react';
function Home() {
      const [wish,setWish] = useState(``);
  useEffect(()=>{
    const hh = new Date();
    let hour = hh.getHours();
    if(hour>=0 && hour<12){
      setWish(`Good Morning🌞`)
    }else if(hour>=12 && hour<16){
      setWish("Good Afternoon🌞")
    }else{
      setWish("Good Evening🌙")
    }
  },[])
  return (
    <div  id='homeContainer'>
    <div id="greetsContent">
    <h2 class="line-1 anim-typewriter-1" >Hi!...</h2>
    <h2 class="line-2 anim-typewriter-2" >{wish}</h2>
    <h2 class="line-3 anim-typewriter-3">I'm Tushar</h2>
    </div>
    <div id="cvFooter">
    <button id='cvBtn'><a href='../TUSHAR RAGHAV resume.pdf' download={'Tushar_C/V'}>DOWNLOAD C/V</a></button>
    </div>
   </div>
  )
}

export default Home;
