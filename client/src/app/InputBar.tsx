//import modules
import { FunctionComponent, ReactElement, MouseEventHandler, ChangeEventHandler } from 'react';
//import components
import { Button } from '../components/Button';
import { TextField } from '../components/TextField';
//import stylesheets
import '../styles/InputBar.css';

//define interface
interface InputBarProps {
    enterTodo: string,
    handleEnterTodo:  ChangeEventHandler,
    handleCreateTodo: MouseEventHandler,
    handleClearTodos: MouseEventHandler
}

const InputBar: FunctionComponent<InputBarProps> = ({ enterTodo, handleEnterTodo, handleCreateTodo, handleClearTodos}): ReactElement => {
    return(
          <>
            <div className="inputBar">
              <form>
                <TextField value={ enterTodo } onChange={ handleEnterTodo } />
                <div className="buttonsContainer">
                  <Button lable= 'ADD'  disabled= { enterTodo === '' } onClick= { handleCreateTodo } />
                  <Button lable= 'CLEAR' disabled= { false } onClick= { handleClearTodos } />
                </div>
              </form>
            </div>
          </>
    );
}

//export component
export { InputBar };