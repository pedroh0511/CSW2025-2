function calcularTemperatura() {
    try {
        const valorStr = document.getElementById("valor01").value;
        const unidadeorigem = document.getElementById("unidade01").value;
        const unidadedestino = document.getElementById("unidade02").value;

        if (valorStr.trim() === "") {
            throw new Error("Digite um valor para converter.");
        }

        const valor = parseFloat(valorStr);

        if (isNaN(valor)) {
            throw new Error("O valor informado não é um número válido.");
        }

        if (unidadeorigem === unidadedestino) {
            throw new Error("Escolha unidades diferentes para converter.");
        }

        let resultado;

        if (unidadeorigem === "Celsius" && unidadedestino === "Fahrenheit") {
            resultado = (valor * 1.8) + 32;
        }
        else if (unidadeorigem === "Celsius" && unidadedestino === "Kelvin") {
            resultado = valor + 273.15;
        }
        else if (unidadeorigem === "Fahrenheit" && unidadedestino === "Celsius") {
            resultado = (valor - 32) / 1.8;
        }
        else if (unidadeorigem === "Fahrenheit" && unidadedestino === "Kelvin") {
            resultado = ((valor - 32) * 5 / 9) + 273.15;
        }
        else if (unidadeorigem === "Kelvin" && unidadedestino === "Celsius") {
            resultado = valor - 273.15;
        }
        else if (unidadeorigem === "Kelvin" && unidadedestino === "Fahrenheit") {
            resultado = ((valor - 273.15) * 1.8) + 32;
        }
        else {
            throw new Error("Conversão desconhecida.");
        }

        document.getElementById("resultado").textContent = resultado.toFixed(2);
        window.alert(`Resultado: ${resultado.toFixed(2)}`);

    } catch (erro) {
        window.alert(erro.message);
        document.getElementById("resultado").textContent = "";
    }
}