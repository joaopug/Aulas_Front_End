import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [fatorialCom, setFatorialCom] = useState(0);
  const [temaCom, setTemaCom] = useState("light");

  const [fatorialSem, setFatorialSem] = useState(0);
  const [temaSem, setTemaSem] = useState("light");

  /* Caso o usuário utilize o "componente" que haja useMemo, a função abaixo será executada.

     Na execucação, todo o código presente, no fechar e abrir dos parânteses do useMemo, será salvo
     num tipo de "cache" dentro do hook.
     Para este cache ter seu valor alterado, precisa-se que o state "fatorialCom" seja mudado.
     Enquanto isto não ocorrer, o código/computação permanecerá estático, não sendo rodado,
     o sistema apenas irá pegar os valores presente no cache do useMemo. 
  */
  const resultadoFatorialComUseMemo = useMemo(() => {
    console.log("Calculando COM useMemo...");
    if (fatorialCom < 0) {
      return "não existe fatorial negativo";
    }

    let resultado = 1;
    for (let i = fatorialCom; i >= 1; i--) {
      resultado *= i;
    }
    return resultado;
  }, [fatorialCom]);


  /* Código comparativo para ver a diferença de utilizar ou não o useMemo.
  
  Caso ocorra uma renderização nova, independemente se foi no "fatoriaSem", a função será executada,
  pois o valor de retorno anterior não foi salvo (useMemo)
  */
  const resultadoFatorialSemUseMemo = () => {
    console.log("Executando cálculo SEM useMemo...");
    if (fatorialSem < 0) {
      return "não existe fatorial negativo";
    }

    let resultadoCom = 1;
    for (let i = fatorialSem; i >= 1; i--) {
      resultadoCom *= i;
    }

    return resultadoCom;
  };


  /* 
  Duas funções para alterar o state que será usado para ditar o className da div que terá seu tema alterado.
  */
  const mudarTemaComUseMemo = () => {
    setTemaCom(temaCom === "light" ? "dark" : "light");
  };

  const mudarTemaSemUseMemo = () => {
    setTemaSem(temaSem === "light" ? "dark" : "light");
  };


  /* 
  Aqui é onde a magia acontece. Primeiro o usuário terá que escolher: utilizar useMemo ou não.
  
  Usando o hook: quando o usuário insere um valor no input, o state "fatorialCom" é atualizado.
  Feito isto, a função "resultadoFatorialComUseMemo" é então rodada e o valor exibido.

  Caso o usuário queira alterar o tema clicando no botão "Mudar para o tema Escuro/Claro", a função 
  "mudarTemaComUseMemo" é executada, o tema é alterado e, como está sendo utilizado o useMemo, não haverá
  recálculo, o valor presente nele será exibido.

  Não usando o hook: todo o conceito de input e cálculo será como no caso acima, a única diferença será
  na hora de trocar o tema.

  Ao realizar a troca do tema, como o valor da função "resultadoFatorialSemUseMemo" não está sendo salvo,
  será necessário refazer o cálculo/computação.
  */
  return (
    <>
      <div className={temaCom}>
        <h1>Usando useMemo</h1>
        <h2>Selecione qual fatorial você deseja calcular 🔽</h2>
        <input
          type="number"
          value={fatorialCom}
          onChange={(e) => setFatorialCom(Number(e.target.value))}
        />

        <p>Resultado: {resultadoFatorialComUseMemo}</p>

        <button onClick={mudarTemaComUseMemo}>
          Mudar para o tema {temaCom === "light" ? "Escuro 🌒" : "Claro ☀️"}
        </button>
      </div>

      {
        <div className={temaSem}>
          <h1>Sem useMemo</h1>
          <h2>Selecione qual fatorial você deseja calcular 🔽</h2>
          <input
            type="number"
            value={fatorialSem}
            onChange={(e) => setFatorialSem(Number(e.target.value))}
          />

          <p>Resultado: {resultadoFatorialSemUseMemo()}</p>

          <button onClick={mudarTemaSemUseMemo}>
            Mudar para tema {temaSem === "light" ? "Escuro 🌒" : "Claro ☀️"}
          </button>
        </div>
      }
    </>
  );
}

export default App;
