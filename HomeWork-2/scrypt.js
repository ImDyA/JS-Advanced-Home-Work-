const button = document.getElementById("button");

const styleJS = (element, text) => {
 const invisibleElement = document.createElement("p");
 
 

 element.before(invisibleElement);

 
 invisibleElement.classList.add("invisible");
 invisibleElement.innerText = text;
}

// styleJS(button, "test");


// console.log(button.getBoundingClientRect());
// console.log(button.getClientRects());



const styleJS2 = (elem, text) => {
    const invisibleElement = document.createElement("p");
    invisibleElement.innerText = text;
    invisibleElement.classList.add("invisible");

    const elemStyle = elem.getBoundingClientRect();

    invisibleElement.style.bottom = elemStyle.bottom + "px";
    invisibleElement.style.height = elemStyle.height + "px";
    invisibleElement.style.left = elemStyle.left + "px";
    invisibleElement.style.right = elemStyle.right + "px";
    invisibleElement.style.top = elemStyle.top + "px";
    invisibleElement.style.width = elemStyle.width + "px";
    invisibleElement.style.x = elemStyle.x + "px";
    invisibleElement.style.y = elemStyle.y + "px";

    elem.before(invisibleElement);

    // console.log(elemStyle.left, invisibleElement.style.left);
    // console.log(elemStyle);
    // console.log(button.getBoundingClientRect());
}


// styleJS2(button, "test 2");

// console.log(document.querySelector("p").getBoundingClientRect());
// console.log(button.getBoundingClientRect());



const styleJS3 = (elem, text) => {
    const invisibleElement = document.createElement("p");
    invisibleElement.innerText = text;
    invisibleElement.classList.add("invisible");
    elem.before(invisibleElement);

    const buttonElemCoords = elem.getBoundingClientRect();
    const pElemCoords = invisibleElement.getBoundingClientRect();

    const test = (buttonElemCoords.width - pElemCoords.width) / 2;

    invisibleElement.style.left = buttonElemCoords.left + test + "px";
    invisibleElement.style.top = buttonElemCoords.top - 30 + "px";

    console.log(test);

}

styleJS3(button, "Test 3");