console.log("js loaded");
let convertBtn = document.getElementById("convert");
let mainLink = document.getElementById("main-link");
let result = document.getElementById("result");
let copy = document.getElementById("copy");
let resultContainer = document.getElementById("result-container");
let url = "";
let id = "";
let main = "";
mainLink.oninput = (e) => {
    url = e.target.value;
    id = url.slice(32, 65);
};
convertBtn.onclick = (e) => {
    e.preventDefault();
    main = `https://drive.google.com/u/0/uc?id=${id}&export=download`;
    result.innerText = main;
    console.log(main);
};
copy.onclick = async () => {
    try {
        await navigator.clipboard.writeText(main);
    } catch (err) {
        console.log(err);
    }
};