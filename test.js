const fs = require('fs')
let allContacts = []
let dataContacts = fs.readFileSync(__dirname +'/./contacts.csv', 'utf8').split('\n')
dataContacts.forEach(function(contact){
  let file = contact.split(",")
  let obj = {
    name: file[1],
    email: file[2],
    phone: file[3],
    createdAt: new Date(),
    deletedAt: new Date()
  }
  allContacts.push(obj)
 
})
console.log(allContacts)
