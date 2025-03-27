import { Response, Request } from 'express';

export class AliveCheckController {
    public alive = async (_req: Request, res: Response): Promise<void> => {
        const host = process.env.HOST || 'localhost';
        const port = process.env.PORT || 'unknown';
        const nodeEnv = process.env.NODE_ENV || 'unknown';
        const branch = process.env.BRANCH_NAME || 'unknown';
        const commit = process.env.COMMIT_ID || 'unknown';

        res.status(200).json(
            `App is alive on server ${host} listening on port ${port} running as ${nodeEnv} with pid ${process.pid} on branch ${branch} with commit ID ${commit}`,
        );
    };
}
