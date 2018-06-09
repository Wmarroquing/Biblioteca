//VERIFICAR SI EL USUARIO ESTA O NO LOGEADO//
var sesion = (localStorage.getItem('usuario') != null)?localStorage.getItem('usuario'):"";
var login = (sesion == "")?false:true;

if (login == true) {
    //OBTENER LA FECHA ACTUAL Y COLOCARLA EN EL TEXTBOT FECHA//
    var fecha_actual = new Date();
    $('#txt_fecha_autor').val(fecha_actual.getDate()+'/'+(fecha_actual.getMonth()+1)+'/'+fecha_actual.getFullYear());
    // FUNCION PARA VISUALIZAR TODOS LOS PAISES //   
    var paises = ["Afganistán", "Akrotiri", "Albania", "Alemania", "Andorra", "Angola", "Anguila", "Antártida", "Antigua y Barbuda", "Antillas Neerlandesas", "Arabia Saudí", "Arctic Ocean", "Argelia", "Argentina", "Armenia", "Aruba", "Ashmore andCartier Islands", "Atlantic Ocean", "Australia", "Austria", "Azerbaiyán", "Bahamas", "Bahráin", "Bangladesh", "Barbados", "Bélgica", "Belice", "Benín", "Bermudas", "Bielorrusia", "Birmania Myanmar", "Bolivia", "Bosnia y Hercegovina", "Botsuana", "Brasil", "Brunéi", "Bulgaria", "Burkina Faso", "Burundi", "Bután", "Cabo Verde", "Camboya", "Camerún", "Canadá", "Chad", "Chile", "China", "Chipre", "Clipperton Island", "Colombia", "Comoras", "Congo", "Coral Sea Islands", "Corea del Norte", "Corea del Sur", "Costa de Marfil", "Costa Rica", "Croacia", "Cuba", "Dhekelia", "Dinamarca", "Dominica", "Ecuador", "Egipto", "El Salvador", "El Vaticano", "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia", "Eslovenia", "España", "Estados Unidos", "Estonia", "Etiopía", "Filipinas", "Finlandia", "Fiyi", "Francia", "Gabón", "Gambia", "Gaza Strip", "Georgia", "Ghana", "Gibraltar", "Granada", "Grecia", "Groenlandia", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Ecuatorial", "Guinea-Bissau", "Guyana", "Haití", "Honduras", "Hong Kong", "Hungría", "India", "Indian Ocean", "Indonesia", "Irán", "Iraq", "Irlanda", "Isla Bouvet", "Isla Christmas", "Isla Norfolk", "Islandia", "Islas Caimán", "Islas Cocos", "Islas Cook", "Islas Feroe", "Islas Georgia del Sur y Sandwich del Sur", "Islas Heard y McDonald", "Islas Malvinas", "Islas Marianas del Norte", "IslasMarshall", "Islas Pitcairn", "Islas Salomón", "Islas Turcas y Caicos", "Islas Vírgenes Americanas", "Islas Vírgenes Británicas", "Israel", "Italia", "Jamaica", "Jan Mayen", "Japón", "Jersey", "Jordania", "Kazajistán", "Kenia", "Kirguizistán", "Kiribati", "Kuwait", "Laos", "Lesoto", "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein", "Lituania", "Luxemburgo", "Macao", "Macedonia", "Madagascar", "Malasia", "Malaui", "Maldivas", "Malí", "Malta", "Man, Isle of", "Marruecos", "Mauricio", "Mauritania", "Mayotte", "México", "Micronesia", "Moldavia", "Mónaco", "Mongolia", "Montserrat", "Mozambique", "Namibia", "Nauru", "Navassa Island", "Nepal", "Nicaragua", "Níger", "Nigeria", "Niue", "Noruega", "Nueva Caledonia", "Nueva Zelanda", "Omán", "Pacific Ocean", "Países Bajos", "Pakistán", "Palaos", "Panamá", "Papúa-Nueva Guinea", "Paracel Islands", "Paraguay", "Perú", "Polinesia Francesa", "Polonia", "Portugal", "Puerto Rico", "Qatar", "Reino Unido", "República Centroafricana", "República Checa", "República Democrática del Congo", "República Dominicana", "Ruanda", "Rumania", "Rusia", "Sáhara Occidental", "Samoa", "Samoa Americana", "San Cristóbal y Nieves", "San Marino", "San Pedro y Miquelón", "San Vicente y las Granadinas", "Santa Helena", "Santa Lucía", "Santo Tomé y Príncipe", "Senegal", "Seychelles", "Sierra Leona", "Singapur", "Siria", "Somalia", "Southern Ocean", "Spratly Islands", "Sri Lanka", "Suazilandia", "Sudáfrica", "Sudán", "Suecia", "Suiza", "Surinam", "Svalbard y Jan Mayen", "Tailandia", "Taiwán", "Tanzania", "Tayikistán", "TerritorioBritánicodel Océano Indico", "Territorios Australes Franceses", "Timor Oriental", "Togo", "Tokelau", "Tonga", "Trinidad y Tobago", "Túnez", "Turkmenistán", "Turquía", "Tuvalu", "Ucrania", "Uganda", "Unión Europea", "Uruguay", "Uzbekistán", "Vanuatu", "Venezuela", "Vietnam", "Wake Island", "Wallis y Futuna", "West Bank", "World", "Yemen", "Yibuti", "Zambia", "Zimbabue"];

    function PaisesVer(){
        var pais_html = "";
        $.each(paises, function(index, valor){
            pais_html += '<option>'+valor+'</option>';
        });
        $('#slc_nacionalidad').html(pais_html);
    }
    PaisesVer();
    
    //VALIDACIONES PARA PODER AGREGAR UN NUEVO AUTOR//
    $('#btn_aceptar_autor').click(function(){
        var nombre_autor = $('#txt_nombre_autor').val();
        var apellido_autor = $('#txt_apellido_autor').val();
        var nacionalidad_autor = $('#slc_nacionalidad').val();
        var genero_autor = $('input:radio[name=genero_autor]:checked').val();
        var fecha_nac_autor = $('#txt_fecha_nac_autor').val();
        var fecha_fall__autor = $('#txt_fecha_fall_autor').val();
        var fecha_ingreso = $('#txt_fecha_autor').val();

        if(nombre_autor == ""){
            alert('Ingresa el nombre del autor');
            $('#txt_nombre_autor').focus();
            return false;
        }
        if(apellido_autor == ""){
            alert('Ingresa el apellido del autor');
            $('#txt_apellido_autor').focus();
            return false;
        }
        if(fecha_nac_autor == ""){
            alert('Ingresa la decha de nacimiento del autor');
            $('#txt_fecha_nac_autor').focus();
            return false;
        }else if(fecha_nac_autor.length != 10){
            alert('Ingresa el formato de fecha dd/mm/aaaa');
            $('#txt_fecha_nac_autor').focus();
            return false;
        }else if(fecha_nac_autor.substring(2,3)!="/" || fecha_nac_autor.substring(5,6)!="/"){
            alert('Debes separar dia/mes/año con /');
            $('#txt_fecha_nac_autor').focus();
            return false;
        }else if(fecha_nac_autor.substring(0,2)>31){
            alert('Ingresa un dia valido');
            $('#txt_fecha_nac_autor').focus();
            return false;
        }else if(fecha_nac_autor.substring(3,5)>12){
            alert('Ingresa un mes valido');
            $('#txt_fecha_nac_autor').focus();
            return false;
        }else if(fecha_nac_autor.substring(6,10)>2018){
            alert('Ingresa un año valido');
            $('#txt_fecha_nac_autor').focus();
            return false;
        }
        
        if(fecha_fall__autor.length > 0){
            
            if(fecha_fall__autor.length != 10){
                alert('Ingresa el formato de fecha dd/mm/aaaa');
                $('#fecha_fall__autor').focus();
                return false;
            }else if(fecha_fall__autor.substring(2,3)!="/" || fecha_fall__autor.substring(5,6)!="/"){
                alert('Debes separar dia/mes/año con /');
                $('#fecha_fall__autor').focus();
                return false;
            }else if(fecha_fall__autor.substring(0,2)>31){
                alert('Ingresa un dia valido');
                $('#fecha_fall__autor').focus();
                return false;
            }else if(fecha_fall__autor.substring(3,5)>12){
                alert('Ingresa un mes valido');
                $('#fecha_fall__autor').focus();
                return false;
            }else if(fecha_fall__autor.substring(6,10)>2018){
                alert('Ingresa un año valido');
                $('#fecha_fall__autor').focus();
                return false;
            }
        }
        

        if(localStorage.getItem('autores')){
            var autores = JSON.parse(localStorage.getItem('autores'));
            var autor_existe = false;
            $.each(autores, function(index, valor){
                if(nombre_autor == autores[index].nombres && apellido_autor == autores[index].apellidos && nacionalidad_autor == autores[index].nacionalidad){
                    autor_existe = true;
                }
            });
            if(autor_existe == true){
                alert('El autor que intentas agragar ya existe');
            }else{
                var autor = {           
                    autor_id: autores.length+1,                        
                    nombres: nombre_autor,                        
                    apellidos: apellido_autor,                        
                    nacionalidad: nacionalidad_autor,                        
                    genero: genero_autor,                        
                    nacimiento: fecha_nac_autor,                        
                    fallecimiento: fecha_fall__autor,
                    fecha_ingreso: fecha_ingreso       
                };
        
                autores.push(autor);
        
                localStorage.setItem('autores', JSON.stringify(autores));
        
                alert('Autor Registrado!');
                $('#txt_nombre_autor').focus();
                $('#txt_nombre_autor').val('');
                $('#txt_apellido_autor').val('');
                $('#txt_fecha_nac_autor').val('');
                $('#txt_fecha_fall_autor').val('');
            }
        }else{
            var autores = new Array();

            var autor = {           
                autor_id: autores.length+1,                        
                nombres: nombre_autor,                        
                apellidos: apellido_autor,                        
                nacionalidad: nacionalidad_autor,                        
                genero: genero_autor,                        
                nacimiento:fecha_nac_autor,                        
                fallecimiento: fecha_fall__autor,
                fecha_ingreso: fecha_ingreso   
            };
    
            autores.push(autor);
    
            localStorage.setItem('autores', JSON.stringify(autores));
    
            alert('Autor Registrado!');
            $('#txt_nombre_autor').focus();
            $('#txt_nombre_autor').val('');
            $('#txt_apellido_autor').val('');
            $('#txt_fecha_nac_autor').val('');
            $('#txt_fecha_fall_autor').val('');
        }
    });
    
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

