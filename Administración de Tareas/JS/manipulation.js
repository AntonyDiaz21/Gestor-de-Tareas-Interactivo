
function seleccionarCheckbox(checkbox) {
    //Comprobar que solo haya pueda seleccionar un checkox seleccionado
    const seleccion = document.querySelector('.Seleccion');
    const checkboxes = seleccion.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((cb) => {
        if (cb !== checkbox) {
            cb.checked = false; 
        }
    });
}

function agregarTarea() {
    const inputLista = document.querySelector('.inputLista');
    const listaAlta = document.getElementById('lista-alta').querySelector('ul');
    const listaBaja = document.getElementById('lista-baja').querySelector('ul');

    if (inputLista.value.trim() === '') { 
        alert('Por favor, ingrese una tarea.'); 
        return;
    }

        //comprobar el estado de los checkboxes
    const prioridadAlta = document.getElementById('Alta').checked;
    const prioridadBaja = document.getElementById('Baja').checked;

    if (!prioridadAlta && !prioridadBaja) {
        alert('Por favor, seleccione una prioridad (Alta o Baja) para continuar con la administración');
        return;
    }
    const tareaTexto = inputLista.value.trim();

    // Crear un elemento li
    const li = document.createElement('li');
    // Envolver el texto de la tarea en un <span>
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.innerHTML = `<span class="tarea-texto">${tareaTexto}</span> <div class="d-flex align-items-center">
                        <label class="labelEstado">Estado
                            <input type="checkbox" onclick="marcarCompletada(this)">
                        </label>
                        <button class="btn" onclick="eliminarTarea(this)"><i class="fa-solid fa-trash"></i></button>
                    </div>`;

    //Realizar agregación en el contenedor correspondiente
    if (prioridadAlta) {
        listaAlta.appendChild(li);
    } else {
        listaBaja.appendChild(li);
    }

    //Limpiar los Valores del input y los checkboxes
    inputLista.value = '';
    document.getElementById('Alta').checked = false;
    document.getElementById('Baja').checked = false; 
}

function marcarCompletada(checkbox) {
    //Estilo en caso de que se seleccione el Checkbox Estado
    const listItem = checkbox.closest('.list-group-item');
    const tareaTexto = listItem.querySelector('.tarea-texto');
    if (checkbox.checked) {
        tareaTexto.style.textDecoration = 'line-through';
        tareaTexto.style.color = "	#808080";
    } else {
        tareaTexto.style.textDecoration = 'none';
        tareaTexto.style.color = "black";
    }
}

function eliminarTarea(button) {
    //Elimina el elemento especificado
    const listItem = button.closest('.list-group-item');
    listItem.remove();
}