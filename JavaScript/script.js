window.addEventListener('DOMContentLoaded', (event) => {
    const emailInput = document.getElementById('email');
    const ingresarButton = document.querySelector('.button1');

    // Función para verificar el campo de correo electrónico y habilitar/deshabilitar el botón de ingresar
    function checkEmailInput() {
        if (emailInput.value.trim() === '') {
            ingresarButton.setAttribute('disabled', 'true');
        } else {
            ingresarButton.removeAttribute('disabled');
        }
    }

    // Verificar el campo de correo electrónico cuando cambia
    emailInput.addEventListener('input', checkEmailInput);

    // Verificar el campo de correo electrónico al cargar la página
    checkEmailInput();
});