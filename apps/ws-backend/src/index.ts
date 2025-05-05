import { WebSocketServer } from "ws";
import jwt from 'jsonwebtoken'
import {JWT_SECRET} from "@repo/backend-common/config"

const wss = new WebSocketServer({port: 8080})


wss.on("connection", function connection(ws,request){

    const url = request.url;
    if(url){
        return;
    }
    const queryParams = new URLSearchParams(url?.split('?')[1]);
    const token = queryParams.get('token') || "";
    if(!JWT_SECRET){
        throw new Error("JWT_SECRET is not defined.");
    }
    const decoded = jwt.verify(token, JWT_SECRET);
    if(typeof decoded === "string"){
        ws.close();
        return;
    }

    if(!decoded || !(decoded).userId){
        ws.close();
        return;
    }

    ws.on("message", function message(data){
        ws.send("pong")
    })
})