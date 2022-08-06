import "./App.css";

import TodoForm from "./component/TodoForm";

function App() {


  return (
    <>
      <div className="appContainer">
        <div className="navbar">
          <h1>Monthly Grocery Planning App is</h1>
        </div>
        <TodoForm />
      </div>
    </>
  );
}

export default App;