//import modules
import { FunctionComponent, ReactElement, ChangeEvent, MouseEvent, useState, useEffect } from 'react';
import axios from 'axios';
//import components
import { InputBar } from './InputBar';
import { TodosDisplay } from './TodoDisplay';
import { Todos } from '../types/Todos';
import { v4 } from 'uuid';
//import stylesheets
import '../styles/TodoTable.css';

//define endpoint for database
const endpoint = 'http://localhost:8000';


const TodoTable: FunctionComponent = (): ReactElement => {
    
    //Hooks
    const [todos, setTodos] = useState<Array<Todos>>([]);   
    const [enterTodo, setEnterTodo] = useState<string>('');


    //Get Todos from DB
    const fetchTodos = async() => {
        const { data, status } = await axios.get(endpoint + '/todos?_sort=time&_order=desc');
        //check statuscode
        if(status > 199 && status < 300){
            setTodos(data);            
        }
    }    


    //Enter Todo handler
    const handleEnterTodo = (event: ChangeEvent<HTMLInputElement>): void => {
      setEnterTodo(event.currentTarget.value);
    };
  

    //Clear Todo handler
    const handleClearTodos = async() => {
        
        const { data, status } = await axios.get(endpoint + '/todos?done=true');
        data.forEach((element: Todos) => {
            axios.delete(endpoint + '/todos/' + element.id);
            
        });
        //check statuscode
        if(status > 199 && status < 300){
            fetchTodos();
        }
    }
    

    //Create Todo handler
    const handleCreateTodo = async () => {

        //Create new Todo
        const newTodo = {
            
            id: v4(),
            describtion: enterTodo,
            done: false,
            time: Date.now()
        };


        const { status } = await axios.post(endpoint + '/todos', newTodo);
        //check statuscode
        if(status > 199 && status < 300){
            fetchTodos();
        }
        setEnterTodo('');   
    };


    //Delete Todod handler
    const handleDeleteTodo = async (MouseEvent: MouseEvent ,eventTodo: Todos) => {
        
        const id = eventTodo.id;
        
        const { status } = await axios.delete(endpoint + '/todos/' + id);
        //check statuscode
        if(status > 199 && status < 300){
            fetchTodos();
        }  
    }


    //Status handler
    const handleStatus = async (MouseEvent: MouseEvent ,eventTodo: Todos) => {
        //check status of todo
        const newStatus = eventTodo.done === true ? false : true;
        const id = eventTodo.id;
        
        const { status } = await axios.patch(endpoint + '/todos/' + id, {"done": newStatus});
        //check statuscode
        if(status > 199 && status < 300){
            fetchTodos();
        }
    }

    //Get Todos when open app
    useEffect(() => {
        fetchTodos();
    }, []);
  
  
    return(
            <>  
                <div className="todoTable">
                    <InputBar 
                        enterTodo={ enterTodo } 
                        handleEnterTodo={ handleEnterTodo } 
                        handleCreateTodo={ handleCreateTodo }
                        handleClearTodos= { handleClearTodos }
                    />
                    
                    <TodosDisplay 
                        todos={ todos } 
                        handleDeleteTodo={ handleDeleteTodo } 
                        handleStatus={ handleStatus }
                    /> 
                </div>    
            </>      
    );
}

//export component
export { TodoTable };