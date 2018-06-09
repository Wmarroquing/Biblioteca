//VERIFICAR SI UN USUARIO ESTA O NO LOGEADO//
var sesion = (localStorage.getItem('usuario') != null)?localStorage.getItem('usuario'):"";
var login = (sesion == "")?false:true

//SI EL USUARIO ESTA LOGEADO PODRA ACCEDER AL PROGRAMA//
if (login == true) {
    //OBTENER LA FECHA ACTUAL Y COLOCARLA EN UN TEXTBOX//
    var fecha_actual = new Date();
    $('#txt_fecha_tema').val(fecha_actual.getDate()+'/'+(fecha_actual.getMonth()+1)+'/'+fecha_actual.getFullYear());
    //VALIDACION DE TODOS LOS CAMPOS PARA PODER INGRESAR UN NUEVO LIBRO//
    $('#btn_aceptar_tema').click(function(){
        var tema_agregado = $('#txt_tema').val();
        var fecha_tema = $('#txt_fecha_tema').val();

        if(tema_agregado == ''){
            alert('ingresa un tema');
            $('#txt_fecha_tema').focus();
            return false;
        }
        if(localStorage.getItem('temas')){
            //AGREGAR TEMAS AL LOCALSTORAGE //
            var temas = JSON.parse(localStorage.getItem('temas'));
            var tema_existe = false;

            $.each(temas, function(index, valor){
                if(tema_agregado == temas[index].nombre_tema){
                    tema_existe = true;
                }
            });

            if(tema_existe == true){
                alert ('El tema ingresado ya existe');
            }else{
                var tema = {
                    tema_id: temas.length+1,
                    nombre_tema: tema_agregado,
                    fecha_ingreso: fecha_tema
                };
        
                temas.push(tema);
        
                localStorage.setItem('temas', JSON.stringify(temas));
        
                alert('Tema Registrado!');
                $('#txt_tema').focus();
                $('#txt_tema').val('');;
            }
        }else{
            var temas = new Array();

            var tema = {
                tema_id: temas.length+1,
                nombre_tema: tema_agregado,
                fecha_ingreso: fecha_tema
            };
    
            temas.push(tema);
    
            localStorage.setItem('temas', JSON.stringify(temas));
    
            alert('Tema Registrado!');
            $('#txt_tema').focus();
            $('#txt_tema').val('');
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