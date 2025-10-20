// Tentativa falha de componetizar o cabeçalho
function Rodape({ listaTreinos }) {
  const totTreino = listaTreinos.length;
  const repsTotais = listaTreinos.reduce((soma, item) => {
    return soma + item.repN * item.serieN;
  }, 0);
  const pesoTotal = listaTreinos.reduce((soma, item) => {
    return soma + item.pesoTotal;
  }, 0);
  const mediaPeso =
    totTreino > 0 ? (totalPeso / totTreino).toFixed(2) : 0;
  const mediaReps =
    totTreino > 0 ? (totalReps / totTreino).toFixed(2) : 0;

  return (
    <div className="rodape">
      <p>Total Treinos: {totTreino}</p>
      <p>Total Repetições: {repsTotais}</p>
      <p>Total Peso Levantado: {pesoTotal}</p>
      <p>Média Peso/Treino: {mediaPeso}</p>
      <p>Média Reps/Treino: {mediaReps}</p>
    </div>
  );
}

export default Rodape;
