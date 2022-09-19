import Create from './../Components/Moeda/Create'
import Index from '../Components/Moeda/Index';
import Edit from '../Components/Moeda/Edit';
import { useState } from 'react';

function Moeda() {
    const [componenteAtual,setComponenteAtual] = useState("Index");
    const [idMoedaEdit, setIdMoedaEdit]= useState(0);

    switch(componenteAtual){
        case "Index":
            return <Index setComponenteAtual={setComponenteAtual} setIdMoedaEdit={setIdMoedaEdit}/>
        case "Create":
            return <Create setComponenteAtual={setComponenteAtual}/>
        case "Edit":
            return <Edit setComponenteAtual={setComponenteAtual} idMoeda={idMoedaEdit}/>
        default:
            return <Index setComponenteAtual={setComponenteAtual}/>
    }
    return<>

    <Index/>

</>

}

export default Moeda;