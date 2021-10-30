import { MaxHeap } from "./class.maxheap.js";

var myMaxQ = new MaxHeap();
var biggestOne = document.querySelector(".biggest-one");
var numberInput = document.getElementById("number-input");
var enterButton = document.getElementsByName("enter-button")[0];
var consumeButton = document.querySelector("button[name='consume-button']");


enterButton.addEventListener("click", function(){
    var num = varifyAndMakeNumeric(numberInput.value);
    myMaxQ.insert(num);
    var maxNow = myMaxQ.getMax();
    biggestOne.innerHTML = maxNow;
});

consumeButton.addEventListener("click", function(){
    myMaxQ.consume();
    if(myMaxQ.isEmpty()){
        biggestOne.innerHTML = "The List is Empty";
    }else{
        biggestOne.innerHTML = myMaxQ.getMax();
    }
    
});

function varifyAndMakeNumeric(st){
    var num = parseInt(st);
    if(!isNaN(num)){
        return num;
    }else{
        return 0;
    }
}