import styled from "styled-components";

export const ExternalContainer = styled.div`
  width: 250px;
  height: 333px;
  background-color: #f5f5f5;
  color: #6f6f6f;
  font-weight: 300;
  border-radius: 10px;
  border: 2px solid #ededed;

  margin: 5px;
`;

export const InternalContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: left;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(1fr, 10px) minmax(1fr, 40px) 2fr 1fr 1fr 1fr;
  grid-template-areas:
    "isOpened"
    "title"
    "adress"
    "caption"
    "wknd1"
    "wknd2";

  .isOpened {
    grid-area: isOpened;
    p {
      font-size: 0.9rem;
      font-weight: 500;
    }
  }

  .title {
    grid-area: title;
    p {
      color: #444444;
      font-size: 1rem;
      font-weight: 600;
      margin: 0px;
    }
  }

  .adress {
    grid-area: adress;
    border-bottom: 2px solid #dbdbdb;
    p {
      font-size: 0.8rem;
    }
  }

  .caption {
    grid-area: caption;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    figure {
      width: 50px;
      margin: 10px auto;
      img {
        width: 100%;
      }
    }
  }

  .wknd1 {
    grid-area: wknd1;

    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 20px;

    div {
      .title {
        color: #444444;
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 5px;
      }
      p {
        font-size: 0.8rem;
        margin: 0px;
      }
    }
  }

  .wknd2 {
    grid-area: wknd2;

    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 20px;

    div {
      .title {
        color: #444444;
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 5px;
      }
      p {
        font-size: 0.8rem;
        margin: 0px;
      }
    }
  }
`;
