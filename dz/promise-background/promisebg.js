var button = document.getElementById("button");
function onClick(){
    clearInterval(timeEvent);
    alert("Congrats you got the raise");
}

var timeEvent = setTimeout(function(){
    button.removeEventListener("click", onClick);
    alert("Sorry you missed the raise");
}, 10000);

button.addEventListener("click", onClick);