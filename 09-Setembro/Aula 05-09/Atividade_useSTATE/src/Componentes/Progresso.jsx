import { useState } from "react";

function barraProgresso() {
  const [progresso, setProgresso] = useState(0);

  function mudaBarra(acao) {
    if (acao == 1 && progresso < 100) {
      setProgresso(progresso + 10);
    } else if (acao == 2) {
      {
        if (progresso > 0) {
          setProgresso(progresso - 10);
        }
      }
    }
  }

  return (
    <>
      <button onClick={() => mudaBarra(1)}>+10%</button>
      <button onClick={() => mudaBarra(2)}>-10%</button>
      <p>{progresso}%</p>
      <div className="progresso" >
        <div className="barra"style={{ width: `${progresso}%` }}></div>
      </div>
    </>
  );
}

export default barraProgresso;
