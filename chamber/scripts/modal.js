
const memberships = [
  {
    id: "modal1",
    level: "None Profit Membership",
    description: "Ideal for registered nonprofit organizations looking to engage with the community and access basic support.",
    benefits: [
      "Free listing in the member directory",
      "Access to select community events",
      "Monthly nonprofit newsletter",
      "Eligibility for nonprofit-only grant programs"
    ]
  },
  {
    id: "modal2",
    level: "Bronze Membership",
    description: "Great for individuals or small businesses just getting started, offering basic promotion and event access.",
    benefits: [
      "All Bronze benefits",
      "Discounted event tickets",
      "Basic promotional listing on website",
      "Access to networking mixers"
    ]
  },
  {
    id: "modal3",
    level: "Silver Membership",
    description: "Recommended for growing businesses wanting to increase visibility and gain training access.",
    benefits: [
      "All Silver benefits",
      "Free access to monthly training webinars",
      "Priority event registration",
      "Company profile page on the member portal"
    ]
  },
  {
    id: "modal4",
    level: "Gold Membership",
    description: "Best for established businesses looking for maximum exposure and full access to premium benefits.",
    benefits: [
      "All Gold benefits",
      "Homepage spotlight advertising",
      "VIP invitations to special events",
      "Featured in monthly business highlights",
      "1-on-1 consultation with industry experts"
    ]
  }
];

const cardDetails = document.querySelector("#card-details");
const modalButtons = document.querySelectorAll(".membership-card .modal");

// Loop over each button and attach listener
modalButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const membership = memberships[index];
    displayCardDetails(membership);
  });
});

function displayCardDetails(data) {
  cardDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h3>${data.level}</h3>
    <p>${data.description}</p>
    <ul>
      ${data.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
    </ul>
  `;

  cardDetails.showModal();

  document.querySelector("#closeModal").addEventListener("click", () => {
    cardDetails.close();
  })
}