
const Todo = ({ todo, eliminarTodo, editarTodo }) => {//aca recibimos el prost

    const {id, nombre, descripcion, estado, prioridad} = todo;

  return (

    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">
          {nombre} ({estado ? 'Finalizado' : 'Pendiente'})
        </div>
       <p className="d-flex justify-content-between ">{descripcion}
       </p>
        <div>
            <button className="btn btn-sm btn-danger me-2" onClick={() => eliminarTodo(id)}>Eliminar </button>
            <button className="btn btn-sm btn-warning me-2" onClick={() => editarTodo(id)}>Editar</button>
        </div>
      </div>
      <span className="badge bg-primary rounded-pill">{prioridad && 'Prioridatario'}</span>
    </li>
  );
};

export default Todo;
