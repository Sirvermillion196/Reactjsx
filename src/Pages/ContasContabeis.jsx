import Create from "../Components/ContasContabeis/Create";
import Index from './../Components/ContasContabeis/Index'
import {useState} from 'react';

function ContasContabeis(){
        const [componenteAtual,setComponenteAtual] = useState ('Index');

        switch(componenteAtual){
            case'Index':
                return <Index setComponenteAtual={setComponenteAtual}/>
            case'Create':
                return <Create setComponenteAtual={setComponenteAtual}/>
        }

    return <>
        <Create setComponenteAtual= {setComponenteAtual}/>
    </>
}

export default ContasContabeis;