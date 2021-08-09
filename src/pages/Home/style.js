import styled from "styled-components";

export const SectionStyled = styled.section`
  width: 90%;
  margin: 20px auto;
  max-width: 768px;
  border: 4px solid #ededed;
  border-radius: 10px;
  color: #808080;
`;

export const ContainerStyled = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 0.4fr 0.1fr 0.1fr 0.1fr 0.9fr 1fr;
  grid-template-areas:
    "icon"
    "title"
    "option1"
    "option2"
    "option3"
    "filter"
    "controles";

  .icon {
    div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      figure {
        width: 35px;
        margin: 10px;
        img {
          width: 100%;
        }
      }
    }
  }

  .title {
    border-bottom: 2px solid #ededed;
    p {
      width: 60%;
      max-width: 155px;
      font-size: 1.5rem;
      margin: 10px 10px;
    }
  }

  .option1 {
    border-bottom: 2px solid #ededed;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    div {
      text-align: left;
      input {
        transform: scale(1.2);
        margin-right: 10px;
      }
      label {
      }
    }
    p {
      text-align: right;
    }
  }

  .option2 {
    border-bottom: 2px solid #ededed;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    div {
      text-align: left;
      input {
        transform: scale(1.2);
        margin-right: 10px;
      }
      label {
      }
    }
    p {
      text-align: right;
    }
  }

  .option3 {
    border-bottom: 2px solid #ededed;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    div {
      text-align: left;
      input {
        transform: scale(1.2);
        margin-right: 10px;
      }
      label {
      }
    }
    p {
      text-align: right;
    }
  }

  .filter {
    display: grid;
    grid-template-rows: 0.5fr 0.2fr;
    align-items: center;
    justify-content: center;
    div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      input {
        transform: scale(1.2);
        margin-right: 10px;
      }
      label {
        font-size: 1.2rem;
      }
    }
    .results {
      font-size: 1.1rem;
      margin: 0;
      span {
        color: black;
        font-weight: 600;
        font-size: 1.3rem;
        margin-left: 0px;
      }
    }
  }

  .controlles {
    display: grid;
    grid-template-rows: 1fr 1fr;
    .search {
      margin-bottom: 20px;
      div {
        button {
          width: 100%;
          padding: 15px;
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          background-color: #fcba38;
          border: 1px solid #fcba38;
          outline: none;
          cursor: pointer;
          border-radius: 5px;
        }
      }
    }
    .clean {
      div {
        button {
          width: 100%;
          padding: 15px;
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          background-color: transparent;
          border: 2px solid #bdbdbd;
          outline: none;
          cursor: pointer;
          border-radius: 5px;
        }
      }
    }
  }

  @media (min-width: 768px) {
    grid-template-rows: 0.5fr 0.4fr 0.1fr 0.1fr 0.1fr 1fr 1fr;

    .title {
      p {
        width: 100%;
        max-width: 100%;
        text-align: left;
      }
    }

    .filter {
      grid-template-rows: 1fr;
      grid-template-columns: 1fr 1fr;
      .results {
        text-align: right;
      }
    }

    .controlles {
      grid-template-rows: 1fr;
      grid-template-columns: 1fr 1fr;
      column-gap: 20px;

      .search {
        display: flex;
        justify-content: flex-end;
        div {
          width: 70%;
          button {
            font-size: 0.8rem;
            padding: 10px;
          }
        }
      }
      .clean {
        display: flex;
        justify-content: flex-start;
        div {
          width: 70%;
          button {
            font-size: 0.8rem;
            padding: 10px;
          }
        }
      }
    }
  }
`;
