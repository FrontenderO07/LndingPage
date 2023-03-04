import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <>
      <StyleFooter>
        <FooterTitle>
          <h1>У вас есть идеи? Свяжитесь с нами!</h1>
          <button>Связаться </button>
        </FooterTitle>
        <FooterInfo>
          <div>
            <h4>О Yoowe</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
              sodales in volutpat ullamcorper amet adipiscing fermentum.
            </p>
          </div>
          <Blcoks>
            <h4>Компании</h4>
            <li>О нас</li>
            <li>Работники</li>
            <li>Карьера</li>
          </Blcoks>
          <Blcoks>
            <h4>Помощь</h4>
            <li>Клиентская поддержка</li>
            <li> Детали Доставки</li>
            <li> Политика приватности</li>
            <li>Условия пользования</li>
          </Blcoks>
          <Blcoks>
            <h4>Ресурсы</h4>
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </Blcoks>
        </FooterInfo>
      </StyleFooter>
    </>
  );
};
export default Footer;
const StyleFooter = styled.footer`
  width: 100vw;
  background-color: #0e1133;
  padding: 2.5rem 2rem;
  /* margin-top: 20rem; */
  @media screen and (max-width: 868px) {
    padding: 0.4rem;
  }
`;
const Blcoks = styled.div`
  @media screen and (max-width:910px) {
    margin-top: 2rem;
  }
`
const FooterTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.2rem solid #6e6e72;
  @media screen and (max-width: 760px){
    flex-wrap: wrap;
  }
  h1 {
    font-size: 2rem;
    line-height: 50px;
    color: #ffffff;
    margin-bottom: 2rem;

  }
  button {
   
    max-width: 11.6875rem;
    height: 56px;
    background: #ffffff;
    border-radius: 4px;
    margin-bottom: 2rem;
    padding: 1rem 2rem;

    &:hover {
      background-color: orange;
    }
  }
`;
const FooterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  @media screen and (max-width: 910px){
    flex-wrap: wrap;
  }
  h4 {
    font-size: 1rem;
    line-height: 29px;
    color: #ffffff;
  }
  p {
    max-width: 24rem;
    font-size: 16px;
    line-height: 155%;
    letter-spacing: 0.02em;
    cursor: pointer;
    color: #cfcccc;
  }
  li {
    list-style: none;
    font-size: 0.9rem;
    cursor: pointer;

    line-height: 48px;
    color: #cfcccc;
  }
`;
