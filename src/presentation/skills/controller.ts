import { Request, Response } from "express";
import { prisma } from "../../data/postgres";

export class SkillsController {

    constructor(
        // DI
    ) {}

    public getSkills = async(req: Request, res: Response) => {
        try {
            const skills = await prisma.skills.findMany();
            res.status(200).json(skills);
        } catch (error: any) {
            res.status(400).json({
                error: error.message
            })
        }
    }

    public createSkills = async(req: Request, res: Response) => {
        try {
            const { skills } = req.body;
            
            const skillCreate = await prisma.skills.createMany({
                data: skills.map( (skill: string) => ({text: skill})),
                skipDuplicates: true
            })
            if(skillCreate && skillCreate.count == 0 ) throw new Error("not created")
            res.status(201).json({message: "created skills"});
        } catch (error:any) {
            res.status(400).json({
                error: error.message
            })
        }
    }

}