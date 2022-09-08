let num1 = prompt("Ingrese la edad de 3 amigas o esc para interrumpir");
let total = 0;
 
while (num1 != 'ESC' && num1 != 'esc'){
    total += Number(num1);
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