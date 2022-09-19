import {Button, Form} from "react-bootstrap"
import {useState} from "react"
import {saveContaContabil} from "./../../Services/ContasContabeis.js"


function Create({setComponenteAtual}){

    const [contaContabil,setContaContabil] = useState(
     {
        nome: '',
        nRef: '',
     }
    )

    const updateContaContabil = (event)=>{
        const value = event.target.value;

        setContaContabil(
            {
            
                ...contaContabil,
                [event.target.name]: value
            }
        )
    }

    const save =(event)=>{
        event.preventDefault();
        saveContaContabil(contaContabil);
        setComponenteAtual('Index');
    }

    return <div className="d-flex flex-column align-items-center">
        <h1>Cadastro de conta contábil</h1>
        <Button variant="primary" onClick={()=>setComponenteAtual("Index")}>Voltar</Button>
        <Form className="col-3 mt-5" onSubmit={(event)=>{save(event)}}>
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" name="nome" onChange={(event)=>{updateContaContabil(event)}}></Form.Control>
            <Form.Label>Número de referência</Form.Label>
            <Form.Control type="text" name="nRef" onChange={(event)=>{updateContaContabil(event)}}></Form.Control>
            <Button className="mt-1" type="submit" variant="success">Enviar</Button>
        </Form>
    </div>

}

export default Create;