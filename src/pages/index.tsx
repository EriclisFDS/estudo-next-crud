import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCLiente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";

export default function Home() {

  const repo: ClienteRepositorio = new ColecaoCliente()

  const [cliente , setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes , setClientes] = useState<Cliente[]>([])
  const [visivel, setVisivel] = useState< 'tabela' | 'form' >('tabela')

  useEffect(obterTodos, [])

  // const clientes = [
  //   new Cliente('Ana' , 34, '1'),
  //   new Cliente('Pedro' , 24, '2'),
  //   new Cliente('Paula' , 27, '3'),
  //   new Cliente('Marcos' , 44, '4'),

  // ]

  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      setVisivel('tabela')
    })
  }

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel("form")
  }

  async function clienteExcluido(cliente: Cliente) {
    await repo.excluir(cliente)
    obterTodos()
  }

  async function salvarCliente (cliente: Cliente){
    await repo.salvar(cliente)
    obterTodos()
  }

  function novoCliente (){
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-cyan-800 text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao 
                cor="green" className="mb-4"
                onClick={novoCliente}
              >Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            ></Tabela>
          </>

        ) : (
          <Formulario 
            cliente={cliente} 
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}
          ></Formulario>

        )}
      </Layout>
    </div>
  )
}
