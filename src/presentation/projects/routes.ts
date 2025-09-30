import { Router } from "express";
import { ProjectsController } from "./controller";
import { authMiddleware } from "../../middleware/authMiddleware";


export class ProjectRoutes {
    static get routes():Router {
        const router = Router();
        const projectsController = new ProjectsController();
        router.get("/", projectsController.getProjects );
        router.post("/", authMiddleware, projectsController.createProject );
        return router;
    }    
}