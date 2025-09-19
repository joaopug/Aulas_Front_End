import { useState } from "react";

function App() {
  const [descInput, setDescInput] = useState("");
  const [qtdeInput, setQtdeInput] = useState(0);
  const [valrUniInput, setValrUniInput] = useState(0);

  const [descOut, setDescOut] = useState();
  const [qtdeOut, setQtdeOut] = useState();
  const [valrUniOut, setValrUniOut] = useState();

  const [listaItens, setListaItens] = useState([]);

  const adicionarItem = () => {
    if (descInput.trim() == "") {
      return;
    } else if (qtdeInput <= 0) {
      return;
    } else if (valrUniInput <= 0) {
      return;
    }

    setDescOut(descInput);
    setQtdeOut(qtdeInput);
    setValrUniOut(valrUniInput);

    const novoItem = {
      id: Date.now(),
      descricao: descOut,
      quantidade: qtdeOut,
      valorUnitario: valrUniOut,
      valorTotal: qtdeOut * valrUniOut,
    };

    setListaItens([...listaItens, novoItem]);

    console.log(listaItens);

    setDescInput("");
    setQtdeInput(0);
    setValrUniInput(0);
  };

  return (
    <>
      <h2>Orçamento</h2>

      <div>
        <input
          type="text"
          value={descInput}
          placeholder="Descrição"
          onChange={(e) => setDescInput(e.target.value)}
        />
        <input
          type="number"
          value={qtdeInput}
          placeholder="Quantidade"
          onChange={(e) => setQtdeInput(e.target.value)}
        />
        <input
          type="number"
          value={valrUniInput}
          placeholder="Valor unitário"
          onChange={(e) => setValrUniInput(e.target.value)}
        />
        <button onClick={adicionarItem}>+</button>
      </div>

      <table>
        <tr>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Valor Total</th>
        </tr>
        {listaItens.map((item) => (
          <tr key={item.id}>
            <th>{item.descricao}</th>
            <th>{item.quantidade}</th>
            <th>{item.valorUnitario}</th>
            <th>{item.valorTotal}</th>
          </tr>
        ))}
      </table>

      <table></table>

      <ul>
        {listaItens.map((item) => (
          <li key={item.id}>
            {item.descricao} - {item.quantidade} - {item.valorUnitario} -{" "}
            {item.valorTotal}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
