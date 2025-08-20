function Button({ children }) {
  /*
  children -> Pega o valor filho do elemento 
  o que está entre <Button> "esse Valor" </ Button> 
  Sempre com a mesma nomenclatura 
  */
  return <button> {children} </button>;
}
export default Button;
