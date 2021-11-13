//1.
var identity = function(x) {
    return x;
}

var add = function(x, y) {
    return x + y;
}

var sub = function(x, y) {
    return x - y;
}

var mul = function(x, y) {
    return x * y;
}

//2.
var addf = function(x) {    
    return function(y) { 
        return y + x 
    };
}

console.log(addf(3)(4));

var liftf = function(f) {
    return function(a) {
        return function(b) {
            return f(a,b);
        }
    }
}

var x = liftf(sub);
console.log(x(3)(4));

//6.
var curry = function(f, n) {
    return function(y) {
        return f(n,y);
    }
}
var add3 = curry(add, 3);
console.log(add3(4));

var curry1 = function(f, n) {
    return liftf(f)(n);
}
var add3_1 = curry1(add, 3);
console.log(add3_1(4));

//5.
var twice = function(f) {
    return function(x) {
        return f(x,x);
    }
}
console.log("add(11, 11) = ", add(11, 11));
var double = twice(add);
console.log("double(11) = ", double(11));
var square = twice(mul);
console.log("square(11) = ", square(11));

//6.
var reverse = function(f) {
    return function(a, b) {
        return f(b,a);
    }
}

console.log(sub(15, 10));
var bus = reverse(sub);
console.log(bus(15, 10));

//7.
var composeu = function(fn1, fn2) {
    return function(a) {
        return fn2(fn1(a));
    }
}

//8.
var composeb = function(fn1, fn2) {
    return function(x, y, z) {
        return fn2(fn1(x, y), z);
    }
}

console.log("composeb(add, mul) (2, 3, 7) = ", composeb(add, mul) (2, 3, 7));

//9.
var limit = function(fn, n) {    
    return function(x, y) {
        if(n > 0) {
            n--;
            return fn(x, y);
        }
        return undefined;        
    }
}

var add_ltd = limit(add, 2);
console.log("add_ltd(3, 4) = ", add_ltd(3, 4));
console.log("add_ltd(3, 4) = ", add_ltd(3, 4));
console.log("add_ltd(3, 4) = ", add_ltd(3, 4));

//10.
var from = function(i) {
    return function() {
        return i++;
    }
}
var index = from(0);
console.log("1. index() = ", index());
console.log("2. index() = ", index());
console.log("3. index() = ", index());
console.log("4. index() = ", index());

var inc = function(i) {
    return function() {
        return ++i;
    }
}

//11.
var to = function(fn, n) {
    return function() {        
        var m = fn();
        if(m <= n) {            
            return m++;
        }
        return undefined;
    }
}

var index1 = to(from(11), 12);
console.log("1. index1() = ", index1());
console.log("2. index1() = ", index1());
console.log("3. index1() = ", index1());
console.log("4. index1() = ", index1());

//12.
var fromTo = function(n, m) {
    return function() {
        if(n < m) {
            return n++;
        }
        return undefined;
    }
}

var genFromTo = fromTo(11, 13);
console.log("1. genFromTo() = ", genFromTo());
console.log("2. genFromTo() = ", genFromTo());
console.log("3. genFromTo() = ", genFromTo());
console.log("4. genFromTo() = ", genFromTo());

//13.
var element = function(ar, gen) {
    return function() {
        var idx = gen();
        if(idx < ar?.length) {
            return ar[idx];
        }
        return undefined;
    }
}

var ele = element(['apple', 'banana', 'corn', 'drink', 'eat'], fromTo(1,4));
console.log("0. ele()", ele());
console.log("1. ele()", ele());
console.log("2. ele()", ele());
console.log("3. ele()", ele());
console.log("4. ele()", ele());
console.log("5. ele()", ele());

//14.
var elementN = function(ar, gen) {
    var n = 0;
    return function() {
        var idx = (gen !== undefined) ? gen() : n++;
        if(idx < ar?.length) {
            return ar[idx];
        }
        return undefined;
    }
}

var ele = elementN(['apple', 'banana', 'corn', 'drink', 'eat']);
console.log("0. ele()", ele());
console.log("1. ele()", ele());
console.log("2. ele()", ele());
console.log("3. ele()", ele());
console.log("4. ele()", ele());
console.log("5. ele()", ele());

var ele2 = elementN(['apple', 'banana', 'corn', 'drink', 'eat'], fromTo(1,4));
console.log("0. ele()", ele2());
console.log("1. ele()", ele2());
console.log("2. ele()", ele2());
console.log("3. ele()", ele2());
console.log("4. ele()", ele2());
console.log("5. ele()", ele2());

//15.
var collect = function(gen, ar) {
    return function() {
        var elem = gen();
        if(elem !== undefined) {
            ar.push(elem);
        }        
    }
}

var array = [], col = collect(fromTo(0,2), array);
col();
col();
col();
col();
console.log("array: ", array);

//16.
var filter = function(gen, pred) {
    return function() {        
        do {
            var n = gen();
            var result = pred(n);
            if(result) {
                return n;
            }
            else {
                n = gen();
                result = pred(n);
            }
        }while(result !== undefined);
        return undefined;
    }
}

var fil = filter(fromTo(0, 11), function third(value) {    
    return (value === undefined) ? undefined : ((value % 3) === 0);
});
console.log("0. fil(): ", fil());
console.log("1. fil(): ", fil());
console.log("2. fil(): ", fil());
console.log("3. fil(): ", fil());
console.log("4. fil(): ", fil());
console.log("5. fil(): ", fil());

//17.
var concat = function(gen1, gen2) {
    return function() {
        var n = gen1();
        if(n === undefined) {
            n = gen2();
        }
        return n;
    }
}

var con = concat(fromTo(0,5), fromTo(3,7));
for(var i = 0; i < 12; i++) {
    console.log(i + " con(): ", con());
}

//18.
var gensymf = function(a) {
    var n = 1;
    return function() {
        return a + (n++);
    }
}

var geng = gensymf("G"), genh = gensymf("H");
console.log("1. geng(): ", geng());
console.log("1. geng(): ", genh());
console.log("2. geng(): ", geng());
console.log("2. geng(): ", genh());

//19.
var gensymff = function(fn, n) {
    return function(ch) {
        return ch + fn(n);
    }
}
var gensymf1 = gensymff(inc, 0);
var geng = gensymf("G"), genh = gensymf("H");
console.log("1. geng(): ", geng());
console.log("1. geng(): ", genh());
console.log("2. geng(): ", geng());
console.log("2. geng(): ", genh());

//20.
var fibonaccif = function(m, n) {    
    var i = 1;
    return function() {
        if(i == 1) {
            i--;
            return m;
        }
        else if(i == 0) {
            i--;
            return n;
        }
        else {
            var p = m + n;
            m = n;
            n = p;        
            return p;
        }
    }
}

var fib = fibonaccif(0, 1);
console.log("0. fib(): ", fib());
console.log("1. fib(): ", fib());
console.log("2. fib(): ", fib());
console.log("3. fib(): ", fib());
console.log("4. fib(): ", fib());
console.log("5. fib(): ", fib());
console.log("6. fib(): ", fib());
console.log("7. fib(): ", fib());
