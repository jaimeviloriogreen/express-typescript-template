import { Response, Request } from "express";

const { pathname:index } = new URL("../public/index.html", import.meta.url);

const home = (req:Request, res:Response)=>{
    return res.sendFile(index);
};


export{home}