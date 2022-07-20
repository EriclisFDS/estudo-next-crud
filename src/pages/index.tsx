import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Ana' , 34, '1'),
    new Cliente('Ana' , 34, '1'),
    new Cliente('Ana' , 34, '1'),
    new Cliente('Ana' , 34, '1'),

  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir ${cliente.nome}`)
  }

  function salvarCliente (cliente: Cliente){
    console.log(cliente)
    setVisivel('tabela')
  }

  const [visivel, setVisivel] = useState< 'tabela' | 'form' >('tabela')

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
                onClick={() => setVisivel('form')}
              >Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            ></Tabela>
          </>

        ) : (
          <Formulario 
            cliente={clientes[0]} 
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}
          ></Formulario>

        )}
      </Layout>
    </div>
  )
}
