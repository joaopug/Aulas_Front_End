import { use, useEffect, useState } from "react";

function AppEffect() {
  const [efeito, setEfeito] = useState(0);
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("Evento disparado uma vez");
  }, []);

  useEffect(() => {
    console.warn("Executou o disparo do useState efeito");
  }, [efeito]);

  useEffect(() => {
    console.error("Executou em toda renderização");
  });

  return (
    <>
      <h1> Trabalhando com hook UseEffect </h1>
      <button onClick={() => setEfeito(efeito + 1)}>Adicionar Efeito</button>

      <h2> Quantidade Efeito : {efeito}</h2>
      <button onClick={() => setContador(contador + 1)}>Adicionar na contagem</button>
    </>
  );
}

export default AppEffect;
