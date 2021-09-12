const firstVisit = document.createElement("p");
const lastVisit = document.createElement("p");
const conteiner = document.getElementById("conteiner");
firstVisit.innerText = "Дооро пожаловать!";
lastVisit.innerText = "Вы заходили раз:";
conteiner.append(firstVisit);
conteiner.append(lastVisit);

localStorage.setItem("firstVisit", 1);


const allFunk = () => {
    if(localStorage.length == 1){
        let oneNumber = Number(localStorage.getItem("firstVisit"));
        localStorage.setItem("lastVisit", oneNumber);
        localStorage.removeItem("firstVisit");
    }
    if (localStorage.length >= 1) {
        let twoNumber = Number(localStorage.getItem("lastVisit"));
        lastVisit.innerText = `Вы заходили раз: ${twoNumber}`;
        conteiner.append(lastVisit);
        twoNumber ++;
        localStorage.setItem("lastVisit", twoNumber);
    }
}
allFunk();


