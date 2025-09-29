import { Request, Response } from "express";
import { prisma } from "../../data/postgres";

export class ExperiencesConstroller {
    
    constructor(
        //DI
    ) {}

    public getExperiences = async(req:Request, res:Response) => {
        try {
            const experiences = await prisma.experiences.findMany({
                include: {
                    ExperiencesResponsabilities: true,
                    Skills: true
                }
            })
            const resp = experiences.map( (exp:any) => {
                const { ExperiencesResponsabilities, Skills ,...obj } = exp;
                return {
                    ...obj,
                    responsabilities: ExperiencesResponsabilities.map( (el:any) =>(el.text)),
                    skills: Skills.map( (el:any) =>(el.text))
                }
            })
            res.status(200).json(resp);
        } catch (error:any) {
            res.status(400).json({
                error: error.message
            })
        }
    }

    public createExperience = async(req:Request, res:Response) => {
        try {
            const { responsabilities, skills, ...data } = req.body;
            const experience = await prisma.experiences.create({
                data: {
                    ...data,
                    ExperiencesResponsabilities: {
                        create: responsabilities.map( (res:string) =>({text: res}))
                    },
                    Skills: {
                        connectOrCreate: skills.map( (skill:string) =>({
                            where: { text: skill },
                            create: {text: skill }
                        }))
                    }
                }
            });
            console.log({experience});
            res.status(201).json({message: "created experience"});
        } catch (error: any) {
            res.status(400).json({
                error: error.message
            })
        }
    }

}