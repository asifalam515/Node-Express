import { error } from 'console'
import express, { NextFunction, Request, Response } from 'express'
import { ResolveFnOutput } from 'module'
const app = express()
// parsers
app.use(express.json())
app.use(express.text())

// router
const userRouter = express.Router()
const courseRouter = express.Router()
const postRouter =express.Router()
app.use("/api/v1/courses",courseRouter)
app.use("/",userRouter)
app.use("/api/v1/posts",postRouter)



postRouter.post("/create-post",(req:Request,res:Response)=>{
    const post = req.body
    console.log(post)
    res.json({
        success:true,
        message:"post created successfully",
        data:post
    })
})

userRouter.get('/api/v1/users/create-user',(req:Request,res:Response)=>{
    const user = req.body
    console.log(user)
    res.json({
        success:true,
        message:"User is Created Successfully",
        data:user
    })
})


courseRouter.post("/create-course",(req:Request,res:Response)=>{
    const course = req.body
    console.log(course)
    res.json({
        success:true,
        message:"user is created successfully",
        data:course
    })
})


// create middleware
const logger = (req:Request,res:Response,next:NextFunction)=>{
console.log(req.url,req.method,req.hostname)
next()
}

app.get('/',logger,async (req:Request, res:Response,next:NextFunction) => {
  try{
    console.log(req.query)
    res.send(something)
  }catch(err){
    
    next(error)
    // res.status(400).json({
    //     success:false,
    //     message:'failed to get data'
    // })
  }

})


app.post("/",logger,(req:Request,res:Response)=>{
console.log(req.body)
// res.send("got data")
res.json({
    message:"successfully received data"
})
})

app.all("*",(req:Request,res:Response )=>{
    res.status(400).json({
        success:false,
        message:"Route is not found"
    })
})
// global error handler
app.use((error:any,req:Request,res:Response,next:NextFunction)=>{
    if(error){
     res.status(400).json({
         sucess:false,
         message:"something went wrong"
     })
    }
 })
 
export default app