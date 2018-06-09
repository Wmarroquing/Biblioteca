var sesion = (localStorage.getItem('usuario_activo') != null)?localStorage.getItem('usuario_activo'):'';
var login = (sesion == "")?false:true;
var usuarios = JSON.parse(localStorage.getItem('usuarios'));

$(document).ready(function(){
    $('#txt_correo').focus();
});

if(login ==false){

    function IniciarSesion(){
        var correo_login = $('#txt_correo').val();
        var contra_login = $('#txt_contra').val();

        if(correo_login == ""){
            alert('Ingresa un correo electronico');
            $('#txt_correo').focus();
            return false;
        }
        if(contra_login == ""){
            alert('Ingresa una contraseña');
            $('#txt_contra').focus();
            return false;
        }
        if(localStorage.getItem('usuarios')){
            var usuario_correcto = false;
            $.each(usuarios, function(index, valor){
                if(usuarios[index].correo == correo_login && usuarios[index].contra == contra_login){
                    usuario_correcto = true;
                    return false;
                }   
            });
            if(usuario_correcto == true){
                login = true;
                localStorage.setItem('usuario_activo',correo_login);
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
    }
}else{
    document.location.href = 'libros.html';
}