import "./App.css";
import Cabecalho from "./Componentes/Cabecalho";
import { useState } from "react";
import Corpo from "./Componentes/Corpo";
import Rodape from "./Componentes/Rodape"; 

/* 
Tentativa de modularizar abaixo separando por componentes

O pai infelizmente não treinou em casa como faz para puxar informações de useStates.
Provavelmente tinha que usar Props, mas como no dia que teve essa aula eu faltei, por não estar na cidade,
e também decidi não dar tanta atenção ao potencial dessa ferramenta, eu sentei na graxa num dos quesitos mais essenciais do React kkkkkkk.

Rip
*/

function App() {
  const [listaTreinos, setListaTreinos] = useState([]);

  // Adiciona treino recebido do componente Cabecalho
  const addTreino = (novoTreino) => {
    setListaTreinos([...listaTreinos, novoTreino]);
  };

  /* 
  Função para remover o treino
  
  Ela irá atualizar a listaTreinos mantendo apenas os treinos que tiverem o id diferente daquele passado no parâmetro 

  (Corpo chama isso)
  */ 
  const rmvTreino = (id) => {
    setListaTreinos(listaTreinos.filter((item) => item.id !== id));
  };

  return (
    <>
      <Cabecalho onAddTreino={addTreino} />
      <Corpo listaTreinos={listaTreinos} onRemover={rmvTreino} />
      <Rodape listaTreinos={listaTreinos} />
    </>
  );
}
export default App;
