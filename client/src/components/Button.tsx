import { FunctionComponent, ReactElement, MouseEventHandler } from 'react';
import '../styles/Button.css';
import '../styles/ButtonClear.css';


interface ButtonProps {
    lable: string,
    disabled: boolean,
    onClick: MouseEventHandler<HTMLButtonElement>    
}


const Button: FunctionComponent<ButtonProps> = ({ lable, disabled, onClick}): ReactElement => {
    
    //Check label and create CSS className
    let style: string = lable === 'ADD' ? 'addButton' : 'clearButton';

    return(
        <div>
            <button className= {`button ${style}`} type='button' disabled= { disabled } onClick= { onClick }>
                {lable}
            </button>   
        </div> 
    );
}

export { Button };