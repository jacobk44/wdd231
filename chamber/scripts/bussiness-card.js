const cards = document.querySelector("#cards");
async function getMembersData() {
    const respond = await fetch("data/bussiness-card.json");
    const data = await respond.json();
    displayMembers(data.members);
}
getMembersData();





const displayMembers = (members) => {
    const cards = document.querySelector("#cards");

    members.forEach((member) => {
        const card = document.createElement("section");
        card.classList.add("member-card");

        // Business name (top)
        const fullName = document.createElement("h2");
        fullName.textContent = member.name;

        // Middle flex container (image + contact)
        const middle = document.createElement("div");
        middle.classList.add("card-body");

        const portrait = document.createElement("img");
        portrait.setAttribute('src', member.image);
        portrait.setAttribute('alt', `Portrait of ${member.name}`);
        portrait.setAttribute('loading', 'lazy');

        const contactInfo = document.createElement("div");
        contactInfo.classList.add("contact-info");

        const email = document.createElement("p");
        email.innerHTML = `<strong>EMAIL:</strong> <a href="mailto:${member.email}">${member.email}</a>`;

        const phone = document.createElement("p");
        phone.innerHTML = `<strong>PHONE:</strong> ${member.phone}`;

        const url = document.createElement("p");
        url.innerHTML = `<strong>URL:</strong> <a href="${member.website}" target="_blank">Visit Website</a>`;


        const memberLevel = document.createElement("p");
        memberLevel.innerHTML = `<strong>${member.membershipLevel}</strong>`;

        contactInfo.appendChild(email);
        contactInfo.appendChild(phone);
        contactInfo.appendChild(url);
        contactInfo.appendChild(memberLevel);

        middle.appendChild(portrait);
        middle.appendChild(contactInfo);

        // Combine everything
        card.appendChild(fullName);
        card.appendChild(middle);

        cards.appendChild(card);
    });
};
