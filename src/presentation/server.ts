import express from "express";

export class Server {

    private app = express();

    async start() {
        
        this.app.listen(8080, () => {
            console.log(`Server running on port ${8080}`);
        })

    }


}