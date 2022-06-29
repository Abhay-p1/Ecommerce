import React, { useState } from "react";
import "./Showcase.css";
import video1 from "../../Videos/product (1).mp4";
import video2 from "../../Videos/product (2).mp4";
import video3 from "../../Videos/product (3).mp4";
import video4 from "../../Videos/product (4).mp4";

const Showcase = () => {
  const [isActive4, setActive4] = useState(false);
  const [isActive3, setActive3] = useState(false);
  const [isActive2, setActive2] = useState(false);
  const [isActive1, setActive1] = useState(true);

  const toggle4 = () => {
    setActive4(true);
    setActive3(false);
    setActive1(false);
    setActive2(false);
  };
  const toggle3 = () => {
    setActive3(true);
    setActive1(false);
    setActive2(false);
    setActive4(false);
  };
  const toggle1 = () => {
    setActive1(true);
    setActive2(false);
    setActive3(false);
    setActive4(false);
  };
  const toggle2 = () => {
    setActive2(true);
    setActive1(false);
    setActive3(false);
    setActive4(false);
  };

  return (
    <>
      <section className="showcase">
        <video
          className={`slides ${isActive1 ? "active" : null}`}
          onClick={toggle1}
          src={video1}
          autoPlay
          loop
          muted
        />
        <video
          className={`slides ${isActive2 ? "active" : null}`}
          onClick={toggle2}
          src={video2}
          autoPlay
          loop
          muted
        />
        <video
          className={`slides ${isActive3 ? "active" : null}`}
          onClick={toggle3}
          src={video3}
          autoPlay
          loop
          muted
        />
        <video
          className={`slides ${isActive4 ? "active" : null}`}
          onClick={toggle4}
          src={video4}
          autoPlay
          loop
          muted
        />
        <div className="content active">
          {/* <h1>
            Roundtable.
            <br />
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod nobis
            blanditiis fugit totam laboriosam, vero aliquam consequatur in non
            ut?
          </p> */}
          <a href="/">Buy Now</a>
        </div>
        <div className="content">
          <h1>
            Roundtable.
            <br />
            <span>Events</span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod nobis
            blanditiis fugit totam laboriosam, vero aliquam consequatur in non
            ut?
          </p>
          <a href="/">Buy Now</a>
        </div>
        <div className="content">
          <h1>
            Roundtable.
            <br />
            <span>Fun</span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod nobis
            blanditiis fugit totam laboriosam, vero aliquam consequatur in non
            ut?
          </p>
          <a href="/">Buy Now</a>
        </div>
        <div className="content">
          <h1>
            Roundtable.
            <br />
            <span>Fests</span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod nobis
            blanditiis fugit totam laboriosam, vero aliquam consequatur in non
            ut?
          </p>
          <a href="/">Buy Now</a>
        </div>

        <div className="slider">
          <div
            className={`nav-btn ${isActive1 ? "active" : null}`}
            onClick={toggle1}
          />
          <div
            className={`nav-btn ${isActive2 ? "active" : null}`}
            onClick={toggle2}
          />
          <div
            className={`nav-btn ${isActive3 ? "active" : null}`}
            onClick={toggle3}
          />
          <div
            className={`nav-btn ${isActive4 ? "active" : null}`}
            onClick={toggle4}
          />
        </div>
      </section>
    </>
  );
};

export default Showcase;
