import { useState,useEffect } from "react";
import Carro from "./Car";
import CarListStyle from './../Styles/CarList.module.css'
function CarrosList(){
    const [infosCarro,setInfosCarro] = useState();
    const [isLoading,setIsLoading] = useState(true);
    const [changesInfoCarro,setChangesInfoCarro] = useState(0);
    const [newCarro,setNewCarro] = useState(
        {id:0,marca: "", modelo:""}
    )

    function loadCars(){
        setTimeout(()=>{
            setInfosCarro(
                [{id:1,marca : "Volkswagem", modelo:"Gol"}
                ,{id:2,marca : "Fiat", modelo:"Pálio"}
                ,{id:3,marca : "Porshe", modelo:"Taycan"}
                ,{id:4,marca : "Ford", modelo:"Focus"}]
            )
            setIsLoading(false);
        },3000);
    }

    function increasechangesInfoCarro(){
        setTimeout(()=>{
            setChangesInfoCarro(changesInfoCarro+1);
        },1);
    }
    

    useEffect(loadCars,[]);
    useEffect(()=>{
        increasechangesInfoCarro()
    },[infosCarro]);

    function handleNewCarroChange(event){
        const value= event.target.value;
        setNewCarro({
            ...newCarro,
            [event.target.name]: value
        });
    }

    function handleAddNewCarro(event){
        event.preventDefault();
        const tamanhoAtual = infosCarro.length;
        setNewCarro({
            ...newCarro,
            'id': tamanhoAtual+1
        });
        const concat = infosCarro.concat(newCarro);
        setInfosCarro(concat);
    }
    function handleRemoveCar(id){
        const filter = infosCarro.filter(carros=>carros.id !==id);
        setInfosCarro(filter);
    }
    return <div>
        <p>Os carros foram modificados {changesInfoCarro} vezes</p>
        <form onSubmit={(event)=>handleAddNewCarro(event)}>
            <input type="text" name="marca" onChange={(event)=>{handleNewCarroChange(event)}}value={newCarro.marca} placeholder="Digite uma marca"/>
            <input type="text" name="modelo" onChange={(event)=>{handleNewCarroChange(event)}} value={newCarro.modelo} placeholder="Digite um modelo"/>
            <input type="submit"/>
        </form>

        { !isLoading && 
            infosCarro.map((carro)=>
            <div key={carro.id} className={CarListStyle.carContainer}>
            <Carro  infosCarro={carro}/>
            <button onClick={()=>{handleRemoveCar(carro.id)}}>Remover carro</button>
            </div>       
            ) 
        }

    </div>
}
export default CarrosList;