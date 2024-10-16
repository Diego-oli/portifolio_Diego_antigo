import { fetchCards, excluir } from './buscarcartoes.js';

let editingCardIndex = null;  
let cards = [];  

export async function renderCards() {
  let sectionCartoes = document.getElementById("card-container");
  sectionCartoes.innerHTML = '';

  cards = await fetchCards();  

  cards.forEach((cardData, index) => {
    const card = document.createElement('div');
    card.className = 'card';

    const cardImage = document.createElement('img');
    cardImage.src = cardData.image;

    const cardTitleElement = document.createElement('div');
    cardTitleElement.className = 'card-title';
    cardTitleElement.textContent = cardData.title;

    const cardNumberElement = document.createElement('div');
    cardNumberElement.className = 'card-number';
    cardNumberElement.textContent = `Número: ${cardData.number}`;

    const buttonExcluir = document.createElement('button');
    buttonExcluir.textContent = 'Excluir';
    buttonExcluir.addEventListener('click', async () => {
      await excluir(index);
      await renderCards();  
    });

    const buttonEditar = document.createElement('button');
    buttonEditar.textContent = 'Editar';
    buttonEditar.addEventListener('click', () => {
      editCard(cardData, index);  
    });

    card.appendChild(cardImage);
    card.appendChild(cardTitleElement);
    card.appendChild(cardNumberElement);
    card.appendChild(buttonExcluir);
    card.appendChild(buttonEditar);

    sectionCartoes.appendChild(card);
  });
}

function editCard(cardData, index) {
  document.getElementById('card-title').value = cardData.title;
  document.getElementById('card-number').value = cardData.number;
  document.getElementById('card-image').value = cardData.image;

  document.getElementById('cadastro-form').style.display = 'flex';
  document.getElementById('submit-card').style.display = 'none';
  document.getElementById('update-card').style.display = 'block';

  editingCardIndex = index;  
}
