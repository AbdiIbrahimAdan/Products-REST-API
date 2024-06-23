import pkg from 'pg';

const {Pool} = pkg;
const pool = new Pool({
    user: "postgres",
    password: "abdi",
    host: "localhost",
    port: 5432,
    database: "productdb"
})

export default pool;