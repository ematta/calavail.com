import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import cookieParser from 'cookie-parser';
import { router as indexRouter } from './routes/index';
import { router as usersRouter } from './routes/users';

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);

export { app };
