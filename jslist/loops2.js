var ul = document.getElementById("my-list");
var button = document.querySelector("button");
var inputs = document.querySelectorAll("input");


button.addEventListener("click", function(){
    var count = inputs[0].value;
    var st = inputs[1].value;
    putItems(st, count);
});



console.log(button);


function putItems(st, count){
    var innerStr = ul.innerHTML;
    
        innerStr = innerStr + "<li>" + st + " " + i +" "+ count + "</li>"
  
    ul.innerHTML = innerStr;
}
