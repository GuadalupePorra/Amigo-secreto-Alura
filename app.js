let listaAmigosSorteados = []
const botonAnadir = document.getElementById('btnAnadir');
const botonSortear = document.getElementById('btnSortear'); 
const botonNuevoSorteo = document.getElementById('btnNuevoSorteo');


function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); // Elimina espacios innecesarios

    if (nombre === '') {
        alert('Por favor, escribi un nombre válido.');
        return;
    }

    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    if (!soloLetras.test(nombre)) {
        alert('Solo se permiten letras. No ingreses números ni símbolos.');
        return;
    }


    listaAmigosSorteados.push(nombre);

    input.value = '';
    input.focus();

    mostrarLista();
}

function mostrarLista() {
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = ''; 

    listaAmigosSorteados.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        ul.appendChild(li);
    });
}

function sortearAmigos(){
    const resultado = document.getElementById('resultado')

    resultado.innerHTML = ''

    if (listaAmigosSorteados.length < 2) {
        alert('Debes ingresar al menos 2 amigos para realizar el sorteo.');
        return;
    }

    const sortear = Math.floor(Math.random()*listaAmigosSorteados.length)
    const amigosSorteados = listaAmigosSorteados[sortear]

    const li = document.createElement('li');
    li.textContent = `El amigo secreto es: ${amigosSorteados}!`;
    resultado.appendChild(li);
    
    desactivarBotones();
}

function desactivarBotones(){
    const botonNuevoSorteo = document.getElementById('btnNuevoSorteo');

    botonSortear.disabled = true;
    botonSortear.classList.add('disabled');
    botonSortear.innerHTML = `
        <img src="assets/play_circle_outline.png" alt="Ícono para sortear">
        Sorteo realizado
    `;

    botonAnadir.disabled = true;
    botonAnadir.style.cursor = 'not-allowed';

    botonNuevoSorteo.disabled = false;  
    botonNuevoSorteo.style.cursor = 'pointer'   
}

function reiniciarJuego() {
    listaAmigosSorteados = [];

    botonNuevoSorteo.disabled = true;
    botonNuevoSorteo.style.cursor = 'not-allowed'  
    reactivarElementos();
}

function reactivarElementos(){
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    botonSortear.disabled = false;
    botonSortear.classList.remove('disabled');
    botonAnadir.disabled = false;
    botonAnadir.style.cursor = 'pointer'  
}