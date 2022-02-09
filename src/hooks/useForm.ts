import { useState } from "react"

const useForm = () =>{
    const[visivel, setVisivel] = useState<'tabela' |  'form'>('tabela')

    const exbirTabela = () => setVisivel('tabela')
    const exibirFormulario = () => setVisivel('form')

    return{
        formularioVisivel: visivel === 'form',
        tabelaVisivel: visivel === 'tabela',
        exbirTabela,
        exibirFormulario

    }
}

export default useForm