import React from "react";
import styled from "styled-components";
import PlayMarket from "../assets/image/MobileAppStoreBadge1.png";
import AppStore from "../assets/image/MobileAppStoreBadge2.png";
import ImgModel from "../assets/image/Frame.png";
function AboutUs() {
  return (
    <>
      <Container>
        <MainContainer>
          <div>
            <TitleStyled>Скачайте прямо сейчас !</TitleStyled>
            <InformationStyled>
              <b>Yoowe</b> - это интернет-площадка для онлайн-шопинга, где можно
              купить качественные кроссовки известных брендов и местных
              магазинов. Компания также предлагает своим клиентам доставку
              товаров по всему Кыргызстану.
            </InformationStyled>
            <ImgContainers>
              <a href="/">
                <ImgStyled src={PlayMarket} alt="img" />
              </a>
              <a href="/">
                <ImgStyled
                  src={AppStore}
                  alt="img"
                  style={{
                    marginLeft: "2rem",
                  }}
                />
              </a>
            </ImgContainers>
          </div>
          <div>
            <ImgModelContainer>
              <ImgModelStyled src={ImgModel} alt="img" style={{}} />
            </ImgModelContainer>
          </div>
        </MainContainer>
      </Container>
    </>
  );
}
export default AboutUs;

const Container = styled.div`
  min-width: 100vw;
  max-width: 100vw;
  background: #0000ff;
  padding: 2.5rem 2rem;
  margin-bottom: 0;
  margin-top: 6rem;
  display: flex;
  @media (max-width: 1138px) and (min-width: 768px) {
    max-width: 100vw;
    flex-wrap: wrap;
  }
`;
const MainContainer = styled.div`
  display: flex;
  @media (max-width: 2560px) and (min-width: 320px) {
    flex-wrap: wrap;
  }
`;
const TitleStyled = styled.h2`
  max-width: 41.0625rem;
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 120%;
  margin: 0;
  letter-spacing: -0.01em;
  color: #ffffff;
  @media (max-width: 425px) and (min-width: 320px) {
    max-width: 30rem;
    font-size: 25px;
    line-height: 100%;
    flex-wrap: wrap;
  }
`;
const InformationStyled = styled.p`
  max-width: 38.88875rem;
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 155%;
  margin-top: 1.5rem;
  letter-spacing: 0.02em;
  color: #ffffff;
`;
const ImgContainers = styled.div`
  margin-top: 56px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media (max-width: 1138px) and (min-width: 768px) {
    margin-top: 20px;
    /* align-items: center;
    justify-content: center; */
  }
`;
const ImgStyled = styled.img`
  max-width: 11.6875rem;
  max-height: 3.463125rem;
  @media (max-width: 425px) and (min-width: 320px) {
    margin-top: 20px;
    max-width: 7.79166667rem;
    max-height: 2.30875rem;
  }
`;
const ImgModelStyled = styled.img`
  max-width: 47.375rem;
  max-height: 46.125rem;
  @media (max-width: 768px) and (min-width: 425px) {
    max-width: 24rem;
    max-height: 34rem;
  }
  @media (max-width: 425px) and (min-width: 320px) {
    margin-top: 190px;
    max-width: 19rem;
    max-height: 29rem;
  }
  @media (max-width: 320px) and (min-width: 0px) {
    display: none;
  }
`;
const ImgModelContainer = styled.div`
  display: flex;
  @media (max-width: 768px) and (min-width: 425px) {
    margin-top: 100px;
  }
  margin-top: -9.375rem;
  @media (max-width: 1138px) and (min-width: 768px) {
    margin-top: 20px;
    align-items: center;
    justify-content: center;
  }
`;
