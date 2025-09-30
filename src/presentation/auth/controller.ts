import { Request, Response } from "express";
import { prisma } from "../../data/postgres";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { generateToken } from "../../utils/generateToken";

export class AuthController {

    constructor(
        //DI
    ){}

    public login = async(req:Request, res: Response) => {
        try {
            const { email, password } = req.body;
            const user = await prisma.users.findFirst({
                where: {
                    OR: [
                      { email: email },
                      { name: email }
                    ]
                }
            });
            if(!user) throw new Error("not found user");
            const token = generateToken(1);
            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch) throw new Error("error in password, is not matched");
            res.status(201).json({
                user: user.name,
                email: user.email,
                token,
            });
        } catch (error: any) {
            res.status(400).json({
                error: error.message
            })
        }
    }
}