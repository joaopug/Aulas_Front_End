import { use, useEffect, useState } from "react";
import "./App.css";

//Esse cara aqui -> ... quebra um objeto e pega os valores dentro dele, aqueles que você definir
//Parâmetro "disabled" -> serve para desabilitar um botão conforme um critério
//
function App() {
  const [tarefa, setTarefa] = useState("");
  const [listaTarefas, setlistaTarefas] = useState(() => {
    return JSON.parse(localStorage.getItem("LISTA_TAREFAS")) || [];
  });

  useEffect(() => {
    localStorage.setItem("LISTA_TAREFAS", JSON.stringify(listaTarefas));
  }, [listaTarefas]);

  const adicionarTarefa = () => {
    if (tarefa.trim() === "") {
      alert("Informe uma tarefa");
      return;
    }

    const novaTarefa = {
      id: Date.now(),
      nome: tarefa,
      completada: false,
    };

    setlistaTarefas([...listaTarefas, novaTarefa]);

    console.log(listaTarefas);
    setTarefa("");
  };

  const alterarSituacao = (id) => {
    setlistaTarefas(
      listaTarefas.map((task) =>
        task.id == id ? { ...task, completada: !task.completada } : task
      )
    );
  };

  const excluirTarefa = (id) => {
    setlistaTarefas(listaTarefas.filter((task) => task.id != id));
  };

  return (
    <div className="todo-container">
      <h2>Lista de Tarefas ✅</h2>

      <p>Total tarefas : {listaTarefas.length || "Sem Tarefas"}</p>

      <div className="input-container">
        <input
          type="text"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          placeholder="Digite uma tarefa"
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      <ul>
        {listaTarefas.map((task) => (
          <li
            key={task.id}
            style={{
              textDecoration: task.completada ? "line-through" : "none",
              color: task.completada ? "gray" : "black",
            }}
          >
            {task.nome}
            <div>
              <button
                onClick={() => alterarSituacao(task.id)}
                className="complete-btn"
              >
                ✔
              </button>
              <button
                disabled={task.completada}
                onClick={() => excluirTarefa(task.id)}
                className="delete-btn"
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
