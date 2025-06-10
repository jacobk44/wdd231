const footerElement = document.getElementById("year");
const currentDate = new Date();

footerElement.innerHTML = `<span class="highlight">${new Intl.DateTimeFormat(
    "en-US",{dateStyle: "full"}
).format(currentDate)} ❤ Jacob Amoah ❤, Greater Accra </span>`




function setLastModified(){
    const modifiedDate = document.lastModified;
    document.querySelector("#lastModified").textContent = `Last Modified: ${modifiedDate}`;
}
setLastModified();