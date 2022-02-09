interface InputProps{
    texto: string
    type?: 'text' | 'number'
    value: any
    readonly?: boolean
    className?: string
    onchange?:(value: any) => void
}

const Input = (props: InputProps) =>{
    return(
        <div className={`
            flex flex-col ${props.className}
        `}>
            <label className='mb-4'>
                {props.texto}
            </label>
            <input 
                type={props.type?? 'text'} 
                value={props.value}
                readOnly={props.readonly}
                onChange={e => props.onchange?.(e.target.value)}
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-100 py-2 px-4
                    ${props.readonly? '': 'focus:bg-white'}
                `}
            />
        </div>
    )
}

export default Input