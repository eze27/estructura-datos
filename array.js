class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    pop(){
        const lastItem = this.data[this.length -1 ];
        delete this.data[this.length - 1];
        this.length--;
      return  lastItem;
    }
    delete(pos){
        const item = this.data[pos];
        this.shiftIndex(pos);
        return item;
    }
    shiftIndex(index){
        console.log('Hi');
        //i = 1;
        //this.data = 0 => Diego 1=>Karen 2=>Jose 3=>Judith  4=>Sofia
        //this.data[1] = Jose
        //this.data[2] = Judith
        //this.data[3] = Sofia
        //this.data[4] = Sofia
        for (let i = index; i < this.length - 1 ; i++) { 
            this.data[i] = this.data[i + 1 ];
        }
        //console.log('newArray ' , this.data );
        delete this.data[this.length - 1 ];
        this.length--;
    }
    //añade un nuevo elemento en la primera posicion
    unshift(item){
        for (let i = this.length; i > 0 ; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[0] = item;
        this.length++;
       return this.data;
    }
    
    //Elimina la primera posicion
    shift(){

    }
}

const myArray = new MyArray();
myArray.push("Diego");
myArray.push("Karen");
myArray.push("Jose");
myArray.push("Judith");
myArray.push("Sofia");
console.log(myArray);
//myArray.delete(1);
myArray.unshift("Sofia2");
console.log(myArray);