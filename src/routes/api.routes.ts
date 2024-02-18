import { Router } from "express";
import { getApi, putApi, postApi, patchApi, deleteApi } from "../controllers/api.controller";

const apiRouter = Router();

apiRouter.get("/", getApi);
apiRouter.post("/", postApi);
apiRouter.put("/", putApi);
apiRouter.patch("/", patchApi);
apiRouter.delete("/", deleteApi);

export default apiRouter;


