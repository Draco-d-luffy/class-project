const express = require('express')
const homePageRouter = require('./App/routes/homePageRouter')
const ejs = require("ejs");
const path = require("path");

const app = express()

app.set('view engine','ejs')
app.set('views','views')
app.use(express.static(path.join(__dirname, "public")));
app.use(homePageRouter)

const prompt =3009
app.listen(prompt,()=>{
 console.log(`Server running in http:/localhost:${prompt}`)
})