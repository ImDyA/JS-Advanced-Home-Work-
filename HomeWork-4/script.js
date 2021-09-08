const allContainer = document.getElementById("allContainer");
// const test = document.createElement("p");
// test.innerText = "hello";
// allConteiner.append(test);

// console.log(allConteiner)

const formConfig = [
    {
      element: "text",
      name: "login",
      label: "Логин",
    },
    {
      element: "text",
      name: "age",
      label: "Возраст",
    },
    {
      element: "select",
      name: "language",
      label: "Выберите язык программирования",
      options: [
        {
          text: "JavaScript",
          value: "js",
        },
        {
          text: "Java",
          value: "java",
        },
        {
          text: "Python",
          value: "python",
        },
      ],
    },
  ];

//   console.log(Object.values(firstTest)) "показывает масив со значениями ключа"
//   console.log(Object.entries(firstTest)) "создает масив масивов ключ значение"



// const firstFunction = (obj) => {
//     if(obj.element == "select"){
//         const divElem = document.createElement("div");
//         divElem.setAttribute("id", "firstLine");
//         const selectElem = document.createElement("select");
//         selectElem.setAttribute("name", `${obj.name}`);
//         selectElem.setAttribute("id", `${obj.name}`);
//         const labelElem = document.createElement("label");
//         labelElem.setAttribute("for", `${obj.name}`);
//         labelElem.innerText = `${obj.label}`;

//         const optionEl = obj.options;
//         optionEl.forEach((elem) => {
//             const optionEl = document.createElement("option");
//             optionEl.setAttribute("value", `${elem.value}`);
//             optionEl.innerText = `${elem.text}`;
//             selectElem.append(optionEl);
//         })


//         divElem.prepend(labelElem);
//         divElem.append(selectElem);
//         allContainer.append(divElem);
//     }
//     if(obj.element == "text"){
//         const divElem = document.createElement("div");
//         divElem.setAttribute("id", `${obj.name}`);
//         const labelElem = document.createElement("label");
//         labelElem.setAttribute("for", `${obj.name}`);
//         labelElem.innerText = `${obj.label}`
//         const inputElem = document.createElement("input");
//         inputElem.setAttribute("type", `${obj.element}`);
//         inputElem.setAttribute("name", `${obj.name}`);
//         inputElem.setAttribute("id", `${obj.name}`);
//     }
// }
const finalFunction = (elem) => {
    const form = document.createElement("form");
    form.setAttribute("id", "form");
    allContainer.append(form);
    elem.forEach((object) => {
        if(object.element == "select"){
            const divElem = document.createElement("div");
            const selectElem = document.createElement("select");
            selectElem.setAttribute("name", `${object.name}`);
            selectElem.setAttribute("id", `${object.name}`);
            const labelElem = document.createElement("label");
            labelElem.setAttribute("for", `${object.name}`);
            labelElem.innerText = `${object.label}`;
    
            const optionEl = object.options;
            optionEl.forEach((elem) => {
                const optionEl = document.createElement("option");
                optionEl.setAttribute("value", `${elem.value}`);
                optionEl.innerText = `${elem.text}`;
                selectElem.append(optionEl);
            })
    
    
            divElem.prepend(labelElem);
            divElem.append(selectElem);
            form.append(divElem);
        }
        if(object.element == "text"){
            const divElem = document.createElement("div");
            const labelElem = document.createElement("label");
            labelElem.setAttribute("for", `${object.name}`);
            labelElem.innerText = `${object.label}`
            const inputElem = document.createElement("input");
            inputElem.setAttribute("type", `${object.element}`);
            inputElem.setAttribute("name", `${object.name}`);
            inputElem.setAttribute("id", `${object.name}`);

            divElem.prepend(labelElem);
            divElem.append(inputElem);
            form.append(divElem);
        }
    })
    const button = document.createElement("button");
    button.setAttribute("type", "submit");
    button.innerText = "BUTTON"
    form.append(button);
}

finalFunction(formConfig);

const exampleForm = document.getElementById("form");
const handleFormSubmit = (elem) => {
    elem.preventDefault();
    const formData = new FormData(elem.target);
    const objectFormValues = {};
    for(let target of formData){
        objectFormValues[target[0]] = target[1];
    }
}

exampleForm.addEventListener("submit", handleFormSubmit);

console.log(allContainer)