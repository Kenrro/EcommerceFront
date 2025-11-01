import { useState } from "react"
import { textFieldValidator } from "../../validator/Validator"
export const Input = ({name, type, placeholder, onChange, onBlur, value}) => {
    const [error, setError] = useState("")
    const handleBlur = (e) => {
        const message = onBlur(e);
        if (message) setError(message);
        else setError("")
    }
    return (
        <fieldset className="auth_fieldset" key={name+type}>
            <input onBlur={handleBlur} className="auth_form_text-field" placeholder={placeholder} onChange={onChange} name={name} type={type} />
            {error&&<span>{error}</span>}
        </fieldset>
    )
}