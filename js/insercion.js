/*****************************************************************************/
/*                  JavaScript de insercion.html                             */
/*                  Fecha: Febrero de 2024                                   */
/*                  Version: 1.0                                             */
/*                  Comentario: Proyecto CRUD                                */
/*                  Autor: Sergio Gámez Ortega                               */
/*****************************************************************************/

function validation() {

    let correct = true;
    let usuario = document.getElementById('usuario').value;
    let contraseña = document.getElementById('contraseña').value;
    let apellidos = document.getElementById('apellidos').value;
    let correo = document.getElementById('correo').value;
    let telefono = document.getElementById('telefono').value;
    let comunidad = document.getElementById('comunidad').value;
    let terminos = document.getElementById('terminos');

    if((usuario == "") || (/^\s+$/.test(usuario)) || (/[0-9]/.test(usuario)) || (!/[a-zñ]{2,}/i.test(usuario))) {
        document.getElementById('usuarioHelp').style.display="block";
        document.getElementById('usuario').style.borderColor="red";
        document.getElementById('usuarioLabel').style.color="red";
        correct = false;
    }

    if((apellidos == "") || (/^\s+$/.test(apellidos)) || (!/[a-zñ]{2,}/i.test(apellidos))) {
        document.getElementById('apellidosHelp').style.display="block";
        document.getElementById('apellidos').style.borderColor="red";
        document.getElementById('apellidosLabel').style.color="red";
        correct = false;
    }

    if((correo == "") || (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(correo))) {
        document.getElementById('correoHelp').style.display="block";
        document.getElementById('correo').style.borderColor="red";
        document.getElementById('correoLabel').style.color="red";
        correct = false;
    }

    if((telefono == "") || (!/^\d{9,10}$/.test(telefono))) {
        document.getElementById('telefonoHelp').style.display="block";
        document.getElementById('telefono').style.borderColor="red";
        document.getElementById('telefonoLabel').style.color="red";
        correct = false;
    }

    if((contraseña == "") || (!/[A-ZÑ]+/.test(contraseña)) || (!/[a-zñ]+/.test(contraseña)) || (!/[0-9]+/.test(contraseña)) || (!/[.:,;+-_&%$€¡!¿?·#"@|ºª¬/()='^*`  ]+/.test(contraseña))) {
        document.getElementById('contraseñaHelp').style.display="block";
        document.getElementById('contraseña').style.borderColor="red";
        document.getElementById('contraseñaLabel').style.color="red";
        correct = false;
    }

    if(comunidad == 0) {
        document.getElementById('comunidadHelp').style.display="block";
        document.getElementById('comunidad').style.borderColor="red";
        correct = false;
    }

    if(!terminos.checked) {
        document.getElementById('terminosHelp').style.display="block";
        document.getElementById('terminosLabel').style.color="red";
        correct = false;
    }

    return correct;

}

function resetear(id) {
    document.getElementById(id+'Help').style.display="none";
    document.getElementById(id+'Label').style.color="#2d79f3";
    document.getElementById(id).style.borderColor="#2d79f3";
}

function resetearSelect(id) {
    document.getElementById(id+'Help').style.display="none";
    document.getElementById(id).style.borderColor="#2d79f3";
}