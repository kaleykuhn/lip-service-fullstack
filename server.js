require("dotenv").config();
const mysql = require("mysql");

const connection = mysql.createConnection({
   host: process.env.RDS_HOST,
   user: process.env.RDS_USER,
   password: process.env.RDS_PASSWORD,
   database: "lip_service",
});

connection.connect();

connection.query(
   `
   SELECT 
        users.id AS user_id, 
        users.email,
        xref_user_tags.tag_id 
    FROM 
        users 
    INNER JOIN 
        xref_user_tags ON user_id = users.id 
    INNER JOIN 
        tags ON tags.id = xref_user_tags.tag_id 
    WHERE 
        users.id = 'd9d40e8b-d863-4718-87ee-264df43e7057'
    `,
   (err, res, fields) => {
      if (err) {
         console.log(err);
      } else {
         console.log(res);
      }
   }
);

connection.end();
