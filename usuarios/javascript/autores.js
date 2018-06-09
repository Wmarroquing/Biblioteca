var sesion = (localStorage.getItem('usuario_activo') != null)?localStorage.getItem('usuario_activo'):"";
var login = (sesion == "")?false:true;
var autores = JSON.parse(localStorage.getItem('autores'));
var libros = JSON.parse(localStorage.getItem('libros'));

if(login == true){

    $(document).ready(function(){
        AutoresVer(1);
    });

    function AutoresVer(pagina){
        var tabla_autores = "";
        var autores_totales = autores.length;
        var limit_inferior = (pagina *10) - 10;
        var limit_superior = pagina * 10;
        
        $.each(autores, function(index, valor){
            if(index >= limit_inferior && index < limit_superior){
                tabla_autores += '<tr>';
                tabla_autores += '<td>'+(index+1)+'</td>';
                tabla_autores += '<td>'+autores[index].nombres+'</td>';
                tabla_autores += '<td>'+autores[index].apellidos+'</td>';
                tabla_autores += '<td>'+autores[index].nacionalidad+'</td>';
                tabla_autores += '<td>'+autores[index].fecha_ingreso+'</td>';
                tabla_autores += '<td><button class="btn btn-link">Ver</button></td>';
                tabla_autores += '</tr>'
            }
        });
        // FUNCION DE LOS BOTONES ANTERIOR Y SIGUIENTE //
        var funcion_siguiente = (limit_superior < autores_totales)?'onclick="AutoresVer('+(pagina+1)+');"':'';
        var funcion_anterior = (limit_inferior > 0)?'onclick="AutoresVer('+(pagina-1)+');"':'';
        // GENERAR INFORMACION Y LOS BOTONES PARA CADA PAGINA //
        var boton_anterior = '<li class="page-item"'+funcion_anterior+'><a class="page-link" href="#">Anterior</a></li>';
        var boton_siguiente = '<li class="page-item"'+funcion_siguiente+'><a class="page-link" href="#">Siguiente</a></li>';
        var botones = '';
        var paginas = Math.ceil(autores_totales/10);
        for(var i = 1; i<=paginas; i++){
            botones += '<li class="page-item" onclick="AutoresVer('+i+')"><a class="page-link" href="#">'+i+'</a></li>';
        }
        
        $('#tbl_autores').html(tabla_autores);
        $('#div_botones_autores').html(boton_anterior+botones+boton_siguiente);
    }
    //FUNCION PARA EL BUSCADOR//
    function Busqueda(){

        var select = $('#slc_busqueda').val();
        var busqueda = $('#txt_busqueda').val().toLowerCase();

        if(busqueda.length > 0){
            tabla_autores = "";
            $.each(autores, function(index, value){
                if(select == '1'){
                    if(autores[index].nombres.toLowerCase() == busqueda){
                        tabla_autores += '<tr>';
                        tabla_autores += '<td>'+(index+1)+'</td>';
                        tabla_autores += '<td>'+autores[index].nombres+'</td>';
                        tabla_autores += '<td>'+autores[index].apellidos+'</td>';
                        tabla_autores += '<td>'+autores[index].nacionalidad+'</td>';
                        tabla_autores += '<td>'+autores[index].fecha_ingreso+'</td>';
                        tabla_autores += '<td><button class="btn btn-link">Ver</button></td>';
                        tabla_autores += '</tr>';
                    }
                }else if(select == '2'){
                    if(autores[index].apellidos.toLowerCase() == busqueda){
                        tabla_autores += '<tr>';
                        tabla_autores += '<td>'+(index+1)+'</td>';
                        tabla_autores += '<td>'+autores[index].nombres+'</td>';
                        tabla_autores += '<td>'+autores[index].apellidos+'</td>';
                        tabla_autores += '<td>'+autores[index].nacionalidad+'</td>';
                        tabla_autores += '<td>'+autores[index].fecha_ingreso+'</td>';
                        tabla_autores += '<td><button class="btn btn-link">Ver</button></td>';
                        tabla_autores += '</tr>';
                    }
                }else if(select == '3'){
                    if(autores[index].nacionalidad.toLowerCase() == busqueda){
                        tabla_autores += '<tr>';
                        tabla_autores += '<td>'+(index+1)+'</td>';
                        tabla_autores += '<td>'+autores[index].nombres+'</td>';
                        tabla_autores += '<td>'+autores[index].apellidos+'</td>';
                        tabla_autores += '<td>'+autores[index].nacionalidad+'</td>';
                        tabla_autores += '<td>'+autores[index].fecha_ingreso+'</td>';
                        tabla_autores += '<td><button class="btn btn-link">Ver</button></td>';
                        tabla_autores += '</tr>';
                    }
                }
            });
            $('#tbl_autores').html(tabla_autores);
        }else{
            tabla_autores = "";
            $.each(autores, function(index, value){
                tabla_autores += '<tr>';
                tabla_autores += '<td>'+(index+1)+'</td>';
                tabla_autores += '<td>'+autores[index].nombres+'</td>';
                tabla_autores += '<td>'+autores[index].apellidos+'</td>';
                tabla_autores += '<td>'+autores[index].nacionalidad+'</td>';
                tabla_autores += '<td>'+autores[index].fecha_ingreso+'</td>';
                tabla_autores += '<td><button class="btn btn-link">Ver</button></td>';
                tabla_autores += '</tr>';
            });
            $('#tbl_autores').html(tabla_autores);

        }   
    }
    // FUNCION PARA CERRAR SESION//
    $('#btn_logout').click(function(){
        var confirmacion = confirm('Estas seguro que deseas Cerrar Sesion?');
        if(confirmacion == true){
            login = false;
            localStorage.removeItem('usuario_activo');
            document.location.href = "index.html";
        }
    });
}else{
    document.location.href = "index.html";
}