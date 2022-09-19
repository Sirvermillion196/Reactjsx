import {useState,useEffect} from 'react'
import { Button, Table } from 'react-bootstrap';
import {deleteContaContabil, getContasContabeis} from './../../Services/ContasContabeis'

function Index({setComponenteAtual}){
    const [contasContabeis,setContasContabeis] = useState([]);

    useEffect(()=>{
        setContasContabeis(getContasContabeis());
    },[])

    const removeItem = (id)=>{
        deleteContaContabil(id);
        const newContas = contasContabeis.filter(c=>c.id!==id);
        setContasContabeis(newContas);
    }

    return <div className="d-flex flex-column align-items-center m-3">
        <h1>Contas Contabeis</h1>
        <Button variant='primary' onClick={()=>setComponenteAtual('Create')}>Criar</Button>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Número de referência</th>
                    <th>Opções</th>
                </tr>
            </thead>

            <tbody>
                {
                    contasContabeis.map((contaContabil)=>{
                        return <tr key={contaContabil.key}>
                                <td>{contaContabil.id}</td>
                                <td>{contaContabil.nome}</td>
                                <td>{contaContabil.nRef}</td>
                                <td>
                                    <Button variant='danger' onClick={()=>{removeItem(contaContabil.id)}}>DELETAR</Button>
                                </td>
                        </tr>
                    })
                }
            </tbody>
            
        </Table>
    
    </div>
}

export default Index;