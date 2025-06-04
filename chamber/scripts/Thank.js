
const myinfo = new URLSearchParams(window.location.search);
console.log(myinfo);

document.querySelector(".results").innerHTML = `
<p>Appointment for ${myinfo.get("Fname")} ${myinfo.get("Sname")}</p>
<p> Your email ${myinfo.get("email")} </p>
<p> Your phone: ${myinfo.get('phone')}</p>
<p>Bussiness name:${myinfo.get("organization")}</p>
<p>Timestamp: ${myinfo.get("timestamp")}</p>
`


