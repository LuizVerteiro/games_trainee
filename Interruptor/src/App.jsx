import { useState } from "react";
import { Container, Switch } from "./styles";
function App() {
  const [isBlack, setIsBlack] = useState(false);
  const [buttonText, setButtonText] = useState("Acender");
  const toggleColor = () => {
    setIsBlack((prevColor) => !prevColor);
    setButtonText((prevText) =>
      prevText === "Acender" ? "Apagar" : "Acender"
    );
  };
  return (
    <Container isBlack={isBlack}>
      <Switch onClick={toggleColor} isBlack={isBlack}>
        {buttonText}
      </Switch>
    </Container>
  );
}

export default App;
