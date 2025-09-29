import { Router } from "express";
import { BlogsRoutes } from "./blogs/routes";
import { SkillsRouter } from "./skills/routes";
import { ExperiencesRouter } from "./experiences/routes";
import { ProjectRoutes } from "./projects/routes";


export class AppRoutes {

    static get routes(): Router {

        const pathInicial = '/api';
        const router = Router();
        /* Rutas */    
        router.use( `${pathInicial}/blogs`, BlogsRoutes.routes );
        router.use( `${pathInicial}/skills`, SkillsRouter.routes );
        router.use( `${pathInicial}/experiences`, ExperiencesRouter.routes );
        router.use( `${pathInicial}/projects`, ProjectRoutes.routes );

        return router;

    }

}