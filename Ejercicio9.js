let num1 = Number(prompt("Ingresa el primer número"));
let num2 = Number(prompt("Ingresa el segundo número"));
let operacion = prompt("+,-,*,/");
switch (operacion) {
  case "+":
    alert (num1 + num2);
    break;
  case "-":
    alert (num1 - num2);
    break;
  case "*":
    alert (num1 * num2);
    break;
  case "/":
    alert (num1 / num2);
    break;
  default:
    alert("Operación no válida");
}

