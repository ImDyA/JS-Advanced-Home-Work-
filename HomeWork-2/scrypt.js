const button = document.getElementById("button");

const styleJS = (element, text) => {
 const invisibleElement = document.createElement("p");
 
 

 element.before(invisibleElement);

 
 invisibleElement.classList.add("invisible");
 invisibleElement.innerText = text;
}

styleJS(button, "test");