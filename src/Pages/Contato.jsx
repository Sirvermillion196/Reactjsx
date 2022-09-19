import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Empresa from '../Components/Empresa/Empresa';
import Funcionario from '../Components/Empresa/Funcionario';

function Contato(){
 const [showRegister,setShowRegister] = useState(false)
if(!showRegister){
return <>

   <Empresa/> 

      <Button className='p-1' onClick={()=>setShowRegister(!showRegister)}>
         Área do colaborador</Button>
   

</>
}
else{
   return <>
   <Funcionario/>
   <Button onClick={()=>setShowRegister(!showRegister)}>Fazer login</Button>

</> 

}

}

export default Contato;