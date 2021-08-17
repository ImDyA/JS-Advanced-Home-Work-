const products = [
    {
      name: "Iphone 12",
      brand: "Apple",
      price: 3200000,
      properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
    },
    {
      name: "Galaxy S20 Ultra",
      brand: "Samsung",
      price: 2900000,
      properties: ["120 hz screen", "Water resistance"],
    },
    {
      name: "MI 9",
      brand: "Xiaomi",
      price: 1300000,
      properties: ["Best price", "Pay less - get more!"],
    },
  ];

  const infoBlock = (arr) => {
      const allBlockItem = document.createElement("div");

      arr.forEach((item) => {
        const blockItem = document.createElement("div");
        const nameItem = document.createElement("h1");
        const brandItem = document.createElement("h2");
        const propertiesList = document.createElement("ul");
        nameItem.innerText = item.name;
        brandItem.innerText = item.brand;
        
        item.properties.forEach((list) => {
            const liItem = document.createElement("li");
            liItem.innerText = list;
            propertiesList.append(liItem);
        });

        blockItem.append(nameItem, brandItem, propertiesList);
        allBlockItem.append(blockItem);
      });

      document.body.append(allBlockItem);
  }

  infoBlock(products);

  const infoBlock2 = (arr) => {
    const allBlockItem = document.createElement("div");

    arr.forEach((item) => {

        const list = item.properties.map((item) => `<li>${item}</li>`).join("");


        const blockItem = `<h1>${item.name}</h1> <h2>${item.brand}</h2> <ul>${list}>`
        allBlockItem.innerHTML = `<div>${blockItem}</div>`;
        
    });
    console.log(allBlockItem)
  }
  infoBlock2(products)