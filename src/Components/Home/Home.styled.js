import styled from "styled-components";

export const Containerdiv = styled.div`
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 100vh;
  background: black;
`;
export const Boxdiv = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px;
  transition: 0.5s;
  background: #060c21;
  &:hover {
    height: 400px;
    Contentdiv {
      opacity: 1;
      h2 {
        font-size: 20px;
        color: #fff;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 1px;
        span {
          font-size: 14px;
          color: #fff;
          font-weight: 300;
          letter-spacing: 2px;
        }
      }
    }
  }
  &:before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: white;
    z-index: -1;
    background: linear-gradient(235deg, #89ff00, #010615, #00bcd4);
  }
  &:after {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: white;
    z-index: -2;
    filter: blur(40px);
    background: linear-gradient(235deg, #89ff00, #010615, #00bcd4);
  }
  &:nth-child(2):before,
  &:nth-child(2):after {
    background: linear-gradient(235deg, #ff005e, #010615, #fbff00);
  }
  &:nth-child(3):before,
  &:nth-child(3):after {
    background: linear-gradient(235deg, #772aff, #010615, #2196f3);
  }
`;
export const Imgdiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  img {
    max-width: 100%;
    opacity: 0.9;
    transition: 0.5s;
  }
`;
export const Contentdiv = styled.div`
  position: absolute;
  bottom: 0;
  left: 10px;
  right: 10px;
  bottom: 10px;
  height: 90px;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 0.5s;
`;
