document.addEventListener("DOMContentLoaded", function() {
    const passos = document.querySelectorAll('.passo');
    const botoes = document.querySelectorAll('.btn-proximo');

    // Mostra o primeiro passo
    passos[0].classList.add('ativo');

    botoes.forEach(botao => {
        botao.addEventListener('click', function() {
            const proximo = this.getAttribute('data-proximo');
            passos.forEach(passo => {
                passo.classList.remove('ativo');
            });
            document.getElementById(`passo-${proximo}`).classList.add('ativo');
        });
    });
});
