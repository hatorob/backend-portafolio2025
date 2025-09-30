import { Router } from "express";
import { UsersController } from "./controller";
import { authMiddleware } from "../../middleware/authMiddleware";

export class UsersRoutes {
    static get routes():Router {
        const router = Router();
        const usersController = new UsersController();
        router.post( "/", authMiddleware, usersController.createUser );
        return router;
    }
}