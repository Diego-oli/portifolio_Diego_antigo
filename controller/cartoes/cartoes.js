 // Função para criar cartões
 function createCards(num) {
    const container = document.getElementById('card-container');
    for (let i = 1; i <= num; i++) {
      const card = document.createElement('div');
      card.className = 'card';
      card.textContent = `Cartão ${i}`;
      container.appendChild(card);
    }
  }

  // Inicializa a tela com 20 cartões
  createCards(20);

  // Função para mostrar o formulário de cadastro
  document.getElementById('cadastrar-btn').addEventListener('click', function() {
    document.getElementById('cadastro-form').style.display = 'flex';
  });

  // Função para adicionar novo cartão
  document.getElementById('submit-card').addEventListener('click', function() {
    const title = document.getElementById('card-title').value;
    if (title.trim() === '') {
      alert('Por favor, insira um título para o cartão.');
      return;
    }

    const container = document.getElementById('card-container');
    const newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.textContent = title;
    container.appendChild(newCard);

    // Limpar o formulário
    document.getElementById('card-title').value = '';
    document.getElementById('cadastro-form').style.display = 'none';
  });
