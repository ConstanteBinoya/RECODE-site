// Lógica para o btn do modal direcionar para a page cadastro:
document.addEventListener('DOMContentLoaded', function() {
    // Selecione o botão pelo id
    var modalBtn = document.getElementById('modalBtn');
  
    // Adicione um ouvinte de evento de clique
    modalBtn.addEventListener('click', function() {
      // Redirecione o usuário para a página desejada, por exemplo:
      window.location.href = '_html/cadastro.html';
    });
  });
//Fim - Lógica para o btn do modal direcionar para a page cadastro. =================================================================== 

//Lógica para o funcionamento do modal (alerta de cadastro): ========================================================================== 
document.addEventListener('DOMContentLoaded', function () {
    var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {
        keyboard: false
    });
    setTimeout(function () {
        myModal.show();
    }, 2000);
});
//Fim - Lógica para o funcionamento do modal (alerta de cadastro): =================================================================== 

// Lógica para o funcionamento troca de nacionalidade (alternância dos cards promocionais): ===========================================
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona os botões e as divs
    var btnNacional = document.getElementById("btnNacional");
    var btnInternacional = document.getElementById("btnInternacional");
    var destinoNacional = document.getElementById("destinoNaciolnal");
    var destinoInternacional = document.getElementById("destinoInternacional");

    // Adiciona o evento de clique ao botão "Nacional"
    btnNacional.addEventListener("click", function () {
        destinoNacional.style.display = "block";
        destinoInternacional.style.display = "none";
    });

    // Adiciona o evento de clique ao botão "Internacional"
    btnInternacional.addEventListener("click", function () {
        destinoNacional.style.display = "none";
        destinoInternacional.style.display = "block";
    });

    // Por padrão, exibe o conteúdo do botão "Nacional"
    destinoNacional.style.display = "block";
    destinoInternacional.style.display = "none";
});
//Fim -  Lógica para o funcionamento troca de nacionalidade (alternância dos cards promocionais). =====================================

//Lógica para a transição dos botões de nacionalidade: ================================================================================
document.getElementById("btnNacional").classList.add("active"); // Adiciona a classe 'active' ao botão Nacional por padrão

// Adiciona o evento de clique aos botões
document.getElementById("btnNacional").addEventListener("click", function () {
    document.getElementById("btnNacional").classList.add("active");
    document.getElementById("btnInternacional").classList.remove("active");
});

// Adiciona o evento de clique aos botões
document.getElementById("btnInternacional").addEventListener("click", function () {
    document.getElementById("btnInternacional").classList.add("active");
    document.getElementById("btnNacional").classList.remove("active");
});
//Fim - Lógica para a transição dos botões de nacionalidade. ==========================================================================