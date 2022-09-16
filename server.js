const express = require('express')
const app = express()

app.set("view engine", "ejs")

const {Client} = require('pg')

const client = new Client({
    host: 'localhost',
    user: 'teodor',
    port: 5432,
    password: 'freebird',
    database: 'carshop'
})
client.connect();

app.get("/", (req, res) => {
    
    client.query('select * from employees', (err, res)=>{
        let data = res.rows
        client.end;
    })    
    console.log(res.rows)
    res.render("index", {data: res.rows})
})

app.listen(process.env.PORT || 3000)