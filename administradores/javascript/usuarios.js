// VERIFICAR SI EL USUARIO ESTA O NO LOGEADO //
var sesion = (localStorage.getItem('usuario') != null)?localStorage.getItem('usuario'):"";
var login = (sesion == "")?false:true;
var usuarios = JSON.parse(localStorage.getItem('usuarios'));
 
if (login == true) {
    $(document).ready(function(){
        UsuariosVer(1);
    });
    // FUNCION DE PAGINACION //
    function UsuariosVer(pagina){
        var usuarios_html = "";
        var usuarios_totales = usuarios.length;
        var limit_inferior = (pagina * 10)-10;
        var limit_superior = pagina * 10;

        $.each(usuarios, function(index, valor){
            if(index >= limit_inferior && index < limit_superior){
                usuarios_html += '<tr>';
                usuarios_html += '<td>'+(index+1)+'</td>';
                usuarios_html += '<td>'+usuarios[index].nombres+'</td>';
                usuarios_html += '<td>'+usuarios[index].apellidos+'</td>';
                usuarios_html += '<td>'+usuarios[index].departamento+'</td>';
                usuarios_html += '<td>'+usuarios[index].usuarios+'</td>';
                usuarios_html += '<td>'+usuarios[index].estado+'</td>';
                usuarios_html += '<td><button type="button" class="btn btn-sm btn-link" data-toggle="modal" data-target="#exampleModalCenter" onclick="UsuarioInfo('+index+');">Ver</button></td>';
                usuarios_html += '</tr>';
            }
        });
        // FUNCION DE LOS BOTONES ANTERIOR Y SIGUIENTE //
        var funcion_siguiente = (limit_superior < usuarios_totales)?'onclick="UsuariosVer('+(pagina+1)+');"':'';
        var funcion_anterior = (limit_inferior > 0)?'onclick="UsuariosVer('+(pagina-1)+');"':'';
        // GENERAR INFORMACION Y LOS BOTONES PARA CADA PAGINA //
        var boton_anterior = '<li class="page-item"'+funcion_anterior+'><a class="page-link" href="#">Anterior</a></li>';
        var boton_siguiente = '<li class="page-item"'+funcion_siguiente+'><a class="page-link" href="#">Siguiente</a></li>';
        var botones = '';
        var paginas = Math.ceil(usuarios_totales/10);
        for(var i = 1; i<=paginas; i++){
            botones += '<li class="page-item" onclick="UsuariosVer('+i+')"><a class="page-link" href="#">'+i+'</a></li>';
        }
        
        $('#tbl_usuarios').html(usuarios_html);
        $('#div_botones_usuarios').html(boton_anterior+botones+boton_siguiente);
    }
    //FUNCION PARA EL BUSCADOR//
    function Busqueda(){
        var select = $('#slc_busqueda').val();
        var busqueda = $('#txt_busqueda').val().toLowerCase();

        if(busqueda.length > 0){
            usuarios_html = "";
            $.each(usuarios, function(index, value){
                if(select == '1'){
                    if(usuarios[index].nombres.toLowerCase() == busqueda){
                        usuarios_html += '<tr>';
                        usuarios_html += '<td>'+(index+1)+'</td>';
                        usuarios_html += '<td>'+usuarios[index].nombres+'</td>';
                        usuarios_html += '<td>'+usuarios[index].apellidos+'</td>';
                        usuarios_html += '<td>'+usuarios[index].departamento+'</td>';
                        usuarios_html += '<td>'+usuarios[index].usuarios+'</td>';
                        usuarios_html += '<td>'+usuarios[index].estado+'</td>';
                        usuarios_html += '<td><button type="button" class="btn btn-sm btn-link" data-toggle="modal" data-target="#exampleModalCenter" onclick="UsuarioInfo('+index+');">Ver</button></td>';
                        usuarios_html += '</tr>';
                    }
                }else if(select == '2'){
                    if(usuarios[index].apellidos.toLowerCase() == busqueda){
                        usuarios_html += '<tr>';
                        usuarios_html += '<td>'+(index+1)+'</td>';
                        usuarios_html += '<td>'+usuarios[index].nombres+'</td>';
                        usuarios_html += '<td>'+usuarios[index].apellidos+'</td>';
                        usuarios_html += '<td>'+usuarios[index].departamento+'</td>';
                        usuarios_html += '<td>'+usuarios[index].usuarios+'</td>';
                        usuarios_html += '<td>'+usuarios[index].estado+'</td>';
                        usuarios_html += '<td><button type="button" class="btn btn-sm btn-link" data-toggle="modal" data-target="#exampleModalCenter" onclick="UsuarioInfo('+index+');">Ver</button></td>';
                        usuarios_html += '</tr>';
                    }
                }else if(select == '3'){
                    if(usuarios[index].departamento.toLowerCase() == busqueda){
                        usuarios_html += '<tr>';
                        usuarios_html += '<td>'+(index+1)+'</td>';
                        usuarios_html += '<td>'+usuarios[index].nombres+'</td>';
                        usuarios_html += '<td>'+usuarios[index].apellidos+'</td>';
                        usuarios_html += '<td>'+usuarios[index].departamento+'</td>';
                        usuarios_html += '<td>'+usuarios[index].usuarios+'</td>';
                        usuarios_html += '<td>'+usuarios[index].estado+'</td>';
                        usuarios_html += '<td><button type="button" class="btn btn-sm btn-link" data-toggle="modal" data-target="#exampleModalCenter" onclick="UsuarioInfo('+index+');">Ver</button></td>';
                        usuarios_html += '</tr>';
                    }
                }else if(select == '4'){
                    if(usuarios[index].genero.toLowerCase() == busqueda){
                        usuarios_html += '<tr>';
                        usuarios_html += '<td>'+(index+1)+'</td>';
                        usuarios_html += '<td>'+usuarios[index].nombres+'</td>';
                        usuarios_html += '<td>'+usuarios[index].apellidos+'</td>';
                        usuarios_html += '<td>'+usuarios[index].departamento+'</td>';
                        usuarios_html += '<td>'+usuarios[index].usuarios+'</td>';
                        usuarios_html += '<td>'+usuarios[index].estado+'</td>';
                        usuarios_html += '<td><button type="button" class="btn btn-sm btn-link" data-toggle="modal" data-target="#exampleModalCenter" onclick="UsuarioInfo('+index+');">Ver</button></td>';
                        usuarios_html += '</tr>';
                    }
                }else if(select == '5'){
                    if(usuarios[index].estado.toLowerCase() == busqueda){
                        usuarios_html += '<tr>';
                        usuarios_html += '<td>'+(index+1)+'</td>';
                        usuarios_html += '<td>'+usuarios[index].nombres+'</td>';
                        usuarios_html += '<td>'+usuarios[index].apellidos+'</td>';
                        usuarios_html += '<td>'+usuarios[index].departamento+'</td>';
                        usuarios_html += '<td>'+usuarios[index].usuarios+'</td>';
                        usuarios_html += '<td>'+usuarios[index].estado+'</td>';
                        usuarios_html += '<td><button type="button" class="btn btn-sm btn-link" data-toggle="modal" data-target="#exampleModalCenter" onclick="UsuarioInfo('+index+');">Ver</button></td>';
                        usuarios_html += '</tr>';
                    }
                }
            });
            $('#tbl_usuarios').html(usuarios_html);
        }else{
            usuarios_html = "";
            $.each(usuarios, function(index, value){
                usuarios_html += '<tr>';
                usuarios_html += '<td>'+(index+1)+'</td>';
                usuarios_html += '<td>'+usuarios[index].nombres+'</td>';
                usuarios_html += '<td>'+usuarios[index].apellidos+'</td>';
                usuarios_html += '<td>'+usuarios[index].departamento+'</td>';
                usuarios_html += '<td>'+usuarios[index].usuarios+'</td>';
                usuarios_html += '<td>'+usuarios[index].estado+'</td>';
                usuarios_html += '<td><button type="button" class="btn btn-sm btn-link" data-toggle="modal" data-target="#exampleModalCenter" onclick="UsuarioInfo('+index+');">Ver</button></td>';
                usuarios_html += '</tr>';
            });
            $('#tbl_usuarios').html(usuarios_html);

        }     
    }
    //FUNCION PARA VISUALIZAR UN USUARIO//
    function UsuarioInfo(_index){
        const img64 = document.getElementById('img64');
        img64.src = usuarios[_index].imagen;
        $('#img64').prop('src');
        $('#txt_nombre').val(usuarios[_index].nombres)
        $('#txt_apellido').val(usuarios[_index].apellidos)
        $('#txt_direccion').val(usuarios[_index].direccion)
        $('#txt_telefono').val(usuarios[_index].telefono)
        $('#txt_correo').val(usuarios[_index].correo)
        $('#txt_contra').val(usuarios[_index].contra)
        if(usuarios[_index].genero == '1'){
            $('#txt_genero').val('Masculino');
        }else{
            $('#txt_genero').val('Femenino');
        }
        $('#txt_fecha_nac').val(usuarios[_index].fecha_nac)
        $('#txt_cui').val(usuarios[_index].cui)
        $('#txt_departamento').val(usuarios[_index].departamento)
        $('#txt_municipio').val(usuarios[_index].municipio)
        $('#txt_zona').val(usuarios[_index].zona)
        $('#txt_institucion').val(usuarios[_index].institucion)
        $('#slc_escolaridad').val(usuarios[_index].escolaridad)
    }
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