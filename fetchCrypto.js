const axios = require('axios');
let crypto = [];

exports.pushUpdates = async () => {
    crypto = [];
    await axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,DOGE&tsyms=USD,GBP,EUR', {
        header: {
            Apikey: '9afcd29a4fca111df75fcbb216f9b41cb9eb401fc7d17197c8a6a68b762b024f'
        }
    }).then(res => {
        crypto.push(res.data);
    });
    console.log(`BTC: $${crypto[0].RAW.BTC.USD.PRICE}, ETH: $${crypto[0].RAW.ETH.USD.PRICE}, DOGE: $${crypto[0].RAW.DOGE.USD.PRICE}`);
    return crypto[0];
}
