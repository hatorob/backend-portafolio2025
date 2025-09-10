import { Router } from "express";
import { BlogsRoutes } from "./blogs/routes";


export class AppRoutes {

    static get routes(): Router {

        const pathInicial = '/api';
        const router = Router();
        /* Rutas */    
        router.use( `${pathInicial}/blogs`, BlogsRoutes.routes );

        return router;

    }

}