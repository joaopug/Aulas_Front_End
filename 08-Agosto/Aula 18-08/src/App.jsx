import "./App.css";
import Unipar from "../../Unipar.jsx";
import Rodrigo from "../../Rodrigo.jsx";
import Button from "../../Button.jsx";
import ButtonProps from "../../ButtonProps.jsx";
import ProdutoProps from "./Produto.jsx";

function App() {
  return (
    <ProdutoProps
      produto="produto"
      nomeP="Produto 1"
      precoP="R$ 100,00"
    />
  );
}
export default App;





 {/*Se chama Fragment que é um fragmento para rodar um bloco*/}
      {/*<div>
        <Unipar />
        <Rodrigo />
        <p>Ele tem 190 anos e ainda esta na flor da idade</p>
        <Button> Cleiton </Button>
        <Button> Taffe </Button>
        <Button> Rodrigo </Button>

        <ButtonProps
          idButton="1"
          valorButton="Teste 1"
          funcaoClick={() => alert("Teste 1")}
          classeBotao="ClasseSucesso"
        ></ButtonProps>
        <ButtonProps
          idButton="2"
          valorButton="Teste 2"
          funcaoClick={() => console.log("Cliquei no 2")}
          classeBotao="ClasseErro"
        ></ButtonProps>
        <ButtonProps
          idButton="3"
          valorButton="Teste 3"
          funcaoClick={() => prompt()}
          classeBotao="ClasseAlerta"
        ></ButtonProps>
      </div>
      */}