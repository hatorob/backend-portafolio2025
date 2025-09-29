import { Router } from "express";
import { ProjectsController } from "./controller";


export class ProjectRoutes {
    static get routes():Router {
        const router = Router();
        const projectsController = new ProjectsController();
        router.get("/", projectsController.getProjects );
        router.post("/", projectsController.createProject );
        return router;
    }    
}