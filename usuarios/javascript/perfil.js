var usuarios = JSON.parse(localStorage.getItem('usuarios'));
var usuario_activo = localStorage.getItem('usuario_activo');

$(document).ready(function(){
      
    var zona_html = "";
    for(var i=1; i<=25; i++){
        zona_html += '<option  value="'+i+'">'+i+'</option>';
    }
    $('#slc_zona').html(zona_html);
    
    $.each(usuarios, function(index, valor){
        if(usuario_activo == usuarios[index].correo){
            $('#txt_nombre_usuario').val(usuarios[index].nombres);
            $('#txt_apellido_usuario').val(usuarios[index].apellidos);
            $('#txt_direccion').val(usuarios[index].direccion);
            $('#txt_telefono').val(usuarios[index].telefono);
            $('#txt_correo').val(usuarios[index].correo);
            $('#txt_contra').val(usuarios[index].contra);
            $('#txt_confirm_contra').val(usuarios[index].contra);
            if(usuarios[index].genero == '1'){
                $('#rad_masculino').prop('checked', 'true');
            }else{
                $('#rad_femenino').prop('checked', 'true');
            }
            $('#txt_fecha_nac').val(usuarios[index].fecha_nac);
            $('#txt_cui').val(usuarios[index].cui);
            $('#slc_departamento').val(usuarios[index].departamento);
            MunicipiosVer();
            $('#slc_municipio').val(usuarios[index].municipio);
            $('#slc_zona').val(usuarios[index].zona);
            $('#txt_institucion').val(usuarios[index].institucion);
            $('#slc_escolaridad').val(usuarios[index].escolaridad);
            const img64 = document.getElementById('img64');
            img64.src = usuarios[index].imagen;
            $('#img64').prop('src');
        }
    });
});
//FUNCION PARA AGREGAR IMAGEN///
function ParseTo64(evt) {
    const files = evt.target.files;
    const file = files[0];

    console.log(file);
    
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('load', function(){
        const stringImg64 = this.result;
        const img64 = document.getElementById('img64');
        img64.src = stringImg64;
    });
}
//FUNCION PARA MODIFICAR UN USUARIO//
function UsuarioGuardar(){
    let nombre = $('#txt_nombre_usuario').val();
    let apellido = $('#txt_apellido_usuario').val();
    let direccion = $('#txt_direccion').val();
    let telefono = $('#txt_telefono').val();
    let correo = $('#txt_correo').val();
    let contra = $('#txt_contra').val();
    let confirm_contra = $('#txt_confirm_contra').val();
    let genero = $('input:radio[name=rad_genero]:checked').val();
    let fecha_nac = $('#txt_fecha_nac').val();
    let cui = $('#txt_cui').val();
    let departamento = $('#slc_departamento').val();
    let municipio = $('#slc_municipio').val();
    let zona = $('#slc_zona').val();
    let institucion = $('#txt_institucion').val();
    let escolaridad = $('#slc_escolaridad').val();
    let terminos = $('#chk_terminos').val();
    let expr_correo = /^[a-zA-Z][a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;
    let expr_contra = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    let imagen = $('#img64').prop('src');

    if(nombre == ""){
        alert('Para continuar primero ingresa tus nombres');
        $('#txt_nombre_usuario').focus()
        return false;
    }
    if(apellido == ""){
        alert('Para continuar primero ingresa tus apellidos');
        $('#txt_apellido_usuario').focus()
        return false;
    }
    if(direccion == ""){
        alert('Para continuar primero ingresa tu direccion');
        $('#txt_direccion').focus()
        return false;
    }
    if(telefono == ""){
        alert('Para continuar primero ingresa un numero telefonico');
        $('#txt_telefono').focus()
        return false;
    }else if(telefono.length !=8){
        alert('El numero telefonico debe ser de 8 digitos');
        $('#txt_telefono').focus()
        return false;
    }
    if(correo == ""){
        alert('Para continuar primero ingresa un correo electronico');
        $('#txt_correo').focus()
        return false;
    }else if(!expr_correo.test(correo)){
        alert('Ingresa un correo electronico valido');
        $('#txt_correo').focus()
        return false;
    }
    if(contra == ""){
        alert('Debes de ingresar una contraseña');
        $('#txt_contra').focus();
        return false;
    }else if(contra.length < 8){
        alert('La contraseña debe de ser por lo menos 8 caracteres');
        $('#txt_contra').focus();
        return false;
    }else if(!expr_contra.test(contra)){
        alert('La contraseña debe tener al menos 2 letras Mayúsculas, 2 letras minúsculas, 1 número y 1 símbolo');
        $('#txt_contra').focus();
        return false;
    }
    if(confirm_contra == ""){
        alert('Confirma tu contraseña');
        $('#txt_confirm_contra').focus();
        return false;
    }else if(confirm_contra != contra){
        alert('Las contraseñas no coinciden');
        $('#txt_confirm_contra').focus();
        return false;
    }
    if(genero == undefined){
        alert('Es necesario que ingreses tu genero');
        return false;
    }
    if(fecha_nac == ""){
        alert('Ingresa la fecha de tu nacimiento');
        $('#txt_fecha_nac').focus();
        return false;
    }else if(fecha_nac.length != 10){
        alert('Ingresa el formato de fecha dd/mm/aaaa');
        $('#txt_fecha_nac').focus();
        return false;
    }else if(fecha_nac.substring(2,3)!="/" || fecha_nac.substring(5,6)!="/"){
        alert('Debes separar dia/mes/año con /');
        $('#txt_fecha_nac').focus();
        return false;
    }else if(fecha_nac.substring(0,2)>31){
        alert('Ingresa un dia valido');
        $('#txt_fecha_nac').focus();
        return false;
    }else if(fecha_nac.substring(3,5)>12){
        alert('Ingresa un mes valido');
        $('#txt_fecha_nac').focus();
        return false;
    }else if(fecha_nac.substring(6,10)>2018){
        alert('Ingresa un año valido');
        $('#txt_fecha_nac').focus();
        return false;
    }    
    if(cui == ""){
        alert('Ingresa tu CUI');
        $('#txt_cui').focus();
        return false;
    }else if(cui.length != 13){
        alert('Ingresa un CUI valido');
        $('#txt_cui').focus();
        return false;
    }
    if(escolaridad != '1'){
        if(institucion == ""){
            alert('Para continuar primero ingresa una institucion');
            $('#txt_institucion').focus();
            return false;
        }
    }


    $.each(usuarios, function(index, valor){    
        if(usuario_activo == valor.correo){
            usuarios[index].nombres = nombre;
            usuarios[index].apellidos = apellido;
            usuarios[index].direccion = direccion;
            usuarios[index].telefono = telefono;
            usuarios[index].correo = correo;
            usuarios[index].contra = contra;
            usuarios[index].genero = genero;
            usuarios[index].fecha_nac = fecha_nac;
            usuarios[index].cui = cui;
            usuarios[index].departamento = departamento;
            usuarios[index].municipio = municipio;
            usuarios[index].zona = zona;
            usuarios[index].institucion = institucion;
            usuarios[index].escolaridad = escolaridad;
            usuarios[index].imagen = imagen;
        }
    });

    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Tu usuario ah sido modificado exitosamente!');
    window.location.href ='perfil.html';
    

}
//VALIDACION DEL BOTON PARA CERRAR SESION//
$('#btn_logout').click(function(){
    var confirmacion = confirm('Estas seguro que deseas Cerrar Sesion?');
    if(confirmacion == true){
        login = false;
        localStorage.removeItem('usuario_activo');
        document.location.href = "index.html";
    }
});
