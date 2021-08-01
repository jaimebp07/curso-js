let option = '7';

const dividir = (num1, num2) => {
    return num1/num2;
} 


const sumar= (num1, num2) => {
    return num1 + num2;
}

while(option != '0'){
    option = readMessaje(`Ingrese la opcion que desea realizar \n 1. sumar. \n 2. Restar. \n 3. Multiplicar. \n 4. Dividir. \n 0. Salir.`);
    let res = 0;
    switch (option) {
        case '1': 
            res = sumar(Number(readMessaje("Ingrese el primer numero")), Number(readMessaje("Ingrese el segundo numero")));
            alert(`El resultado de la suma es `+ res);
            break;
        case '2':
            res = restar(Number(readMessaje("Ingrese el primer numero")), Number(readMessaje("Ingrese la cantidad que desea restar"))); 
            alert(`El resultado de la resta es `+ res);
            break;
        case '3':
            res = multiplicar(Number(readMessaje("Ingrese el primer numero")), Number(readMessaje("Ingrese el segundo numero")));
            alert(`El resultado de la multiplicacion es `+ res);
            break;
        case '4':
            res = dividir(parseInt(readMessaje("Ingrese el primer numero")), parseInt(readMessaje("Ingrese las partes en las que va a dividir")));
            alert(`El resultado de la division es `+ res);
            break;
        break;
        default:
            alert(`no marco opcion`);
            break;
      }
}

function readMessaje(message){
    return prompt(message);
}

function showMessage(message){
    alert(message);
}

function restar(num1, num2){
    return num1 - num2;
}

function multiplicar(num1, num2){
    return num1*num2;
}
