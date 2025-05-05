import express from 'express'


const app = express()


app.listen("3000", ()=>{
    console.log("app is listening on: 3000")
})



import userRouter from './routers/user.router'
app.use("/user", userRouter);