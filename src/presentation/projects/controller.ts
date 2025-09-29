import { Request, Response } from "express"
import { prisma } from "../../data/postgres";

export class ProjectsController {
    constructor(
        //DI
    ) {}

    public getProjects = async(req:Request, res:Response) => {
        try {
            const projects = await prisma.projects.findMany({
                include: {
                    Skills: true
                }
            });
            if(!projects) throw new Error("Not found projects");
            const resp = projects.map( (project:any) => {
                const { Skills, ...obj } = project;
                return {
                    ...obj,
                    skills: Skills.map( (skill: any) => (skill.text))
                }
            })
            res.status(200).json(resp);
        } catch (error: any) {
            res.status(400).json({
                error: error.message
            })
        }
    }

    public createProject = async(req:Request, res:Response) => {
        try {
            const { skills, ...data } = req.body;
            const project = await prisma.projects.create({
                data: {
                    ...data,
                    Skills: {
                        connectOrCreate: skills.map((skill: string) => ({
                            where: { text: skill.toLowerCase() },
                            create: { text: skill.toLowerCase() },
                        }))
                    }
                }
            });
            if(!project) throw new Error("not created Project");
            res.status(201).json({message:"created project"});
        } catch (error: any) {
            res.status(400).json({
                error: error.message
            })
        }
    }
}