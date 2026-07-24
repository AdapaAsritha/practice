const express = require("express"); 
const app = express(); 
app.get("/", (req, res) => { 
res.send("Hi Aasritha!"); 
}); 
app.listen(3000, () => { 
console.log("Server Running"); 
});