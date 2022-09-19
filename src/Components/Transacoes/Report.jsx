import {LineChart, Line, CartesianGrid,XAxis,YAxis} from 'recharts'
import {Button, Tooltip} from 'react-bootstrap'
import {getTransacoes} from './../../Services/Transacoes'
import {useEffect, useState} from 'react'

function Report({setComponenteAtual}) {
    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
                  {name: 'Page B', uv: 600, pv: 2600, amt: 2600},
                  {name: 'Page A', uv: 800, pv: 2800, amt: 2800},
    ];

    const [dados,setDados] = useState([]);

    useEffect(()=>{
        let transacoes = getTransacoes();

        let transacoesAux = transacoes.map((transacao)=>{return{name:transacao.data,uv:transacao.valor/10000}});

        let dadosAux = [];

        for(let i=0;i<transacoesAux.length;i++){
            var existingIndex = dadosAux.findIndex((c)=>c.name==transacoesAux[i].name);

            if(existingIndex === -1){
                dadosAux.push(transacoesAux[i]);
            }
            else{
                dadosAux[existingIndex].uv += transacoesAux[i].uv;
            }
        }

        dadosAux = dadosAux.sort((a,b)=>{
            return new Date(a.name) - new Date(b.name);
        })

        setDados(dadosAux);
    },[])

   return <div className='d-flex flex-column align-items-center'> 
   
   <h1>Relatório transações</h1>
   <Button variant='primary' onClick={()=>setComponenteAtual('Index')}>Voltar</Button>
   <LineChart width={900} height={600} data={dados}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <Tooltip/>
    <YAxis />
  </LineChart>

  </div>
}

export default Report;