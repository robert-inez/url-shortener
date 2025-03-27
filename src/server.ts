import { App } from './app';
import { AliveCheckRoute } from './routes/aliveCheck.route';

export const app = new App([
    new AliveCheckRoute(),
]);

app.listener();
