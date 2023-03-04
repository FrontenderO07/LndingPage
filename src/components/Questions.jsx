import React from "react";
import styled from "styled-components";
import { ReactComponent as Add } from "../assets/icons/Vector.svg";
const Questions = () => {
  return (
    <>
      <StyleQuestions>
        <h1>Часто задаваемые вопросы</h1>
        <ContainerBtn>
          <FirstButons>
            <button>
              How to download <Add />
            </button>
            <button>
              Can I support from air? <Add />
            </button>
            <button>
              How to cantact air? <Add />
            </button>
          </FirstButons>
          <SecondButtons>
            <button>
              What about the event? <Add />
            </button>
            <button>
              How can I product update? <Add />
            </button>
            <button>
              How can get support? <Add />
            </button>
          </SecondButtons>
        </ContainerBtn>
        <ContainerTitle>
          <h2>Остались вопросы?</h2>
          <p>Задайте вопрос который вас интересует.</p>
          <StyleBtn>Контакты</StyleBtn>
        </ContainerTitle>
      </StyleQuestions>
    </>
  );
};
export default Questions;
const StyleQuestions = styled.div`
  width: 100vw;
  padding: 2.5rem 2rem;
  h1 {
    font-size: 2.5rem;
    line-height: 120%;
    color: #0e1133;
    text-align: center;
    margin-bottom: 3rem;
  }
  button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    width: 28rem;
    height: 70.24px;
    border: 0.97561px solid #505056;
    border-radius: 4px;
  }
`;
const ContainerBtn = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;
const FirstButons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (max-width: 425px) {
    button {
      max-width: 23rem;
    }
  }
`;
const SecondButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (max-width: 868px) {
    margin-top: 4rem;
  }
  @media screen and (max-width: 425px) {
    button {
      max-width: 23rem;
    }
  }
`;
const StyleBtn = styled.button`
display: flex;
align-items: center;
justify-content: center;
  padding: 2.5rem;
  max-width: 8rem;
  max-height: 3rem;
  background: #0000ff;
  border-radius: 4px;
  color: #fff;
  margin-left: 6rem;

  font-weight: 700;
  &:hover {
    background-color: orange;
  }
`;
const ContainerTitle = styled.div`
  display: grid;
  gap: 1rem;
  justify-content: center;
  h2 {
    margin-top: 3rem;
    font-size: 1.4rem;
    line-height: 120%;
    color: #0e1133;
    text-align: center;
  }
  p {
    font-size: 18px;
    line-height: 155%;
    letter-spacing: 0.02em;
    color: #505056;
    text-align: center;
  }
`;
