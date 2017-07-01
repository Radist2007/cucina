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

    function kkal(b, z, y){
        var bil = b,
            zur = z,
            ygl = y;
        var sum = (bil*4)+(zur*9)+(ygl*4);
        return sum;
    }

    var kkalorii = kkal(protein, fat, carbohydrates);
    
    if(name !== "" && protein !== "" && fat !== "" && carbohydrates !== "" && price !== "") {
    alert("Створено продукт: " + product.name + "\n\n У 100г продукту міститься:\n\n Білків: " + product.prot + "\n Жирів: " + product.fat + "\n Вуглеводів: "  + product.carb + "\n Кілокалорій: " + kkalorii + "\n Ціна: "  + product.price + "грн/кг.");
    addProduct(product);
    }else{
        alert("Не всі поля заповнені")
    }
    var prodMesage = "Створено продукт: " + product.name + "\n\n У 100г продукту міститься:\n\n Білків: " + product.prot + "\n Жирів: " + product.fat + "\n Вуглеводів: "  + product.carb + "\n Кілокалорій: " + kkalorii + "\n Ціна: "  + product.price + "грн/кг."

    function addProduct(prod) {
        document.getElementsByClassName("main")[0].innerHTML = prod.name;
    }
}

