import { Router } from "express";
import { SkillsController } from "./controller";
import { authMiddleware } from "../../middleware/authMiddleware";


export class SkillsRouter {

    static get routes():Router {
        const router = Router();
        const skillsController = new SkillsController();
        
        router.get("/", skillsController.getSkills );
        router.post("/", authMiddleware, skillsController.createSkills );

        return router;
    }

}