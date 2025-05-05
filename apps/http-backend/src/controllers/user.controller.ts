import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'


function userSignin(req: Request,res: Response, next: NextFunction){
    const {username, password} = req.body;
    if(!username || !password){
        return res.status(301).json({
            message: "Username and password is required"
        })
    }
    //zod validation
    //db call


    return res.status(200).json({
        message: "User signed in successfully"
    })

}

function userSignup(req: Request, res: Response){
    const {username, password} = req.body;
    if(!username || !password){
        return res.status(301).json({
            message: "Username and password is required"
        })
    }

    //zod validation
    //db calls

    return res.status(200).json({
        message: "User signed in successfully"
    })    
}

export {
    userSignin,
    userSignup
}