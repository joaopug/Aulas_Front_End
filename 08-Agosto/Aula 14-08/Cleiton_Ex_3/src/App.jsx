// src/App.jsx
import BrrVerm from "./componentes/BrrVerm";                 // componente 1
import BrrVerm2 from "./componentes/BrrVerm2";               // componente 2
import BrrVerm3 from "./componentes/BrrVerm3";               // componente 3 (antes faltava)
import QuadVerm from "./componentes/QuadVerm";               // componente principal vermelho
import QuadVerm2 from "./componentes/QuadVerm2";             // versão fraca do quadrado
import "./App.css";

function App() {
  return (
    <>
      <BrrVerm idBarra={"barraVermelha"} />

      <BrrVerm2 idBarra={"barraVermelhoFraco"} />

      <div id="main">
        <QuadVerm idBloco={"quadradoVermelho"} />

        <div id="quatroBloco">
          <QuadVerm2 classBloco={"quadradoVermelhoFraco"} conteudo={1} />
          <QuadVerm2 classBloco={"quadradoVermelhoFraco"} conteudo={2} />
          <QuadVerm2 classBloco={"quadradoVermelhoFraco"} conteudo={3} />
          <QuadVerm2 classBloco={"quadradoVermelhoFraco"} conteudo={4} />
        </div>
      </div>

      <BrrVerm3 idBloco={"barraVermelhoForte"} />
    </>
  );
}

export default App;
