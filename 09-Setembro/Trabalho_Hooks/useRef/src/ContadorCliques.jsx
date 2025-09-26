import { useState, useRef } from 'react'
import './ContadorCliques.css'

function Contador() {
  const cliques = useRef(0);
  const [render, setRender] = useState(false);

  function contar() {
    cliques.current += 1;
    console.log("Cliques:", cliques.current);
  }

  return (
    <div>
      <button onClick={contar}>Contar clique</button>
      <button onClick={() => setRender(!render)}>Forçar render</button>
      <p>Cliques: {cliques.current}</p>
    </div>
  );
}

export default Contador