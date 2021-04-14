document.addEventListener("DOMContentLoaded", function(){    
    const nombreRegex = /^(?![\s.]+$)[a-zA-Z\s.]*$/;     
    const telefonoRegex = /^[0-9]{8}$/; 
    const emailRegex = 	/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;    
    const montoRegex = /^[0-9]$/;
    const cuentaRegex = /^[0-9]{8,9}$/;

    btnDonar.onclick = function(){
        
        var nombre = document.getElementById('txtNombre').value.trim();
        var telefono = document.getElementById('txtPhone').value.trim();
        var email = document.getElementById('txtEmail').value.trim();
        var monto = document.getElementById('txtDonar').value.trim();
        var cuenta = document.getElementById('txtCuenta').value.trim();        
        
        var nombreError = document.getElementById('txtNombreError');
        var telefonoError = document.getElementById('txtPhoneError');
        var emailError = document.getElementById('txtEmailError');
        var montoError = document.getElementById('txtDonarError');
        var cuentaError = document.getElementById('txtCuentaError');        
        
        nombreError.innerHTML = '';
        telefonoError.innerHTML = '';
        emailError.innerHTML = '';
        montoError.innerHTML = '';
        cuentaError.innerHTML = '';

        var existenErrores = false;

        //Validacion de nombre
        if(nombre === '' || nombre === null){
            nombreError.innerHTML = "El nombre no puede estar vacio";
            existenErrores = true;
        } 
        else if(nombreRegex.test(nombre) === false){
            nombreError.innerHTML = "El nombre esta incorrecto";
            existenErrores = true;
        }
        
        //Validacion telefono
        if(telefonoRegex.test(telefono) === false){
            telefonoError.innerHTML = "El telefono es incorrecto";
            
        }
        if (telefono === '' || telefono === null){
            telefonoError.innerHTML = '';
        }

        //Validacion correo electronico
        if(emailRegex.test(email) === false){
            emailError.innerHTML = "El correo electronico es incorrecto";
        }
        if (email === '' || email === null){
            emailError.innerHTML = '';
        }

        //Validacion monto a donar
        montoEntero = parseInt(monto);
        if(monto === '' || monto === null){
            montoError.innerHTML = "El monto no puede estar vacio";
            existenErrores = true;
        }
        else if(montoRegex.test(monto) === true){
            montoError.innerHTML = "El monto es incorrecto";
            existenErrores = true;
        }
        else if(montoEntero <= 0){
            montoError.innerHTML = "El monto no puede ser menor a 1"
            existenErrores = true;
        }

        //Validacion numero de cuenta
        if(cuenta === '' || cuenta === null){
            cuentaError.innerHTML = "El numero de cuenta no puede estar vacio";
            existenErrores = true;
        }
        else if(cuentaRegex.test(cuenta) === false){
            cuentaError.innerHTML = "El numero de cuenta es incorrecto";
            existenErrores = true;
        }        
        
        if(existenErrores === false){
            alert("Se ha enviado la donacion! Muchisimas gracias por tu aporte!");            
        }
    }
});