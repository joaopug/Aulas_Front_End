import "./App.css";
import PessoaProps from "./CartaoPessoa.jsx";
import ProdutoProps from "./Produto.jsx";

function App() {
  return (
    <>
      <div className="App">
        <ProdutoProps 
        produto="produto" nomeP="Banana" precoP="R$ 100,00" />

        <PessoaProps
          classeNome="PESSOA-nome"
          classeIdade="PESSOA-idade"
          classeProfissao="PESSOA-profissao"
          nomePes="Cleiton"
          idadePes="30"
          profissaoPes="Programador"
        />
      </div>
    </>
  );
}

export default App;
