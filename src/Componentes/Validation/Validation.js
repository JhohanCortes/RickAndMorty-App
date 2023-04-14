const validation = (userData) => {
    const errors = {};

    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){ // test es un metodo que evalua
        errors.email= 'El email ingresado no es un email válido'
    }
    if(!userData.email){ // No se escribió nada en email
        errors.email= 'No ha ingresado email'
    }
    if(userData.email.length > 35){
        errors.email= 'El mail no tener más a 35 caracteres'
    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = 'Debe de tener por lo menos un numero'
    }

    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'debe de tener logintud de entre 6 a 10 caracteres'
    }

    return errors;
}

export default validation