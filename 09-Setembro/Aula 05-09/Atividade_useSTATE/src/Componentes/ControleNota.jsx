import { useState } from "react"

function notasControladas(){
    const [nome, setNome] = useState("");
    const [nota, setNota] = useState(0);
    const [notaENome, setNotaENome] = useState("")

    function pegarNome(event){
        setNome(event.target.value)
    }

    function pegarNota(event){
        setNota(event.target.value)
    }

    function verResultado(){
        var status = ""
        if (nota >= 7){
            status = "Aprovado"
        } else {
            status = "Reprovado"
        }
        setNotaENome(`O aluno ${nome} tirou ${nota} e está ${status}.`)
    }

    return(
        <div>
            <p>Digite o nome do aluno: </p>
            <input onChange={pegarNome}/>
            <p>Digite a nota do aluno: </p>
            <input onChange={pegarNota}/>
            <button onClick={verResultado}>Ver resultado</button>
            <p>{notaENome}</p>
        </div>
    )
}

export default notasControladas