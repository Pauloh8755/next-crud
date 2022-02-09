import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/bd/ColecaoClientes"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useForm from "./useForm"

const useClientes = () =>{
    
    //repositorio de clientes
    const repo: ClienteRepositorio = new ColecaoCliente()

    const {tabelaVisivel, formularioVisivel, exbirTabela, exibirFormulario} = useForm()
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])



    //renderiza os clientes
    const obterTodos = () =>{
    //obtendo todos os clientes
    console.log(1)
    repo.obterTodos().then((clientes)=>{
        setClientes(clientes)
        exbirTabela()
    })
    }

    //obtendo todos os clientes ao inicializar
    useEffect(obterTodos, [])

    const clienteSelecionado = (cliente: Cliente) =>{
    setCliente(cliente)
    exibirFormulario()
    }
    const clienteExcluido = async (cliente: Cliente) =>{
    await repo.excluir(cliente)
    obterTodos()
    }
    const salvarCliente = async (cliente: Cliente) =>{
    await repo.salvar(cliente)
    obterTodos()
    }
    const novoCliente = () =>{
    setCliente(Cliente.vazio)
    exibirFormulario()
    }

    return{
        novoCliente,
        salvarCliente,
        clienteExcluido,
        clienteSelecionado,
        obterTodos,
        cliente,
        clientes,
        tabelaVisivel,
        exbirTabela
    }

}
export default useClientes