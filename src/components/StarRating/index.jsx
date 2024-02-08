import { useState } from "react";
import { FaStar } from "react-icons/fa";
export default function StarRating() {
    const color = 'linear-gradient(109.6deg, rgb(255, 219, 47) 11.2%, rgb(244, 253, 0) 100.2%)'
  const noOfStars = 10;
  const[rating,setRating]=useState(0);
  const[hover,setHover]=useState(0);

  const handleClick=(i)=>{
    setRating(i);
  }

  const handleMouseEnter=(i)=>{
    setHover(i);
  }

  const handleMouseLeave=(i)=>{
    setHover(rating);
  }

  return (
        <div className="wrapper">
            <h2>3. Star Rating</h2>
            <h3>Rating Value = {rating}</h3>
            {[...Array(noOfStars)].map((_, i) => {
                i++;
                return(
                <FaStar 
                    key={i}
                    fontSize={50}
                    fill={`${hover>=i?'yellow':'grey'}`}
                    onClick={()=>handleClick(i)}
                    onMouseEnter={()=>handleMouseEnter(i)}
                    onMouseLeave={()=>handleMouseLeave(i)}
                />)
            })}
        </div>
  );
}
