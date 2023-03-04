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
        <Corusel autoWidth infinite autoPlay autoPlayInterval={3000}>
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
  align-items: center;
`;
const SliderCintainer = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
padding: 2.5rem 2rem;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 868px) {
    padding: 0.4rem;
  }
`;

const TitleStyled = styled.h2`
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
  max-width: 450px;
  max-height: 917.22px;
  margin-top: 80px;
  @media screen and (max-width: 868px) {
    margin-left: 1rem;
  }
`;
 