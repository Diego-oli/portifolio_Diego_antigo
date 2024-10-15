import { buscarCarotes } from "../../../services/formacao/cartoes_services.js";
import { excluirCartoes } from "../../../services/formacao/cartoes_services.js";
import { mostraTelaCad } from "../../../controller/formacao/telacad.js";
import { mostraTelaAtt } from "../../../controller/formacao/telaatt.js";

const sectionCartoes = document.getElementById("card-container");
const cards = [];
let editingCardIndex = null;

window.onload = async () => {
  await renderCards();
};

function showForm() {
  document.getElementById('cadastro-form').style.display = 'flex';
  document.getElementById('submit-card').style.display = 'block';
  document.getElementById('update-card').style.display = 'none';
}

function addNewCard() {
  const title = document.getElementById('card-title').value.trim();
  const number = document.getElementById('card-number').value.trim();
  const image = document.getElementById('card-image').value.trim();

  if (!title || !number || !image) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  const newCard = {
    title: title,
    number: number,
    image: image || 'https://via.placeholder.com/100x100.png?text=Novo+Cartão'
  };

  cards.push(newCard);
  renderCards();

  document.getElementById('card-title').value = '';
  document.getElementById('card-number').value = '';
  document.getElementById('card-image').value = '';
  document.getElementById('cadastro-form').style.display = 'none';
}

function updateCard() {
  const title = document.getElementById('card-title').value.trim();
  const number = document.getElementById('card-number').value.trim();
  const image = document.getElementById('card-image').value.trim();

  if (!title || !number || !image) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  cards[editingCardIndex] = {
    title: title,
    number: number,
    image: image
  };

  renderCards();

  document.getElementById('card-title').value = '';
  document.getElementById('card-number').value = '';
  document.getElementById('card-image').value = '';
  document.getElementById('cadastro-form').style.display = 'none';
  editingCardIndex = null;
}

document.getElementById('cadastrar-btn').addEventListener('click', showForm);
document.getElementById('submit-card').addEventListener('click', addNewCard);
document.getElementById('update-card').addEventListener('click', updateCard);
