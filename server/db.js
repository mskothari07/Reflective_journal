import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root", //faced problem in connecting so used a query for altering localhost and it worked
  password: "Blaze@12345",
  database: "blog",
});
