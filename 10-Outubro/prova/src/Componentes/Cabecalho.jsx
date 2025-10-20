// Componente cabeçalho: terminou por ser o principal e o único a rodar

import { useState, useEffect } from "react";

function cabecalho({ onAddTreino }) {
  // Todos os estados sendo gerenciados
  const [exerc, setExerc] = useState("");
  const [data, setData] = useState("");
  const [peso, setPeso] = useState("");
  const [rep, setRep] = useState("");
  const [serie, setSerie] = useState("");

  /*  const [totTreino, setTotTreino] = useState(0); */

  // Duas variáveis, uma para as repetições totais e uma para o peso total
  /*   const repsTotais = listaTreinos.reduce((soma, item) => {
    return soma + item.repN;
  }, 0);

  const pesoTotal = listaTreinos.reduce((soma, item) => {
    return soma + item.pesoTotal;
  }, 0); */

  // useEffect para atualizar o TotTreino conforme a listaTreinos é atualizada
  //
  // Ela recebe o tamanho de listaTreinos
  /*   useEffect(() => {
    setTotTreino(listaTreinos.length);
  }, [listaTreinos]);
 */
  /*
  Função para adicionar um treino na lista.

  Inicialmente ela verifica se todos os campos estão preenchidos.
  Após isso ele vai pegando os valores de cada useState e inserindo nos atributos da const "novoTreino".
  Feito isto, ele atualiza a listaTreinos "quebrando-a" e colocando o "novoTreino".

  Por fim, ela limpa os states.
  */
  const addTreino = () => {
    if (!exerc.trim() || !data || peso <= 0 || rep <= 0 || serie <= 0) return;

    // O "N" é de "Novo"
    const novoTreino = {
      id: Date.now(),
      dataN: data,
      exercicioN: exerc,
      pesoN: peso,
      serieN: serie,
      repN: rep,
      totalRep: rep * serie,
      pesoTotal: peso * rep * serie,
    };

    onAddTreino(novoTreino);

    setExerc("");
    setData("");
    setPeso("");
    setRep("");
    setSerie("");
  };

  const rmvTreino = (id) => {
    setListaTreinos(listaTreinos.filter((item) => item.id !== id));
  };

  // Local onde se encontra o HTML
  return (
    <div className="caixa">
      <h2>Controle de Treinos</h2>
      <div className="inputs">
        <input
          type="text"
          value={exerc}
          placeholder="Exercício"
          onChange={(e) => setExerc(e.target.value)}
        ></input>
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
        ></input>
        <input
          type="number"
          value={peso}
          placeholder="Peso (kg)"
          onChange={(e) => setPeso(Number(e.target.value))}
        />
        <input
          type="number"
          value={rep}
          placeholder="Repetições"
          onChange={(e) => setRep(Number(e.target.value))}
        ></input>
      </div>
      <div className="diferente">
        <input
          className="series"
          type="number"
          value={serie}
          placeholder="Séries"
          onChange={(e) => setSerie(Number(e.target.value))}
        ></input>
        <button onClick={addTreino}>+Adicionar Treino</button>
      </div>
    </div>
  );
}

export default cabecalho;
