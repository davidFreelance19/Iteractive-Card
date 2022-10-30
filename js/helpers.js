export function imprimirAlerta(tipo, mensaje, id, divAlerta, error){
    if(tipo === 'error'){
        divAlerta.textContent = mensaje;
        divAlerta.classList.add('alerta','text-sm', 'text-red-700')
        error.insertBefore(divAlerta, id.beforeElementSibling);
        document.querySelector(`.error-${id} input`).classList.add('border-red-800')
    }
    setTimeout(() => {
        document.querySelector(`.error-${id} input`).classList.remove('border-red-800')
        divAlerta.remove()
    }, 1400);
}
export function limpiarTarjeta(id){
    switch(id){
        case 'cardName':
            document.querySelector(`.${id}`).textContent = 'Jane Applessed';
            break;
        case 'cardNumber':
            document.querySelector(`.${id}`).textContent = '0000 0000 0000 0000';
            break;
        case 'cardYear':
            document.querySelector(`.${id}`).textContent = '00';
            break
        case 'cardMes':
               document.querySelector(`.${id}`).textContent = '00';
               break
         case 'cardCvc':
            document.querySelector(`.${id}`).textContent = '000';
            break
    }
}
export function limipiar(){
    document.querySelector('.cardName').textContent = 'Jane Applessed';
    document.querySelector('.cardNumber').textContent = '0000 0000 0000 0000';
    document.querySelector('.cardMes').textContent = '00';
    document.querySelector('.cardYear').textContent = '00';
    document.querySelector('.cardCvc').textContent = '000';
}