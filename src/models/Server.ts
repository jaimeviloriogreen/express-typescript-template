import express from "express";
import cors from "cors";
import "dotenv/config";
import apiRouter from "../routes/api.routes";
import pageRouter from "../routes/page.routes";

export default class Server{
    private app;
    private port:string|number;
    private apiPath:string;
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 4500;
        this.apiPath = "/api";

        // Middlewares
        this.middlewares();
        // Routes
        this.routes();
    };
    private middlewares():void{
        this.app.use(cors());
        this.app.use(express.json({type:"application/json"}));
        this.app.use(express.static("src/public"));
    };
    private routes():void{
        this.app.use(this.apiPath, apiRouter);
        this.app.use(pageRouter);
    };
    public listen():void{
        this.app.listen(this.port, ()=> console.log(`App running on port ${this.port}`));
    };
}