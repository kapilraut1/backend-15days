const fs = require('fs');
const path = require('path');
const rootDir = require("../utils/pathUtil");

let registeredAddress=[];

module.exports = class Homes{
    constructor(name){
this.name = name;
    }


    save(){
        registeredAddress.push(this.name);
        const filePath= path.join(rootDir, 'data', 'homes.json');
        fs.writeFile(filePath, JSON.stringify(registeredAddress), (err)=>{
            console.log(err);
        })
    }

    static fetchAll(){
        const homePath = path.join(rootDir, 'data', 'homes.json');
        fs.readFile(homePath, (err, data)=>{
            if(err){
                console.log(err);
                return registeredAddress;
            }
            registeredAddress = JSON.parse(data);
        })

        return registeredAddress;
    }
}

