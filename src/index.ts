import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes';
import GenericError from './middlewares/handleGenericsErrors';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(routes);
    this.app.use(new GenericError().handleError);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Escutando porta ${PORT}`));
  }
}

export { App };

export const { app } = new App();
