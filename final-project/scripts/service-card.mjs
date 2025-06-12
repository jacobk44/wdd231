
export async function getServiceData() {
    const respond = await fetch("data/service-card.json");
    const data = await respond.json();
    displayService(data.services);
}


function displayService(services){
    const Servicecards = document.querySelector(".services-cards");

    services.forEach((service) => {
        const serviceCard = document.createElement("section");

        const title = document.createElement("h2");
        title.textContent = service.name;


        const middle = document.createElement("div");
        middle.classList.add("card-body");

        const portrait = document.createElement("img");
        portrait.setAttribute('src', service.image);
        portrait.setAttribute('alt', `Portrait of ${service.name}`);
        portrait.setAttribute('loading', 'lazy');

        const textDiv = document.createElement("div");
        textDiv.classList.add("card-text");

        const desc = document.createElement("p");
        desc.textContent = service.description;

        serviceCard.append(title);
        serviceCard.append(portrait);
        serviceCard.append(desc);

        Servicecards.append(serviceCard)
    })
}