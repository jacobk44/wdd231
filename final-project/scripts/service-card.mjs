
export async function getServiceData() {
    try {
        const respond = await fetch("data/service-card.json");
        const data = await respond.json();
        displayService(data.services);
    } catch (error) {
        console.error("Failed to load service data:", error);
    }
}


function displayService(services) {
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

        const button = document.createElement("button");
        button.textContent = "read more";
        button.addEventListener("click", () => displayDetails(service));


        const desc = document.createElement("p");
        desc.textContent = service.description;

        serviceCard.append(title);
        serviceCard.append(portrait);
        serviceCard.append(desc);
        serviceCard.append(button);

        Servicecards.append(serviceCard)
    })
}

function filterCourses(filter) {
    if (filter === 'all') {
        displayService(services);
    } else {
        const filtered = services.filter(service => service.name === filter);
        displayService(filtered);
    }
}

function displayDetails(service) {
    const serviceDetails = document.querySelector("#course-details");

    // Wrap long titles manually with a <br> where needed
    const title = service.name === "Probate and Estate Administration"
        ? "Probate and<br> Estate Administration"
        : service.name;

    serviceDetails.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${title}</h2>
        <p>${service.description1 || "More detailed description coming soon."}</p>
    `;

    serviceDetails.showModal();

    document.querySelector("#closeModal").addEventListener("click", () => {
        serviceDetails.close();
    });
}


// Make this text a comment in my JS code