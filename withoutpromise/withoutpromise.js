var button = document.getElementById("button");

function onClick(){
    clearTimeout(ourTimer);
    button.removeEventListener("click", onClick);
    alert("Congrats you got a raise!");
}

var ourTimer = setTimeout(function(){
    button.removeEventListener("click", onClick);
    alert("Sorry you missed it!")
}, 20000);

button.addEventListener("click", onClick);