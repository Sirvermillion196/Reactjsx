import Create from "../Components/Transacoes/Create";
import Index from "../Components/Transacoes/Index";
import Report from "../Components/Transacoes/Report";
import {useState} from 'react'

function Transacoes(){

    const [componenteAtual,setComponenteAtual] = useState('Index');

    switch(componenteAtual){
        case 'Index':
         return  <Index setComponenteAtual={setComponenteAtual}/>
        case 'Create':
         return  <Create setComponenteAtual={setComponenteAtual}/>
        case 'Report':
         return  <Report setComponenteAtual={setComponenteAtual}/>
    }

    return <Create/>
}

export default Transacoes;