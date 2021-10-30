//HW Please study about Priority Queus and also about 
//classes in JS 
//try convering this code into a class 

//we have a list of items and the list is dynamic 
//means that we are add new elements to it and 
//removing max out of it 
//how can we do it?
//we do it by max heap

//simple solution without classes 

var q = [];

function getMax(){
    return q[0];
}

function consume(){
    if(q.length === 1){
        return q.pop();
    }
    
    let pick = q[0];
    q[0] = q.pop();
    var pi = 0; 
    var li = 2*pi+1;
    var ri = 2*pi+2;
    var ci = (ri < q.length && q[ri] > q[li] ) ? ri : li;
    var tmp;

    while(ci < q.length && q[pi] < q[ci]){
        tmp = q[ci];
        q[ci] = q[pi];
        q[pi] = tmp;

        pi = ci; 
        li = 2*pi+1;
        ri = 2*pi+2;
        ci = (ri < q.length && q[ri] > q[li] ) ? ri : li;
    }
    return pick;
}

function isEmpty(){
    return q.length === 0;
}

function insert(e){
    q.push(e);
    var ci = q.length - 1;
    var pi = Math.floor((ci+1)/2) - 1;
    var tmp;

    while(pi >= 0 && q[pi] < q[ci]){
        tmp = q[ci];
        q[ci] = q[pi];
        q[pi] = tmp;

        ci = pi;
        pi = Math.floor((ci+1)/2) - 1;

    }

}


insert(2);
insert(1);
insert(10);
insert(15);
insert(5);
insert(17);
console.log(getMax());
console.log(consume());
console.log(getMax());
insert(12);
console.log(getMax());
console.log(consume());
console.log(getMax());




