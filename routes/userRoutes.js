import { login, userRegistration } from "../controllers/user.controller.js";


export function userRoutes(app){
    app.post("/register",userRegistration)
    app.post("/login",login)
}