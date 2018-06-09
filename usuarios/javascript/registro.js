$(document).ready(function(){
    $('#txt_nombre_usuario').focus()
});

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

var zona_html = "";
for(var i=1; i<=25; i++){
    zona_html += '<option  value="'+i+'">'+i+'</option>';
}
$('#slc_zona').html(zona_html);

function RegistrarUsuario(){
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
    if(!($('#chk_terminos').is(':checked'))){
        alert('Debes aceptar los terminos y condiciones para continuar');
        return false;
    }
    if(localStorage.getItem('usuarios')){
        var usuarios = JSON.parse(localStorage.getItem('usuarios'));
        var correo_existe = false;
        $.each(usuarios, function(index, valor){
            if(usuarios[index].correo == correo){
                correo_existe = true;
            }
        });
        if(correo_existe == true){
            alert('El correo ingresado ya existe, por favor intenta con otro');
            return false;
        }else{
            var usuario = {
                usuario_id: usuarios.length+1,
                nombres: nombre,
                apellidos: apellido,
                direccion: direccion,
                telefono: telefono,
                correo: correo,
                contra: contra,
                genero: genero,
                fecha_nac: fecha_nac,
                cui: cui,
                departamento: departamento,
                municipio: municipio,
                zona: zona,
                institucion: institucion,
                escolaridad: escolaridad,
                imagen: imagen,
                estado: '1'
            };
            usuarios.push(usuario);
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
            alert('Usuario registrado correctamente!');
            document.location.href = 'index.html';
        }
    }else{
        var usuarios = new Array();
        var usuario = {
            usuario_id: usuarios.length+1,
            nombres: nombre,
            apellidos: apellido,
            direccion: direccion,
            telefono: telefono,
            correo: correo,
            contra: contra,
            genero: genero,
            fecha_nac: fecha_nac,
            cui: cui,
            departamento: departamento,
            municipio: municipio,
            zona: zona,
            institucion: institucion,
            escolaridad: escolaridad,
            imagen: imagen,
            estado: '1'
        };
        usuarios.push(usuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        alert('Usuario registrado correctamente!');
        document.location.href = 'index.html';
    }
    
}

