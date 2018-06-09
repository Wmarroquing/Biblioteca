// VERIFICAR SI EL USUARIO ESTA O NO LOGEADO //
var sesion = (localStorage.getItem('usuario') != null)?localStorage.getItem('usuario'):"";
var login = (sesion == "")?false:true;
// OBTENER DEL LOCAL STORAGE LOS TEMAS Y AUTORES GUARDADOS //
var temas = JSON.parse(localStorage.getItem('temas'));
var autores = JSON.parse(localStorage.getItem('autores'));
// SI EL USUARIO ESTA LOGEADO PODRA INGRESAR UN LIBRO //
if (login == true) {
    var fecha_actual = new Date();
    $('#txt_fecha_libro').val(fecha_actual.getDate()+'/'+(fecha_actual.getMonth()+1)+'/'+fecha_actual.getFullYear());
    // FUNCION PARA VISUALIZAR LOS TEMAS GUARDADOS //
    if(localStorage.getItem('temas')){
        function TemasVer(){
        var tema_html = "";
        $.each(temas, function(index, valor){
            tema_html += '<option>'+temas[index].nombre_tema+'</option>';
        });
        $('#slc_tema').html(tema_html);
    }
    TemasVer();
    }else{
        alert('No hay temas existentes, por favor ingresa uno y vuelve a intentarlo');
        $('#btn_aceptar_libros').attr('disabled', true);
        $('#btn_aceptar_libros').css('background', 'gray');
    }
    // FUNCION PARA VISUALIZAR LOS AUTORES GUARDADOR //
    if(localStorage.getItem('autores')){
        function AutoresVer(){
        var autor_html = "";
        $.each(autores, function(index, valor){
            autor_html += '<option>'+autores[index].nombres+' '+autores[index].apellidos+'</option>';
        });
        $('#scl_autor').html(autor_html);
    }
    AutoresVer();
    }else{
        alert('No hay autores existentes, por favor ingresa uno y vuelve a intentarlo');
        $('#btn_aceptar_libros').attr('disabled', true);
        $('#btn_aceptar_libros').css('background', 'gray');
    }
    // VALIDACIOB PARA PODER INGRESAR UN NUEVO LIBRO // 
    $('#btn_aceptar_libros').click(function(){
        var titulo = $('#txt_titulo').val();
        var autor = $('#scl_autor').val();
        var tema = $('#slc_tema').val();
        var existencia = $('#txt_existencia').val();
        var ubicacion = $('#txt_ubicacion').val();
        var fecha_ingreso = $('#txt_fecha_libro').val();
        
        if(titulo == ""){
            alert('Ingresa el titulo del libro');
            $('#txt_titulo').focus();
            return false;
        }
        if(autor == ""){
            alert('Debes ingresar un nuevo autor para continuar');
            $('#scl_autor').focus();
            return false;
        }
        if(tema == ""){
            alert('Debes ingresar un nuevo tema para continuar');
            $('#slc_tema').focus();
            return false;
        }
        if(existencia == ""){
            alert('Ingresa una cantidad');
            $('#txt_existencia').focus();
            return false;
        }
        if(ubicacion == ""){
            alert('Ingresa una ubicacion');
            $('#txt_ubicacion').focus();
            return false;
        }
        if(fecha_ingreso == ""){
            alert('Ingresa una fecha');
            $('#txt_fecha').focus();
            return false;
        }
        // SI TODOS LOS DATOS SON VALIDOS SE PROCEDERA A GUARDAR EL NUEVO LIBRO //
        if(localStorage.getItem('libros')){
            var libros = JSON.parse(localStorage.getItem('libros'));
            var libro_existe = false;
            $.each(libros, function(index, valor){
                if(titulo == libros[index].titulo_libro && autor == libros[index].autor_libro && tema == libros[index].tema_libro && ubicacion == titulo == libros[index].ubicacion){
                    libro_existe = true;
                }
            });

            if(libro_existe == true){
                alert('el libro que intentas ingrsar ya existe');
            }else{
                var libro ={
                    libro_id: libros.length+1,
                    titulo_libro: titulo,
                    autor_libro: autor,
                    tema_libro: tema,
                    existencia: existencia,
                    ubicacion: ubicacion,
                    fecha_ingreso: fecha_ingreso
                };
    
                libros.push(libro);
    
                localStorage.setItem('libros', JSON.stringify(libros));
    
                alert('Libro registrado!');
                $('#txt_titulo').focus();
                $('#txt_titulo').val('');
                $('#scl_autor').val('');
                $('#slc_tema').val('');
                $('#txt_existencia').val('');
                $('#txt_ubicacion').val('');
            }

        }else{
            var libros = new Array();

            var libro ={
                libro_id: libros.length+1,
                titulo_libro: titulo,
                autor_libro: autor,
                tema_libro: tema,
                existencia: existencia,
                ubicacion: ubicacion,
                fecha_ingreso: fecha_ingreso
            };

            libros.push(libro);

            localStorage.setItem('libros', JSON.stringify(libros));

            alert('Libro registrado!');
            $('#txt_titulo').focus();
            $('#txt_titulo').val('');
            $('#scl_autor').val('');
            $('#slc_tema').val('');
            $('#txt_existencia').val('');
            $('#txt_ubicacion').val('');
        }
    });
    //VALIDACION DEL BOTON PARA CERRAR SESION//
    $('#btn_logout').click(function(){
        var confirmacion = confirm('Estas seguro que deseas Cerrar Sesion?');
        if(confirmacion == true){
            login = false;
            localStorage.removeItem('usuario');
            document.location.href = "index.html";
        }
    });
}else{
    document.location.href = "index.html";
}