//import modules
import { TodoTable } from './TodoTable';
//import stylesheets
import '../styles/App.css';


const App = () => {
  return(
    <>
      <div className='backgroundContainer'>
        <TodoTable />
      </div>
    </> 
  );
}

//export App
export { App };

