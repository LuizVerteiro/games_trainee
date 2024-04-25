import styled from "styled-components";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import "primeicons/primeicons.css";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;margin-top: 50px;
  padding: 50px;
  border: 2px solid #cccccc;
  background-color: #fffafa;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Input = styled(InputText)`
  background-color: #fffafa;
  font-size: 16px;
  padding: 8px;
`;

export const StyledButton = styled(Button)`
  padding: 10px;
  background-color: #4169e1;
  color: #fff;
  border: 2px solid #cccccc;
  border-radius: 5px;
  cursor: pointer;
`;

export const TasksList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
`;

export const TaskItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

export const TaskCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: flex;
  margin-right: 8px;
`;
