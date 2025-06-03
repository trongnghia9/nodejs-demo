import express, { Application, Request, Response,Express } from 'express';
const Router = express.Router();

const webrouter = (app: Application) => {
    Router.get('/', (req: Request, res: Response) => {
        res.render('home', {
            title: 'Trang chủ',
            message: 'Chào mừng đến với ứng dụng Express.js'
        });
    });

    app.use('/', Router);
}

export default webrouter;



