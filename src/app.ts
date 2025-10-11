import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import path from 'path';
import helmet from 'helmet';
import morgan from 'morgan';
import middlewares from '~/middlewares/_index';
import router from '~/routes/_index';
import config from '~/configs/_index';

const app: express.Application = express();

// Cors
app.use(cors(config.corsOptions as cors.CorsOptions));

// Public Directory
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser
app.use(express.json());

// Logger
app.use(morgan('dev'));

// Secure HTTP Headers
app.use(helmet());

// Cookie Parser
app.use(cookieParser());

app.use('/api', router);

// Not found middleware
app.use(middlewares.notFoundHandler);

// Error Handling Middlewares
app.use(middlewares.errorHandler);

export default app;
