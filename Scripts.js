console.log("js loaded");
let convertBtn = document.getElementById("convert");
let mainLink = document.getElementById("main-link");
let result = document.getElementById("result");
let resultContainer = document.getElementById("result-container");
let url = "";
let id = "";
let main = "";
mainLink.oninput = (e) => {
    url = e.target.value;
    id = url.slice(32, 65);
};
convertBtn.onclick = async (e) => {
    e.preventDefault();

    main = `https://drive.google.com/u/0/uc?id=${id}&export=download`;
    resultContainer.innerHTML = `<h3 id="result">${main}</h3>
    <button id="copy">Copy</button>`


    document.getElementById("copy").onclick = async () => {
        try {

            await navigator.clipboard.writeText(main);
        } catch (err) {
            console.log(err);
        }
    };
};
console.log(main);