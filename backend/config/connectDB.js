const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://fizz007:monish007@cluster0.811aqop.mongodb.net/', {
    dbName: "webelight"
})
.then(()=> {
console.log('connection db succesful')
})
.catch((err)=> {
    console.log(`Error: ${err.message}`)
})