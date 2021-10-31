var [leftButton, rightButton] = document.querySelectorAll(".img-container .button");
var sliderImages = document.querySelectorAll(".img-container .slider-img");
var imgContainer = document.querySelector(".img-container");
var maxNumOfImages = 10;

var crrInd = 1;
sliderImages[crrInd % 3].style.zIndex = "20";

leftButton.addEventListener("click", () => slideLeftRight(leftButton, true));
rightButton.addEventListener("click", () => slideLeftRight(rightButton, false));

function slideLeftRight(sourceBtn, directionLeft) {
    sourceBtn.removeEventListener("click", slideLeftRight);    
    var prvInd = (crrInd - 1 + 3) % 3;
    var nxtInd = (crrInd + 1 + 3) % 3;

    ////////////////
    var srcStrInd = directionLeft ? prvInd : nxtInd;
    srcStr = sliderImages[srcStrInd].src; //Going to show
    srcStrInit = srcStr.slice(0, -5);
    srcStrMid = srcStr.slice(-5, -4);
    srcEnd = srcStr.slice(-4);
    var nextImgSrc = directionLeft ? nxtInd : prvInd;
    var nextImgInd = directionLeft ? parseInt(srcStrMid - 1 + maxNumOfImages)%maxNumOfImages : (parseInt(srcStrMid) + 1 + maxNumOfImages) % maxNumOfImages;
    sliderImages[nextImgSrc].src = srcStrInit + nextImgInd + srcEnd;
    ///////////////   

    if (directionLeft) {
        sliderImages[prvInd].style.zIndex = "20";
        sliderImages[nxtInd].style.zIndex = "10";
    }
    else {
        sliderImages[prvInd].style.zIndex = "10";
        sliderImages[nxtInd].style.zIndex = "20";
    }

    sliderImages[crrInd].classList.add("start-transition");
    sliderImages[crrInd].style.left = "100%";

    sliderImages[crrInd].addEventListener("transitionend", transLeftRight = function () {
        sliderImages[crrInd].removeEventListener("transitionend", transLeftRight);
        sliderImages[crrInd].classList.remove("start-transition");

        sliderImages[crrInd].style.zIndex = "5";
        sliderImages[crrInd].style.left = "0";

        crrInd = directionLeft ? prvInd : nxtInd;
        sourceBtn.addEventListener("click", slideLeftRight);
    });
};