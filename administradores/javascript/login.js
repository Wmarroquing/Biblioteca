//VERIFICAR SI EL USUARIO ESTA O NO LOGEADO//
var sesion = (localStorage.getItem('usuario') != null)?localStorage.getItem('usuario'):"";
var login = (sesion == "")?false:true;
var administradores = JSON.parse(localStorage.getItem('administradores'));
// SI NO ESTA LOGEADO PERMANECERA EN LA VETANA DEL LOGIN //
if (login == false) {
// VALIDACION PARA QUE EL USUARIO PUEDA LOGEARSE//
$('#btn_login').click(function(){
    var correo_login = $('#txt_email').val();
    var contra_login = $('#txt_clave').val();
    
    if(correo_login == ''){
        alert('Es necesario que ingreses un e-mail!');
        $('#txt_email').focus();
        return false;
    }  
    if(contra_login == ''){
        alert('Ingresa tu contraseña');
        $('#txt_clave').focus();
        return false;
    }   
    if(localStorage.getItem('administradores')){
        var usuario_correcto = false;
        $.each(administradores, function(index, valor){
            if(administradores[index].correo == correo_login && administradores[index].clave == contra_login){
                usuario_correcto = true;
                return false;
            }   
        });
        if(usuario_correcto == true){
            login = true;
            localStorage.setItem('usuario',correo_login);
            window.location.href = "libros.html";
        }else{
            alert('El correo y/o contraseña no coinciden.');
            $('#txt_correo').focus();   
            return false;
        }
    }else{
        alert('El correo ingresado no existe.');
        $('#txt_correo').focus();   
        return false;
    }
});
// SI EL USUARIO YA ESTA LOGEADO SE REDIRIGE A LA PAGINA PRINCIPAL //
}else{
    document.location.href = "libros.html";
}