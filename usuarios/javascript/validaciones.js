function Validaciones(event, tipo) {
    
    var tecla = (document.all)?event.keyCode:event.which;
    
    switch(tipo){
        case 0: // Aceptacion de solo letras
            if(tecla == 8 || tecla == 32){
                return true;
            }else{
                var patron = /^[A-Za-z]+$/;
            }
            break;
        case 1: // Aceptacion de solo numeros
            if(tecla == 8){
                return true;
            }else{
                var patron = /[0-9]/;
            }
            break;
        case 3: // Aceptacion de fecha
            if(tecla == 8 || tecla == 47){
                return true;
            }else{
                var patron = /[0-9]/;
            }
    }
    var tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}
