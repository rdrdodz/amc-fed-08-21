var button = document.querySelector("button");
var inputs = document.querySelectorAll("input");
var gridContainer = document.querySelector(".grid-container");
var gridContainerHeader =  document.querySelectorAll(".grid-container .header");
console.log(gridContainerHeader[0].style.display);


button.addEventListener("click", function(){
    var count = inputs[0].value;
    var st = inputs[1].value;
    if(gridContainerHeader[0].style.display === ""){
        gridContainerHeader[0].style.display = "block";
        gridContainerHeader[1].style.display = "block"
    }
    putItems(st, count);
    inputs[0].value = undefined;
    inputs[1].value = "";
});



// console.log(button);


function putItems(st, count){
    var innerStr = gridContainer.innerHTML;
    innerStr = innerStr + '<div class="item">' + st + "</div>" + '<div class="item">' + count + "</div>" 
    gridContainer.innerHTML = innerStr;
}