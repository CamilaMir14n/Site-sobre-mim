// Função para alternar entre modo claro e escuro
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Verificar preferência do usuário no localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '🌙'; // Lua no modo escuro
} else {
    themeToggle.textContent = '☀️'; // Sol no modo claro
}

// Adicionar evento de clique ao botão
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Atualizar ícone e salvar preferência
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '🌙'; // Mostrar sol quando estiver no modo escuro
        localStorage.setItem('darkMode', 'enabled');
    } else {
        themeToggle.textContent = '☀️'; // Mostrar lua quando estiver no modo claro
        localStorage.setItem('darkMode', 'disabled');
    }
});