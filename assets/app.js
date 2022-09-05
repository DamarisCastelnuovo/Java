let num1 = Number(prompt("Ingrese la edad de sus 5 amigas"));
let num2 = Number(prompt("Ingrese otra edad"));
let num3 = Number(prompt("Ingrese otra edad"));
let num4 = Number(prompt("Ingrese otra edad"));
let num5 = Number(prompt("Ingrese otra edad"));

function suma (num1, num2, num3, num4, num5){
    return (num1 + num2 + num3 + num4 + num5) / 5;
}

alert(`El promedio de la edad de sus 5 amigas es ${suma(num1, num2, num3, num4, num5)}`);

