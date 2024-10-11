// import { fetchCards } from "./../cartoes/buscarcartoes.js";
// const sectionCartoes = document.getElementById("cards");
// const cards = [];

// window.onload = async () => {
//   await fetchCards(); 
// };

// function showForm() {
//   document.getElementById('cadastro-form').style.display = 'flex';
// }

// function addNewCard() {
//   const title = document.getElementById('card-title').value.trim();

//   if (!title) {
//     alert('Por favor, insira um título para o cartão.');
//     return;
//   }

//   const newCard = {
//     title: title,
//     value: 'R$ 0,00',
//     image: 'https://via.placeholder.com/100x100.png?text=Novo+Cartão'
//   };

//   cards.push(newCard);
//   renderCards(); 

//   document.getElementById('card-title').value = '';
//   document.getElementById('cadastro-form').style.display = 'none';
// }

// document.getElementById('cadastrar-btn').addEventListener('click', showForm);
// document.getElementById('submit-card').addEventListener('click', addNewCard);

import { renderCards } from './criarcartoes.js';

document.addEventListener('DOMContentLoaded', () => {
  renderCards();
});
