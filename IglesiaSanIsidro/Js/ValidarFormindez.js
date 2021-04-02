document.addEventListener("DOMContentLoaded", function() {

    var emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    var NombreRegex = /^([A-Z\u00C0-\u00D6\u00D8-\u00DE])([a-z\u00DF-\u00F6\u00F8-\u00FF '&-]+) ([A-Za-z\u00C0-\u00D6\u00D8-\u00DE\u00DF-\u00F6\u00F8-\u00FF '&-]+)$/;
    var TelefonoRegex = /^(?:[\+]{1})?(?:\([0-9]{1,2}\) ?)?(?:[0-9] ?-?){6,14}[0-9]$/;



    var formevento = document.getElementById("formevento");
    var txtEmail = document.getElementById("txtEmail");
    var txtEmailError = document.getElementById("txtEmailError");
    var txtNombre = document.getElementById("txtNombre");
    var btnform = document.getElementById("btnEnviarForm");
    var txtTelefono = document.getElementById("txtTelefono");
    var txtEmailHasErrors = true;
    var txtNombreHasErrors = true;
    var txtTelefonoHasErrors = true;

    txtEmail.addEventListener("blur", function(e) {
        var value = e.target.value;
        if (!emailRegex.test(value)) {
            txtEmail.classList.add("error");
            txtEmailError.classList.remove("hidden");
            txtEmailError.innerHTML = "Debe ingresar un correo electrónico válido";
            txtEmailHasErrors = true;
        } else {
            txtEmail.classList.remove("error");
            txtEmailError.classList.add("hidden");
            txtEmailError.innerHTML = "";
            txtEmailHasErrors = false;
        }
        enableBtn();
    });

    txtTelefono.addEventListener("blur", function(e) {
        var value = e.target.value;
        if (!TelefonoRegex.test(value)) {
            txtTelefono.classList.add("error");
            txtTelefonoError.classList.remove("hidden");
            txtTelefonoError.innerHTML = "Debe ingresar un Telefono válido";
            txtTelefonoHasErrors = true;
        } else {
            txtTelefono.classList.remove("error");
            txtTelefonoError.classList.add("hidden");
            txtTelefonoError.innerHTML = "";
            txtTelefonoHasErrors = false;
        }
        enableBtn();
    });

    txtNombre.addEventListener("blur", function(e) {
        var value = e.target.value;
        if (!NombreRegex.test(value)) {
            txtNombre.classList.add("error");
            txtNombreError.classList.remove("hidden");
            txtNombreError.innerHTML = "Debe ingresar un Nombre válido";
            txtNombreHasErrors = true;
        } else {
            txtNombre.classList.remove("error");
            txtNombreError.classList.add("hidden");
            txtNombreError.innerHTML = "";
            txtNombreHasErrors = false;
        }
        enableBtn();
    });

    btnform.addEventListener("click", function(e) {

        alert("Sus datos se han resivido, este atento al correo o a una llamada");


    });

    function enableBtn() {
        if (txtEmailHasErrors || txtNombreHasErrors || txtTelefonoHasErrors) {
            btnform.setAttribute("disabled", "true");
        } else {
            btnform.removeAttribute("disabled");
        }

    }

});