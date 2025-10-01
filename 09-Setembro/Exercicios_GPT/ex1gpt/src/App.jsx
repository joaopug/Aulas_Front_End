import { useState } from "react";
import "./App.css";

function App() {
  const [lista, setLista] = useState([]);

  const [tarefa, setTarefa] = useState("");

  return (
    <>
      <div>
        <h1>Lista de Tarefas</h1>
        <input
          type="text"
          placeholder="Insira a tarefa"
          onChange={(e) => setTarefa(e.target.value)}
        />
        <h2>{tarefa}</h2>
        <button onClick={() => setLista([...lista, tarefa])}>Adicionar</button>
        <ul>
          {lista.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
