
import { useState } from 'react'

//hooks es una funcion
 const useFormulario = (initialState = {}) => {
    const [inputs, setInputs] = useState(initialState);

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;

        setInputs((old) => ({
            ...old,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const reset = () => {
        setInputs(initialState);
    };

  return [inputs, handleChange, reset];
    
};

export default useFormulario