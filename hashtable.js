class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }
    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
    set(key, value) {
        const address = this.hashMethod(key);
        console.log(key + '-hash= ' , address);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }
    get(key) {
        //Recuperar hash = 18
        const address = this.hashMethod(key);
        console.log(key + '-hash= ', address);
        //Recuperar data en base al hash = [ [ 'Ezequiel', 1992 ], [ 'Sofia', 1999 ] ]
        const currentBucket = this.data[address];
        console.log('currentBucket=', currentBucket);
        if (currentBucket) {
            //currentBucket = [ [ 'Ezequiel', 1992 ], [ 'Sofia', 1999 ] ]
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
    delete(key){
        const address = this.hashMethod(key);
        console.log(key + '-hash= ', address);
        //Recuperar data en base al hash = [ [ 'Ezequiel', 1992 ], [ 'Sofia', 1999 ] ]
        const currentBucket = this.data[address];
        console.log('currentBucket=', currentBucket);
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    const value = currentBucket[i];
                    currentBucket.splice(i, 1);
                    return value;
                }
            }
        }
        return undefined;
    }
    getAllKeys(){
        const allBucket = this.data;
        let   keys      = [];
        allBucket.forEach((value, index)=>{
            value.forEach( (value,index) => {
                keys.push(value[0]);
            })
        })

        return keys;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('Ezequiel',1992);
myHashTable.set('Eze', 1994);
myHashTable.set('Judith', 2000);
myHashTable.set('Sofia', 1999);
console.log(myHashTable.data);
myHashTable.get('Ezequiel');
myHashTable.delete('Ezequiel');
console.log(myHashTable.data);
console.log(myHashTable.getAllKeys());