import { Request, Response } from "express";
import { prisma } from "../../data/postgres";
import bcrypt from "bcrypt";

export class UsersController {

    constructor(
        //DI
    ){}

    public createUser = async(req:Request, res: Response) => {
        try {
            const { password, ...data } = req.body;
            
            if(!data.name) res.status(401).json({error: "name is required"});
            if(!data.email) res.status(401).json({error: "email is required"});
            if(!password) res.status(401).json({error: "password is required"});
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = {
                ...data,
                password: hashedPassword
            }
            const user = await prisma.users.create({
                data: newUser
            });
            if(!user) res.status(401).json({message: "no created user"});
            res.status(201).json({message: "created user!"});
        } catch (error: any) {
            res.status(400).json({
                error: error.message
            })
        }
    }
}