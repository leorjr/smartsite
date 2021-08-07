import styled from "styled-components";

export const SectionStyled = styled.section`
  width: 90%;
  margin: 0 auto;

  border: 4px solid #ededed;
  border-radius: 10px;
`;

export const ContainerStyled = styled.div`
  width: 95%;
  margin: 0 auto;
  color: #828282;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 1fr 0.5fr 0.5fr 0.5fr 1fr 1fr;
  grid-template-areas:
    "icon"
    "title"
    "option1"
    "option2"
    "option3"
    "filter"
    "controlles";

  div.icon {
    grid-area: icon;

    div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      figure {
        width: 25px;
        margin: 5px;
        img {
          width: 100%;
        }
      }
    }
  }

  div.title {
    grid-area: title;
    border-bottom: 2px solid #ededed;
    p {
      font-size: 1.3rem;
      text-align: left;
    }
  }

  div.option1 {
    grid-area: option1;
    border-bottom: 2px solid #ededed;
    display: grid;
    grid-template-columns: 1fr 1fr;

    font-size: 0.9rem;

    div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    p {
      text-align: right;
    }
  }

  div.option2 {
    grid-area: option2;
    border-bottom: 2px solid #ededed;

    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 0.9rem;

    div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    p {
      text-align: right;
    }
  }

  div.option3 {
    grid-area: option3;
    border-bottom: 2px solid #ededed;

    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 0.9rem;

    div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    p {
      text-align: right;
    }
  }

  div.filter {
    grid-area: filter;

    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 0.9rem;

    div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    p {
      text-align: right;
    }
  }

  div.controlles {
    grid-area: controlles;

    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;

    div.search {
      width: 60%;
      height: 50%;

      justify-self: flex-end;

      div {
        width: 100%;
        height: 100%;
        background-color: #ffb739;
        border: 2px solid #ffb739;
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;
        button {
          background-color: transparent;
          border: none;
          outline: none;
          cursor: pointer;

          text-transform: uppercase;
          font-weight: 600;
        }
      }
    }

    div.clean {
      width: 60%;
      height: 50%;

      justify-self: flex-start;

      div {
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: 2px solid #828282;
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;
        button {
          background-color: transparent;
          border: none;
          outline: none;
          cursor: pointer;

          text-transform: uppercase;
          font-weight: 600;
        }
      }
    }
  }
`;
