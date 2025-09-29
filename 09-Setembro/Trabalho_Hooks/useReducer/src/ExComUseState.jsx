import { useState } from "react";

function ExComUseState() {

  const [contador, setContador] = useState(0);

  const Incrementar = () => {
    setContador((contadorAtual) => contadorAtual + 1);
  };

  const Decrementar = () => {
    setContador((contadorAtual) => contadorAtual - 1);
  };

  const Resetar = () => {
    setContador(0);
  };

  return (
    <div>
      <h2>Contador com useState</h2>
      <h1>{contador}</h1>
      <button onClick={Incrementar}>Incrementar +</button>
      <button onClick={Decrementar}>Decrementar -</button>
      <button onClick={Resetar}>Resetar</button>
    </div>
  );
}

export default ExComUseState;
