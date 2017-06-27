// window.onload = function() {


//     var item = document.querySelectorAll('.menu__list .menu__list-item');
//     for(var i = 0; i < item.length; i++) {
//         item[i].onclick = activeItem;
//     }

//     function activeItem() {
//         this.classList.toggle('activ');
//         console.log(this);
//     }
// }
function ny() {
alert('134');
var in1 = document.getElementById('in01').value,
    in2 = document.getElementById('in02').value,
    in3 = document.getElementById('in03').value,
    in4 = document.getElementById('in04').value;

    if(in1 > 1 && in2 < 20) {
       var r = document.getElementById('div');
       r.style.backgroundColor = "#fff";
       alert('asdf');
    }
}

    document.body.style.backgroundColor = "green";

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

    var product = {
        name: name,
        prot: protein,
        fat: fat,
        carb: carbohydrates,
        price: price
    }
    
    if(name !== "" && protein !== "" && fat !== "" && carbohydrates !== "" && price !== "") {
    alert("Створено продукт: " + product.name + "\n" + product.prot + "\n" + product.fat + "\n"  + product.carb + "\n"  + product.price);
    addProduct(product);
    }else{
        alert("Не всі поля заповнені")
    }
}

function addProduct(prod) {
    document.getElementsByClassName("main")[0].innerHTML = '<button>' + prod.name + '</button>' + prod.name;
}
