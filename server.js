const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config({ path : "./config.env"});
const port = process.env.PORT || 5000;

// use middleware
app.use(cors());
app.use(express.json());

// mongodb connection
const con = require('./db/connection.js');

// using routes
app.use(require('./routes/route'));

con.then(db => {
    if(!db) return process.exit(1);

    // listen to the http server 
    app.listen(port, () => {
        console.log(`Server is running on port: http://localhost:${port}`)
    })

    app.on('error', err => console.log(`Failed To Connect with HTTP Server : ${err}`));
    // error in mondb connection
}).catch(error => {
    console.log(`Connection Failed...! ${error}`);
});

app.get("/",(req,res)=>{
    res.send({message: "Submitted and coded by Jagadeesh Kumar . S, you may send mail to my email address which is jagadeesh_2k17@proton.me, you may contribute some money to my Indian Unified Payment Interface (UPI) which is jagadeesh-kumar@ybl ."})
})




