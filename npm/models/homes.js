
let registeredAddress=[];

module.exports = class Homes{
    constructor(name){
this.name = name;
    }


    save(){
        registeredAddress.push(this.name);
    }

    static fetchAll(){
        console.log("fetching all homes", registeredAddress)
        return registeredAddress;
    }
}

