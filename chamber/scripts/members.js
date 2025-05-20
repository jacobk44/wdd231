const cards = document.querySelector("#cards");

async function getMembersData(){
    const respond = await fetch("data/members.json");
    const data = await respond.json();
    displayMembers(data.members);
}
getMembersData();


const displayMembers = (members) =>{
    members.forEach((member) =>{
        // Create elements to add to the div.cards element
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let address = document.createElement("p");
        let myPara = document.createElement("p");
        let portrait = document.createElement("img");

        // Build the h2 content out to show the prophet's full name
        fullName.textContent = `${member.name}`; // fill in the blank
        address.textContent = `${member.address}`;
        myPara.textContent = `${member.phone}`;

         // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', member.image);
        portrait.setAttribute('alt', `Portrait of ${member.name}`); // fill in the blank
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        
        // Append the section(card) with the created elements
        card.appendChild(portrait); //fill in the blank
        card.appendChild(fullName);
        card.appendChild(address);
        card.appendChild(myPara);

        cards.appendChild(card);
    });
}