import { useState } from "react";
import "./App.css";

function printaPessoas(valorPesquisa, listaPessoas) {
  const divsPessoas = [];
  for (let i = 0; i < listaPessoas.length; i++) {
    if (listaPessoas[i].includes(valorPesquisa)) {
      divsPessoas.push(<div key={i}>{listaPessoas[i]}</div>);
    }
  }
  return divsPessoas;
}

export function App() {
  const [valorPesquisa, setValorPesquisa] = useState(""); //o usestate é usado para fazer com que a página "atualize" sempre que seu valor é mudado
  const listaPessoas = ["jariana", "julio", "rafael", "pedro", "rian"];
  return (
    <div>
      <input
        placeholder="Digite o nome da pessoa"
        onChange={(e) => setValorPesquisa(e.target.value)}
      />
      {printaPessoas(valorPesquisa, listaPessoas)}
    </div>
  );
}

export default App;
