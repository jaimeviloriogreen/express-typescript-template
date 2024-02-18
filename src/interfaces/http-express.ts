import { Response, Request } from "express";

export interface ReqRes{ 
    (req:Request, res:Response):Response | void 
}
