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
    resultContainer.innerHTML = `<h3 class="text-light" id="result">${main}</h3>
    <button class="btn btn-success" id="copy">Copy</button>`


    document.getElementById("copy").onclick = async () => {
        try {
            document.getElementById("toast").innerText = "Copied to Clipboard"
            await navigator.clipboard.writeText(main);
            setTimeout(() => {
                document.getElementById("toast").innerText = ""
            }, 1000);
        } catch (err) {
            console.log(err);
        }
    };


};
console.log(main);

