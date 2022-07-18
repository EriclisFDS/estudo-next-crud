import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "../core/Cliente";
import Botao from "./Botao";

interface FormularioProps {
    cliente: Cliente
}

export default function Formulario(props:FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [Idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return (
        <div>
            {id ? (
                    <Entrada 
                        texto="Código" valor={id}
                        somenteLeitura
                        className="mb-4"
                    ></Entrada>
                ) : false
            }
            <Entrada 
                texto="Nome" valor={nome} 
                valorMudou={setNome}
                className="mb-4"
            ></Entrada>
            <Entrada 
                texto="Idade" tipo="number" valor={Idade} 
                valorMudou={setIdade}
            ></Entrada>
            <div className="flex justify-end mt-4">
                <Botao cor="blue" className="mr-2" >
                    {id ? 'Alterar' : 'Salvar' }
                </Botao>
                <Botao >
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}