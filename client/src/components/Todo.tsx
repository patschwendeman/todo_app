import { FunctionComponent, ReactElement, MouseEvent } from "react";
import { Todos } from '../types/Todos';
import './Todo.css';


interface TodoProps {
    
    todos: Array<Todos>
    handleStatus: (event: MouseEvent, todo: Todos) => void,
    handleDeleteTodo: (event: MouseEvent, todo: Todos) => void,
    index: number,
    className: string
}


const Todo: FunctionComponent<TodoProps> = ({ todos, handleDeleteTodo, handleStatus, index, className }): ReactElement => {
    return(
        <> 
            <div className= {className} key={ todos[index].id.toString() }>

                <p className="describtion">{todos[index].describtion}</p>
                <div className="controll">

                    <button className= {``} type='button' disabled= { false } onClick={(event) => handleStatus(event, todos[index])}>
                        <img width="20px" src="./assets/check.svg" alt="" />         
                    </button>

                    <button className= {``} type='button' disabled= { false }  onClick= { (event) => handleDeleteTodo(event, todos[index]) }>
                        <img width="20px" src="./assets/delete.svg" alt="" />                           
                    </button>

                </div> 

            </div>
        </>
    );
}

export { Todo };