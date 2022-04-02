//import modules
import { FunctionComponent, ReactElement, ChangeEventHandler } from 'react';
//import stylesheets
import '../styles/TextField.css';

//define interface
interface TextFieldProps {
    value: string,
    onChange: ChangeEventHandler
}


const TextField: FunctionComponent<TextFieldProps> = ({ value, onChange }): ReactElement => {
    return(
        <input className="inputField"
            type='text'
            value={ value }
            onChange={ onChange }
            maxLength={ 18 }
            placeholder= "Type a Todo.."
        />
    );
}

//export component
export { TextField };