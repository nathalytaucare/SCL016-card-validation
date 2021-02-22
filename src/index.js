import validator from './validator.js';

//console.log(validator);

let button = document.getElementById("button");
button.addEventListener("click", secondPage);                       // Al hacer click en bonton continuar realiza la función seconPage()

function secondPage() {                                             //Activa la segunda pagina y desactiva la primera
    document.querySelector('.homepage').style.display = "none";
    document.querySelector('.checker').style.display = "block";
}

let check = document.getElementById("check");
check.addEventListener("click", checkCode);                         // Al hacer click en el boton verificar realiza la funcion checkcode();

function checkCode() {
    let code = document.getElementById("code").value;               // Toma el valor(codigo) ingresado por el usuario
    let message = document.getElementById("message");               //Se obtiene el elemento con el id=message

    if (code == "") {                                               //No ingreso ningún dato
        message.textContent = "No ha ingresado un código";
    } else {
        document.getElementById("code").value = validator.maskify(code);  // Se sustituye el valor ingresado por el enmascaramiento 

        // let data = document.getElementById("data");
        // let maskify = validator.maskify(code);
        // data.textContent = maskify;

        if (validator.isValid(code)) {                                  // Si los datos ingresados son validos (TRUE)
           // console.log("código válido");
            message.textContent = "El código es válido!";
        } else {
            //console.log("El código NO es válido");                      // si los datos ingresaso scon invalido (FALSE)
            message.textContent = "El código es inválido";
        }
    }
}

const newCode = document.getElementById("newCode");
newCode.addEventListener("click", limpiar);                       // Al hacer click en bonton continuar realiza la función limpiar()

function limpiar() {                                            
    document.getElementById("code").value = "";
    document.getElementById("message").textContent="";
}

const cerrar = document.getElementById("buttonHomePage");
cerrar.addEventListener("click", volverInicio);

function volverInicio() {
    document.querySelector('.homepage').style.display = "block";
    document.querySelector('.checker').style.display = "none";
}

// previene que se envie el formulario, y se recare la pagina

const form = document.getElementById("form");
form.addEventListener('button',(e)=> {
    e.preventDefault();
})

