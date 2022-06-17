import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Header() {
    const [categories, setCategories] = useState([])
    
    useEffect(()=>{
        axios.get('https://myjson.dit.upm.es/api/bins/bbm7')
        .then((res)=>{
            console.log(res.data)
            setCategories(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    }, []);

    return (
    <div className='container'>
        <div className='row'>
            
            {
                (categories.length===0)?
                <h1 className='text-center'>
                    Waiting...
                </h1>
                :
                <>
                {
                    categories.map((item, index)=>{
                        return(
                            <div className='col-2' key={index}>
                               <img src={item.img_src} alt={item.img_src}/>
                            </div>
                        )
                    })
                 }</>
            }
               
        </div>
    </div>
  )
}
