// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Creamos un array que compile los amigos
let amigos = [];

function agregarAmigo() {
  let input = document.getElementById('amigo');
   if (input.value.length < 1) {
    alert('Porfavor, inserte un nombre');
    return;
  }
  // Agregamos los amigos introducidos al array
  amigos.push(input.value);
  mostrarAmigos();
  document.getElementById('resultado').innerHTML = 'Amigo agregado' + input.value;
  input.value = '';

  console.log(amigos);
}

// Agregamos una funcion que cuente y muestre los amigos

function mostrarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let listado = document.createElement('li');
        listado.textContent = amigos[i];
        listaAmigos.appendChild(listado);
        document.getElementById('amigo').value = "";
    }
}

// Agregamos la funcion que sortee al amigo  secreto

function sortearAmigos() {
    let resultado = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[resultado];
    document.getElementById('resultado').innerHTML = 'El amigo secreto es ' + amigoSeleccionado;
    console.log(amigoSeleccionado);

    if (amigos.length === 0) {
      alert('No hay amigos para seleccionar');
      return;
    }
  }

  console.log(amigos);