import React, { useEffect, useState } from "react";
import Formulario from "./Formulario";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  //esto se ejecuta al renderizar por primera vez con corchete vacio para que solo re ejecute una vez
  
   //leer local store
  useEffect(() => {
    /* console.log("Leer todos local"); */
    if (localStorage.getItem("todos")) {
        setTodos(JSON.parse(localStorage.getItem("todos")));
    }
}, []);

//guardar en local store
useEffect(() => {
    /* console.log("Guardar todo local"); */
    localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);//este useEf se ejecutara cuando se cambien los todos


  const agregarTodo = (todo) => {
    //console.log(todo);
    setTodos((old) => [...old, todo]);
  };

  const eliminarTodo = (id) => {
    setTodos((old) => old.filter((item) => item.id !== id));
  };

  const editarTodo = (id) => {     // map para hacer un recorrido
    const editar = todos.map((item) => 
    item.id === id ? { ...item, estado: !item.estado } : item );//se devulve una copia del obeto del iten si es igual y estado va a ser lo contrario
    // sino devolvera el item
    
    setTodos(editar);
  };
  
  return (
    <>
      {/* enviamos agregarTodo al formulario y lo recibimos allá - es una forma de activar un metodos desde un componete hijo*/}
      <Formulario agregarTodo={agregarTodo} />
      <ul className="list-group list-group-numbered mt-2">
        {todos.map((item) => (
          <Todo key={item.id} todo={item} eliminarTodo={eliminarTodo}  editarTodo={editarTodo}/>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
