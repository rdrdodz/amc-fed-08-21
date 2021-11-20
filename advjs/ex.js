var identity = function(a){
    return a;
}

var add = function(a,b){
    return a+b;
}

var sub = function(a,b){
    return a-b;
}

var mul = function(a,b){
    return a*b;
}

var addf = function(a){
    return function(b){
        return a+b;
    }
}

var x = addf(4);
var y = x(3);
console.log(x);
console.log(y);

var liftf = function(binf){
    return function(a){
        return function(b){
            return binf(a,b);
        }
    }
}


var subf = liftf(sub);

var x = subf(5);
var y = x(7);
var y = subf(5)(7);

var curry = function(binf, a){
    return function(b){
        return binf(a,b);
    }
}

var curry = function(binf, a){
    return liftf(binf)(a);
}

var twice = function(binf){
    return function(a){
        return binf(a,a);
    }
}

var sq = twice(mul);

var reverse = function(binf){
    return function(a, b){
        return binf(b,a);
    }
}

//part 7
var composeu = function(f1, f2){
    return function(a){
        return f2(f1(a));
    }
}

//part 8
var composeb = function(f1, f2){
    return function(a,b,c){
        return f2(f1(a, b), c);
    }
}

// part 9

var limit = function(binf, n){
    return function(a, b){
        n -= 1;
        if(n >= 0){
            return binf(a,b); 
        }
        return undefined;
    }
}

console.log("// problem 9");

var limited_add = limit(add, 3);

console.log(limited_add(3,5));
console.log(limited_add(5,8));
console.log(limited_add(20,50));
console.log(limited_add(300,500));
console.log(limited_add(13,15));

//problem 10

var from = function(n){

    return function(){
        return n++;
    }
}

var gen = from(10);
// console.log(gen());
// console.log(gen());
// console.log(gen());
// console.log(gen());
// console.log(gen());

// problem 11
// Write a "to" function that takes a generator and an end value
// and returns a generator that will produce numbers up to that limit 

var to = function(gen, p){
    return function(){
        var internal = gen();
        if(internal <= p){
            return internal;
        }
        return undefined;
    }
}

var genFromTo = to(from(10), 15);
console.log("Problem 11");
console.log(genFromTo());
console.log(genFromTo());
console.log(genFromTo());
console.log(genFromTo());
console.log(genFromTo());
console.log(genFromTo());
console.log(genFromTo());
console.log(genFromTo());
console.log(genFromTo());

var fromTo = function(a, b){
    a = a - 1;
    return function(){
        a = a + 1;
        if(a <= b){
            return a;
        }
        return undefined;
    }
}

var genFromTo = fromTo(110,114);
console.log(genFromTo());
console.log(genFromTo());
console.log(genFromTo());
console.log(genFromTo());
console.log(genFromTo());
console.log(genFromTo());

//for #13
var element = function(arr, gen){
    return function(){
        return arr[gen()];
    };
};

var arr = ['apple', 'banana', 'corn', 'drink', 'eat']
var gen = fromTo(1, 4);

var eleGen = element(arr, gen);

console.log("#13");
console.log(eleGen());
console.log(eleGen());
console.log(eleGen());
console.log(eleGen());
console.log(eleGen());
console.log(eleGen());

// #14

var element = function(arr, gen){
    var i = 0;
    return function(){
        if(gen === undefined){
            return arr[i++];
        }else{
            return arr[gen()];
        }
        
    };
};

var eleGen = element(arr);
console.log("#14");
console.log(eleGen());
console.log(eleGen());
console.log(eleGen());
console.log(eleGen());
console.log(eleGen());
console.log(eleGen());

// #15 

var collect = function(gen, arr){
    return function(){
        var x = gen();
        if(x !== undefined){
            arr.push(x);
        }
    };
};

console.log("#15");
var arr = [];
var coll = collect(fromTo(100,105), arr);

coll();
console.log(arr);
coll();
console.log(arr);
coll();
console.log(arr);
coll();
console.log(arr);
coll();
console.log(arr);
coll();
console.log(arr);
coll();
console.log(arr);
coll();
console.log(arr);
coll();
console.log(arr);
coll();
console.log(arr);
coll();
console.log(arr);

var filter = function(gen, pradicate){
    var x;
    return function(){
        do{
            x = gen();
            if(x === undefined){
                break;
            }
        }while(!pradicate(x));
        return x;
    }
}

var fil = filter(
                    fromTo(0, 7), 
                    function third(value){
                                return (value%3) === 0;
                              }
                );

console.log("#16");
console.log(fil());
console.log(fil());
console.log(fil());
console.log(fil());
console.log(fil());
console.log(fil());

var concat = function(gen1, gen2){
    var x;
    return function(){
        x = gen1();
        if(x !== undefined){
            return x;
        }
        return gen2();
    }
};

var con = concat(fromTo(0,3), fromTo(100,102));

console.log("#17");
console.log(con());
console.log(con());
console.log(con());
console.log(con());
console.log(con());
console.log(con());
console.log(con());
console.log(con());

