var button = document.getElementById("button");

var ourPromise = new Promise(function(res, rej){
    setTimeout(() => {
        rej("Sorry you missed it!");
    }, 20000);

    button.addEventListener("click", function(){
        res("Congrats you got it!");
    });

});

ourPromise.then(
    function(m){
        alert(m);
    }, 
    function(m){
        alert(m);
    });