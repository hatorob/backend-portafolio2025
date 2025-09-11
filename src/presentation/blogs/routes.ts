import { Router } from "express";
import { BlogsController } from "./controller";

export class BlogsRoutes {

    static get routes(): Router {

        const router = Router();
        const blogsController = new BlogsController();
            
        router.get( '/' , blogsController.getTodo );
        router.post("/", blogsController.createBlog );

        return router;
    }

}