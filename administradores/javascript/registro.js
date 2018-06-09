var fecha_actual = new Date();
// VALIDACION DEL BOTON REGISTRAR//
$('#btn_registrar').click(function(){
    var nombres = $('#txt_nombres').val();
    var apellidos = $('#txt_apellidos').val();
    var direccion = $('#txt_direccion').val();
    var telefono = $('#txt_telefono').val();
    var correo = $('#txt_correo').val();
    var contra = $('#txt_contra').val();
    var confirm_contra = $('#txt_confirm_contra').val();
    var genero = $('input:radio[name=rad_genero]:checked').val();
    var fecha_nac = $('#txt_fecha_nac').val();
    var cui = $('#txt_cui').val();
    var depatamento = $('#slc_departamento').val();
    var municipio = $('#slc_municipio').val();
    
    var expr_correo = /^[a-zA-Z][a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;
    var expr_contra = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    
    if(nombres == ""){
        alert('Debes de ingresar tus nombres');
        $('#txt_nombres').focus();
        return false;
    }
    if(apellidos == ""){
        alert('Debes de ingresar tus apellidos');
        $('#txt_apellidos').focus();
        return false;
    }
    if(direccion == ""){
        alert('Debes de ingresar una direccion');
        $('#txt_direccion').focus();
        return false;
    }
    if(telefono == ""){
        alert('Debes de ingresar un numero telefonico');
        $('#txt_telefono').focus();
        return false;
    }else if(telefono.length != 8){
        alert('El numero telefonico debe de ser de 8 digitos');
        $('#txt_telefono').focus();
        return false;
    }
    if(correo == ""){
        alert('Debes de ingresar un email');
        $('#txt_correo').focus();
        return false;
    }else if(!expr_correo.test(correo)){
        alert('ingresa un email valido');
        $('#txt_correo').focus();
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
    }else if(genero == 1){
        genero = 'Hombre';
    }else{
        genero = 'Mujer';
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
    // COMPROBACION SI EL USUARIO ES O NO MAYOR DE EDAD//
    var edad_anio = Number(fecha_actual.getFullYear()) - Number(fecha_nac.substring(6,10));
    var mayor_edad = false;
    
    if(edad_anio > 18){
        mayor_edad = true;
    }else if(edad_anio == 18 && fecha_nac.substring(3,5) <= fecha_actual.getMonth()+1 && fecha_nac.substring(0,2) <= fecha_actual.getDate()){
        mayor_edad = true;
    }else{
        mayor_edad = false;
    }
    
    if(mayor_edad == false){
        $('#rad_confirm').attr('disabled', false);
        if(!($('#rad_confirm').is(':checked'))){
            alert('Tus padres deben autorizar el uso de la navegacion y utilizaicion de los dervicios');
            return false;
        }
    }else{
        $('#rad_confirm').attr('disabled', true);
    }
    
    if(!($('#chk_terminos').is(':checked'))){
        alert('Debes aceptar los terminos y condiciones para continuar');
        return false;
    }
    // SI TODOS LOS DATOS SON VALIDOS SE PROCEDERA A GUARDAR LOS DATOS//
    if(localStorage.getItem('administradores')){
        var administradores = JSON.parse(localStorage.getItem('administradores'));
        var correo_existe = false;
        $.each(administradores, function(index, valor){
            if(correo == administradores[index].correo){
                correo_existe = true;
            }
        });
        if(correo_existe == true){
            alert('El Correo ingresado ya existe, por favor ingresa uno nuevo');
        }else{
            var administrador = {
                administrador_id: administradores.length+1,
                nombres: nombres,
                apellidos: apellidos,
                direccion: direccion,
                telefono: telefono,
                correo: correo,
                clave: contra,
                genero: genero,
                nacimiento: fecha_nac,
                cui: cui,
                municipio: municipio
            };
    
            administradores.push(administrador);
    
            localStorage.setItem('administradores', JSON.stringify(administradores));
    
            alert('Usuario Registrado!');
            document.location.href = "index.html";
        }
    }else{
        var administradores = new Array();

        var administrador = {
            administrador_id: administradores.length+1,
            nombres: nombres,
            apellidos: apellidos,
            direccion: direccion,
            telefono: telefono,
            correo: correo,
            clave: contra,
            genero: genero,
            nacimiento: fecha_nac,
            cui: cui,
            municipio: municipio
        };

        administradores.push(administrador);

        localStorage.setItem('administradores', JSON.stringify(administradores));

        alert('Usuario Registrado!');
        document.location.href = "index.html";
    }
});