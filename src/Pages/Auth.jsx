import {useState} from 'react'
import Login from './../Components/Auth/Login'
import Cadastro from './../Components/Auth/Cadastro'
import Button from 'react-bootstrap/Button';

function Auth(){
 const [showRegister,setShowRegister] = useState(false)
if(!showRegister){
return <>

   <Login/> 

      <Button className='p-1' onClick={()=>setShowRegister(!showRegister)}>
         Cadastrar nova conta</Button>
   

</>
}
else{
   return <>
   <Cadastro/>
   <Button  onClick={()=>setShowRegister(!showRegister)}>Fazer login</Button>

</> 

}

}

export default Auth;