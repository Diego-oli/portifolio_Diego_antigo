import { erroInputs } from "./login/erroinputs.js";

export function validarLogin(){
    let emailFild = document.getElementById('email');
    let passworFild = document.getElementById('passaword');
    
    console.log(emailFild.value);

    if(emailFild.textContent === 'tariq.9918@aluno.pr.senac.br'&& passworFild.textContent === '12345678'){
        window.location.href='./index.html';
    }else{
       erroInputs(passworFild, emailFild);
    }
}
