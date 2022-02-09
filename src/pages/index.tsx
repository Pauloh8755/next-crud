import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Button from '../components/Button'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Table from '../components/Table'
import useClientes from '../hooks/useClientes'


export default function Home() {

  const {
    clienteSelecionado,
    clienteExcluido, 
    cliente, 
    novoCliente, 
    clientes, 
    salvarCliente,
    tabelaVisivel,
    exbirTabela
  } = useClientes()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to bg-purple-500
      text-white
      `}>
      <Layout title="Cadastro Simples">
        {tabelaVisivel?(
           <>
            <div className='flex justify-end'>
              <Button cor="green" className='mb-4' onClick={novoCliente}>Novo Cliente</Button>
            </div>
            <Table clientes={clientes} 
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
              ></Table>
           </>
        ): (
          <Form cliente={cliente} clienteMudou={salvarCliente} cancelado={()=>exbirTabela}></Form>
        )} 
      </Layout>
    </div>
  )
}
