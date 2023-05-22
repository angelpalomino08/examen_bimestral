let result = prompt("ingrese el primer numero ");
let numero = prompt("ingrese el segundo numero ");

menor = numero - result
mayor = result - numero

if (result < numero) {
    alert( menor )
} else  if(result > numero) {
    alert( mayor )
} else if(result = numero) {
    alert("son iguales")
} else {
    alert("no se registro número")
}