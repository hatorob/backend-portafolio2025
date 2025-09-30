import { Router } from "express";
import { BlogsRoutes } from "./blogs/routes";
import { SkillsRouter } from "./skills/routes";
import { ExperiencesRouter } from "./experiences/routes";
import { ProjectRoutes } from "./projects/routes";
import { UsersRoutes } from "./users/routes";
import { AuthRoutes } from "./auth/controller";


export class AppRoutes {

    static get routes(): Router {

        const pathInicial = '/api';
        const router = Router();
        /* Rutas */    
        router.use( `${pathInicial}/users`, UsersRoutes.routes );
        router.use( `${pathInicial}/auth`, AuthRoutes.routes );
        router.use( `${pathInicial}/blogs`, BlogsRoutes.routes );
        router.use( `${pathInicial}/skills`, SkillsRouter.routes );
        router.use( `${pathInicial}/experiences`, ExperiencesRouter.routes );
        router.use( `${pathInicial}/projects`, ProjectRoutes.routes );

        return router;

    }

}