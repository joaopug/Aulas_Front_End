import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [lista, setLista] = useState(() => {
    return JSON.parse(localStorage.getItem("LISTA_TAREFAS")) || [];
  });

  const [tarefa, setTarefa] = useState("");

  useEffect(() => {
    localStorage.setItem("LISTA_TAREFAS", JSON.stringify(lista));
  }, [lista]);

  const addTarefa = () => {
    if (tarefa.trim() === "") {
      return;
    }

    const novaTarefa = {
      id: crypto.randomUUID(),
      nome: tarefa,
      finalizada: false,
    };

    setLista([...lista, novaTarefa]);

    setTarefa("");
  };

  const removeTarefa = (id) => {
    setLista(lista.filter((item) => item.id != id));
  };

  const mudarEstado = (id) => {
    setLista(lista.map((item) =>
      item.id == id ? { ...item, finalizada: !item.finalizada } : item
    ))
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
          {lista.map((item) => (
            <div key={item.id}
              style={{
                backgroundColor: item.finalizada ? "green" : "transparent",
                color: item.finalizada ? "white" : "black",
              }}>
              {item.nome}
              <div>
                <button
                  className="rmvBtn"
                  onClick={() => removeTarefa(item.id)}
                  disabled={item.finalizada}
                >Remover</button>
                <button
                  className="doneBtn"
                  onClick={() => mudarEstado(item.id)}>
                  Finalizar
                </button>
                <p>{item.finalizada}</p>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
