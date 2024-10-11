import {renderCards} from './criarcartoes.js';

export async function fetchCards() {
  try {
    const response = await fetch("http://localhost:3000/cards");

    if (!response.ok) {
      throw new Error(`Erro ao buscar os cartões: ${response.statusText}`);
    }

    const data = await response.json();
    return data.cards; 
  } catch (error) {
    console.error("Erro ao buscar os cartões:", error);
    return []; 
  }
}

export async function excluir(index) {
  try {
    const response = await fetch(`http://localhost:3000/cards`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: index}),
    });

      console.log('Cartão excluído com sucesso');
      renderCards();

  } catch (error) {
    console.error('Erro ao excluir cartão:', error);
  }
}
