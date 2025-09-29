import { useReducer } from "react";
import "./App.css";

// useReducer tem como sua principal função tornar mais fácil gerir estados complexos de forma centralizada.
// com ele você pode criar várias variáveis de estado para manipular, você consegue passar ações para ele também.
// o UseReducer começa com a função reducer que você cria fora dele, que será onde você vai receber uma ação e irá devolver um novo estado
// o state é a variavel que guarda o valor atual do estado, no ínicio será igual ao que for definido, no caso do exemplo é 0
// eu uso o state.contador para acessar ela e fazer a leitura dela sem modificar diretamente
// dispatch é a função que você usa para iniciar a mudança de estado, você dispacha uma ordem, no caso do exemplo é () => dispatch({ type: 'INCREMENTAR' })
// e entrega essa ordem a função reducer que tem o parâmetro action que recebe essa ordem
// com o estado passado e a ordem também a função reducer faz o calculo/função definida e retorna um novo valor de estado
// a grande diferença do useReducer para o useState é essa: o poder de eu fazer várias ações em vários estados em uma única função 

function reducer(state, action) {
  console.log("Reducer foi chamado com a ação:", action.type);
  switch (action.type) {
    case "AUMENTAR":
      return { ...state, contador: state.contador + 1 };
    case "DIMINUIR":
      return { ...state, contador: state.contador - 1 };
    case "RESETAR":
      return {...state, contador: state.contador = 0};
    default:
      return state.contador;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { contador: 0 });

  return (
    <div>
      <h2>Contador com useReducer</h2>
      <h1>{state.contador}</h1>

      <div className="botoes">
        <button onClick={() => dispatch({ type: "AUMENTAR" })}>
          Aumentar +
        </button>
        <button onClick={() => dispatch({ type: "DIMINUIR" })}>
          Diminuir -
        </button>
        <button className="reset" onClick={() => dispatch({ type: "RESETAR" })}>
          Resetar
        </button>
      </div>
    </div>
  );
}

export default App;
