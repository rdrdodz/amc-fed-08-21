let ourEmployees = {
    counter : 0,
    emp : ["Jim", "Sid", "Tim"],
    reset : function(){this.counter = 0},
    insert : function(ne){
                this.emp.push(ne);
            },
    next : function(){
                if(this.counter < this.emp.length){
                    return {
                                value : this.emp[this.counter++],
                                done : this.counter === this.emp.length
                            };
                }
            } 
};

console.log(ourEmployees.next());
console.log(ourEmployees.next());
ourEmployees.reset();
console.log(ourEmployees.next());
console.log(ourEmployees.next());
console.log(ourEmployees.next());
console.log("/////////////////////");
///////////////////

let ourEmployees2 = {
    emp : ["Jim", "Sid", "Tim"],
    x : function*(){
                let i = 0;
                while(i < this.emp.length){
                    yield this.emp[i++];
                }
            } 
};

var it = ourEmployees2.x();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log("/////////////////////");
////////////////////////

let ourEmployees3 = {
    emp : ["Jim", "Sid", "Tim"],
    [Symbol.iterator] : function*(){
                let i = 0;
                while(i < this.emp.length){
                    yield this.emp[i++];
                }
            } 
};

for(var emp of ourEmployees3){
    console.log(emp);
}