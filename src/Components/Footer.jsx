import React from 'react'
import styled from 'styled-components';
import {Link} from "react-router-dom";
const Footer = ()=>{
    return (
        <>
  <Footermine className="page-footer font-small elegant-color">
  <div className="color-primary">
    <div className="container-fluid">
      <div className="row py-4  bg-secondary d-flex align-items-center">
        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
          <h6 className="mb-0">Get connected with us on social networks!</h6>
        </div>
        <div className="col-md-6 col-lg-7 text-center text-md-right">
        <a
        className="btn btn-primary btn-floating rounded-circle m-1"
        style={{backgroundColor: '#3b5998'}}
        href="https://www.facebook.com/profile.php?id=100013741877081"
        target="_blank"
        role="button"
        ><i className="fab fa-facebook-f"></i>
       </a>

      <a
        className="btn btn-primary btn-floating rounded-circle m-1"
        style={{backgroundColor: '#55acee'}}
        href="#!"
        target="_blank"
        role="button"
        ><i className="fab fa-twitter"></i>
      </a>

      <a
        className="btn btn-primary btn-floating rounded-circle m-1"
        style={{backgroundColor: '#dd4b39'}}
        href="#!"
        target="_blank"
        role="button"
        ><i className="fab fa-google"></i>
      </a>

      <a
        className="btn btn-primary btn-floating rounded-circle m-1"
        style={{backgroundColor: '#ac2bac'}}
        href="https://www.instagram.com/abhay_ps1/"
        target="_blank"
        role="button"
        ><i className="fab fa-instagram"></i>
      </a>

      <a
        className="btn btn-primary btn-floating rounded-circle m-1"
        style={{backgroundColor: '#0082ca'}}
        href="https://www.linkedin.com/in/abhay-juneja-a3a605171/"
        target="_blank"
        role="button"
        ><i className="fab fa-linkedin-in"></i>
      </a>

      <a
        className="btn btn-primary btn-floating rounded-circle m-1"
        style={{backgroundColor: '#333333'}}
        href="https://github.com/Abhay-p1"
        target="_blank"
        role="button"
        ><i className="fab fa-github"></i>
      </a>
        </div>
     </div>
    </div>
  </div>


  <div className="container-fluid bg-dark text-center text-md-left pt-4 pt-md-5">
    <div className="row mt-1 mt-md-0 mb-4 mb-md-0">

      <div className="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4">

        <h5>About me</h5>
        <hr className="color-primary mb-4 mt-0 d-inline-block mx-auto w-60"/>

        <p className="foot-desc mb-0">Here you can use rows and columns to organize your footer content. Lorem
          ipsum dolor sit amet,
          consectetur
          adipisicing elit.</p>

      </div>

      <hr className="clearfix w-100 d-md-none"/>

      <div className="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4">
        <h5>Products</h5>
        <hr className="color-primary mb-4 mt-0 d-inline-block mx-auto w-60"/>

        <ul className="list-unstyled foot-desc">
          <li className="mb-2">
            <a href="#!">MDBootstrap</a>
          </li>
          <li className="mb-2">
            <a href="#!">MDWordPress</a>
          </li>
          <li className="mb-2">
            <a href="#!">BrandFlow</a>
          </li>
          <li className="mb-2">
            <a href="#!">Bootstrap Angular</a>
          </li>
        </ul>

      </div>
      <hr className="clearfix w-100 d-md-none"/>
      <div className="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4">

        <h5>Useful links</h5>
        <hr className="color-primary mb-4 mt-0 d-inline-block mx-auto w-60"/>

        <ul className="list-unstyled foot-desc">
          <li className="mb-2">
            <a href="#!">Your Account</a>
          </li>
          <li className="mb-2">
            <a href="#!">Become an Affiliate</a>
          </li>
          <li className="mb-2">
            <a href="#!">Shipping Rates</a>
          </li>
          <li className="mb-2">
            <a href="#!">Help</a>
          </li>
        </ul>

      </div>
      <hr className="clearfix w-100 d-md-none"/>


      <div className="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4">


        <h5><Spanmine>Contact Now</Spanmine></h5>
        <hr className="color-primary mb-4 mt-0 d-inline-block mx-auto w-60"/>

        <ul className="fa-ul foot-desc ml-4">
          <li className="mb-2"><span className="fa-li"><i className="far fa-map"></i></span>New York, Avenue Street 10
          </li>
          <li className="mb-2"><span className="fa-li"><i className="fas fa-phone-alt"></i></span>042 876 836 908</li>
          <li className="mb-2"><span className="fa-li"><i className="far fa-envelope"></i></span>company@example.com</li>
          <li><span className="fa-li"><i className="far fa-clock"></i></span>Monday - Friday: 10-17</li>
        </ul>
      </div>
      </div>
    </div>
  <div className="bg-secondary footer-copyright text-center py-3 mt-0">© 2022 Copyright</div>
</Footermine>
</>
);
}
const Footermine = styled.footer`
color:white;
left:0;bottom:0;
width:100%;
`
const Buttonmine = styled.div`
border-radius:30px;
border:2px solid blue;
`
const Spanmine=styled.div`
border-radius:8px;
`
export default Footer;