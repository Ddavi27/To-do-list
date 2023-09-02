const ITEMS_CONTAINER = document.getElementById("items");
const ITEM_TEMPLATE= document.getElementById("itemTemplate");
const ADD_BUTTON = document.getElementById("add");

let items = getItems();

function getItems(){
    const value = localStorage .getItem ("to-do") || "[]";

    return JSON .parse(value);
}

function setItems(items){
    const itemsJson = JSON.stringify(items); 

    localStorage.setItem("to-do", itemsJson);
}

function addItem(){
    items.unshift({
        description: "",
        completed: false
    });

    setItems(items);
    refreshList();

}

function refreshList(){
     //TODO: sort items
     ITEMS_CONTAINER.innerHTML = "";
      
     for (const item of items ){
        const itemElement = ITEM_TEMPLATE.content.cloneNode(true);
        const descriptionInput = itemElement.querySelector(".itemDescription");
        const completedInput = itemElement .querySelector(".itemCompleted");

        descriptionInput.value = item.description;
        completedInput.checked = item.completed;

        ITEMS_CONTAINER.append(itemElement);
        }
}

ADD_BUTTON.addEventListener("click", () => {

});
console.log(items);