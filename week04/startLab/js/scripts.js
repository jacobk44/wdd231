const openButton = document.querySelector("#openButton");
const closeButton = document.querySelector("#closeButton");
const dialogBox = document.querySelector("#dialogBox");
const dialogBoxText = document.querySelector("#dialogBox div");


openButton1.addEventListener("click", () =>{
    dialogBox.showModal();
    dialogBoxText.innerHTML = `One Apple contains cateries `
});



openButton2.addEventListener("click", () =>{
    dialogBox.showModal();
    dialogBoxText.innerHTML = `One Apple contains cateries `
});



openButton3.addEventListener("click", () =>{
    dialogBox.showModal();
    dialogBoxText.innerHTML = `One Apple contains cateries `
});

closeButton.addEventListener("click", () =>{
    dialogBox.close();
});

