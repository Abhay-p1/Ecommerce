import React from 'react'
import Slider from 'react-slick';
import styled from 'styled-components';
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Sbadge from '../Components/Images/app2.webp'
import Sbdage from '../Components/Images/gym.webp'
import Sscale from '../Components/Images/sports.webp'
import Sscales from '../Components/Images/appliances.jpg'
import Electo from '../Components/Images/furniture.webp'
import Sofo from '../Components/Images/groc3.webp'
import Clotho from '../Components/Images/sale.jpg'
import Sofe from '../Components/Images/clothes.webp'
const Imgslider = () =>{
    let settings = {
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true
    }
    return (
        <>
        <Carousel {...settings}>
            <Wrap>
                <img src={Sbadge}/>
            </Wrap>
            <Wrap>
                <img src={Sbdage}/>
            </Wrap>
            <Wrap>
                <img src={Sscale}/>
            </Wrap>
            <Wrap>
                <img src={Sscales}/>
            </Wrap>
            <Wrap>
                <img src={Electo}/>
            </Wrap>
            <Wrap>
                <img src={Sofo}/>
            </Wrap>
            <Wrap>
                <img src={Clotho}/>
            </Wrap>
            <Wrap>
                <img src={Sofe}/>
            </Wrap>
        </Carousel>
        </>
    )
}

export default Imgslider;
const Carousel=styled(Slider)`
  background-color:rgb(37, 35, 35);
  margin-top:25px;
  .slick-list {
      overflow:hidden;
  }
  .slick-prev{
      left:10px;
  }
  .slick-next{
      right:10px;
  }
  ul li button{
      &:before{
      font-size:10px;
      color:lightblue;
      }
  }
  li.slick-active button:before{
      color:white;
  }
  button {
      z-index:1;
  }
`
const Wrap = styled.div`
  img{
      margin:auto;
      width:94vw;
      height:55vh;
      border-radius:8px;
      border:3px solid lightgray;
      transition-duration:300ms;
      &:hover{
          border:3px solid lightblue;
      }
  }
`
