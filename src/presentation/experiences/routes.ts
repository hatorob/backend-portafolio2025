import { Router } from "express"
import { ExperiencesConstroller } from "./controller";
import { authMiddleware } from "../../middleware/authMiddleware";

export class ExperiencesRouter {

    static get routes():Router {
        const router = Router();
        const experiencesController = new ExperiencesConstroller();

        router.get("/", experiencesController.getExperiences );
        router.post("/", authMiddleware, experiencesController.createExperience );

        return router;
    }
}