const sectionCartoes = document.getElementById("cards");
const cards = [];

async function fetchCards() {
  try {
    const response = await fetch("http://localhost:3000/cards");
    const data = await response.json();
    const cartoes = data.cartoes;

   
    sectionCartoes.innerHTML = '';

    for (let i = 0; i < cartoes.length; i++) {
      let cartao = document.createElement("div");
      cartao.className = "cartao";

      let h1 = document.createElement("h1");
      h1.textContent = cartoes[i].nome;

      let h3 = document.createElement("h3");
      h3.textContent = cartoes[i].valor;

      let p = document.createElement('p');
      p.textContent = "Sobre: " + cartoes[i].sobre; 

      let imgTag = document.createElement("img");
      imgTag.src = cartoes[i].imagem; 

      cartao.appendChild(h1);
      cartao.appendChild(h3);
      cartao.appendChild(p);
      cartao.appendChild(imgTag);
      sectionCartoes.appendChild(cartao);
    }
  } catch (error) {
    console.error("Erro ao buscar os cartões:", error);
  }
}

function renderCards() {
  const container = document.getElementById('card-container');
  container.innerHTML = '';

  cards.forEach((cardData) => {
    const card = document.createElement('div');
    card.className = 'card';

    const cardImage = document.createElement('img');
    cardImage.src = cardData.image;

    const cardTitleElement = document.createElement('div');
    cardTitleElement.className = 'card-title';
    cardTitleElement.textContent = cardData.title;

    const cardValueElement = document.createElement('div');
    cardValueElement.className = 'card-value';
    cardValueElement.textContent = cardData.value;

    card.appendChild(cardImage);
    card.appendChild(cardTitleElement);
    card.appendChild(cardValueElement);
    container.appendChild(card);
  });
}

window.onload = fetchCards;

function showForm() {
  document.getElementById('cadastro-form').style.display = 'flex';
}

function addNewCard() {
  const title = document.getElementById('card-title').value.trim();

  if (!title) {
    alert('Por favor, insira um título para o cartão.');
    return;
  }

  const newCard = {
    title: title,
    value: 'R$ 0,00',
    image: 'https://via.placeholder.com/100x100.png?text=Novo+Cartão' 
  };

  cards.push(newCard);
  renderCards();

  document.getElementById('card-title').value = '';
  document.getElementById('cadastro-form').style.display = 'none';
}

document.getElementById('cadastrar-btn').addEventListener('click', showForm);
document.getElementById('submit-card').addEventListener('click', addNewCard);
