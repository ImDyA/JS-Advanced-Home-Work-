const imgMass = [
    "http://svoikrugozor.ru/wp-content/uploads/2015/10/1-%D1%82%D1%80%D0%B0%D1%84%D0%B0%D1%80%D0%B5%D1%82-%D1%86%D0%B8%D1%84%D1%80%D1%8B.jpg",
    "http://svoikrugozor.ru/wp-content/uploads/2015/10/2-%D1%82%D1%80%D0%B0%D1%84%D0%B0%D1%80%D0%B5%D1%82-%D1%86%D0%B8%D1%84%D1%80%D1%8B.jpg",
    "http://svoikrugozor.ru/wp-content/uploads/2015/10/2-%D1%82%D1%80%D0%B0%D1%84%D0%B0%D1%80%D0%B5%D1%82-%D1%86%D0%B8%D1%84%D1%80%D1%8B2.jpg",
    "http://svoikrugozor.ru/wp-content/uploads/2015/10/%D1%82%D1%80%D0%B0%D1%84%D0%B0%D1%80%D0%B5%D1%82-%D1%86%D0%B8%D1%84%D1%80-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C3.jpg",
    "http://svoikrugozor.ru/wp-content/uploads/2015/10/%D1%82%D1%80%D0%B0%D1%84%D0%B0%D1%80%D0%B5%D1%82-%D1%86%D0%B8%D1%84%D1%80-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C4.jpg",
    "http://svoikrugozor.ru/wp-content/uploads/2015/10/%D1%82%D1%80%D0%B0%D1%84%D0%B0%D1%80%D0%B5%D1%82-%D1%86%D0%B8%D1%84%D1%80-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C5.jpg"
];


const imgElem = document.getElementById("img");
const buttonElemPrev = document.getElementById("buttonPrev");
const buttonElemNext = document.getElementById("buttonNext");

imgElem.src = imgMass[0];
let a = 0;
const prevElem = () => {
    --a;
    imgElem.src = imgMass[a];
    if(a < 0){
        imgElem.src = imgMass[imgMass.length - 1];
        a = imgMass.length - 1
    }
}
buttonElemPrev.addEventListener("click", prevElem);
// const nextElem = () => {
//     if(a < imgMass.length){
//         imgElem.src = imgMass[++a];
//     }else{
//         a = 0;
//         imgElem.src = imgMass[a];
//     }
// }
const nextElem = () => {
    ++a;
    imgElem.src = imgMass[a];
    if(a > imgMass.length - 1){
        a = 0;
        imgElem.src = imgMass[a];}
}
buttonElemNext.addEventListener("click", nextElem);