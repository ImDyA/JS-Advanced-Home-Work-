const firstVisit = document.createElement("p");
const lastVisit = document.createElement("p");
const conteiner = document.getElementById("conteiner");
firstVisit.innerText = "Дооро пожаловать!";
lastVisit.innerText = "Вы заходили раз:";
conteiner.append(firstVisit);

localStorage.setItem("firstVisit", 1);


const allFunk = () => {
    if(localStorage.getItem("firstVisit") == 1){
        let test = Number(localStorage.getItem("firstVisit"));
        test ++;
        localStorage.setItem("lastVisit", test);
        localStorage.removeItem("firstVisit");
    }
    if (localStorage.getItem("lastVisit") > 1) {
        let test2 = Number(localStorage.getItem("lastVisit"));
        test2 ++;
        localStorage.setItem("lastVisit", test2);
    }
}
allFunk();


