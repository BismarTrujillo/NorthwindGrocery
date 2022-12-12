"use strict"
const categoriesListId = document.getElementById("categoriesListId");
window.onload = init;
function init() {
    categoriesListIdDropdown()
    document.getElementById("selectId").onchange = displayDropdown;
    document.getElementById("categoriesListId").onchange = displayCategoriesProducts;
    categoriesListId.style.display = "none";
}
function categoriesListIdDropdown() {
    let selectElement = document.createElement("select");
    selectElement.className = "form-select";
    selectElement.id = "categoriesListId";
    selectElement.value = "categoriesListId";
    categoryContainer.appendChild(selectElement);

}
function displayDropdown() {
    productContainer.innerHTML = " ";
    categoryContainer.innerHTML = " ";
    if (selectId.value == "viewAll") {
        productContainer.innerHTML = "";
        fetch('http://localhost:8081/api/categories')
            .then(response => response.json())
            .then(categories => {
                for (let i = 1; i <= categories.length; i++) {
                    fetch('http://localhost:8081/api/categories/' + i)
                        .then(response => response.json())
                        .then(products => {

                            for (let j in products) {
                                let productContainer = document.getElementById("productContainer");

                                let card = document.createElement("div");
                                card.className = "card col-sm-6 col-lg-3 m-4";
                                productContainer.appendChild(card);

                                let cardBody = document.createElement("div");
                                cardBody.className = "card-body";
                                card.appendChild(cardBody);

                                let title = document.createElement("h5");
                                title.className = "card-title";
                                title.innerText = products[j].productName
                                cardBody.appendChild(title);

                                let text1 = document.createElement("p");
                                text1.className = "card-text";
                                text1.innerText = "$" + products[j].unitPrice + " Units in stock: " + products[j].unitsInStock
                                cardBody.appendChild(text1);

                                let text2 = document.createElement("p");
                                text2.className = "card-text";
                                text2.innerText = products[j].supplier
                                cardBody.appendChild(text2);

                                let text3 = document.createElement("p");
                                text3.className = "card-text";
                                text3.innerText = "product ID: " + products[j].productId
                                cardBody.appendChild(text3);

                                let seeDetailsLink = document.createElement("a")
                                seeDetailsLink.innerHTML = "see details"
                                seeDetailsLink.href = //api 
                                    seeDetailsLink.target = "_blank"
                                cardBody.appendChild(seeDetailsLink);

                            }

                        })
                }


            })
    } else if (selectId.value == "searchByCategory") {
        
        let blankOption = document.createElement("option");
        blankOption.innerText = "Select a category";
        categoriesListId.appendChild(blankOption);
        categoriesListId.style.display = "block";

        displayCategoriesProducts();
    } else
        productContainer.innerHTML = " ";

}
function displayCategoriesProducts() {

    fetch('http://localhost:8081/api/categories')
        .then(response => response.json())
        .then(categories => {
            for (let i in categories) {
                
                

                let optionElement = document.createElement("option");
                optionElement.innerText = categories[i].name
                optionElement.value = categories[i].name
                categoriesListId.appendChild(optionElement);
                // categoryContainer.innerHTML = categoriesListId.value

                if (categoriesListId.value == categories[i].name) {
                    categoryContainer.innerHTML = categoriesListId
                    for (let i = 1; i <= categories.length; i++) {
                        fetch('http://localhost:8081/api/categories/' + i)
                            .then(response => response.json())
                            .then(products => {
                                categoryContainer.innerHTML = "products[i].name";
                                for (let z in products) {
                                    let categoryContainer = document.getElementById("categoryContainer");

                                    let card = document.createElement("div");
                                    card.className = "card col-sm-6 col-lg-3 m-4";
                                    categoryContainer.appendChild(card);

                                    let cardBody = document.createElement("div");
                                    cardBody.className = "card-body";
                                    card.appendChild(cardBody);

                                    let title = document.createElement("h5");
                                    title.className = "card-title";
                                    title.innerText = products[z].productName
                                    cardBody.appendChild(title);

                                    let text1 = document.createElement("p");
                                    text1.className = "card-text";
                                    text1.innerText = "$" + products[z].unitPrice + " Units in stock: " + products[z].unitsInStock
                                    cardBody.appendChild(text1);

                                    let text2 = document.createElement("p");
                                    text2.className = "card-text";
                                    text2.innerText = products[z].supplier
                                    cardBody.appendChild(text2);

                                    let text3 = document.createElement("p");
                                    text3.className = "card-text";
                                    text3.innerText = "product ID: " + products[z].productId
                                    cardBody.appendChild(text3);

                                }

                            })
                    }
                }
            }


        })
}