

const myinfo = new URLSearchParams(window.location.search);
console.log(myinfo);



document.querySelector("#results").innerHTML = `
<p>Appointment for ${myinfo.get("fname")} ${myinfo.get("Sname")}</p>
<p> Your phone: ${myinfo.get('phone')}</p>
<p> Your email ${myinfo.get("email")} </p>`;



