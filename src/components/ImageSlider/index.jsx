import { useEffect, useState } from 'react';
import './index.css';
import {BsArrowLeftCircleFill,BsArrowRightCircleFill,BsDot} from 'react-icons/bs';
export default function ImageSlider({url}){
    const[images,setImages]=useState(null);
    const[currentSlide,setCurrentSlide]=useState(0);

    async function fetchData(url){
        try{
            let res = await fetch(url);
            let data = await res.json();
            console.log(data);
            setImages(data);
        }catch(e){
            console.log('error AGYA '+e.message);
        }
    }

    const nextSlide=()=>{
        console.log('nextslide currentslide= ',currentSlide)
        if(currentSlide===images.length-1){
            setCurrentSlide(0);
        }else{
            setCurrentSlide(currentSlide+1);
        }
    }

    const prevSlide=()=>{
        console.log('prevslide currentslide= ',currentSlide)
        if(currentSlide===0){
            setCurrentSlide(images.length-1)
        }else{
            setCurrentSlide(currentSlide-1);
        }
    }

    useEffect(()=>{
        fetchData(url);
    },[url])

    return(
        <div className="wrapper">
            <h2>4. Image Slider</h2>
            {images && 
                    <div className='container'>
                        <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide}/>
                        {/* <img src={images[currentSlide].download_url} alt="" /> */}
                        {images && images.map((img,i)=>(
                           <img key={i} src={img.download_url} className={`${currentSlide!=i && 'hide'}`}/>
                        ))}
                        
                        <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>
            </div>}
            <span className='circle-indicator'>
                    {images && images.map((_,i)=>(
                        <BsDot className='dots'  key={i} onClick={()=>setCurrentSlide(i)}/>
                    ))}
            </span>
        </div>
    )
}