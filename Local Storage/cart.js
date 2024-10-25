let cartData = JSON.parse(localStorage.getItem("cart-data")) || [];
var content = document.getElementById("content")

console.log(cartData)
displayData(cartData)

function displayData(arr) {
    content.innerHTML = "";

    arr.forEach((ele, i) => {
        var card = document.createElement("div");

        var UserName = document.createElement("h3");
        UserName.textContent = ele.username;

        var UserMail = document.createElement("p");
        UserMail.textContent = ele.email;

        var btn = document.createElement("button");
        btn.textContent = "Remove";
        btn.addEventListener("click", function () {
            RemoveData(ele, i)
        })

        card.append(UserName, UserMail, btn);
        content.append(card);
    }) 
}
function RemoveData(ele, i) {
    cartData.splice(i, 1)
    displayData(cartData)
    localStorage.setItem("cart-data", JSON.stringify(cartData));
}