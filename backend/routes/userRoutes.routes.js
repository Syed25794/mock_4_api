const Router = require("express");

const User = require("../models/users.models");

const userRouter = Router();

const { registerUser , loginUser , getUserProfile , calculateEMI , logoutUser }  = require("./../controllers/users.controllers");

userRouter.post("/register",registerUser);

userRouter.post("/login",loginUser);

userRouter.get("/getProfile/:email",getUserProfile);

userRouter.post("/calculateEMI",calculateEMI);

userRouter.post("/logout",logoutUser);


module.exports= userRouter;