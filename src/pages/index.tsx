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

  return (
    <div className={`
    flex justify-center items-center h-screen bg-cyan-800 text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}
        clienteSelecionado={clienteSelecionado}
        clienteExcluido={clienteExcluido}
        ></Tabela>
      </Layout>
    </div>
  )
}
