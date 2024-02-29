/*****************************************************************************/
/*                  JavaScript de login.html                                 */
/*                  Fecha: Febrero de 2024                                   */
/*                  Version: 1.0                                             */
/*                  Comentario: Proyecto CRUD                                */
/*                  Autor: Sergio Gámez Ortega                               */
/*****************************************************************************/

function validation() {

    let correct = true;
    let usuario = document.getElementById('usuario').value;
    let contraseña = document.getElementById('contraseña').value;

    if((usuario == "") || (/^\s+$/.test(usuario)) || (/[0-9]/.test(usuario)) || (!/[a-zñ]{2,}/i.test(usuario))) {
        document.getElementById('usuarioHelp').style.display="block";
        document.getElementById('usuario').style.borderColor="red";
        document.getElementById('usuarioLabel').style.color="red";
        correct = false;
    }

    if((contraseña == "") || (!/[A-ZÑ]+/.test(contraseña)) || (!/[a-zñ]+/.test(contraseña)) || (!/[0-9]+/.test(contraseña)) || (!/[.:,;+-_&%$€¡!¿?·#"@|ºª¬/()='^*`  ]+/.test(contraseña))) {
        document.getElementById('contraseñaHelp').style.display="block";
        document.getElementById('contraseña').style.borderColor="red";
        document.getElementById('contraseñaLabel').style.color="red";
        correct = false;
    }

    return correct;

}

function resetear(id) {
    document.getElementById(id+'Help').style.display="none";
    document.getElementById(id+'Label').style.color="#2d79f3";
    document.getElementById(id).style.borderColor="#2d79f3";
}