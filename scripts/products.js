"use strict"

window.onload = init;
function init() {
    document.getElementById("selectId").onchange = displayDropdown;

}

function displayDropdown() {

    if (selectId.value == "viewAll") {
        productContainer.innerHTML = " ";
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
        productContainer.innerHTML = " ";
        displayCategoriesDropdown();
    }

}
function displayCategoriesDropdown() {

    let selectElement = document.createElement("select");
    selectElement.className = "form-select";
    selectElement.id = "categoriesListId";
    selectElement.value = "categoryListId";
    productContainer.appendChild(selectElement);

    let blankOption = document.createElement("option");
    blankOption.innerText = "Select a category";
    categoriesListId.appendChild(blankOption);


    fetch('http://localhost:8081/api/categories')
        .then(response => response.json())
        .then(categories => {
            for (let i in categories) {
                let categoriesListId = document.getElementById("categoriesListId");

                let optionElement = document.createElement("option");
                optionElement.innerText = categories[i].name
                categoriesListId.appendChild(optionElement);

            }
            
            if (categoriesListId.value == categories[i].name)
        })
}





