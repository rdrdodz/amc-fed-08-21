var [leftButton, rightButton] = document.querySelectorAll(".img-container .button");
var img = document.querySelector(".img-container img");
var imgContainer = document.querySelector(".img-container");
var maxNumOfImages = 10;
var autoRun;

imgContainer.addEventListener("mouseover", function(){
    clearInterval(autoRun);
});

imgContainer.addEventListener("mouseout", function(){
    autoRunFunction();
});

function autoRunFunction(){
    autoRun = setInterval(function(){ 
        clickListner("right")
    }, 3000);    
}

rightButton.addEventListener("click", function(){
    clickListner("right");
});

leftButton.addEventListener("click", function(){
    clickListner("left");
});

function clickListner(dir){
    rightButton.removeEventListener("click", clickListner);
    img.style.opacity = "0";
    img.addEventListener("transitionend", function transitionEnd(){
        img.removeEventListener("transitionend", transitionEnd);
        changeImgNumber(dir);
        img.style.opacity = "1";
        img.addEventListener("transitionend", function(){
            rightButton.addEventListener("click", clickListner);
        });
    });
}

function changeImgNumber(eve){
    var imgSrc = img.src;
    var imgSrcLeft = imgSrc.substr(0, imgSrc.length-5);
    var imgSrcMid = imgSrc.substring(imgSrc.length-5, imgSrc.length-4);
    var imgSrcRight = imgSrc.substr(imgSrc.length-4);
    if(eve === "right"){
        imgSrcMid = parseInt(imgSrcMid) + 1;
        if(imgSrcMid === maxNumOfImages){
            imgSrcMid = 0;
        }
    }else{
        imgSrcMid = parseInt(imgSrcMid) - 1;
        if(imgSrcMid === -1){
            imgSrcMid = maxNumOfImages - 1;
        }
    }
    img.src = imgSrcLeft + imgSrcMid + imgSrcRight;
    console.log(imgSrc, imgSrcLeft,"====", imgSrcMid, "====", imgSrcRight);
}

autoRunFunction();


