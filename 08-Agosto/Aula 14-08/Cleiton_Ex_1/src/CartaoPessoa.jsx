function PessoaProps({ classeNome, classeIdade, classeProfissao, nomePes, idadePes, profissaoPes }) {
  return (
    <div>
      <h2 className={classeNome}>
        {nomePes}
      </h2>

      <p className={classeIdade}>
        {idadePes}
      </p>

      <p className={classeProfissao}>
        {profissaoPes}
      </p>
    </div>
  );
}

export default PessoaProps;