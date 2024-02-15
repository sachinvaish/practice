import React, { useState } from "react";
import accordionData from "./data";

export default function Accordian() {
  const[selected, setSelected] = useState(null);
  const[multiSelection, setMultiSelection] = useState(false);
  const[stack,setStack]=useState([]);
  const data = accordionData;
  // let stack = [...multiple];


  const handleToggle = (id)=>{
    if(multiSelection)
    {
    let dataNew = [...stack];
    dataNew.indexOf(id)==-1 ? dataNew.push(id) : dataNew.splice(dataNew.indexOf(id),1)
    setStack(dataNew);
    }
    else{
      setSelected(selected===id? null : id)
    }
    
  }

  return (
    <div style={{padding:'10px 20px'}}>
      <h2>1. Accordian</h2>
      <button onClick={()=>setMultiSelection(!multiSelection)} style={{backgroundColor:`${multiSelection?'green':'grey'}`}}>Multi Selection {multiSelection?'Enabled':'Disabled'}</button>
      
      {data.map((item) => (
        <div key={item.id}>
          <div className="title" onClick={()=>handleToggle(item.id)}> 
            <h3>{item.title}</h3>
            <h3>
            {multiSelection 
          ? stack.indexOf(item.id) !==-1 ? '-' : '+'
          : selected === item.id ? '-' : '+'}
            </h3>
          </div>
          {multiSelection 
          ? stack.indexOf(item.id) !==-1 && (<p className="content">{item.content}</p>)
          : selected === item.id && (<p className="content">{item.content}</p>)}
        </div>
      ))}
    </div>
  );
}
