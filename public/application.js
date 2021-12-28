
let crypto = [];
let newCrypto = [];

const fetchData = async () => {
    const res = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,DOGE,ADA,SOL,DOT&tsyms=USD,GBP,EUR', {
        header: {
            Apikey: '9afcd29a4fca111df75fcbb216f9b41cb9eb401fc7d17197c8a6a68b762b024f'
        }
    });
    crypto = await res.json();
    console.log(crypto);
    Object.entries(crypto.RAW).map(crypto => {
        const cryptoDiv = document.createElement('div');
        cryptoDiv.classList.add('crypto');
        const logo = `<img title="${crypto[1].USD.FROMSYMBOL}" src="https://assets.coincap.io/assets/icons/${crypto[1].USD.FROMSYMBOL.toLowerCase()}@2x.png">`;
        const cryptoLogo = document.createElement('div');
        cryptoLogo.classList.add('crypto-logo');
        cryptoLogo.innerHTML = logo;
        const cryptoInfo = document.createElement('div');
        cryptoInfo.classList.add('crypto-info');
        const cryptoName = document.createElement('div');
        cryptoName.classList.add('crypto-name');
        const cryptoPrice = document.createElement('div');
        cryptoPrice.classList.add('crypto-price');

        cryptoName.innerText = crypto[1].USD.FROMSYMBOL;
        cryptoPrice.innerText = crypto[1].USD.PRICE;

        cryptoDiv.appendChild(cryptoLogo);
        cryptoInfo.appendChild(cryptoName);
        cryptoInfo.appendChild(cryptoPrice);
        cryptoDiv.appendChild(cryptoInfo);
        container.appendChild(cryptoDiv);
    });
}

const container = document.querySelector('#container');

const refreshData = (cryptoData) => {
    const cryptoPrices = Array.from(document.getElementsByClassName('crypto-price'));
    const cryptoNames = Array.from(document.getElementsByClassName('crypto-name'));
    Object.entries(cryptoData.RAW).map(crypto => {
        for (let i = 0; i < cryptoPrices.length; i++) {
            if (cryptoNames[i].innerText === crypto[0]) {
                cryptoPrices[i].innerText = crypto[1].USD.PRICE;
            }
        }
    });
}


fetchData();