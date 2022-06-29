import React,{useState,useEffect} from 'react'
import './orders.css'
import Navbar  from '../Navbar/Navbar'
import {db} from '../firebase'
import {useStateValue} from '../StateProvider.js'
import ajstore from "../Images/Screenshot (5).png"
import {Link} from "react-router-dom";
import Order from './Order'
const Orders = () => {
    const [{basket,user},dispatch] = useStateValue();
     const [orders,setorders] = useState([]) ;
     console.log(user);
      useEffect(()=>{
       if(user){
        db.collection('users').doc(user?.uid).collection('orders')
        .orderBy('created','desc')
        .onSnapshot((snapshot) => {
           setorders(snapshot.docs.map(doc=>({
               id:doc.id, 
               data:doc.data()
           })))
        })
       }
       else setorders([])
      },[user])
      console.log(orders);
    return (
        <>
        <Link to="/"><center><img className="edit"src={ajstore}/></center></Link>
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="orders_cont">
             { orders?.map((order) =>{
                 return <Order order={order} />
             })}
            </div>
        </div>
        </>
    )
}

export default Orders
