import Cliente from "../core/Cliente"
import {EditIcon, TrashIcon} from "./Icons"

interface TabelaProps{
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

const Table = (props: TabelaProps) =>{
    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado
    const renderHeader = () =>{
        return(
            <tr>
               <th className="text-left p-4">Código</th>
               <th className="text-left p-4">Nome</th>
               <th className="text-left p-4">Idade</th>
               {exibirAcoes?<th className="p-4">Ações</th>: false}
           </tr>
        )
    }

    const renderActions = (cliente: Cliente) =>{
        return(
            <td className="flex justify-center">
                {props.clienteSelecionado ? (
                    <button onClick={()=> props.clienteSelecionado?.(cliente)}className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}>
                        {EditIcon}
                    </button>
                ) : false}      
                {props.clienteExcluido ? (
                     <button onClick={()=> props.clienteExcluido?.(cliente)}className={`
                        flex justify-center items-center
                        text-red-500 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}>
                        {TrashIcon}
                    </button>
                ) : false}
            </td>
        )
    }

    const renderData = () =>{
        return props.clientes?.map((cliente, i)=>{
            return(
                <tr key={cliente.id} className={`
                    ${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}
                `}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    {exibirAcoes? renderActions(cliente): false}
                </tr>
            )
        })
    }

    return(
       <table className="w-full rounded-xl overflow-hidden">
           <thead className={`
                bg-gradient-to-r from-purple-500 to-purple-800
                text-gray-100
           `}>
             {renderHeader()} 
           </thead>
           <tbody>
               {renderData()}
           </tbody>
           
       </table>
    ) 
}
export default Table