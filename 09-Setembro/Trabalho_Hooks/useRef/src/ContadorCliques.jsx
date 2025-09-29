import { useState, useRef } from "react";
import "./ContadorCliques.css";

/* 
  Neste exemplo o useRef "cliques" irá começar com 0 e quando o botão "Contar" for pressionado,
  o valor presente em ".current" será incremetado e um console.log executado.

  Na tela o valor atualizado não será exibido, isto somente ocorrerá quando o botão "Forçar Render"
  for pressionado.

  Esse botão atualiza o estado do state "render", ao fazer isso, uma re-renderização acontece, pois
  o useState sempre re-renderiza a tela.
*/

function Contador() {
  const cliques = useRef(0);
  const [render, setRender] = useState(false);

  function contar() {
    cliques.current += 1;
    console.log("Cliques:", cliques.current);
  }

  return (
    <div className="caixa">
      <button onClick={contar}>Contar</button>
      <button onClick={() => setRender(!render)}>Forçar render</button>
      <p>Cliques: {cliques.current}</p>
    </div>
  );
}

export default Contador;
