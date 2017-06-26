// window.onload = function() {

    document.body.style.backgroundColor = "green";

    var item = document.querySelectorAll('.menu__list .menu__list-item');
    for(var i = 0; i < item.length; i++) {
        item[i].onclick = activeItem;
    }

    function activeItem() {
        this.classList.toggle('activ');
        console.log(this);
    }
// }



function showFooter() {
    var el = document.getElementById("f");
    el.style.display = "block";

}

function createProduct() {

    var name = document.getElementById("product_name").value,
        protein = document.getElementById("product_protein").value,
        fat = document.getElementById("product_fat").value,
        carbohydrates = document.getElementById("product_carbohydrates").value,
        price = document.getElementById("product_price").value;

    if(name === "") {
        var pl = document.getElementById("product_name");
        pl.placeholder = "Вкажіть назву продукту";
    }

    if (Number.isInteger(protein)) {
        alert("yep");
    }

    var product = {
        name: name,
        prot: protein,
        fat: fat,
        carb: carbohydrates,
        price: price
    }
    
    alert("Створено продукт: " + product.name + "\n" + product.prot + "\n" + product.fat + "\n"  + product.carb + "\n"  + product.price);
    
    addProduct(product);
}

function addProduct(prod) {
    document.getElementsByClassName("main")[0].innerHTML = '<button>' + prod.name + '</button>' + prod.name;
}
