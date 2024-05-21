import express, { Request, Response } from 'express';
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('This is project mongoose - assignment 2');
});

export default app;
