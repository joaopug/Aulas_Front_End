import { useState } from "react";

function sistemaVotacao() {
  const [votosA, setVotosA] = useState(0);
  const [votosB, setVotosB] = useState(0);
  const [votosC, setVotosC] = useState(0);

  function votarA() {
    setVotosA(votosA + 1);
  }

  function votarB() {
    setVotosB(votosB + 1);
  }

  function votarC() {
    setVotosC(votosC + 1);
  }

  return (
    <div>
      <button onClick={votarA}>Votar A</button>
      <button onClick={votarB}>Votar B</button>
      <button onClick={votarC}>Votar C</button>
      <p>Candidato A: {votosA} voto(s)</p>
      <p>Canditado B: {votosB} voto(s)</p>
      <p>Canditado C: {votosC} voto(s)</p>

    </div>
  );
}

export default sistemaVotacao;