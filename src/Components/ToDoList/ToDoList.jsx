import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';

function ToDoList() {

    const [listTodos, setListTodos] = useState([
        { id: 1, texto: 'Tarefa 1' },
        { id: 2, texto: 'Tarefa 2' }
    ]);

    const [texto,setTexto] = useState("");

    function addToList(event){
        event.preventDefault();
        const newId = listTodos.length + 1;
        const newItem = {id:newId,texto};
        const newList =  listTodos.concat(newItem);
        setListTodos(newList);
    }
    function removeFromList(id){
        const newList = listTodos.filter(c=>c.id!==id);
        setListTodos(newList);
    }

    return <>
        <Form onSubmit={(event)=>{addToList(event)}}>
            <Form.Control type="text" onChange={(event)=>{setTexto(event.target.value)}}></Form.Control>
            <Button type="submit">Adicionar</Button>
        </Form>

        <ListGroup>
            {listTodos.map((item) =>
                <ListGroup.Item key={item.id}>
                    {item.texto}
                    <Button variant="danger" size="sm" onClick={()=>{removeFromList(item.id)}}>X</Button>
                </ListGroup.Item>
            )
            }
        </ListGroup>
    </>

}

export default ToDoList;


