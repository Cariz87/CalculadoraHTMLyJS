//Ingreso de datos por el usuario
let numero1 = parseFloat(prompt("Ingrese el primer numero: "));

let numero2 = parseFloat(prompt("Ingrese el segundo numero: "));

let operation = prompt("Ingrese el tipo de operacion: (+, -, *, /)");

let result;

switch(operation) {
    case '+':
        result = (numero1 + numero2);
        alert(`${numero1} + ${numero2} = ${result}`);
        break;
    
    case '-':
        result = (numero1 - numero2);
        alert(`${numero1} - ${numero2} = ${result}`);
        break;
    
    case '*':
        result = (numero1 * numero2);
        alert(`${numero1} * ${numero2} = ${result}`);
        break;
    
    case '/':
        result = (numero1/ numero2);
        alert(`${numero1} / ${numero2} = ${result}`);
        break;
   
    default:
        alert('Operador inválido');

        break;
    }