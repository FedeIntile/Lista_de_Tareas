const input = document.getElementById('ingresar-tarea');
const boton = document.querySelector('button');
const listaDeTarea = document.getElementById('lista-de-tareas');

function agregarTarea(){
    if (input.value){
        //crear tarea
        let tareaNueva = document.createElement('div');
        tareaNueva.classList.add('tarea');

        // texto ingresado por el usuario
        let texto = document.createElement('p');
        texto.innerText = input.value;
        tareaNueva.appendChild(texto);//se agrega un nuevo elemento hijo a tareaNueva

        //crear y agregar contenedor de iconos
        let iconos = document.createElement('div');
        // iconos.classList.add('iconos'); 
        tareaNueva.appendChild(iconos); //se agrega un nuevo elemento hijo a tareaNueva 

        // Iconos
        let completar = document.createElement('i');
        completar.classList.add('bi','bi-check-circle-fill','icono-completar');
        completar.addEventListener('click',completarTarea);

        let eliminar = document.createElement('i');
        eliminar.classList.add('bi','bi-trash3-fill','icono-eliminar');
        eliminar.addEventListener('click',eliminarTarea);

        iconos.append(completar, eliminar); // metodo append nos permite agregar varios elementos

        // Agregar tarea a la lista
        listaDeTarea.appendChild(tareaNueva);
        input.value = "";
    } else {
        alert ('Por favor ingresa una tarea');
    }

}

function completarTarea(e){
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle('completada');
}

function eliminarTarea(e){
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();
}

boton.addEventListener('click',agregarTarea); 

// evento por si el usuario aprieta tecla enter en lugar del click
input.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter'){
        agregarTarea();
    }
});