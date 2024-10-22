const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value) || 0;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    currencyValueConverted.innerHTML = '';

    const exchangeRates = {
        dolar: 5.2,
        euro: 6.2
    };


    if (exchangeRates[currencySelect.value]) {
        const convertedValue = inputCurrencyValue / exchangeRates[currencySelect.value];
        const currency = currencySelect.value === "dolar" ? "USD" : "EUR"; // Corrige a moeda
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: currency
        }).format(convertedValue);
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-img");


    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar americano";
        currencyImage.src = './assets/dolar.png';
    } else if (currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = './assets/euro.png';
    }

    console.log("Moeda trocada para: " + currencySelect.value);

    convertValues();
}


currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
