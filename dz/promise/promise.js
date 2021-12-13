var button = document.getElementById("button1");

var myPromise = new Promise(function(res, rej){
    setInterval(function(){
        rej("Sorry you missed the raise");
    }, 10000);
    button.addEventListener("click", function(){
        res("Congrats you got the raise");
    });
});

function resolve(m){
    alert(m);
}

function reject(m){
    alert(m);
}

myPromise.then(resolve, reject);