import { useState } from "react";
import "./App.css";

function App() {
  const [contador, setContador] = useState(0);

  return (
    <>
      <div
        style={{
          fontSize: "3rem",
          color: "#000",
        }}
      >
        {contador}
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={() => setContador(contador + 1)}>+ 1</button>
        <button onClick={() => setContador(contador - 1)}>- 1</button>
      </div>
    </>
  );
}

export default App;
