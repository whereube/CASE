const Pool = require('pg').Pool;
const pool = require("./db");

const pool = new Pool({
    user: "postgres",
    password: "freebird",
    host: "localhost",
    port: 5432,
    database: "carshop"
});

module.export = pool;

