const multiplicacion = numero =>{
    for (let i = 1; i <= 5; i++){
        console.log(`${i} x ${numero} = ${i * numero}`);
    }
}
const factorial = numero => {
    for (let i = 1; i <= numero; i++) {
        let formula = `${i}! = `;
        let resultado = 1;
        for (let j = 1; j <= i; j++) {
            resultado *= j;
            formula += `${j}`;
            if (j < i) {
                formula += ' * ';
            }
        }
        console.log(`${formula} = ${resultado}`);
    }
}
const validarNumero =  numero =>{
    if (numero >= 20 || numero <=1){
        console.log(`${numero} esta fuera del rango, debe estar entre 1 y 20`);
    }
    else {
        multiplicacion(numero);
        factorial(numero);
    }
}

const numero = prompt('Ingrese número del 1 al 20');
validarNumero(numero);