

const myinfo = new URLSearchParams(window.location.search);
console.log(myinfo);



document.querySelector("#results").innerHTML = `
<p>Appointment for ${myinfo.get("first")} ${myinfo.get("last")}</p>
<p>Proxy ${myinfo.get("ordinance")} on ${myinfo.get("location")} Temple</p>
<p> Your phone: ${myinfo.get('phone')}</p>
<p> Your email ${myinfo.get("email")} </p>`;



