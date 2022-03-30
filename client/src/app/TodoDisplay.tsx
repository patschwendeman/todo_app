import { FunctionComponent, ReactElement, MouseEvent } from 'react';
import { Todo } from '../components/Todo';
import { Todos } from '../types/Todos';
import './TodoDisplay.css'


interface TodosDisplayProps {
    todos: Array<Todos>,
    handleDeleteTodo: (event: MouseEvent, todo: Todos) => void,
    handleStatus: (event: MouseEvent, todo: Todos) => void
}


const TodosDisplay: FunctionComponent<TodosDisplayProps> = ({ todos, handleDeleteTodo, handleStatus }): ReactElement => {    
    return(
        <>
            <div className="todoDisplay">

                <p className="lable">Open</p>
                {todos.map((element: Todos, index: number) => {
                    
                    //Check Status of todo and create Todo component
                    if(todos[index].done === false){
                        
                        return(
                            <Todo
                                key={ todos[index].id.toString() }  
                                todos={ todos } 
                                handleDeleteTodo={ handleDeleteTodo } 
                                handleStatus={ handleStatus} 
                                index={ index } 
                                className= "todo todoOpen" 
                            />   
                        );                  
                    }
                    return null; 
                })}

                <p className="lable">Done</p>
                {todos.map((element: Todos, index: number) => {
                    
                    //Check Status of todo and create Todo component
                    if(todos[index].done === true){  
                                         
                        return(
                            <Todo
                                key={ todos[index].id.toString() } 
                                todos={ todos } 
                                handleDeleteTodo={ handleDeleteTodo } 
                                handleStatus={ handleStatus} 
                                index={ index } 
                                className= "todo todoDone" 
                            />     
                        );                   
                    }
                    return null;   
                })} 
            </div>  
        </>
    );
}

export { TodosDisplay };