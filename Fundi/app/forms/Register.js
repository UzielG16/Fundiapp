import React from 'react';
import t from 'tcomb-form-native';
import formValidation from '../utils/Validation';


export const RegisterStruct = t.struct({
    name: t.String,
    email: formValidation.email,
    password: formValidation.password,
    passwordConfirmation: formValidation.password
});


export const RegisterOptions ={
    fields: {
        name:{
            label: "Nombre (*)",
            placeholder: "Ingresa tu nombre completo",
            error:"Nombre Invalido"
        },
        email:{
            label: "Email (*)",
            placeholder: "Ingresa tu email",
            error:"Email Invalido"
        },
        password:{
            label: "Contraseña (*)",
            placeholder: "Ingresa tu contraseña",
            error:"Contraseña Invalida",
            password:true,
            secureTextEntry:true
        },
        passwordConfirmation:{
            label: "Repetir Contraseña (*)",
            placeholder: "Ingresa tu contraseña",
            error:"Contraseña Invalida",
            password:true,
            secureTextEntry:true
        }
    }
};