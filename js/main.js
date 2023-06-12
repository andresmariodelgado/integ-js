

const valorTicket = 200;

let nombre = document.getElementById('inputNombre');
let apellido = document.getElementById('inputApellido');
let correo = document.getElementById('inputCorreo');
let cantidad = document.getElementById('inputCantidad');
let categoria = document.getElementById('inputCategoria');
// let totalPago = document.getElementById('inputImporte');

let divMsjeErrorNombre = document.getElementById('msjeErrorNombre');
let divMsjeErrorApellido = document.getElementById('msjeErrorApellido');
let divMsjeErrorCorreo = document.getElementById('msjeErrorCorreo');
let divMsjeErrorCantidad = document.getElementById('msjeErrorCantidad');
let divMsjeErrorCategoria = document.getElementById('msjeErrorCategoria');

let descEstudiante = 80;
let descTrainee = 50; 
let descJunior = 15; 

// funcion quitar a los elementos del formulario, el estilo de error
const quitarClaseError = () => { 

    let listaNodos = document.querySelectorAll(".form-control, .form-select"); 
    for (let i = 0; i < listaNodos.length; i++) { 
        listaNodos[i].classList.remove('is-invalid');
    }
    let listaNodosdiv = document.querySelectorAll(".invalid-feedback");
    for (let i = 0; i < listaNodosdiv.length; i++) { 
        listaNodosdiv[i].classList.remove('msjeDisplayBlock');
    }
}
// total_a_pagar

const totalAPagar = () => { 
         
    quitarClaseError();

   
    // Valido campo nombre 
    if (nombre.value === "") { 
        nombre.classList.add("is-invalid"); 
        divMsjeErrorNombre.classList.add("msjeDisplayBlock"); 
        nombre.focus();
        return;
        console.log(nombre.value);

    }
    if (apellido.value === "") { 
        apellido.classList.add("is-invalid"); 
        divMsjeErrorApellido.classList.add("msjeDisplayBlock"); 
        apellido.focus();
        return;
    }

    if (correo.value === "") { 
        correo.classList.add("is-invalid"); 
        divMsjeErrorCorreo.classList.add("msjeDisplayBlock"); 
        correo.focus();
        return;
    }

    // falta expresion regular para mail 

    if ( (cantidad.value == 0) || ( isNaN(cantidad.value)) ) {
        cantidad.classList.add("is-invalid"); 
        divMsjeErrorCantidad.classList.add("msjeDisplayBlock"); 
        cantidad.focus();
        return;
    } 
    if ( categoria.value == "") { 
        categoria.classList.add("is-invalid"); 
        divMsjeErrorCategoria.classList.add("msjeDisplayBlock"); 
        categoria.focus();
        return;
    } 

    let totalValorTickets = (cantidad.value) * valorTicket; 
    console.log(totalValorTickets);

    switch (categoria.value) { 
        case "0":
            totalValorTickets = totalValorTickets;
            break;
        case "1":
            totalValorTickets = totalValorTickets - ( descEstudiante / 100 * totalValorTickets); 
            break;
        case "2":
            totalValorTickets = totalValorTickets - ( descTrainee / 100 * totalValorTickets); 
            break;
        case "3":
            totalValorTickets = totalValorTickets - ( descJunior / 100 * totalValorTickets); 
            break;
   }
    totalPago.innerHTML = totalValorTickets;
}
btnResumen.addEventListener('click', totalAPagar);


const resetTotalAPagar = () => { 
    quitarClaseError();
    totalPago.innerHTML = "";

}
btnBorrar.addEventListener('click', resetTotalAPagar);










