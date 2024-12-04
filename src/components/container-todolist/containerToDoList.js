
import styled from "styled-components";

export const ContainerToDoList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.2);
  width: 700px;
  align-items: center;
  border: none;
  border-radius: 9px;

  @media (max-width: 760px){
    width: 550px;
  };
`;