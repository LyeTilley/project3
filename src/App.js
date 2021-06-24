import "./App.css";
import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { db } from "./firebase_config";
import firebase from "firebase";
import TodoListItem from "./Todo";


function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    getTodos();


  }, []); 

  function getTodos() {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  }

  function addTodo(e) {
    e.preventDefault();

    db.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });

    setTodoInput("");
  }

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        
        }}
      >
        <h1> GIT 'ER DONE APP 
        </h1>

        <h2>⬇️ ToDo List   ⬇️ </h2>
        <form>
          <TextField
            id="standard-basic"
            label="Please write here!"
            color="secondary"
            style="white"
            value={todoInput}
            style={{ width: "120vw", maxWidth: "500px" }}
            onChange={(e) => setTodoInput(e.target.value)}



          />
          <Button
          size="large"
            type="submit"
            variant="contained"
            color="primary"
            
            onClick={addTodo}
            style={{ display: "block" }}
          >
            Press or hit enter to add task
          </Button>
        </form>

        <div style={{ width: "90vw", maxWidth: "500px", marginTop: "24px" }}>
          {todos.map((todo) => (
            <TodoListItem
              todo={todo.todo}
              inprogress={todo.inprogress}
              id={todo.id}
            />
          ))}


<footer>
        
        <p>Created at <a href="http://www.junocollege.com"> JUNO College</a> (2021) by Lyle Tilley - Cohort 34</p>

    </footer>

        </div>
      </div>
    </div>


    
  );
}

export default App;
