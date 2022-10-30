document.addEventListener('DOMContentLoaded', tarjetaCredito);

const name = document.querySelector("#cardName");
const number = document.querySelector("#cardNumber");
const cvc = document.querySelector("#cardCvc");
const year = document.querySelector("#cardYear");
const mes = document.querySelector("#cardMes");
const btnForm = document.querySelectorAll('.btn');
const formulario = document.querySelector('.form');

import {imprimirAlerta, limpiarTarjeta, limipiar} from './helpers.js'
let identificador, id;

function tarjetaCredito(e){
    formulario.addEventListener('input', validarFormulario);
}
function validarFormulario(e){
    identificador = document.querySelector(`#${e.target.id}`).id;
    id = e.target.id;
    document.querySelector(`.${identificador}`).textContent = e.target.value;
    if(e.target.value === ''){
        error('error', "Can't be blank", id);
        limpiarTarjeta(id)
        return;
    }else if(e.target.id === 'cardNumber' && isNaN(Number(e.target.value))) {
        error('error', "Wrong format, only numbers!", id);
        return;
    }
    if(name.value !== '' && number.value !=='' && cvc.value !== '' && year.value!== '' && mes.value !== ''){
        btnReset();
    }
}
function error(tipo, mensaje, id){
    const alerta = document.querySelector('.alerta');
    if(alerta){
        alerta.remove();
    }
    const error = document.querySelector(`.error-${id}`)
    const divAlerta = document.createElement('p');
    imprimirAlerta(tipo, mensaje, id, divAlerta, error)
}
function btnReset(){
    btnForm.forEach(boton =>{
        boton.addEventListener('click',(e)=>{
            e.preventDefault();
            if(e.target.id === 'confirm'){
                document.querySelector('.exito').classList.remove('invisible')
                formulario.classList.add('invisible');
            }else{
                limipiar();
                formulario.reset();
                document.querySelector('.exito').classList.add('invisible')
                formulario.classList.remove('invisible');
                name.textContent = 'hola';
            }
        })
    })
}