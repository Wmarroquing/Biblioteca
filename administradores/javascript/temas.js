// VERIFICAR SI EL USUARIO ESTA O NO LOGEADO //
var sesion = (localStorage.getItem('usuario') != null)?localStorage.getItem('usuario'):"";
var login = (sesion == "")?false:true;
var temas = JSON.parse(localStorage.getItem('temas'));

if (login == true) {
    $(document).ready(function(){
        TemasVer(1);
    });
    // FUNCION DE PAGINACION //
    function TemasVer(pagina){
        var tabla_html = '';
        var temas_totales = temas.length;
        var limit_inferior = (pagina * 10)-10;
        var limit_superior = pagina * 10;
        tabla_html += '<tr>';
        tabla_html += '<td style="background: rgba(0,0,0,0.8); color: #fff">#</td>';
        tabla_html += '<td style="background: rgba(0,0,0,0.8); color: #fff">Tema</td>';
        tabla_html += '<td style="background: rgba(0,0,0,0.8); color: #fff">Fecha de Ingreso</td>';
        tabla_html += '<td style="background: rgba(0,0,0,0.8); color: #fff">Operaciones</td>';
        tabla_html += '</tr>'
        $.each(temas, function(index, valor){
            if(index >= limit_inferior && index < limit_superior){
                tabla_html += '<tr>';
                tabla_html += '<td>'+(index+1)+'</td>';
                tabla_html += '<td>'+temas[index].nombre_tema+'</td>';
                tabla_html += '<td>'+temas[index].fecha_ingreso+'</td>';
                tabla_html += '<td><button class="btn btn-sm btn-outline-success" onclick="TemaEditar('+index+');"><i class="fas fa-edit"></i></button> <button class="btn btn-sm btn-outline-danger" onclick="TemaEliminar('+index+');"><i class="fas fa-trash"></i></button></td>';
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
     // FUNCION DE ELIMINAR TEMAS //
     function TemaEliminar(_index){
        var eliminar = confirm('Confirme que desea eleminar este tema.');
        if(eliminar){
            var temas = JSON.parse(localStorage.getItem('temas'));
            temas.splice(_index, 1);
            alert('Tema eliminado exitosamente.');
            localStorage.setItem('temas',JSON.stringify(temas));
            document.location.href = "temas.html";
        }
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