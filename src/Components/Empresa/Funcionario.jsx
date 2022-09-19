import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {setToken,getToken} from '../../Services/Auth'
import {login} from './../../API/AuthAPI'
import {useNavigate} from 'react-router-dom'

function Funcionario(){

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

    return  <div className="d-flex justify-content-center">
    
    <Form className="col-3 mt-5" onSubmit={(event)=>sendLogin(event)}>
        <Form.Label>Insira seu e-mail</Form.Label>
        <Form.Control name="email" type="text" onChange={(event)=>{updateUser(event)}} ></Form.Control>
        <Form.Label>Insira sua senha</Form.Label>
        <Form.Control name="password" type="password" onChange={(event)=>{updateUser(event)}} ></Form.Control>
        <Button className="mt-1" variant="success" type="submit">Login</Button>
    </Form>
    </div>

}

export default Funcionario;