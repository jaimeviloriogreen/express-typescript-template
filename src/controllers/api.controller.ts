import { Response, Request } from "express";

const getApi = (req:Request, res:Response)=>{
    return res.status(200).json({"message":"GET api"});
};

const postApi = (req:Request, res:Response)=>{
    return res.status(200).json({"message":"POST api"});
};

const putApi = (req:Request, res:Response)=>{
    return res.status(200).json({"message":"PUT api"});
};

const patchApi = (req:Request, res:Response)=>{
    return res.status(200).json({"message":"Patch api"});
};

const deleteApi = (req:Request, res:Response)=>{
    return res.status(200).json({"message":"POST api"});
};

export{ getApi, putApi, postApi, deleteApi, patchApi }



