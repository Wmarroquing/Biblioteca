//VALIDACION DEL BOTON PARA CERRAR SESION//
$('#btn_logout').click(function(){
    var confirmacion = confirm('Estas seguro que deseas Cerrar Sesion?');
    if(confirmacion == true){
        login = false;
        localStorage.removeItem('usuario_activo');
        document.location.href = "index.html";
    }
});