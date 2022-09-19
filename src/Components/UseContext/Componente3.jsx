import {useContext} from "react"
import UserContext from "./UserContext";

function Componente3(){

    const user = useContext(UserContext);
    return <>
    <h3>Componente 3</h3>

    <p> O nome de usuário é : {user}</p>
    
    </>


}


export default Componente3;