import { ReqRes } from "../interfaces/http-express";

const getApi:ReqRes = (req, res)=>{
    return res.status(200).json({"message":"GET api"});
};

const postApi:ReqRes = (req, res)=>{
    return res.status(200).json({"message":"POST api"});
};

const putApi:ReqRes = (req, res)=>{
    return res.status(200).json({"message":"PUT api"});
};

const patchApi:ReqRes = (req, res)=>{
    return res.status(200).json({"message":"Patch api"});
};

const deleteApi:ReqRes = (req, res)=>{
    return res.status(200).json({"message":"POST api"});
};

export{ getApi, putApi, postApi, deleteApi, patchApi }



