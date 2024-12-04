
import styled from "styled-components";

export const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  /* background: linear-gradient(45deg, #c31432, #6b6b83, #3b8d99); */
  background: linear-gradient(45deg, #c31432, #240b36, #3903edc6);
  background-size: 300% 300%;
  animation: color 10s ease-in-out infinite;

  /* Animacion del backgraound del body*/
  @keyframes color {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;