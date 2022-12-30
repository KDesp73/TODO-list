let $ = document;

const add = $.getElementById("add");
const input = $.getElementById("input");
const list = $.getElementById("list");
const count = $.getElementById("count");

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      addElement();
    }
  }); 

function addElement() {
    if(input.value == "") return;

    var element = $.createElement("div");
    element.innerHTML = input.value;
    element.classList.add("element");

    var deleteButton = $.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", function(){
        element.remove()
        count.innerHTML = $.querySelectorAll(".element").length;
    });

    element.append(deleteButton);
    list.append(element);

    console.log($.querySelectorAll(".element").length);
    count.innerHTML = $.querySelectorAll(".element").length;
}
