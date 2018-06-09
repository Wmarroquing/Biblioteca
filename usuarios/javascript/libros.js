var sesion = (localStorage.getItem('usuario_activo') != null)?localStorage.getItem('usuario_activo'):"";
var login= (sesion == "")?false:true;
var libros = JSON.parse(localStorage.getItem('libros'));    

if(login == true){
    
    $(document).ready(function(){
        LibrosVer(1);
    });

    function LibrosVer(pagina){
        var tabla_libros = "";
        var libros_totales = libros.length;
        var limit_inferior = (pagina * 10)-10;
        var limit_superior = pagina * 10;

        $.each(libros, function(index, valor){
            if(index >= limit_inferior && index < limit_superior){
                tabla_libros += '<tr>';
                tabla_libros += '<td>'+(index+1)+'</td>';
                tabla_libros += '<td>'+libros[index].titulo_libro+'</td>';
                tabla_libros += '<td>'+libros[index].autor_libro+'</td>';
                tabla_libros += '<td>'+libros[index].tema_libro+'</td>';
                tabla_libros += '<td>'+libros[index].ubicacion+'</td>';
                tabla_libros += '<td>'+libros[index].existencia+'</td>';
                tabla_libros += '<td><button type="button" class="btn btn-sm btn-link" data-toggle="modal" data-target="#exampleModalCenter"  onclick="LibroVer('+index+');">Prestar</button>';
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
    //FUNCION PARA EL BUSCADOR//
    function Busqueda(){
        var select = $('#slc_busqueda').val();
        var busqueda = $('#txt_busqueda').val().toLowerCase();

        if(busqueda.length > 0){
            tabla_libros = "";
            $.each(libros, function(index, value){
                if(select == '1'){
                    if(libros[index].titulo_libro.toLowerCase() == busqueda){
                        tabla_libros += '<tr>';
                        tabla_libros += '<td>'+(index+1)+'</td>';
                        tabla_libros += '<td>'+libros[index].titulo_libro+'</td>';
                        tabla_libros += '<td>'+libros[index].autor_libro+'</td>';
                        tabla_libros += '<td>'+libros[index].tema_libro+'</td>';
                        tabla_libros += '<td>'+libros[index].ubicacion+'</td>';
                        tabla_libros += '<td>'+libros[index].existencia+'</td>';
                        tabla_libros += '<td><button type="button" class="btn btn-sm btn-link" data-toggle="modal" data-target="#exampleModalCenter" onclick="LibroVer('+index+');">Prestar</button>';
                        tabla_libros += '</tr>';
                    }
                }else if(select == '2'){
                    if(libros[index].autor_libro.toLowerCase() == busqueda){
                        tabla_libros += '<tr>';
                        tabla_libros += '<td>'+(index+1)+'</td>';
                        tabla_libros += '<td>'+libros[index].titulo_libro+'</td>';
                        tabla_libros += '<td>'+libros[index].autor_libro+'</td>';
                        tabla_libros += '<td>'+libros[index].tema_libro+'</td>';
                        tabla_libros += '<td>'+libros[index].ubicacion+'</td>';
                        tabla_libros += '<td>'+libros[index].existencia+'</td>';
                        tabla_libros += '<td><button type="button" class="btn btn-sm btn-link" data-toggle="modal" data-target="#exampleModalCenter" onclick="LibroVer('+index+');">Prestar</button>';
                        tabla_libros += '</tr>';
                    }
                }else if(select == '3'){
                    if(libros[index].tema_libro.toLowerCase() == busqueda){
                        tabla_libros += '<tr>';
                        tabla_libros += '<td>'+(index+1)+'</td>';
                        tabla_libros += '<td>'+libros[index].titulo_libro+'</td>';
                        tabla_libros += '<td>'+libros[index].autor_libro+'</td>';
                        tabla_libros += '<td>'+libros[index].tema_libro+'</td>';
                        tabla_libros += '<td>'+libros[index].ubicacion+'</td>';
                        tabla_libros += '<td>'+libros[index].existencia+'</td>';
                        tabla_libros += '<td><button type="button" class="btn btn-sm btn-link" data-toggle="modal" data-target="#exampleModalCenter" onclick="LibroVer('+index+');">Prestar</button>';
                        tabla_libros += '</tr>';
                    }
                }else if(select == '4'){
                    if(libros[index].ubicacion.toLowerCase() == busqueda){
                        tabla_libros += '<tr>';
                        tabla_libros += '<td>'+(index+1)+'</td>';
                        tabla_libros += '<td>'+libros[index].titulo_libro+'</td>';
                        tabla_libros += '<td>'+libros[index].autor_libro+'</td>';
                        tabla_libros += '<td>'+libros[index].tema_libro+'</td>';
                        tabla_libros += '<td>'+libros[index].ubicacion+'</td>';
                        tabla_libros += '<td>'+libros[index].existencia+'</td>';
                        tabla_libros += '<td><button type="button" class="btn btn-sm btn-link" data-toggle="modal" data-target="#exampleModalCenter" onclick="LibroVer('+index+');">Prestar</button>';
                        tabla_libros += '</tr>';
                    }
                }
            });
            $('#tbl_libros').html(tabla_libros);
        }else{
            tabla_libros = "";
            $.each(libros, function(index, value){
                tabla_libros += '<tr>';
                tabla_libros += '<td>'+(index+1)+'</td>';
                tabla_libros += '<td>'+libros[index].titulo_libro+'</td>';
                tabla_libros += '<td>'+libros[index].autor_libro+'</td>';
                tabla_libros += '<td>'+libros[index].tema_libro+'</td>';
                tabla_libros += '<td>'+libros[index].ubicacion+'</td>';
                tabla_libros += '<td>'+libros[index].existencia+'</td>';
                tabla_libros += '<td><button type="button" class="btn btn-sm btn-link" data-toggle="modal" data-target="#exampleModalCenter" onclick="LibroVer('+index+');">Prestar</button>';
                tabla_libros += '</tr>';
            });
            $('#tbl_libros').html(tabla_libros);

        }     
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
    //FUNCION PARA PRESTAR UN LIBRO//
    function LibrosPrestar(_index){
        var usuario = localStorage.getItem('usuario_activo');
        var token = (Math.random().toString(34).substr(2))+(Math.random().toString(36).substr(2));
    }
    //FUNCION PARA Ver UN SOLO LIBRO//
    function LibroVer(_index){
        var fecha_prestamo = new Date();
        var botones_modal = "";
        var prestar_libro = "";
            prestar_libro += '<tr>';
            prestar_libro += '<td>Libro</td>';
            prestar_libro += '<td>'+libros[_index].titulo_libro+'</td>';
            prestar_libro += '</tr>';
            prestar_libro += '<tr>';
            prestar_libro += '<td>Autor</td>';
            prestar_libro += '<td>'+libros[_index].autor_libro+'</td>';
            prestar_libro += '</tr>';
            prestar_libro += '<tr>';
            prestar_libro += '<td>Tema</td>';
            prestar_libro += '<td>'+libros[_index].tema_libro+'</td>';
            prestar_libro += '</tr>';
            prestar_libro += '<tr>';
            prestar_libro += '<td>Ubicacion</td>';
            prestar_libro += '<td>'+libros[_index].ubicacion+'</td>';
            prestar_libro += '</tr>';
            prestar_libro += '<tr>';
            prestar_libro += '<td>Disponible</td>';
            prestar_libro += '<td>'+libros[_index].existencia+'</td>';
            prestar_libro += '</tr>';
            prestar_libro += '<tr>';
            prestar_libro += '<td>Fecha de prestamo</td>';
            prestar_libro += '<td>'+fecha_prestamo.getDate()+'/'+(fecha_prestamo.getMonth()+1)+'/'+fecha_prestamo.getUTCFullYear()+'</td>';
            prestar_libro += '</tr>';
            prestar_libro += '<tr>';
            prestar_libro += '<td>Fecha de devolucion</td>';
            prestar_libro += '<td>'+(fecha_prestamo.getDate()+8)+'/'+(fecha_prestamo.getMonth()+1)+'/'+fecha_prestamo.getUTCFullYear()+'</td>';
            prestar_libro += '</tr>';
            botones_modal += '<button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Regresar</button>';
            botones_modal += '<button type="button" class="btn btn-outline-success" onclick="LibrosPrestar('+_index+');">Prestar</button>';
            $('#tbl_prestar_libro').html(prestar_libro);
            $('#modal_footer').html(botones_modal);
    }
    
}else{
    document.location.href =  'index.html';
}