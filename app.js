let allCrypto = [];

const fetchCrypto = async () => {
    const res = await fetch("https://api.coincap.io/v2/assets");
    let allCrypto = await res.json();
    allCrypto.data.forEach(crypto => {
        console.log(crypto.priceUsd);
        const div = document.createElement("div");
        const topDiv = document.createElement("div");
        const imgDiv = document.createElement("div");
        const nameDiv = document.createElement("div");
        const subNameOne = document.createElement("div");
        const subNameTwo = document.createElement("div");
        const priceDiv = document.createElement("div");
        const priceSumDiv = document.createElement("div");
        const priceChangeDiv = document.createElement("div");
        const img = `<img title="${crypto.name}" src="https://assets.coincap.io/assets/icons/${crypto.symbol.toLowerCase()}@2x.png">`;

        div.className = "crypto-div";
        topDiv.className = "crypto-div-top";
        nameDiv.className = "crypto-div-top-names";
        subNameOne.className = "full-name";
        subNameTwo.className = "short-name";
        priceDiv.className = "price";

        imgDiv.innerHTML = img;
        subNameOne.textContent = crypto.name;
        subNameTwo.textContent = crypto.symbol;
        
        const fetchPrice = () => {
            priceSumDiv.textContent = (Math.round(crypto.priceUsd * 100) / 100).toFixed(2);
        }
        fetchPrice();
        setInterval(fetchPrice, 10000);

        nameDiv.appendChild(subNameOne);
        nameDiv.appendChild(subNameTwo);
        topDiv.appendChild(imgDiv);
        topDiv.appendChild(nameDiv);
        priceDiv.appendChild(priceSumDiv);
        priceDiv.appendChild(priceChangeDiv);

        div.appendChild(topDiv);
        div.appendChild(priceDiv);
        container.appendChild(div);
    })
}

const container = document.querySelector("#container");


fetchCrypto();
setInterval(fetchCrypto, 10000);