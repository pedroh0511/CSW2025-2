function calcularIdade() {
    const nome = document.getElementById("nome01").value;
    const dia = parseInt(document.getElementById("dia01").value);
    const mes = parseInt(document.getElementById("mes01").value);
    const ano = parseInt(document.getElementById("ano01").value);

    if (!nome || !dia || !mes || !ano) {
        alert("Por favor, preencha todos os campos corretamente!");
        return;
    }

    const hoje = new Date();
    let idade = hoje.getFullYear() - ano;
    const mesAtual = hoje.getMonth() + 1;
    const diaAtual = hoje.getDate();

    if (mesAtual < mes || (mesAtual === mes && diaAtual < dia)) {
        idade--;
    }

    window.alert(`${nome}, você tem ${idade} anos.`);
    document.getElementById("resultado").textContent = `${nome}, você tem ${idade} anos.`;
}
