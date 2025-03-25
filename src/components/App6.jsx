import '../assets/App6.css'
import { useState } from "react"
export default function App6(){
    const[products,setproducts]=useState([]);
    const[item,setItem]=useState({});
    const handlecart=()=>{
        setproducts([...products,item])
    }
    const handleDelete=(val)=>{
        setproducts(products.filter((value)=>val!==value.product))
    }
    return(
        <div>
        <h2>THIS IS APP6</h2>
        <div className="row">
            <div className="box">
                <p>Item Name</p>
                <input type="text" onChange={(e)=>setItem({...item,product:e.target.value})} placeholder="product name?"/>
                <p>Price</p>
                <input type="number" onChange={(e)=>setItem({...item,price:e.target.value})}/>
                <p>Quantity</p>
                <input type="number" onChange={(e)=>setItem({...item,quantity:e.target.value})}/>
                <br/>
                <br/>
                <button onClick={handlecart}>Cart it</button>
            </div>
            <div className="box">
                {products.map((value,index)=>(
                    <li>{value.product}|{value.price}|{value.quantity}<button onClick={()=>handleDelete(value.product)}>Remove</button></li>
                ))}
            </div>
        </div>
        </div>
    )
}