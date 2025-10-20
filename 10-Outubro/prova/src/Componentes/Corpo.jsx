// Tentativa falha de componetizar o cabeçalho
import cabecalho from "./Cabecalho";

function Corpo({ listaTreinos, onRemover }) {
  return (
    <table className="corpo">
      <thead>
        <tr>
          <th>Data</th>
          <th>Exercício</th>
          <th>Peso (kg)</th>
          <th>Séries</th>
          <th>Reps</th>
          <th>Total Reps</th>
          <th>Peso Total</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {listaTreinos.map((item, index) => (
          <tr key={index}>
            <th>{item.dataN}</th>
            <th>{item.exercicioN}</th>
            <th>{item.pesoN}</th>
            <th>{item.serieN}</th>
            <th>{item.repN}</th>
            <th>{item.totalRep}</th>
            <th>{item.pesoTotal}</th>
            <th>
              <button onClick={() => onRemover(item.id)}>X</button>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Corpo;
