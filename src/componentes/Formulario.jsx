import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import useFormulario from '../hooks/useFormulario.js';

const Formulario = ({agregarTodo}) => {//aca recibimos y se agrega a despues de la validaciones
    const initialState = {
        nombre: "",
        descripcion: "",
        estado: "pendiente",
        prioridad: false,
    };

   const [inputs, handleChange, reset] = useFormulario(initialState);

    const {nombre, descripcion, estado, prioridad} = inputs; //destructuracion opcional si no tocaba poner en el de los input value todo.nombre

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!nombre.trim()) {//validacion
            e.target[0].focus();//seleccion del campo nombre o indice 0
            return Swal.fire({//alerta
                title: 'Error!',
                text: 'Por favor no deje el nombre en blanco',
                icon: 'error',
                
                /* cambiar de texto ok a cool 
                confirmButtonText: 'Cool' */
              })
             
        }
        if(!descripcion.trim()) {
            e.target[1].focus();//seleccion del campo nombre o indice 0
            return Swal.fire({//alerta
                title: 'Error!',
                text: 'Por favor ingrese una descripcion',
                icon: 'error',
                
                /* cambiar de texto ok a cool 
                confirmButtonText: 'Cool' */
              })
             
        }

        Swal.fire({//alerta
            title: 'Exito!',
            text: 'Tarea agregada',
            icon: 'success',
            
            /* cambiar de texto ok a cool 
            confirmButtonText: 'Cool' */
        });

          agregarTodo({
            
            nombre: nombre,
            descripcion: descripcion,
            estado: estado === 'pendiente' ? false : true, //si estado es igual a pendiente devulve false o sino true 
            prioridad: prioridad,
            id: uuidv4(),//id automatico

            //otro modo pero cuando los datos son iguales
            /* nombre,descripcion, estado, prioridad */
            
          });

          reset();//se puede reainarl el formulario

    };

   

    return (
        <>
            <h3 className="text-center">Agregar TODO</h3>
            <br></br>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="" className="form-label">
                    Nombre
                </label>
                <input
                    type="text"
                    className="form form-control mb-2"
                    name="nombre"
                    placeholder="Ingrese Nombre"
                    value={nombre}
                    onChange={handleChange}
                />
                <label className="form-label">Ingrese Descripción</label>
                <textarea
                    type="text"
                    placeholder="ingrese descripción"
                    name="descripcion"
                    onChange={handleChange}
                    className="form-control mb-2"
                    value={descripcion}
                />
                <select
                    name="estado"
                    value={estado}
                    onChange={handleChange}
                    className="form-control mb-2"
                /*  
                value={todo.todoEstado} */
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
                </select>

                <div className="form-check">
                    <input
                        type="checkbox"
                        name="prioridad"
                        id="idCheckbox"
                        checked={prioridad}
                        onChange={handleChange}
                        /* checked={todo.prioridad}
                                    onChange={handleChange} */
                        className="form-check-input mb-2"
                    />
                    <label htmlFor="idCheckbox" className="form-check-label">
                        Dar prioridad
                    </label>
                </div>
                <button className="btn btn-primary" type="submit">
                    Agregar
                </button>
            </form>
        </>
    );
};

export default Formulario;
