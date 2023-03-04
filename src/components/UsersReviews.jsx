import React from "react";
import styled from "styled-components";
import Stars from "../assets/image/Stars.png";
function UsersReviews() {
  return (
    <Container>
      <SecondContainer>
        <h2>Отзывы наших клиентов</h2>
        <p>
          Если вы считаете, что наша информация была для вас полезна, напишите
          отзыв! Обратная связь не только помогает улучшать наши продукты и
          услуги; благодаря ей все смогут узнать, что мы заботимся о том, чтобы
          обеспечить самое лучшее качество
        </p>
        <StyledBtn>Оставить отзыв</StyledBtn>
      </SecondContainer>
      <ReviewsContainer>
        <StarsIconStyled src={Stars} alt="iconStars" />
        <StyledUsRewiewsText>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare.”
        </StyledUsRewiewsText>
        <UserNameStyled>Jenny Wilson</UserNameStyled>
        <UserStatusStyled>Product Manager</UserStatusStyled>
      </ReviewsContainer>
    </Container>
  );
}
const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    max-width: 526.22px;
    font-style: normal;
    font-weight: 700;
    font-size: 38.6667px;
    color: #0e1133;
    margin-bottom: 1rem;
  }
  p {
    max-width: 526.22px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 155%;
    letter-spacing: 0.02em;
    color: #505056;
    margin-bottom: 2rem;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  padding: 2.5rem 2rem;
  margin-top: 10rem;
  @media screen and (max-width: 830px) {
    flex-wrap: wrap;
  }
`;
const ReviewsContainer = styled.div`
  border: 1px solid gold;
  padding: 28px;
  border-radius: 5px;
  @media screen and (max-width: 830px) {
    margin-top: 4rem;
  }
`;
const UserStatusStyled = styled.p`
  width: 117px;
  font-family: “Rubik”;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 155%;
  margin: 0;
  letter-spacing: 0.02em;
  color: #505056;
`;
const UserNameStyled = styled.p`
  width: 105px;
  margin: 0;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 155%;
  letter-spacing: 0.02em;
  color: #0e1133;
`;
const StyledUsRewiewsText = styled.p`
  max-width: 512px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 155%;
  letter-spacing: 0.02em;
  color: #505056;
`;
const StarsIconStyled = styled.img`
  max-width: 103.11px;
  max-height: 16.79px;
`;

const StyledBtn = styled.button`
  padding: 10.6667px 15.3333px;
  cursor: pointer;
  background: none;
  max-width: 187px;
  max-height: 56px;
  border: 0.888889px solid #007aff;
  border-radius: 4px;

  letter-spacing: 0.02em;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #007aff;
  :active {
    background-color: #007aff;
    color: aliceblue;
  }
`;
export default UsersReviews;
