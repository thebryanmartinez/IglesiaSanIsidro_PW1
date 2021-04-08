document.addEventListener("DOMContentLoaded", function(){
    const btnpeticion = document.getElementById('btnpeticion');
    const modalPeticion = document.getElementById('bg-modal');
    
    btnpeticion.addEventListener('click', () => {
        modalPeticion.classList.add('show');
    })
});