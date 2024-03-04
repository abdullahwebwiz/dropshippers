let username = process.env.MDB_USERNAME;
let password = process.env.MDB_PASSWORD;
export const mdb_url =
  "mongodb+srv://"+username+":"+password+"@cluster0.ilozf3a.mongodb.net/mydata?retryWrites=true&w=majority&appName=Cluster0";
