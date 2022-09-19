import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { getTransacoes } from "../../Services/Transacoes";

function Index({setComponenteAtual}){
    const [transacoes,setTransacoes] = useState([]);

    useEffect(()=>{
        setTransacoes(getTransacoes())
    },[])

    return <div className="d-flex flex-column align-items-center m-3">
        <h1>Transações</h1>
        <Button variant="primary" onClick={()=>{setComponenteAtual('Create')}}>Adicionar transação</Button>
        <Button variant="primary" onClick={()=>{setComponenteAtual('Report')}}>Visualizar relatório</Button>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Valor</th>
                        <th>Data</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transacoes.map((transacao)=>{
                            return <tr key={transacao.id}>
                                    <td>{transacao.id}</td>
                                    <td>{transacao.valor}</td>
                                    <td>{transacao.data}</td>
                                    <td></td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
    
    
    </div>
}

export default Index;