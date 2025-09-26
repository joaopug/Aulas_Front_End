import { useState, useEffect } from "react";

function sistemaCarrinho() {
  const [qtde, setQtde] = useState(1);
  const [valor, setValorFinal] = useState(50.0);

  function alterarQtde(funcao) {
    if (funcao == "a") {
      setQtde(qtde + 1);
    } else {
      if (qtde != 1) {
        setQtde(qtde - 1);
      }
    }
  };

//   function calcValor() {
//    setValorFinal(50.0 * qtde);
//   }

  useEffect(() => {
    setValorFinal(qtde * 50.0);
  }, [qtde]);

  return (
    <div>
      <p>Quantidade de itens: {qtde}</p>
      <p>Valor final: {valor}</p>
      <button onClick={() => alterarQtde("a")}>+</button>
      <button onClick={() => alterarQtde("d")}>-</button>
    </div>
  );
}

export default sistemaCarrinho;
