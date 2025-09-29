import { Router } from "express"
import { ExperiencesConstroller } from "./controller";

export class ExperiencesRouter {

    static get routes():Router {
        const router = Router();
        const experiencesController = new ExperiencesConstroller();

        router.get("/", experiencesController.getExperiences );
        router.post("/", experiencesController.createExperience );

        return router;
    }
}