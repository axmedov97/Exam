import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Banners() {
    const [data1, setdata1] = useState("");

    useEffect(() => {
        axios.get("http://myjson.dit.upm.es/api/bins/dohr")
        .then(ress =>{
            // console.log(ress.data);
            setdata1(ress.data)
        })
     }, []);
  return (
    <div>
        <div className="swiffy-slider slider-item-reveal slider-nav-round slider-item-ratio slider-item-ratio-21x9" id="slider1">
                <ul className="slider-container">
                    {
                        (data1.length>0) && data1.map((box ,index)=>{
                            return(
                                <li key={index}>
                                    <img src={box.img_src} loading="lazy" alt="" />
                                </li>
                            )
                        })
                    }
                </ul>

                <button type="button" className="slider-nav" aria-label="Go left"></button>
                <button type="button" className="slider-nav slider-nav-next" aria-label="Go left"></button>

                <div className="slider-indicators slider-indicators-square d-none d-md-flex">
                    <button className="active" aria-label="Go to slide"></button>
                    <button aria-label="Go to slide"></button>
                    <button aria-label="Go to slide"></button>
                    <button aria-label="Go to slide"></button>
                </div>

                <div className="slider-indicators slider-indicators-sm slider-indicators-dark slider-indicators-round d-md-none slider-indicators-highlight">
                    <button className="active" aria-label="Go to slide"></button>
                    <button aria-label="Go to slide"></button>
                    <button aria-label="Go to slide"></button>
                    <button aria-label="Go to slide"></button>
                </div>
            </div>
    </div>
  )
}
