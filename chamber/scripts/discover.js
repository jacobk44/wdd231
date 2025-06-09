const discoverCards = document.querySelector("#discover-cards");

async function getDiscoverData() {
  const response = await fetch("data/discover.json");
  const data = await response.json();
  displayData(data.discovers); // assuming the JSON has a "discovers" array
}

getDiscoverData();


const displayData = (discovers) => {
  const discoverCards = document.querySelector("#discover-cards");

  discovers.forEach((discover) => {
    const disCard = document.createElement("section");

    const title = document.createElement("h2");
    title.textContent = discover.name;

    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = discover.image;
    img.alt = discover.name;
    img.width = 150;
    img.height = 100;
    figure.appendChild(img);

    const textDiv = document.createElement("div");
    textDiv.classList.add("card-text");

    const address = document.createElement("address");
    address.textContent = discover.address;

    const desc = document.createElement("p");
    desc.textContent = discover.description;

    textDiv.appendChild(address);
    textDiv.appendChild(desc);

    const button = document.createElement("button");
    button.textContent = "Learn more";

    // Assemble the card
    disCard.appendChild(title);
    disCard.appendChild(figure);
    disCard.appendChild(textDiv);
    disCard.appendChild(button);

    discoverCards.appendChild(disCard);
  });
};
