import { Router } from 'express';
import { AliveCheckController } from '../controllers/aliveCheck.controller';
import { Routes } from '../interfaces/routes.interfaces';

export class AliveCheckRoute implements Routes {
    public path = '/alive';
    public router = Router();
    public alive = new AliveCheckController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/', this.alive.alive);
    }
}
