 function createCards(num) {
    const container = document.getElementById('card-container');
    for (let i = 1; i <= num; i++) {
      const card = document.createElement('div');
      card.className = 'card';
      card.textContent = `Cartão ${i}`;
      container.appendChild(card);
    }
  }

  createCards(20);

  document.getElementById('cadastrar-btn').addEventListener('click', function() {
    document.getElementById('cadastro-form').style.display = 'flex';
  });

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

    document.getElementById('card-title').value = '';
    document.getElementById('cadastro-form').style.display = 'none';
  });
