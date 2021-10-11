export class MaxHeap{
    constructor(){
        this.q = [];
    }

    getMax(){
        return this.q[0];
    }

    isEmpty(){
        return this.q.length === 0;
    }

    insert(e){
        this.q.push(e);
        var ci = this.q.length - 1;
        var pi = Math.floor((ci+1)/2) - 1;
        var tmp;
    
        while(pi >= 0 && this.q[pi] < this.q[ci]){
            tmp = this.q[ci];
            this.q[ci] = this.q[pi];
            this.q[pi] = tmp;
    
            ci = pi;
            pi = Math.floor((ci+1)/2) - 1;
    
        }
    
    }

    consume(){
        if(this.q.length === 1){
            return this.q.pop();
        }
        
        let pick = this.q[0];
        this.q[0] = this.q.pop();
        var pi = 0; 
        var li = 2*pi+1;
        var ri = 2*pi+2;
        var ci = (ri < this.q.length && this.q[ri] > this.q[li] ) ? ri : li;
        var tmp;
    
        while(ci < this.q.length && this.q[pi] < this.q[ci]){
            tmp = this.q[ci];
            this.q[ci] = this.q[pi];
            this.q[pi] = tmp;
    
            pi = ci; 
            li = 2*pi+1;
            ri = 2*pi+2;
            ci = (ri < this.q.length && this.q[ri] > this.q[li] ) ? ri : li;
        }
        return pick;
    }
}