const formulario = document.getElementById("formulario");

const campoA = document.getElementById('numeroA');
const campoB = document.getElementById('numeroB');


formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);

    if (valorB > valorA) {
        alert('O número do Campo B é maior que o do Campo A. Formulário enviado com sucesso!')
    } else {
        alert('O número do Campo B precisa ser maior que o número do Campo A.');
    }
});




