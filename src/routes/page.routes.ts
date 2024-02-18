import { Router } from "express";
import { home } from "../controllers/page.controller";

const pageRouter = Router();

pageRouter.get("*", home);


export default pageRouter;
