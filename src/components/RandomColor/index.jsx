import React, { useEffect, useState } from 'react'

export default function RandomCOlor() {
    const[color,setColor]=useState('#158466');
    const[show,setShow]=useState(null);

    const colorUtility=(length)=>{
        return Math.floor(Math.random()*length)
    }

    const generateHexColor=()=>{
        const hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
        let newColor = '#';
        for(let i=0;i<6;i++){
            newColor+= hex[colorUtility(hex.length)];
        }
        console.log(newColor);
        setColor(newColor);
    }

    const generateRGBColor=()=>{
        let r = colorUtility(256);
        let g = colorUtility(256);
        let b = colorUtility(256);
        const newColor = `rgb(${r},${g},${b})`;
        console.log(newColor);
        setColor(newColor);
    }

    const generateGradient=()=>{
        const hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
        let colorOne = '#';
        let colorTwo = '#';
        for(let i=0;i<6;i++){
            colorOne+= hex[colorUtility(hex.length)];
            colorTwo+= hex[colorUtility(hex.length)];
        }
        setColor(`linear-gradient(to right,${colorOne},${colorTwo})`);
    }

    const startShow=()=>{
        let id = setInterval(() => {
            generateGradient();
        }, 500);
        setShow(id);
    }

    const stopShow=()=>{
        clearInterval(show)
        setShow(null);
    }


  return (
    <div className='wrapper'>
      <h2>2. Random Color Generator</h2>
      <button onClick={generateHexColor}>Generate Hex Color</button>
      <button onClick={generateRGBColor}>Generate RGB Color</button>
      <button onClick={generateGradient}>Generate Random Gradient</button>
      <button onClick={()=>{show?stopShow():startShow()}}>{show?'STOP':'START'} the Rainbow Show</button>
      <div style={{background:color,display:'flex',justifyContent:'center',alignItems:'center', height:'80vh'}}>
      <div >
        <h1 style={{color:'white'}}>{color}</h1>
      </div>
      </div>
      
    </div>
  )
}
