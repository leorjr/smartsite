import styled from "styled-components";

export const FooterStyled = styled.footer`
  width: 100%;
  height: 120px;
  background-color: #333333;
  color: white;
  padding: 20px 0px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  figure {
    width: 80px;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
  p {
    font-size: 0.8rem;
    font-weight: 300;
  }
`;
