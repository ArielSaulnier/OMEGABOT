import express, {Express} from 'express';
import cors from 'cors';
import session from 'express-session';
import routes from '../routes';


const app = express();

export function createApp(): Express {
    const app = express();
    // Enable parsing middleware for request
    app.use(express.json());
    app.use(express.urlencoded());

    // Enable cors
    app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

    app.use(session({
        secret: 'SEIDOQFUHGV0AIQUEZHFPGVOHISNPDFVIUIHVQPOSIFHGVPQBGEF',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 60000 * 60 * 24 *7,
        },
    }));

    app.use('/api', routes);
    return app;
}