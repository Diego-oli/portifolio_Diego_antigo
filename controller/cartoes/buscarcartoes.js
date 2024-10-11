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
    const response = await fetch(`http://localhost:3000/cards/${index}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      console.log('Cartão excluído com sucesso');
    } else {
      throw new Error(`Erro ao excluir cartão: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Erro ao excluir cartão:', error);
  }
}
