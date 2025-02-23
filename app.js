// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista para almacenar los nombres de los amigos
let listaAmigos = [];

// Función para validar y agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el valor del input y limpiarlo de espacios en blanco
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar que el nombre no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingrese un nombre válido');
        return;
    }
    
    // Validar que el nombre no esté duplicado
    if (listaAmigos.includes(nombreAmigo)) {
        alert('Este nombre ya está en la lista');
        return;
    }
    
    // Agregar el nombre a la lista
    listaAmigos.push(nombreAmigo);
    
    // Limpiar el input
    inputAmigo.value = '';
    
    // Actualizar la lista visual
    actualizarListaVisual();
}

// Función para actualizar la lista visual en el HTML
function actualizarListaVisual() {
    const listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';
    
    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        
        // Agregar botón para eliminar
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = '×';
        btnEliminar.className = 'button-delete';
        btnEliminar.onclick = () => eliminarAmigo(index);
        
        li.appendChild(btnEliminar);
        listaHTML.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    listaAmigos.splice(index, 1);
    actualizarListaVisual();
    
    // Limpiar el resultado anterior si existe
    document.getElementById('resultado').innerHTML = '';
}

// Función para realizar el sorteo
function sortearAmigo() {
    // Validar que haya suficientes amigos en la lista
    if (listaAmigos.length < 2) {
        alert('Se necesitan al menos 2 amigos para realizar el sorteo');
        return;
    }
    
    // Obtener un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSeleccionado = listaAmigos[indiceAleatorio];
    
    // Mostrar el resultado
    const resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = '';
    
    const li = document.createElement('li');
    li.className = 'resultado-sorteo';
    li.textContent = `¡${amigoSeleccionado} es el amigo secreto!`;
    
    resultadoHTML.appendChild(li);
}

// Agregar evento para permitir agregar amigos con la tecla Enter
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});