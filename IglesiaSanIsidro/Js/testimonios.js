document.addEventListener("DOMContentLoaded", function(){
    const btntestimonio = document.getElementById('btntestimonio');
    const modalTestimonio = document.getElementById('bg-modal-testimonio');    
    const nombreRegex = /^(?![\s.]+$)[a-zA-Z\s.]*$/; 
    const emailRegex = 	/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    var nombre = document.getElementById('txtNombres');   
    var email = document.getElementById('txtEmails'); 
    var mensaje = document.getElementById('txtTestimonios');
    var nombreError = document.getElementById('txtNombreError');
    var emailError = document.getElementById('txtEmailError');         
    var mensajeError = document.getElementById('txtTestimonioError');

    var existenErrores = false;    

    btntestimonio.onclick = function(){
        modalTestimonio.style.display = "block";
    }

    window.onclick = function(event) {
        if (event.target == modalTestimonio) {
            modalTestimonio.style.display = "none";                
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
            mensajeError.innerHTML = "El testimonio no puede estar vacio";
        } 
        else{
            mensajeError.innerHTML = '';
        }
    });
});