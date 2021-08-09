import styled from "styled-components";

export const ExternalContainer = styled.section`
  width: 90%;
  margin: 20px auto;
  max-width: 780px;
`;

export const InternalContainer = styled.div`
  width: 80%;
  margin: 0 auto;

  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
`;
