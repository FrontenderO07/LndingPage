import React from "react";
import styled from "styled-components";
import Logo from "../assets/image/logoApp.png";
import burger from "../assets/icons/free-icon-burger-menu-9411865.png";
import { ReactComponent as Mobail1 } from "../assets/icons/Mobile1.svg";
import { ReactComponent as Mobail2 } from "../assets/icons/Mobile2.svg";
import Phone from "../assets/image/App.png";
const Header = () => {
  return (
    <>
      <Container>
        <ImgSize src={Logo} alt="logo" />
        <nav>
          <ImgBurger src={burger} alt="menu" />
          <a href="/">Главная</a>
          <a href="/">О нас</a>
          <a href="/">Отзывы</a>
          <a href="/">FAQ</a>
          <a href="/">Контакты</a>
        </nav>
      </Container>
      <StyleContainer>
        <ContainerTitle>
          <h1>Ваша универсальная платформа для свободной торговли</h1>
          <p>
            У нас вы найдете все, что вам нужно – от одежды и обуви до
            электроники и косметики. Мы собрали лучшие предложения от
            проверенных продавцов, чтобы вы могли сделать выгодные покупки прямо
            с вашего мобильного устройства.
          </p>
          <AppContainer>
            <Mobail1 />
            <Mobail2 />
          </AppContainer>
        </ContainerTitle>
        <StyledPhoneImage src={Phone} alt="phone" />
      </StyleContainer>
    </>
  );
};

export default Header;
const StyledPhoneImage = styled.img`
  max-width: 30rem;
  max-height: 30rem;
`;
const StyleContainer = styled.div`
  padding: 2.5rem 2rem;
  @media screen and (max-width: 868px) {
    padding: 0.4rem;
  }
  @media screen and (max-width: 530px) {
    flex-wrap: wrap;
  }

  width: 100vw;
  display: flex;
  justify-content: space-between;
`;
const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 3rem;
  margin-bottom: 3rem;
`;
const Container = styled.header`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: row;
  padding: 2.5rem 2rem;
  @media screen and (max-width: 868px) {
    padding: 0.4rem;
  }
  justify-content: space-between;
  align-items: center;
  nav {
    gap: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    position: relative;
  }
  a {
    font-size: 1rem;
    font-weight: 800;
    text-decoration: none;
    font-size: 20px;
    cursor: pointer;
    color: #060606;
    @media screen and (max-width: 868px) {
      display: none;
    }
  }
`;

const ImgSize = styled.img`
  max-width: 10.125rem;
  max-height: 2.25rem;
`;

const ImgBurger = styled.img`
  display: none;
  @media screen and (max-width: 868px) {
    display: block;
  }
  max-width: 5.125rem;
  max-height: 5.25rem;
`;

const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    max-width: 46rem;
    font-size: 3rem;
    color: #0e1133;
    margin-bottom: 2rem;
    @media screen and (max-width: 868px) {
      font-size: 2rem;
    }
  }
  p {
    margin: 0;
    max-width: 45rem;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5rem;
    letter-spacing: 0.02em;
    color: #505056;
    margin-bottom: 3rem;
  }
`;
