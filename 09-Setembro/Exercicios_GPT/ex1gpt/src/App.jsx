import { useState } from "react";
import "./App.css";

function App() {
  const [lista, setLista] = useState([]);

  const [tarefa, setTarefa] = useState("");

  const addTarefa = () => {
    if (tarefa.trim() === "") {
      return;
    }
    
    const novaTarefa = {
      id: crypto.randomUUID(),
      nome: tarefa,
    };

    setLista([...lista, novaTarefa]);

    setTarefa("");
  };

  const removeTarefa = (id) => {
    setLista(lista.filter((item) => item.id != id));
  };

  return (
    <>
      <div className="sigma">
        <h1>Lista de Tarefas</h1>
        <input
          type="text"
          value={tarefa}
          placeholder="Insira a tarefa"
          onChange={(e) => setTarefa(e.target.value)}
        />
        <button onClick={addTarefa}>Adicionar</button>
        <ul>
          {lista.map((item, index) => (
            <li key={index}>
              {item.nome}
              <div>
                <button
                  className="rmvBtn"
                  onClick={() => removeTarefa(item.id)}
                ></button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
