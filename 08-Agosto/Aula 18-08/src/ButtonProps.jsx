function ButtonProps({ classeBotao, valorButton, idButton, funcaoClick }) {
  return (
    <button className={classeBotao} type="button" id={idButton} onClick={() => funcaoClick()}>
      {valorButton}
    </button>
  );
}

export default ButtonProps;
