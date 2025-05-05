import { Router, type Express } from "express";
import type { Router as ExpressRouter } from "express";


import {userSignin , userSignup, createRoom} from '../controllers/user.controller'

const router: ExpressRouter = Router()

router.route("/signin").post(userSignin)
router.route("/signup").post(userSignup)
router.route("/room").post(createRoom)


export default router;

