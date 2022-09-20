let mensaje = "Hola, ingrese su nombre de usuario";
let mensaje1 = "Seleccione una opcion, por favor:\n 1- Quiero comprar \n 2- Salir del menu";
const carrito = [];
const productos =[{id:1 ,descripcion:"Apple Watch Series 6", precio: 9000, stock: 45},
				  {id:2 ,descripcion:"Samsung Gear S3 Frontier", precio: 10000, stock: 5},
				  {id:3 ,descripcion:"Huawei Watch GT 2",  precio: 11500, stock: 2},
				  {id:4 ,descripcion:"Samsung Galaxy Watch", precio: 13990, stock: 8},
				  {id:5 ,descripcion:"Garmin Fenix 6 Pro",  precio: 12800, stock: 10},
				  {id:6 ,descripcion:"Xiaomi Mi Watch Lite", precio: 7500, stock: 3},
                  {id:7 , descripcion:"Amazfit GTR 2", precio: 20000, stock: 23},
                  {id:8 , descripcion:"Polar Grit X", precio: 21000, stock: 30},
                  {id:9 , descripcion:"Suunto 9", precio: 10990, stock: 8},
                  {id:10 , descripcion:"Samsung Gear Sport", precio: 13400, stock: 50},
];
let respuesta;
let nuevoObjeto=[];

class productoCarrito {
	constructor (objeto){
	this.id = objeto.id;
	this.descripcion = objeto.descripcion;
	this.precio = objeto.precio;
	this.stock = objeto.stock;
	}
	
}         
function validarAlerta (mensaje){
    var entrada = prompt(mensaje);
	   while (entrada =="" || entrada == null){		
		   alert("No se cargaron datos");
		   entrada= prompt(mensaje);
	   }
return respuesta = entrada;	
}

function menuPrincipal (){
	validarAlerta(mensaje1);
	 parseInt(respuesta);  
      
     switch (respuesta){
       case "1":
		menuDeProductos();
	   break;
	   
	   case "2":
		salir(false);
	   break;
	   
	   default:
		alert("opcion mal Ingresada");
		menuPrincipal(); 
	 }
}	

function menuDeProductos() {
	let mostrarProductos="";
	let x=1;
	productos.forEach((i)=> {
	  mostrarProductos+= (i.id+" - "+i.descripcion+" $ " + i.precio + "Stock :" + i.stock + "\n");
	 x++;
   });
   let menuProductos=(mostrarProductos+(x)+" - Finalizar Carrito \n" + (x+1)+ " - Volver");
   validoMenuProductos(menuProductos, x);
}

function validoMenuProductos(menuProductos,x){
	validarAlerta(menuProductos);
	  if (respuesta == x){
          if (carrito.length == 0){
			alert ("carrito Vacio");
			menuDeProductos();
		  }else {
            mostrandoCarrito();
		  }
		  
	  } else if (respuesta == x+1){
		alert ("Eliminando datos del Carrito");
		carrito =[];
		console.log(carrito);
		menuPrincipal();
	  }	else if (respuesta > 0 && respuesta < productos.length+1){
		buscoProductos();
	  }	else {
	  alert ("Opcion mal ingresada")
      menuDeProductos();
	  } 
}		
function buscoProductos(){
	let stock=1;
	productos.map(function(producto){
		if (producto.id == respuesta){
			nuevoObjeto ={id:producto.id,
				descripcion:producto.descripcion,
				precio: producto.precio,
				stock: stock,};
				return nuevoObjeto;
		}	
	});
	
	agregarProductos(nuevoObjeto);
}

function agregarProductos(objeto){
	
	const resultado = carrito.some((elemento) => elemento.id == respuesta);
	if (resultado == false){
		const nuevoCarrito  = new productoCarrito (nuevoObjeto);
		carrito.push (nuevoCarrito);
		alert("agregando productos");
	} else {
		carrito.filter((elemento)=>{
			 if (elemento.id == respuesta) {elemento.stock++}
			});
			alert("agregando productos");
			
	}
    menuDeProductos();
}

function mostrandoCarrito(){
	let mostrarCarrito="";
 	let subTotal=0;
 	let Total=0;	
 	carrito.forEach((i)=> {
		subTotal = i.precio*i.stock;
		Total+=subTotal;
   		mostrarCarrito+= (i.descripcion+" $ " + i.precio + " Stock : " + i.stock +" Sub Total "+ subTotal+ "\n");
 });
   alert(mostrarCarrito +"\n Total a Pagar $ "+Total);
   salir (true);
}



function salir(saludo){
	
	if (saludo == false){
	    alert ("Gracias por ver nuestro sitio web");
		 return; 
	} else{
	    alert ("Gracias por su compra, lo esperamos pronto!");
		return;
    }
}

validarAlerta(mensaje);
alert ("Bienvenido " + respuesta+ " a nuestro sitio donde encontraras las mejores joyas");
menuPrincipal();

let stock5 = document.createElement("div");
stock5.innerHTML = `<h3>Top 10:\n</h3>`
document.body.appendChild(stock5);
for (let a of productos){
	let listado = document.createElement("div");
	listado.innerHTML = `<h4>${a.id} - ${a.descripcion} $${a.precio} ${a.stock}</h4>`;
	document.body.appendChild(listado);
}

let despedida = prompt("Ingrese su correo si quiere recibir ofertas")

let despedida1 = document.createElement("div");
despedida1.innerHTML = `<h4>Le enviaremos más información a su correo: ${despedida}. Muchas gracias.</h4>`
document.body.appendChild(despedida1);