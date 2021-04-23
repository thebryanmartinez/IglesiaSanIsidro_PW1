document.addEventListener("DOMContentLoaded", function(){


    var nombre = document.getElementById('nombre');
    var correo = document.getElementById('correo');
    var telefono = document.getElementById('telefono');
    var mensaje = document.getElementById('mensaje');
    var form = document.getElementById('form');
    var masculino = document.getElementById('masculino');
    var femenino = document.getElementById('femenino');
    var mensaje = document.getElementById('mensaje');

    var error_nombre = document.getElementById('error_nombre');
    var error_correo = document.getElementById('error_correo');
    var error_telefono = document.getElementById('error_telefono');
    var error_genero = document.getElementById('error_genero');
    var error_mensaje = document.getElementById('error_mensaje');

    

    nombre.addEventListener("blur", function(e){

        var validar = /^(?![ .]+$)[a-zA-Z .]*$/gm;
        var currentvalue = e.target.value;
        var error = validar.test(currentvalue);

        if(error)
        {
            error_nombre.style.display = 'none';
        }
        else
        {
            error_nombre.style.display = 'block';
        }
        if(currentvalue==='')
        {
            error_nombre.style.display = 'block';
        }

    });


    correo.addEventListener("blur", function(e){

        var validar = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var currentvalue = e.target.value;
        var error = validar.test(currentvalue);

        if(error)
        {
            error_correo.style.display = 'none';
        }
        else
        {
            error_correo.style.display = 'block';
        }
        if(currentvalue==='')
        {
            error_correo.style.display = 'block';
        }

    });    


    telefono.addEventListener("blur", function(e){

        var validar = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
        var currentvalue = e.target.value;
        var error = validar.test(currentvalue);

        if(error)
        {
            error_telefono.style.display = 'none';
        }
        else
        {
            error_telefono.style.display = 'block';
        }
        if(currentvalue==='')
        {
            error_telefono.style.display = 'block';
        }

    });


    masculino.addEventListener("blur", function(e){

        if(document.getElementById('masculino').checked)
        {
            error_genero.style.display = 'none';
        }

    });


    femenino.addEventListener("blur", function(e){

        if(document.getElementById('femenino').checked)
        {
            error_genero.style.display = 'none';
        }

    });


    mensaje.addEventListener("blur", function(e){

        var currentvalue = e.target.value;

        if(currentvalue==='')
        {
            error_mensaje.style.display = 'block';
        }
        else
        {
            error_mensaje.style.display = 'none';
        }

    });


    
    form.addEventListener('submit', (e) =>{

        if((!document.getElementById('masculino').checked) && (!document.getElementById('femenino').checked))
        {
            e.preventDefault();
            error_genero.style.display = 'block';
        }
        else
        {
            error_genero.style.display = 'none';
        }


        if(nombre.value==='')
        {
            e.preventDefault();
            error_nombre.style.display = 'block';
        }

        if(correo.value==='')
        {
            e.preventDefault();
            error_correo.style.display = 'block';
        }

        if(telefono.value==='')
        {
            e.preventDefault();
            error_telefono.style.display = 'block';
        }

        if(mensaje.value==='')
        {
            e.preventDefault();
            error_mensaje.style.display = 'block';
        }

    });
    

});
