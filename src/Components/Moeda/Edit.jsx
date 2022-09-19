import { useEffect } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {getMoeda,saveEdit} from './../../Services/Moeda'

function Edit({setComponenteAtual,idMoeda}){

        const [paises,setPaises] = useState
        ([
                 {id:1,nome:"Brasil"},
                 {id:2,nome:"Portugal"},
                 {id:3,nome:"Espanha"},
                 {id:4,nome:"França"}
             ])
     
             const [name,setName] = useState("");
     
             const [paisesSelecionados,setPaisesSelecionados] = useState([]);

             useEffect(()=>{
                const moeda = getMoeda(idMoeda);
                
                setName(moeda.nome);

                setPaisesSelecionados(moeda.paises);
             },[])
     
             const UpdatePaisesSelecionados= (event,pais)=>{
                 if (event.target.checked){
                     setPaisesSelecionados((lastPaisesSelecionados)=>[...lastPaisesSelecionados,pais])
     
                 }
                 else{
                     const newPaises = paisesSelecionados.filter((e)=>e.id!==pais.id);
                     setPaisesSelecionados(newPaises);
                 }
             }
     
             const edit = (event) =>{
                event.preventDefault();
                const moeda= {
                    nome:name,
                    paises:paisesSelecionados
                }
                saveEdit(idMoeda,moeda);

                setComponenteAtual("Index");
            }
         
         return<div className="d-flex flex-column align-items-center">
             <h1>Edição de Moeda</h1>
             <Button variant="primary" onClick={()=>setComponenteAtual("Index")}>Voltar</Button>
         
         <Form className="col-3 mt-5">
             <Form.Label>Nome moeda</Form.Label>
             <Form.Control type="text" name="name" value={name}
             onChange={((e)=>setName(e.target.value))}>
             </Form.Control>
             <Form.Label>Paises</Form.Label>
             {paises.map((pais) =>
                 <Form.Check 
                 onChange={(event)=>UpdatePaisesSelecionados(event,pais)}
                 key={pais.id}
                 type="checkbox"
                 id={pais.id}
                 label={pais.nome}
                 checked={paisesSelecionados.filter((paisesSelecionado)=>paisesSelecionado.id===pais.id).length>0}
               />
             )}
     
             <Button variant="success" type="submit" onClick={(event)=>edit(event)}>Enviar</Button>
         
         
         </Form>
         </div>
     }

export default Edit;