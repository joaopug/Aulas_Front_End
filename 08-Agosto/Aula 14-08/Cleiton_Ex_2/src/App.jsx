import { useState } from "react";
import "./App.css";
import QuadGrndProps from "./QuadGrd.jsx";
import LinhaProps from "./Linha.jsx";
import QuadPeqProps from "./QuadPeq.jsx";

function App() {
  return (
      <QuadGrndProps>
        <LinhaProps tipo="esquerda">
          <QuadPeqProps />
          <QuadPeqProps />
          <QuadPeqProps />
          <QuadPeqProps />
        </LinhaProps>

        <LinhaProps tipo="direita">
          <QuadPeqProps />
          <QuadPeqProps />
          <QuadPeqProps />
          <QuadPeqProps />
        </LinhaProps>

        <LinhaProps tipo="esquerda">
          <QuadPeqProps />
          <QuadPeqProps />
          <QuadPeqProps />
          <QuadPeqProps />
        </LinhaProps>

        <LinhaProps tipo="direita">
          <QuadPeqProps />
          <QuadPeqProps />
          <QuadPeqProps />
          <QuadPeqProps />
        </LinhaProps>

        <LinhaProps tipo="esquerda">
          <QuadPeqProps />
          <QuadPeqProps />
          <QuadPeqProps />
          <QuadPeqProps />
        </LinhaProps>

        <LinhaProps tipo="direita">
          <QuadPeqProps />
          <QuadPeqProps />
          <QuadPeqProps />
          <QuadPeqProps />
        </LinhaProps>

        <LinhaProps tipo="esquerda">
          <QuadPeqProps />
          <QuadPeqProps />
          <QuadPeqProps />
          <QuadPeqProps />
        </LinhaProps>

        <LinhaProps tipo="direita">
          <QuadPeqProps />
          <QuadPeqProps />
          <QuadPeqProps />
          <QuadPeqProps />
        </LinhaProps>
      </QuadGrndProps>
  );
}

export default App;
