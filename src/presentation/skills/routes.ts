import { Router } from "express";
import { SkillsController } from "./controller";


export class SkillsRouter {

    static get routes():Router {
        const router = Router();
        const skillsController = new SkillsController();
        
        router.get("/", skillsController.getSkills );
        router.post("/", skillsController.createSkills );

        return router;
    }

}