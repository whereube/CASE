const {Client} = require('pg')

const client = new Client({
    host: 'localhost',
    user: 'teodor',
    port: 5432,
    password: 'freebird',
    database: 'carshop'
})
client.connect();

client.query('select * from employees', (err, res)=>{
    if(!err){
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    client.end;
})


