const express = require('express');
const path = require('path');
const hbs = require('hbs')
const app = express();
const port = process.env.PORT || 8000;

const static_path = path.join(__dirname,'../public');
const templatepath = path.join(__dirname, "../templates/views")
const partialpath = path.join(__dirname, "../templates/partials")

app.set('view engine','hbs');
app.set('views',templatepath);
hbs.registerPartials(partialpath);
app.use(express.static(static_path)); 

app.get("",(req,res)=>{
    res.render('index.hbs')
})

app.get("/weather",(req,res)=>{
    res.render('weather.hbs') 
})

app.get("*",(req,res)=>{
    res.render('404error.hbs',{
        errorMsg: 'Oops! Page Not Found.'
    })
})

app.listen(port, ()=>{
    console.log(`Server started on localhost:${port}`)
})
