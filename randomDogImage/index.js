const dogApi = "https://dog.ceo/api/breeds/image/random/3";
const display = document.querySelector(".main-display");
const goButton = document.querySelector(".btn");




async function getDogs() {
    display.innerHTML = "";
    const response = await fetch(dogApi);
    const json = await response.json();
    console.log(json.message);

    json.message.forEach(dataImage => {
        const imageElement = document.createElement("img");
        imageElement.src = dataImage;
        imageElement.style.width = "100%";
        imageElement.style.height = "auto";
        display.appendChild(imageElement);
    })
}

goButton.addEventListener("click", getDogs)