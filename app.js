// Agregar nombres a una lista insertada

// Varibale lista para guardar los nombres inscritos
let listaNombre = [];

// Funcionalidad de boton añadir
function agregarAmigo() {
    // Obtenemos el valor del elemento amigo
    let nombreAmigo = document.getElementById('amigo').value;   
    
    // Creando el elemento <li> en una variable
    let elementoLista = document.createElement('li');

    // Variable donde vamos a insrtar el elemento <li>
    let almacenamientoLi = document.getElementById('listaAmigos');
        
    // Bucle para iterar los nombres de la lista
    listaNombre.forEach(element => {elementoLista;
        elementoLista.innerHTML = element;
    });

    // Valida que el nombre ingrsado no haya sido ya registrado
    if (listaNombre.includes(nombreAmigo)) {
        alert('este nombre ya fue agregado');

        // Limpia el display
        document.getElementById('amigo').value="";

    // Alerta de que el display esta vacio y necesita colocar un nombre
    } else if(nombreAmigo == "") {
        alert('Ingresa el nombre de un amigo')

    } else {
        // Agrega el nombre escrito a una lista
        alert(` Haz agregado a ${nombreAmigo} a la lista`);
        listaNombre.push(nombreAmigo);

        // Limnpia el display
        document.getElementById('amigo').value="";

        // Bucle para iterar los nombres de la lista
        listaNombre.forEach(element => {elementoLista;
            elementoLista.innerHTML = element;
        });
        
        // Agregando el elemento <li>
        almacenamientoLi.appendChild(elementoLista);

        // Muestra la lista de nombres y tamaño de la lista en la consola
        console.log(listaNombre);
    };
    return;
};

// Sortear aleatoriamente los nombres de la lista
// Funcionalidad boton sortear amigo
function sortearAmigo() {
    // Indice maximo de la lista de nombres
    let indicieMaximo = listaNombre.length;

    // Indice aleatorio de la lista de nombres
    let indiceAleatorio = Math.floor(Math.random()*indicieMaximo);

    // Mensaje de amigo secreto
    let mensajeAmigoSecreto = (`Tu amigo secreto es ${listaNombre[indiceAleatorio]}!`);

    // Validadndo que la lista de amigos no este vacia
    if(listaNombre == "") {
        alert('La lista esta vacia, por favor ingresa los nombres de tus amigos');
    } else {
        document.getElementById('resultado').innerHTML = mensajeAmigoSecreto;
    };
    return;
};