import { Request, Response } from "express"


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

}