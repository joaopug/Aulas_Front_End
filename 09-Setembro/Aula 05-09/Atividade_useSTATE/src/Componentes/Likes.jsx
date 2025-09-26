import { useState } from 'react'

function botoes() {

    const [naoCurtidas, setNaoCurtidas] = useState(0);
    const [curtidas, setCurtidas] = useState(0);

    function curtir() {
        setCurtidas(curtidas + 1);
    }

    function naoCurtir() {
        setNaoCurtidas(naoCurtidas + 1);
    }

    return (
        <div>
            <button onClick={curtir}>Curtir</button>
            <button onClick={naoCurtir}>Não curtir</button>
            <p>Seu número de curtidas: {curtidas}</p>
            <p>Seu número de não curtidas: {naoCurtidas}</p>
        </div> 
    )
}

export default botoes