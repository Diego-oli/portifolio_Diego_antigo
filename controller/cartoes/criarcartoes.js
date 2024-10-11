import { fetchCards } from "./../cartoes/buscarcartoes.js";

export async function renderCards() {
  let sectionCartoes = document.getElementById("card-container");
  sectionCartoes.innerHTML = ''; 

  const cards = await fetchCards();

  cards.forEach((cardData, index) => {
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

    const button = document.createElement('button');
    button.textContent = 'Excluir';
    
    button.addEventListener('click', async () => {
      await excluir(index); 
      await renderCards(); 
    });

    card.appendChild(cardImage);
    card.appendChild(cardTitleElement);
    card.appendChild(cardValueElement);
    card.appendChild(button);

    sectionCartoes.appendChild(card);
  });
}
