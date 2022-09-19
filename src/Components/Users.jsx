import {useEffect,useState} from "react";
import {users} from '../API/users'
function Users(){
    const [usersList,setUsersList] = useState([]);
    const [errorMsg,setErrorMsg] = useState("");
    const fetchUsers= async ()=>{
        try{
            const response = await users();
            setUsersList(response.data);
        }
        catch(e){
            setErrorMsg(e.response.status);
        }
    }
    useEffect(()=>{fetchUsers()},[]);
    return <>{
        usersList.length>0?
        usersList.map((user)=><p key={user.id}>{user.email}</p>)  :
    <p>Loading ...</p>
    }
    {errorMsg!=='' && <p>{errorMsg}</p>}
   </>
}
export default Users;
