import styled from "styled-components";

export const ExternalContainer = styled.section`
  width: 80%;
  margin: 20px auto;
  max-width: 780px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  h1 {
    text-align: left;
    width: 30%;
    font-size: 2rem;
    text-transform: uppercase;
    color: #000000;
  }

  div {
    width: 100px;
    height: 10px;
    background-color: black;
    content: " ";
    margin-bottom: 15px;
  }

  p {
    text-align: left;
    font-size: 0.8rem;
  }

  @media (max-width: 767px) {
    h1 {
      width: 80%;
    }

    p {
      text-align: justify;
    }
  }
`;
