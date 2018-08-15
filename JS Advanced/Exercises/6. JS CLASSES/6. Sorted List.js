class SortedList {
    constructor(){
        this.result = [];
        this.size = 0;
        this.sorting = (a, b) => a-b;
    }
    add(element){
        this.result.push(element);
        this.result.sort(this.sorting);
        this.size++;
    }

    remove(index){
        if(index >= 0 && index < this.result.length){
            this.result.splice(index, 1);
            this.size--;
        }
    }

    get(index){
        if(index >= 0 && index < this.result.length){
            return this.result[index];
        }
    }
}

let list = new SortedList();
list.add(25);
list.add(15);
list.add(35);
list.remove(1);
console.log(list);