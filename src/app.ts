import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { Routes } from './interfaces/routes.interfaces';
import { ErrorMiddleware } from './middleware/error.middleware';
import { NODE_ENV, PORT } from './config';

export class App {
    public app: Application;
    private env: string;
    private port: string | number;

    constructor(routes: Routes[]) {
        this.app = express();
        this.env = NODE_ENV || 'development';
        this.port = PORT || 3000;

        this.initializeMiddlewares(); // Initialize middlewares (logging, parsing, etc.)
        this.initializeRoutes(routes); // Initialize API routes
        this.initializeErrorHandling(); // Setup error handling middleware
    }

    public listener(): void {
        if (process.env.NODE_ENV !== 'test') {
            this.app.listen(this.port, () => {
                console.log(`App is running in ${this.env} mode on port ${this.port}`);
            });
        }
    }

    private initializeMiddlewares(): void {
        this.app.use(cors()); // CORS
        this.app.use(helmet()); // Security headers
        // this.app.use(cookieParser()); // Parse cookies
        this.app.use(express.json()); // Parse JSON bodies
        this.app.use(express.urlencoded({ extended: true })); // Parse URL encoded bodies
    }

    private initializeRoutes(routes: Routes[]): void {
        routes.forEach((route) => {
            if (route.path) {
                this.app.use(route.path, route.router);

            }
            else {
                this.app.use('/', route.router);
            }
        });
    }

    private initializeErrorHandling(): void {
        this.app.use(ErrorMiddleware);
    }
}
