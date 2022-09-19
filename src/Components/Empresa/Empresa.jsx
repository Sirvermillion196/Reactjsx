import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {setToken,getToken} from '../../Services/Auth'
import {login} from './../../API/AuthAPI'
import {useNavigate} from 'react-router-dom'


function Empresa(){

    const navigate = useNavigate();
    const [user,setUser] = useState({email:'',password:''});

    function updateUser (event){
        const value= event.target.value;
        setUser({
            ...user,
            [event.target.name]: value
        });
    }

    async function sendLogin(event){
        event.preventDefault();
        console.log(user);
        try{
            const response = await login(user);
            setToken(response.data);
            console.log(getToken())
            navigate("/")
        }
        catch(error){
            console.log(error);
        }
    }

    return <div className="d-flex justify-content-center">
    
    <Form className="col-3 mt-5" onSubmit={(event)=>sendLogin(event)}>
        <Form.Label>Empresa City Car entre em Contato conosco</Form.Label>
        <Form.Control className="col-3" placeholder='insira o seu nome!' name="email" type="text" onChange={(event)=>{updateUser(event)}} ></Form.Control>
        <Button className="mt-1" variant="success" type="submit">Enviar</Button>
    </Form>
    </div>

}

export default Empresa;