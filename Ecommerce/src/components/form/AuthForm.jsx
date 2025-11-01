import { useEffect, useState } from "react"
import { Input } from "./Input"
import { textFieldValidator } from "../../validator/Validator"

export const AuthForm = ({onSubmit, title, fields, userState, buttonName}) => {
    const [userData, setUserData] = useState({});  // Formulario a enviar, cambia dependiendo de si es login o register
    useEffect(()=> {
        setUserData(userState)
    },[userState])
    const [error, setError] = useState({}); // Errores en los fields
    // Actualiza el formulario padre
    // useEffect(()=> {
    //     setUser(userData);
    // }, [userData])
    // Actualiza los valores del formulario
    const onHandleChange = (e) => {
        const {name, value} = e.target;
        setUserData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    // Al salir de un field, comprueba si hay errores lo setea a "error" y retorna el mensaje al fiel especifico
    const onBlur = (e) => {
        const { name, value } = e.target;
        console.log("bien")
        // Si no hay validador para este campo, no hagas nada
        if (!textFieldValidator[name]) return;

        // Ejecuta el validador
        const message = textFieldValidator[name](value);

        // Actualiza el estado de errores
        setError(prev => {
            const newErrors = { ...prev };
            
            if (message) {
            newErrors[name] = message;
            } else {
            delete newErrors[name];
            }

            return newErrors;
        });
        return message;
    };
    // comprueba si los datos estan vacios o si hay algun error en "error"
    const isFormInvalid =
        Object.keys(error).length > 0 ||
        fields.some(field => !userData[field.name] || userData[field.name].trim() === "");

    return(
        <form onSubmit={(e) => onSubmit(e, userData)}>
            <h2 className="auth_form_title">{title}</h2>
            {
                fields.map(field => (
                    <Input
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    onChange={onHandleChange}
                    onBlur={onBlur}
                    />
                ))
            }
            <input 
                className={`auth_button ${isFormInvalid?"auth_button--disabled":"auth_button--enable"}`}
                type="submit" 
                placeholder={buttonName}
                disabled={isFormInvalid}
                ></input>
        </form>
    )
}