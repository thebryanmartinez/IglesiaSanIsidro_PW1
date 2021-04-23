document.addEventListener("DOMContentLoaded", function(){
    const btnPeticion = document.getElementById('btnpeticion');
    const modalPeticion = document.getElementById('bg-modal-peticion');    
    const nombreRegex = /^(?![\s.]+$)[a-zA-Z\s.]*$/; 
    const emailRegex = 	/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    var nombre = document.getElementById('txtNombre');   
    var email = document.getElementById('txtEmail'); 
    var mensaje = document.getElementById('txtPeticion');
    var nombreError = document.getElementById('txtNombreErrorP');
    var emailError = document.getElementById('txtEmailErrorP');         
    var mensajeError = document.getElementById('txtPeticionError');

    var existenErrores = false;    

    btnPeticion.onclick = function(){
        modalPeticion.style.display = "block";
    }

    window.onclick = function(event) {
        if (event.target == modalPeticion) {
            modalPeticion.style.display = "none";                
        }
    }

    nombre.addEventListener("blur", function(event){  
        nombreValue = nombre.value.trim();
        
        if(nombreValue === '' || nombreValue === null){
            nombreError.innerHTML = "El nombre no puede estar vacio";
            existenErrores = true;
        } 
        else if(nombreRegex.test(nombreValue) === false){
            nombreError.innerHTML = "El nombre esta incorrecto";
        } else{
            nombreError.innerHTML = '';
        }
    });

    email.addEventListener("blur", function(event){  
        emailValue = email.value.trim();
        
        if(emailValue === '' || emailValue === null){
            emailError.innerHTML = "El correo no puede estar vacio";
        } 
        else if(emailRegex.test(emailValue) === false){
            emailError.innerHTML = "El correo esta incorrecto";
        } else{
            emailError.innerHTML = '';
        }
    });

    mensaje.addEventListener("blur", function(event){  
        mensajeValue = mensaje.value.trim();
        
        if(mensajeValue === '' || mensajeValue === null){
            mensajeError.innerHTML = "La peticion no puede estar vacio";
        } 
        else{
            mensajeError.innerHTML = '';
        }
    });
});