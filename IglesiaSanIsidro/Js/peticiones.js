document.addEventListener("DOMContentLoaded", function(){
    const btnpeticion = document.getElementById('btnpeticion');
    const modalPeticion = document.getElementById('bg-modal');
    const btnCancelarPeticion = document.getElementById('btncancelarpeticion');
    
    btnpeticion.onclick = function(){
        modalPeticion.style.display = "block";
    }

    btnCancelarPeticion.onclick = function(){
        modalPeticion.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modalPeticion) {
          modalPeticion.style.display = "none";
        }
    }

});