import React from 'react'
import "../Home/Home.styled"
import "../Home/Home.css"
import Card from './Card';
import CataData from "./CataDataFashion";
const fashion = () => {
  return (
      <div>
      <h1 className="text-center"> Our Catalogue </h1>
      <div className="container-fluid  mb-5">
          <div classname="row">
            <div className="col-lg-10 col-md-11 col-sm-8 col-11 mx-auto">
            <h2 className="mt-5 mb-5 text-center">  <span className="bg-info">Men's Wear And Shoes</span>  </h2>
                 <div className="row gy-5">
                   {
                       CataData.map((cur,inx)=>{
                          return <Card 
                          id={inx}
                          title={cur.title}
                          image={cur.imgsrc}
                          price={cur.price}
                          rating={cur.rating}
                          />
                       })
                   }
                </div>
            </div>
          </div>
          
      </div> 

  </div>
  )
}

export default fashion