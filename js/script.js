function calculaPeso() {
    // Pega peso e planeta
    let vplaneta   = parseFloat(document.getElementById('planeta').value);
    let peso       = parseFloat(document.getElementById('peso').value);
    let resultado = 0;

    // Valida se realmente é um valor numérico
    if (isNaN(peso)) {
        return alert('Digite um peso válido.');
    }

    // Calcula o Peso
    if (peso === 0) {
        return alert('Planeta ou peso não podem ser igual a zero (0).');
    }
    resultado = peso/10 * vplaneta;
    console.log(resultado);

    // Add a informação nos campos
    document.getElementById('peso-value').innerHTML = resultado.toFixed(2) + 'kg';
}


function limpar() {
    document.getElementById('planeta').value = '0';
    document.getElementById('peso').value = '';
    document.getElementById('peso-value').innerHTML = '0.00kg'
}