// VERIFICAR SI EL USUARIO ESTA O NO LOGEADO //
var sesion = (localStorage.getItem('usuario') != null)?localStorage.getItem('usuario'):"";
var login = (sesion == "")?false:true;
var libros = JSON.parse(localStorage.getItem('libros'));
 
if (login == true) {
    $(document).ready(function(){
        LibrosVer(1);
    });
    // FUNCION DE PAGINACION //
    function LibrosVer(pagina){
        var tabla_libros = "";
        var libros_totales = libros.length;
        var limit_inferior = (pagina * 10)-10;
        var limit_superior = pagina * 10;
        tabla_libros += '<tr>';
        tabla_libros += '<td style="background: rgba(0,0,0,0.8); color: #fff">#</td>';
        tabla_libros += '<td style="background: rgba(0,0,0,0.8); color: #fff">Libro</td>';
        tabla_libros += '<td style="background: rgba(0,0,0,0.8); color: #fff">Autor</td>';
        tabla_libros += '<td style="background: rgba(0,0,0,0.8); color: #fff">Tema</td>';
        tabla_libros += '<td style="background: rgba(0,0,0,0.8); color: #fff">Ubicacion</td>';
        tabla_libros += '<td style="background: rgba(0,0,0,0.8); color: #fff">Disp.</td>';
        tabla_libros += '<td style="background: rgba(0,0,0,0.8); color: #fff">Operaciones</td>';
        tabla_libros += '</tr>';
        $.each(libros, function(index, valor){
            if(index >= limit_inferior && index < limit_superior){
                tabla_libros += '<tr>';
                tabla_libros += '<td>'+(index+1)+'</td>';
                tabla_libros += '<td>'+libros[index].titulo_libro+'</td>';
                tabla_libros += '<td>'+libros[index].autor_libro+'</td>';
                tabla_libros += '<td>'+libros[index].tema_libro+'</td>';
                tabla_libros += '<td>'+libros[index].ubicacion+'</td>';
                tabla_libros += '<td>'+libros[index].existencia+'</td>';
                tabla_libros += '<td><button class="btn btn-sm btn-outline-success" onclick="LibroEditar('+index+');"><i class="fas fa-edit"></i></button> <button class="btn btn-sm btn-outline-danger" onclick="LibroEliminar('+index+');"><i class="fas fa-trash"></i></button></td>';
                tabla_libros += '</tr>';
            }
        });
        // FUNCION DE LOS BOTONES ANTERIOR Y SIGUIENTE //
        var funcion_siguiente = (limit_superior < libros_totales)?'onclick="LibrosVer('+(pagina+1)+');"':'';
        var funcion_anterior = (limit_inferior > 0)?'onclick="LibrosVer('+(pagina-1)+');"':'';
        // GENERAR INFORMACION Y LOS BOTONES PARA CADA PAGINA //
        var boton_anterior = '<li class="page-item"'+funcion_anterior+'><a class="page-link" href="#">Anterior</a></li>';
        var boton_siguiente = '<li class="page-item"'+funcion_siguiente+'><a class="page-link" href="#">Siguiente</a></li>';
        var botones = '';
        var paginas = Math.ceil(libros_totales/10);
        for(var i = 1; i<=paginas; i++){
            botones += '<li class="page-item" onclick="LibrosVer('+i+')"><a class="page-link" href="#">'+i+'</a></li>';
        }
        
        $('#tbl_libros').html(tabla_libros);
        $('#div_botones_libros').html(boton_anterior+botones+boton_siguiente);
    }
     // FUNCION DE ELIMINAR LIBROS //
     function LibroEliminar(_index){
        var eliminar = confirm('Confirme que desea eleminar este libro.');
        if(eliminar){
            var libros = JSON.parse(localStorage.getItem('libros'));
            libros.splice(_index, 1);
            alert('Libro eliminado exitosamente.');
            localStorage.setItem('libros',JSON.stringify(libros));
            document.location.href = "libros.html";
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