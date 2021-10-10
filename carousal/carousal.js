var [leftButton, rightButton] = document.querySelectorAll(".img-container .button");
var img = document.querySelector(".img-container img");
var maxNumOfImages = 10;

rightButton.addEventListener("click", function(){
    changeImgNumber("right");
});

leftButton.addEventListener("click", function(){
    changeImgNumber("left");
});

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




