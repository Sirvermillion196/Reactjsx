import {getMoedas, deleteMoeda} from '../../Services/Moeda'
import {useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

function Index ({setComponenteAtual, setIdMoedaEdit}){
    const [moedas,setMoedas] = useState([])
    const[isLoading,setIsLoading] = useState(true);

    useEffect(()=>{
        setMoedas(getMoedas());
        setIsLoading(false);
    }
    ,[])

    const removeMoeda = (id)=>{
        deleteMoeda(id);
        setMoedas(getMoedas());
    }

    const setToEdit =(idMoeda)=>{
        setIdMoedaEdit(idMoeda);
        setComponenteAtual('Edit');
    }

    return <div className="d-flex flex-column align-items-center">
        <h1>MOEDAS</h1>
    <Button variant='primary' className='mb-2' onClick={()=>{setComponenteAtual("Create")}}>Criar nova Moeda</Button>
    <Table  striped bordered hover>
        <thead>
            <tr>
                <td>Id</td>
                <td>Nome</td>
                <td>Paises</td>
                <td>Opções</td>
            </tr>
            {
                !isLoading && moedas.map((moeda)=>{
                   return <tr>
                        <td>{moeda.id}</td>
                        <td>{moeda.nome}</td>
                        <td>
                            <ul>
                                {moeda.paises.map(
                                    (pais)=>{
                                       return <li>{pais.nome}</li>
                                    }
                                    )}
                            </ul>
                        </td>
                        <td>
                            <Button variant='danger' onClick={()=>{removeMoeda(moeda.id)}}>Deletar</Button>
                            <Button variant='primary' onClick={()=>{setToEdit(moeda.id)}}>Editar</Button>
                        </td>
                    </tr>
                })
            }
        </thead>
    </Table>
    </div>
}

export default Index;