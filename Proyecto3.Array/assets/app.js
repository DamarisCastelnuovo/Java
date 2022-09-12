let num1 = prompt("Ingrese la edad de 3 amigas o esc para interrumpir");
let total = 0;
let num2 = prompt("Ingrese la edad de 3 amigas o esc para interrumpir");
let num3 = prompt("Ingrese la edad de 3 amigas o esc para interrumpir");


const miArray = ["Maria"];
miArray.push(`Tiene: ${num1} años`);
console.log(miArray)

const miArray1 = ["Lola"];
miArray1.push(`Tiene:${num2} años`);
console.log(miArray1)

const miArray2 = ["Anna"];
miArray2.push(`Tiene:${num3} años`);
console.log(miArray2)

while (num1 != 'ESC' && num1 != 'esc'){
    total += Number(num1, num2, num3);
    function suma (total){
        return total / 3;
    }
    num1 = prompt("Ingrese la edad de 3 amigas o esc para interrumpir");   
}

alert(`El promedio de la edad de 3 amigas es ${suma(total)}`);



































/*
let num2 = Number(prompt("Ingrese otra edad"));
let num3 = Number(prompt("Ingrese otra edad"));
let num4 = Number(prompt("Ingrese otra edad"));
let num5 = Number(prompt("Ingrese otra edad"));
*/