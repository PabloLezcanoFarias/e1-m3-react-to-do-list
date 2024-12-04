import styled from "styled-components";

export const ContainerTasksStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 500px;
  align-items: center;

  @media (max-width: 760px){
    gap: 330px;
  };
`;