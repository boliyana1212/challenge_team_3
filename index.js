const express = require ('express');
const router = require('./routers/router');
const app = express()
const port = 3000;


// ViewEngine
app.set("view engine", "ejs");
app.set("views", "./views");

// // Express Static
app.use(express.static('public'))

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));



app.use(router)



app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})