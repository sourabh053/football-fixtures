const mysql = require('mysql2/promise');
// const dotenv = require("dotenv").config();

// const db = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME
// });
const urlDB = `mysql://root:AqhtMaTbcpIvFOdVdnEtYUIspnCdHWVH@roundhouse.proxy.rlwy.net:47354/railway`
const db = mysql.createPool(urlDB);

// db.connect((err) => {
//   if (err) {
//     console.error('Database connection failed: ' + err.stack);
//     return;
//   }
//   console.log('Connected to database.');
// });

module.exports = db;
