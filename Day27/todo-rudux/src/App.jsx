import './App.css';
import  AddTodo from "./Componenets/AddTodo"
import ListTodo from './Componenets/ListTodo';

function App() {
  return (
    <div className="App">
      <h1> Todo List</h1>
      <AddTodo/>
      <ListTodo/>
     
    </div>
  );
}

export default App;
