import React from "react";
import styled from "styled-components";
import first from "../assets/image/phone1.png";
import second from "../assets/image/phone-3.png";
import third from "../assets/image/phone-3.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
export const SimpleSlider = () => {
  return (
    <Container>
      <div>
        <TitleStyled>Screenshots of the application</TitleStyled>
        <TextStyled>
          Not only does this app do everything you need, but it is also
          beautifully designed and extremely intuitive to use.
        </TextStyled>
      </div>
      <SliderCintainer>
        <Corusel infinite autoPlay autoPlayInterval={3000}>
          <ImgStyled src={first} alt="phone" />
          <ImgStyled src={second} alt="phone" />
          <ImgStyled src={third} alt="phone" />
        </Corusel>
      </SliderCintainer>
    </Container>
  );
};
const Corusel = styled(AliceCarousel)`
    display: flex;
    justify-content: center;
`
const SliderCintainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleStyled = styled.h2`
  /* width: 774px; */
  margin-top: 100px;
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 120%;

  text-align: center;
  letter-spacing: -0.01em;

  color: #000000;
`;

const TextStyled = styled.p`
  /* width: 624px; */
  margin-top: 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 155%;

  text-align: center;
  letter-spacing: 0.02em;

  color: #505056;
`;
const ImgStyled = styled.img`
  width: 450px;
  height: 917.22px;
  /* margin-left: 490px; */
  margin-top: 80px;
`;
