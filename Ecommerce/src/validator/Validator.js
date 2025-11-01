export const userNameRegex = /^[a-zA-Z0-9._ñÑáéíóúÁÉÍÓÚ]{3,15}$/;
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s'-]{2,50}$/;
export const textFieldValidator = {
    username: (value) => 
        !userNameRegex.test(value)?
        "El username no tiene un formato correcto":
        "",
    password: (value) =>
        !passwordRegex.test(value)?
        "El formato de la contraseña es incorrecto":
        "",
    firstname: (value) =>
        !nameRegex.test(value)?
        "Formato incorrecto del nombre":
        "",
    lastname: (value) =>
        !nameRegex.test(value)?
        "Formato incorrecto del nombre":
        "",
}