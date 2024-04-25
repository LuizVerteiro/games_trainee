import styled from "styled-components";

export const Container = styled.div`
  font-size: 3rem;
  background-color: ${(props) => (props.isBlack ? "white" : "black")};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Cobrir a altura total da tela */
  width: 100vw; /* Cobrir a largura total da tela */
`;
export const Switch = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 20px;
  color: ${(props) => (props.isBlack ? "white" : "black")};
  background-color: ${(props) => (props.isBlack ? "black" : "white")};
  cursor: pointer;
  transition: background-color 0.3s ease;
`;
