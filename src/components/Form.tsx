import Input from "./Input"
import {useState} from "react"
import Cliente from "../core/Cliente"
import Button from "./Button"

interface FormProps{
    cliente: Cliente
    cancelado?: ()=> void
    clienteMudou?: (cliente: Cliente) => void
}

const Form = (props: FormProps) =>{
    const id = props.cliente?.id
    const[nome, setNome] = useState(props.cliente?.nome ?? '')
    const[idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return(
        <div>
            {id?(
                <Input className='mb-2' texto='Código' value={id} readonly/> 
            ): false}
            
            <Input className='mb-2' texto='Nome' value={nome} onchange={setNome}/> 
            <Input texto='Idade' type="number" value={idade} onchange={setIdade} />
            <div className="flex justify-end mt-7">
                <Button cor="blue" className="mr-2" onClick={()=> props.clienteMudou?.(new  Cliente(nome,idade,id))}>
                    {id? 'Alterar' : 'Salvar'}
                </Button>
                <Button onClick={props.cancelado}>Cancelar</Button>
            </div>
        </div>
    )
}

export default Form