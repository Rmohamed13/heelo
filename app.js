import express, { Router } from 'express';
import cookieParser from 'cookie-parser'
const app = express();
const port = 8081;



app.use(express.json());
app.use(cookieParser());

app.listen(port, () => {
    console.log(`server listening on ${port}.`)
})



app.get("/login", (request, response) => {
    if(request.cookies.username === undefined){
      response.cookie("username", "Pablo")
      response.send("LOGIN")
    } else {
      response.send(`${request.cookies.username}, you are already logged in!`)
    }
})

app.get("/hello", (request, response) => {
     if(request.cookies.username !== undefined){
        response.send(`Hello, ${request.cookies.username}`)
     } else {
        response.send(`You need to login!`)
     }
})
    //  app.get("/login", (request, response) => {
         
    //      response.send("goodbye")
    // })
    //response.clearCookie("username")
   