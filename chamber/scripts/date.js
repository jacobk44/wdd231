const footerElement = document.getElementById("year");
const currentDate = new Date();

footerElement.innerHTML = `<span class="highlight">${new Intl.DateTimeFormat(
    "en-US",{dateStyle: "full"}
).format(currentDate)} ❤ Jacob Amoah ❤, Greater Accra </span>`




window.addEventListener('DOMContentLoaded', () => {
  const timestampInput = document.getElementById('timestamp');
  const now = new Date();

  // Format date as YYYY-MM-DD
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // Months 0-11
  const day = String(now.getDate()).padStart(2, '0');

  // Format time as HH:MM:SS
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  // Combine date and time
  const formatted = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  timestampInput.value = formatted;
});




function setLastModified(){
    const modifiedDate = document.lastModified;
    document.querySelector("#lastModified").textContent = `Last Modified: ${modifiedDate}`;
}
setLastModified();