async function fetchCards() {
    const response = await fetch('/cards');
    const data = await response.json();
    renderCards(data);
}

function renderCards(cards) {
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

function showForm() {
    document.getElementById('cadastro-form').style.display = 'flex';
}

async function addNewCard() {
    const title = document.getElementById('card-title').value.trim();
    const value = 'R$ 0,00'; // Valor padrão
    const image = 'https://via.placeholder.com/100x100.png?text=Novo+Cartão'; // Imagem padrão

    if (!title) {
        alert('Por favor, insira um título para o cartão.');
        return;
    }

    const newCard = { title, value, image };

    const response = await fetch('/cards', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCard),
    });

    if (response.ok) {
        fetchCards(); // Atualiza os cartões exibidos
        document.getElementById('card-title').value = '';
        document.getElementById('cadastro-form').style.display = 'none';
    } else {
        alert('Erro ao adicionar o cartão.');
    }
}

document.getElementById('cadastrar-btn').addEventListener('click', showForm);
document.getElementById('submit-card').addEventListener('click', addNewCard);

// Carrega os cartões ao abrir a página
fetchCards();
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve arquivos estáticos

let cards = [
    // Os 20 cartões que você já forneceu
];

// Rota para obter todos os cartões
app.get('/cards', (req, res) => {
    res.json(cards);
});

// Rota para adicionar um novo cartão
app.post('/cards', (req, res) => {
    const { title, value, image } = req.body;
    if (!title || !value || !image) {
        return res.status(400).send('Dados incompletos.');
    }
    const newCard = { title, value, image };
    cards.push(newCard);
    res.status(201).json(newCard);
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
