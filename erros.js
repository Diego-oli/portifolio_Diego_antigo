document.getElementById("cardForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const title = document.getElementById("cardTitle").value.trim();
    const value = document.getElementById("cardValue").value.trim();
    const image = document.getElementById("cardImage").value.trim();

    const titleError = document.getElementById("titleError");
    const valueError = document.getElementById("valueError");
    const imageError = document.getElementById("imageError");

    titleError.style.display = "none";
    valueError.style.display = "none";
    imageError.style.display = "none";

    let hasError = false;

    if (title === "") {
        titleError.textContent = "O título é obrigatório.";
        titleError.style.display = "block";
        hasError = true;
    }

    if (value === "" || isNaN(value) || value <= 0) {
        valueError.textContent = "Insira um valor válido.";
        valueError.style.display = "block";
        hasError = true;
    }

    if (image === "" || !isValidURL(image)) {
        imageError.textContent = "Insira uma URL válida.";
        imageError.style.display = "block";
        hasError = true;
    }

    if (!hasError) {
        alert("Cartão cadastrado com sucesso!");
    }
});

function isValidURL(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}
