import React , {useState , useEffect} from 'react'
import axios from 'axios'

export default function Acsessuarlar() {
    const [product , setProducts] = useState([])
    
    useEffect(()=>{
        axios.get("http://myjson.dit.upm.es/api/bins/j9yj")
        .then((res)=>{
            console.log(res.data);
            setProducts(res.data);
            
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])

  return (
    <div className='container'>
        <h4 className='txtColor py-2'>Aксессуары</h4>
        <div className="row">
            {
                (product.length===0)?
                <>Kutib Turing</>
                :
                <>
                {
                    product.map((item, index)=>{
                        return(
                            <div className="col-2" key={index}>
                                <div className="card shadow p-1">
                                    <img src={item.img_src} alt={item.name} height="180px" />
                                    <p className='py-1'>{item.cost} so'm</p>
                                    <h4>{item.name}</h4>
                                    <button  className='btn btnColor'>Qo'shish</button>
                                </div>
                            </div>
                        )
                    })
                }
                </>
            }
        </div>
    </div>
  )
}