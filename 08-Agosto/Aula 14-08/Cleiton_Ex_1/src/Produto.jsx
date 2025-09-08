function ProdutoProps({ produto, nomeP, precoP }) {
  return (
    <p className={produto}>
      {nomeP} {precoP}
    </p>
  );
}

export default ProdutoProps;