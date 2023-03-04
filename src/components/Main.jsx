import React from "react";
import styled from "styled-components";
import { ReactComponent as Frame1 } from "../assets/icons/Frame1.svg";
import { ReactComponent as Frame2 } from "../assets/icons/Frame2.svg";
import { ReactComponent as Frame3 } from "../assets/icons/Frame3.svg";
import { ReactComponent as Info1 } from "../assets/icons/info1.svg";
import { ReactComponent as Info2 } from "../assets/icons/info2.svg";
import { ReactComponent as Info3 } from "../assets/icons/info3.svg";
import Background from "../assets/image/Background.jpg";
import Phone2 from "../assets/image/Phone2.jpg";
const Main = () => {
  return (
    <>
    <div>
      <ContainerMain>
        <h2>Приумущества нашего приложения для покупателей</h2>
        <p>
          Мы предлагаем широкий выбор кроссовок от ведущих брендов по выгодным
          ценам. У нас вы найдете как классические модели, так и самые последние
          тренды в мире кроссовок.
        </p>
        </ContainerMain>

      <ContainerInfo>
        <div>
          <Frame1 />
          <h3>Большой выбор товаров </h3>
          <p>
            Yoowe объединяет продавцов из разных регионов, что позволяет
            покупателям выбирать из большого количества товаров и услуг
          </p>
        </div>
        <div>
          <Frame2 />
          <h3>Надежность и безопасность</h3>
          <p>
            Мы обеспечивают защиту данных покупателей и продавцов, а также
            предоставляют механизмы решения споров
          </p>
        </div>
        <div>
          <Frame3 />
          <h3>Удобство сравнения товаров</h3>
          <p>
            Покупатели могут легко сравнить товарыи услуги от разных продавцов
            на нашем приложении
          </p>
        </div>
      </ContainerInfo>
      <SectionStyle>
        <BlockItem>
          <div>
            <h2>Преимущества для продавцов</h2>
            <p>
              Продавцы могут легко создать свой профиль на нашем приложении,
              добавить свои товары и управлять заказами, установить цены и
              предоставить клиентам удобные способы оплаты и доставки.
            </p>
            <p>
              Yoowe предоставляет множество возможностей для продавцов, которые
              могут увеличить их доход и аудиторию, улучшить свой бизнес без
              необходимости инвестирования в маркетинг, создание собственной
              торговой площадки или управление сложной инфраструктурой.
            </p>
          </div>

          <img src={Phone2} alt="images" />
        </BlockItem>
        </SectionStyle>

        <SectionInfo>
          <div>
            <Info1 />
            <h3>Большая аудитория</h3>
            <p>
              Yoowe имеют огромную базу клиентов, которые уже готовы совершать
              покупки. Это позволяет продавцам быстро получать поток заказов и
              расширять свою клиентскую базу.
            </p>
          </div>
          <div>
            <Info2 />
            <h3>Лучший маркетинг</h3>
            <p>
              Мы занимаемся маркетингом и продвижением своей платформы, что
              позволяет продавцам продвигать свои товары и услуги быстрее и
              эффективнее.
            </p>
          </div>
          <div>
            <Info3 />
            <h3>Повышение доверия</h3>
            <p>
              Мы предоставляем гарантии качества, возврата и защиты покупателей.
              Это повышает доверие покупателей и увеличивает вероятность того,
              что продавец получит заказ.
            </p>
          </div>
        </SectionInfo>
      <StyleBg src={Background} alt="image" />
      </div>
    </>
  );
};
export default Main;
const BlockItem = styled.div`
  padding: 2.5rem 2rem;
  @media screen and (max-width: 868px) {
    padding: 0.4rem;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  h2 {
    max-width: 60rem;
    font-size: 56px;
    line-height: 120%;
    text-align: center;
    letter-spacing: -0.01em;
    color: #0e1133;
  }
  p {
    max-width: 50rem;
    margin-top: 3rem;
    font-size: 18px;
    line-height: 155%;
    text-align: center;
    letter-spacing: 0.02em;
    color: #505056;
  }
`;

const ContainerInfo = styled.div`
  padding: 2.5rem 2rem;
  flex-wrap: wrap;
  display: flex;
  width: 100vw;
  margin-top: 7rem;
  margin-bottom: 5rem;
  justify-content: space-between;
  text-align: center;
  div {
    margin-top: 2rem;
    width: 20rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  h3 {
    width: 17rem;
    margin-left: 2rem;
    font-size: 1.6rem;
    line-height: 120%;
    color: #0e1133;
  }
  p {
    font-size: 18px;
    line-height: 155%;
    letter-spacing: 0.02em;
    color: #505056;
  }
`;
const SectionStyle = styled.section`
width: 100vw;
  display: flex;
  flex-direction: column;
  img {
    max-width: 20rem;
    max-height: 30rem;
    margin: 0;
  }
  h2 {
    max-width: 30rem;
    font-size: 56px;
    line-height: 120%;
    letter-spacing: -0.01em;
    color: #000000;
  }
  p {
    margin-top: 2rem;
    max-width: 32rem;
    font-size: 18px;
    line-height: 155%;
    letter-spacing: 0.02em;
    color: #505056;
  }
`;
const SectionInfo = styled.div`
  width: 100vw;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  h3 {
    font-size: 1.7rem;
    line-height: 150%;
    letter-spacing: -0.01em;
    color: #0e1133;
  }
  p {
    max-width: 20rem;
  }
`;
const StyleBg = styled.img`
  margin-top: 3rem;
  width: 100vw;
`;
