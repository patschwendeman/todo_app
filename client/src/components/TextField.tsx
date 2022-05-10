import { FunctionComponent, ReactElement, ChangeEventHandler } from 'react';
import '../styles/TextField.css';


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

export { TextField };