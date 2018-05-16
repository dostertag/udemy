var listItems = document.querySelectorAll(".list-item");
var selected = " selected ";

console.log(listItems);

for(let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", function() {
        removeSelected();
        this.classList.add("selected");
    })
}

function removeSelected() {
    for(let i = 0; i < listItems.length; i++) {
        if(listItems[i].classList.contains("selected")) {
            listItems[i].classList.remove("selected");
        }
    }
}



