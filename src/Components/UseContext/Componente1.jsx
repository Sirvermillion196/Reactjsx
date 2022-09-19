import {useState} from "react";
import Componente2 from "./Componente2";
import UserContext from "./UserContext";

function Componente1(){
    const [user,setUser] = useState("Vinicius");
    return 
    <UserContext.Provider value={user} >
        <h1>Componente 1</h1>
        <Componente2/>
    </UserContext.Provider>
    
}


export default Componente1;