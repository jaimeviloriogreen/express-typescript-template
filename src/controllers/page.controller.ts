import { ReqRes } from "../interfaces/http-express";

const { pathname:index } = new URL("../public/index.html", import.meta.url);

const home:ReqRes = (req, res)=>{
    return res.sendFile(index);
};


export{home}