import express, { Request, Response } from 'express';

const app = express();
const PORT = 4400;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello there, Typescript with Node.js!');
}); 

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})