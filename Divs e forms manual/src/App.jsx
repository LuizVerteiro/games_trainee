import { useState } from "react";
import {
  FormContainer,
  Input,
  Button,
  DisplayInfo,
  Container,
  NameInfo,
  PhoneInfo,
} from "./styles";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [inputData, setInputData] = useState({
    name: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData(inputData);
  };

  return (
    <Container>
      <FormContainer>
        <Input
          type="text"
          name="name"
          placeholder="Nome"
          value={inputData.name}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="phone"
          placeholder="Telefone"
          value={inputData.phone}
          onChange={handleChange}
        />
        <Button type="submit" onClick={handleSubmit}>
          Enviar
        </Button>
      </FormContainer>
      {submitted && (
        <DisplayInfo>
          {formData.name && <NameInfo>Nome: {formData.name}</NameInfo>}
          {formData.phone && <PhoneInfo>Telefone: {formData.phone}</PhoneInfo>}
        </DisplayInfo>
      )}
    </Container>
  );
}
export default App;
