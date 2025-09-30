import { Router } from "express";
import { BlogsController } from "./controller";
import { authMiddleware } from "../../middleware/authMiddleware";

export class BlogsRoutes {

    static get routes(): Router {

        const router = Router();
        const blogsController = new BlogsController();
            
        router.get( '/' , blogsController.getBlogs );
        router.post("/", authMiddleware, blogsController.createBlog );

        return router;
    }

}