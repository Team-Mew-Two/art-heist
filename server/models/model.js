const { Pool } = require('pg');

const myURI = 'postgres://tpfsgywi:Wb66RdJnBywAwLKVYP_pdYhWUtLNKm2S@drona.db.elephantsql.com:5432/tpfsgywi';

const pool = new Pool({
    connectionString: myURI,
  });

  pool.query(`CREATE TABLE IF NOT EXISTS Users(
      userID INTEGER SERIAL PRIMARY KEY NOT NULL, 
      name VARCHAR(255) NOT NULL, 
      email VARCHAR(255),
      password VARCHAR(150)
  );`);

//   pool.query(`CREATE TABLE IF NOT EXISTS Items(
//     userID INTEGER SERIAL PRIMARY KEY NOT NULL, 
//     name VARCHAR(255) NOT NULL, 
//     email VARCHAR(255),
//     password VARCHAR(60)
// );`);

module.exports = { 
    query: function(query, params, func){
    return pool.query(query, params, func);
  },
};