import logo from './logo.svg';
import './App.css';
import './components/ControlledComponent'
import ControlledComponent from './components/ControlledComponent';
import Dropdown from './components/Dropdown';
import Checkbox from './components/Checkbox';
import Multiple from './components/Multiple';
import MyForm from './components/MyForm';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <p> Exemplo 1 </p>
      <ControlledComponent />
      <hr className="new"></hr>


      <p> Exemplo 2</p>
      <Dropdown />
      <hr className="new"></hr>


      <p> Exemplo 3</p>
      <Checkbox />
      <hr className="new"></hr>


      <p> Exemplo 4</p>
      <Multiple />
      <hr className="new"></hr>

      <p> Exemplo 5</p>
      <MyForm />
      <hr className="new"></hr>

      <p> Exemplo 6</p>
      <LoginForm />
      <hr className="new"></hr>


      
    </div>
  );
}

export default App;
