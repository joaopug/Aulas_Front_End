import { useState } from "react";
import "./App.css";

function App() {
  const [descInput, setDescInput] = useState("");
  const [qtdeInput, setQtdeInput] = useState(0);
  const [valrUniInput, setValrUniInput] = useState(0);

  const [listaItens, setListaItens] = useState([]);

  const totalGeral = listaItens.reduce((soma, item) => {
    return soma + item.valorTotal;
  }, 0);

  const adicionarItem = () => {
    if (descInput.trim() == "") {
      return;
    } else if (qtdeInput <= 0) {
      return;
    } else if (valrUniInput <= 0) {
      return;
    }

    const novoItem = {
      id: Date.now(),
      descricao: descInput,
      quantidade: qtdeInput,
      valorUnitario: valrUniInput,
      valorTotal: qtdeInput * valrUniInput,
    };

    setListaItens([...listaItens, novoItem]);

    console.log(listaItens);

    setDescInput("");
    setQtdeInput(0);
    setValrUniInput(0);
  };

  const removerItem = (id) => {
    setListaItens(listaItens.filter((item) => item.id != id));
  };

  return (
    <>
      <div className="quadro">
        <h2>Orçamento</h2>

        <div className="form">
          <input
            type="text"
            value={descInput}
            placeholder="Descrição"
            onChange={(e) => setDescInput(e.target.value)}
          />
          <input
            type="number"
            value={qtdeInput}
            onChange={(e) => setQtdeInput(Number(e.target.value))}
          />
          <input
            type="number"
            value={valrUniInput}
            onChange={(e) => setValrUniInput(Number(e.target.value))}
          />
          <button onClick={adicionarItem}>+</button>
        </div>

        <table className="tabela">
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Qtd</th>
              <th>Unitário</th>
              <th>Total</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {listaItens.map((item) => (
              <tr key={item.id}>
                <th>{item.descricao}</th>
                <th>{item.quantidade}</th>
                <th>R$ {item.valorUnitario.toFixed(2)}</th>
                <th>R$ {item.valorTotal.toFixed(2)}</th>
                <th>
                  <button onClick={() => removerItem(item.id)}>X</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="total">
          <p>Total Geral: R$ {totalGeral.toFixed(2)}</p>
        </div>
      </div>
    </>
  );
}

export default App;
