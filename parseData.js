const fs = require('fs');
const dataContacts = fs.readFileSync('./contacts.csv','utf8').split('\n');
const dataAddress = fs.readFileSync('./streets.csv','utf8').split('\n');
var dataArr = [];
var arrObj = [];


class Contact{
    constructor(name,email,phoneNumber){
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber
    }
}

class Street{
    constructor(street,city,zipCode){
        this.street = street;
        this.city = city;
        this.zipCode = zipCode; 
    }
}

class Parse{

    static contact(){

        for(let i = 0; i<dataContacts.length; i++){
            let dataSplit = dataContacts[i].split(',');
            dataArr.push(dataSplit);
        }
        
        for(let i = 0; i<dataArr.length; i++){
            var objContact = new Contact;
            var detailContact = dataArr[i];
            arrObj.push(objContact);
            for(let j = 0; i<detailContact.length; j++){
                objContact.name = detailContact[0];
                objContact.email = detailContact[1];
                objContact.phoneNumber = detailContact[2];
            }
        }
    }

    static address(){

        for(let i = 0; i<dataContacts.length; i++){
            let dataSplit = dataContacts[i].split(',');
            dataArr.push(dataSplit);
        }
        
        for(let i = 0; i<dataArr.length; i++){
            var objContact = new Contact;
            var detailContact = dataArr[i];
            arrObj.push(objContact);
            for(let j = 0; i<detailContact.length; j++){
                objContact.name = detailContact[0];
                objContact.email = detailContact[1];
                objContact.phoneNumber = detailContact[2];
            }
        }
    }



}


// console.log(dataContacts);
console.log(dataArr)

