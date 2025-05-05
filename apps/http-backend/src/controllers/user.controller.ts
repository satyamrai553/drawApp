import { Request, Response, NextFunction } from 'express';
import {CreateUserSchema, SigninSchema, CreateRoomSchema} from "@repo/common/types"


function userSignin(req: Request,res: Response, next: NextFunction): void{
    const data = SigninSchema.safeParse(req.body);
    if(!data.success){
        res.status(301).json({
            message: "Username and password is required"
        })
        return;
    }
    const {username, password} = req.body;
    if(!username || !password){
         res.status(301).json({
            message: "Username and password is required"
        })
        return;
    }
    //zod validation
    //db call


    res.status(200).json({
        message: "User signed in successfully"
    })

}

function userSignup(req: Request, res: Response): void {
    const result = CreateUserSchema.safeParse(req.body);

    if (!result.success) {
         res.status(400).json({
            message: "Validation failed",
            errors: result.error.format()
        });
        return;
    }

    const { username, password } = result.data;

    // Proceed with DB call or other logic


    res.status(200).json({
        message: "User signed up successfully",
        username
    });
}

function createRoom(req: Request, res: Response): void{
    const result = CreateRoomSchema.safeParse(req.body);
    if(!result.success){
        res.status(400).json({
            message: "Incorrect inputs"
        })
        return;
    }
    //db calls

    res.status(200).json({
        message: "Room created successfully",
        userId:"123"
    })
}

export {
    userSignin,
    userSignup,
    createRoom
}