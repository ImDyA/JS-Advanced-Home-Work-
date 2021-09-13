const firstVisit = document.createElement("p");
const lastVisit = document.createElement("p");
const conteiner = document.getElementById("conteiner");
firstVisit.innerText = "Дооро пожаловать!";
conteiner.append(firstVisit);


const visitNumber = () => {
    if (localStorage.getItem("visitsCount") == null) {
        localStorage.setItem("visitsCount", 0);
    } else if (localStorage.getItem("visitsCount")) {
        let number = localStorage.getItem("visitsCount");
        number ++;
        localStorage.setItem("visitsCount", number);
        conteiner.append(lastVisit);
        lastVisit.innerText = `Вы заходили раз: ${number}`
    }
}
visitNumber();