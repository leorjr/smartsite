import styled from "styled-components";

export const SectionStyled = styled.section`
  width: 95%;
  max-width: 780px;
  margin: 20px auto;

  background-color: #ededed;
`;

export const ContainerStyled = styled.div`
  width: 90%;
  max-width: 653px;
  margin: 0 auto;

  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 2fr 1fr;
  grid-template-areas:
    "mascara toalha bebedouro vestiario"
    "mascara toalha bebedouro vestiario"
    "mascara toalha bebedouro vestiario";

  div.mascara {
    grid-area: mascara;
    div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 10px;

      figure {
        width: 40px;
        margin: 0 auto;
        img {
          width: 100%;
        }
      }

      p {
        font-size: 0.8rem;
        font-weight: 300;
      }
    }
  }

  div.toalha {
    grid-area: toalha;
    div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 10px;

      figure {
        width: 40px;
        margin: 0 auto;
        img {
          width: 100%;
        }
      }

      p {
        font-size: 0.8rem;
        font-weight: 300;
      }
    }
  }

  div.bebedouro {
    grid-area: bebedouro;
    div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 10px;

      figure {
        width: 40px;
        margin: 0 auto;
        img {
          width: 100%;
        }
      }

      p {
        font-size: 0.8rem;
        font-weight: 300;
      }
    }
  }

  div.vestiario {
    grid-area: vestiario;
    div {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 10px;

      figure {
        width: 40px;
        margin: 0 auto;
        img {
          width: 100%;
        }
      }

      p {
        font-size: 0.8rem;
        font-weight: 300;
      }
    }
  }

  @media (max-width: 767px) {
    grid-column-gap: 10px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "mascara"
      "toalha"
      "bebedouro"
      "vestiario";

    div.mascara {
      div {
        column-gap: 5px;

        figure {
          width: 60px;
          img {
            width: 100%;
          }
        }

        p {
          font-size: 0.9rem;
          font-weight: 300;
        }
      }
    }

    div.toalha {
      div {
        column-gap: 5px;

        figure {
          width: 60px;
          img {
            width: 100%;
          }
        }

        p {
          font-size: 0.9rem;
          font-weight: 300;
        }
      }
    }

    div.bebedouro {
      div {
        column-gap: 5px;

        figure {
          width: 60px;
          img {
            width: 100%;
          }
        }

        p {
          font-size: 0.9rem;
          font-weight: 300;
        }
      }
    }

    div.vestiario {
      div {
        column-gap: 5px;

        figure {
          width: 60px;
          img {
            width: 100%;
          }
        }

        p {
          font-size: 0.9rem;
          font-weight: 300;
        }
      }
    }
  }
`;
