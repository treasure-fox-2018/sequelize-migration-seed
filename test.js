const fs = require('fs')

// const contactsFile =  fs.readFileSync(__dirname + '/contacts.csv', 'utf8');

// const contacts = contactsFile.split('\n').reduce((result, data) => {
//   if (data !== '') {
//     const contact = data.split(',');
//     result.push({
//       name: contact[1],
//       email: contact[2],
//       phone: contact[3],
//     });
//   }
//   return result;
// }, []);
// console.log(contacts)

const addressesFile = fs.readFileSync(__dirname + '/addresses.csv', 'utf8');

const addresses = addressesFile.split('\n').reduce((result,data)=>{
    if(data != ''){
        const address = data.split(', ')
        result.push({
            street: address[1],
            city: address[2],
            zip_code: address[3],
        })
    }
    return result
}, [])

console.log(addresses)