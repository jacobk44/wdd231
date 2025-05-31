import {temples} from "../data/temples.js"
// console.log(temples)

import {url} from "../data/temples.js"
// console.log(url)


// ----- GRAB A REFERENCE TO THE DIVISION WHERE WE DISPLAY THE ITEMS
const showHere = document.querySelector("#showHere");

// ----- GETA REFERENCE TO THE HTML DIALOG ELEMENT
const myclose = document.querySelector("#mydialog button");
const mydialog =document.querySelector("#mydialog");
const mytitle = document.querySelector("#mydialog h2");
const myinfo = document.querySelector("#mydialog p");

myclose.addEventListener("click", () => mydialog.close())

function displayItems(data){
    console.log(data)
    data.forEach(x => {
        console.log(x)
        const photo = document.createElement("img")
        photo.src = `${url}${x.path}`
        photo.alt = x.name

        photo.addEventListener("click", () => showStuff(x));
        showHere.appendChild(photo)
    })

}
displayItems(temples)



function showStuff(x){
    mytitle.innerHTML = x.name
    myinfo.innerHTML = `${x.dedicated} ${x.person} as templenumber ${x.number}`
    mydialog.showModal()
}