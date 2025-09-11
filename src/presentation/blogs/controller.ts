import { Request, Response } from "express"
import { prisma } from "../../data/postgres";
import { CreateBlogDto } from "../../domain/dtos";


export class BlogsController {

    /**
     * DI
     */
    constructor(
        
    ) {}


    public getTodo = (req: Request, res: Response) => {
        res.json([
            {id: 1, name: "hola"},
            {id: 2, name: "hola"},
            {id: 3, name: "hola"},
        ])
    }

    public createBlog = async( req: Request, res: Response) => {
        const [ error, createBlogDto ] = CreateBlogDto.create(req.body);
        if(error) return res.status(400).json({error});
        const blog = await prisma.blogs.create({
            data: createBlogDto!
        });
        res.status(200).json(blog);
    }

}