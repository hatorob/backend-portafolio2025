import { Request, Response } from "express"
import { prisma } from "../../data/postgres";
import { CreateBlogDto } from "../../domain/dtos";


export class BlogsController {

    /**
     * DI
     */
    constructor(
        
    ) {}


    public getBlogs = async(req: Request, res: Response) => {
        try {
            const blogs = await prisma.blogs.findMany({
                include: {
                    Skills: true
                }
            });
            if(!blogs) throw new Error("not found blogs");
            res.status(200).json(blogs)
        } catch (error: any) {
            res.status(400).json({
                error: error.message
            })
        }
    }

    public createBlog = async( req: Request, res: Response) => {
        try {
            const [ error, createBlogDto ] = CreateBlogDto.create(req.body);
            if(error) return res.status(400).json({error});
            const { skills, ...data } = createBlogDto!;
            const blog = await prisma.blogs.create({
                data: {
                    ...data,
                    Skills: {
                        connectOrCreate: skills.map( (skill:string) => ({
                            where: { text: skill.toLowerCase() },
                            create: { text: skill.toLowerCase() }
                        }))
                    }
                }
            });
            console.log({blog});
            res.status(201).json({message: "created blog"});
        } catch (error) {
            
        }
    }

}