var sesion = (localStorage.getItem('usuario_activo') != null)?localStorage.getItem('usuario_activo'):"";
var login = (sesion == "")?false:true;
var temas = JSON.parse(localStorage.getItem('temas'));

if(login == true){

    $(document).ready(function(){
        TemasVer(1);
    });

    function TemasVer(pagina){
        var tabla_html = '';
        var temas_totales = temas.length;
        var limit_inferior = (pagina * 10)-10;
        var limit_superior = pagina * 10;
        
        $.each(temas, function(index, valor){
            if(index >= limit_inferior && index < limit_superior){
                tabla_html += '<tr>';
                tabla_html += '<td>'+(index+1)+'</td>';
                tabla_html += '<td>'+temas[index].nombre_tema+'</td>';
                tabla_html += '<td><button class="btn btn-link">Ver</button></td>';
                tabla_html += '</tr>';
            }
        });
        // FUNCION DE LOS BOTONES ANTERIOR Y SIGUIENTE //
        var funcion_siguiente = (limit_superior < temas_totales)?'onclick="TemasVer('+(pagina+1)+');"':'';
        var funcion_anterior = (limit_inferior > 0)?'onclick="TemasVer('+(pagina-1)+');"':'';
        // GENERAR INFORMACION Y LOS BOTONES PARA CADA PAGINA //
        var boton_anterior = '<li class="page-item"'+funcion_anterior+'><a class="page-link" href="#">Anterior</a></li>';
        var boton_siguiente = '<li class="page-item"'+funcion_siguiente+'><a class="page-link" href="#">Siguiente</a></li>';

        var botones = '';
        var paginas = Math.ceil(temas_totales/10);
        for(var i = 1; i<=paginas; i++){
            botones += '<li class="page-item" onclick="TemasVer('+i+')"><a class="page-link" href="#">'+i+'</a></li>';
        }
        
        $("#tbl_temas").html(tabla_html);
        $('#div_botones_temas').html(boton_anterior+botones+boton_siguiente);
    }
    //FUNCION PARA EL BUSCADOR//
    function Busqueda(){
        var busqueda = $('#txt_busqueda').val().toLowerCase();

        if(busqueda.length > 0){
            tabla_html = "";
            $.each(temas, function(index, value){
                if(temas[index].nombre_tema.toLowerCase() == busqueda){
                    tabla_html += '<tr>';
                    tabla_html += '<td>'+(index+1)+'</td>';
                    tabla_html += '<td>'+temas[index].nombre_tema+'</td>';
                    tabla_html += '<td><button class="btn btn-link">Ver</button></td>';
                    tabla_html += '</tr>';
                }
            });
            $('#tbl_temas').html(tabla_html);
        }else{
            tabla_html = "";
            $.each(temas, function(index, value){
                tabla_html += '<tr>';
                tabla_html += '<td>'+(index+1)+'</td>';
                tabla_html += '<td>'+temas[index].nombre_tema+'</td>';
                tabla_html += '<td><button class="btn btn-link">Ver</button></td>';
                tabla_html += '</tr>';;
            });
            $('#tbl_temas').html(tabla_html);

        }   
    }
    //FUNCION PARA CERRAR SESION//
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