// Seleccionamos los elementos del DOM
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let respuesta_usuario = document.querySelector("#respuesta_usuario");
let msj_correccion = document.querySelector("#msj_correccion");
let operacion = document.querySelector("#operacion");
let operacion_actual;
// En n1 y n2 voy a guardar los numeros de cada operacion
let n1, n2;

//Funcion suma
function btnSumar(){
    //Limpiamos el div contenedor de las correcciones
    msj_correccion.innerHTML = "";
    // Agregamos la clase activa al boton suma y la quitamos del resto
    activarBoton("suma");
    operacion_actual = "+";
    // Asignamos la operacion suma a la etiqueta 
    operacion.innerHTML = " + ";
    //generamos los numeros aleatorios de la suma 
    nuevaSuma();
}

function nuevaSuma(){
    //Generamos dos numeros aleatorios entre 0 y 9
    n1 = parseInt(Math.random() * 10);
    n2 = parseInt(Math.random() * 10);
    // Asiganamos los numeros a las etiquetas 
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    // Colocamos el cursor en el input
    respuesta_usuario.focus();
}

// Funcion Producto
function btnProducto(){
    //Limpiamos el div contenedor de las correcciones
    msj_correccion.innerHTML = "";
    // Agregamos la clase activa al boton Producto y la quitamos del resto
    activarBoton("producto");
    operacion_actual = "*";
    // Asignamos la operacion producto a la etiqueta 
    operacion.innerHTML = " x ";
    //generamos los numeros aleatorios del producto 
    nuevoProducto();
}

function nuevoProducto(){
    //Generamos dos numeros aleatorios entre 0 y 9
    n1 = parseInt(Math.random() * 10);
    n2 = parseInt(Math.random() * 10);
    // Asiganamos los numeros a las etiquetas 
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    // Colocamos el cursor en el input
    respuesta_usuario.focus();
}

// Funcion resta
function btnRestar(){
    //Limpiamos el div contenedor de las correcciones
    msj_correccion.innerHTML = "";
    // Agregamos la clase activa al boton resta y la quitamos del resto
    activarBoton("resta");
    operacion_actual = "-";
    // Asignamos la operacion resta a la etiqueta 
    operacion.innerHTML = " - ";
    //generamos los numeros aleatorios de la resta 
    nuevaResta();
}

function nuevaResta(){
    //Generamos dos numeros aleatorios entre 5 y 10
    n1 = parseInt(Math.random() * 5 + 5);
    // Generamos un numero aleatorio entre 0 y 5 
    n2 = parseInt(Math.random() * 5);
    // Asiganamos los numeros a las etiquetas 
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    // Colocamos el cursor en el input
    respuesta_usuario.focus();
}

// Funcion division
function btnDivision(){
    //Limpiamos el div contenedor de las correcciones
    msj_correccion.innerHTML = "";
    // Agregamos la clase activa al boton Divisor y la quitamos del resto
    activarBoton("division");
    operacion_actual = "/";
    // Asignamos la operacion dividir a la etiqueta 
    operacion.innerHTML = " / ";
    //generamos los numeros aleatorios de la division 
    nuevaDivision();
}

function nuevaDivision() {
    // Aqui voy a guardar los divisores del numero a dividir
    let divisores = [];
    
    //Generamos un numero aleatorio entre 1 y 10
    n1 = parseInt(Math.random()* 9 + 1);

    //Encontramos los divisores del numero generado y lo guardamos en el arreglo
    for (var i = 1; i <= n1; i++) {
        if (n1 % i === 0) { // es divisor
            divisores.push(i);

        }
    }
    // Seleccionamos una posicion aleatoria  de los numeros que son divisores 
    let pos = parseInt(Math.random() * (divisores.length));

    n2 = divisores[pos];
    num1.innerHTML = n1;
    num2.innerHTML = n2;
    respuesta_usuario.focus();
}

// Funcion que controla si la respuesta es correcta
function corregir(){
    // Si el usuario no ha ingresado nada no continuo 
    if(respuesta_usuario.value=="") {
        return;
    }

    let solucion;
    // Armo la operacion que se generó en una variable y veo cual es su resultado.
    // En este caso el operador + es para concatenar las cadenas.
    let operacion = n1 + operacion_actual + n2;
    solucion = eval(operacion);
    
    // creo un elemento i para agregar el icono de correcto e incorrecto 
    var i = document.createElement("i");
    // Controlo si coincide lo que el usuario respondio con la solucion 
    if (respuesta_usuario.value == solucion) {
        i.className = "fa-regular fa-face-grin";
    }else{
        i.className = "fa-regular fa-face-frown";
    }

    // Agrego el elemento contenedor de las correcciones 
    msj_correccion.appendChild(i);

    // Controlo que tipo de operacion estoy para genera una nueva operacion 
    if (operacion_actual == "+") {
        nuevaSuma();
    }else if (operacion_actual == "-") {
        nuevaResta();
    }else if (operacion_actual == "*") {
        nuevoProducto();
    }else if (operacion_actual == "/") {
        nuevaDivision();
    }

    // Limpio el input 
    respuesta_usuario.value = "";
}

/* Agrego al input el evento onkeydown para detectar cuando se presiona enter y llamar directamente
    a la funcion corregir().
*/
respuesta_usuario.onkeydown = function(e) {
    var ev = document.all ? window.Event : e;
    if (ev.keyCode == 13) {
        corregir();
    } 
}



// Esta funcion la creamos luego, cuando tengamos listo los estilos 
function activarBoton(idBoton) {
    document.getElementById("suma").className="";
    document.getElementById("resta").className="";
    document.getElementById("producto").className="";
    document.getElementById("division").className="";
    document.getElementById(idBoton).className="activado";
}