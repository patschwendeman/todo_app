import { FunctionComponent, ReactElement, MouseEventHandler, ChangeEventHandler } from 'react';
import { Button } from '../components/Button';
import { TextField } from '../components/TextField';
import '../styles/InputBar.css';


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

export { InputBar };