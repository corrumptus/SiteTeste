import express from 'express';
import cors from 'cors';
import sorvete from './Controllers/Sorveteria.js';

const app = express();

const port = 3000;

app.use(cors());

app.listen(port,()=>
{
    console.log(`Servidor rodando no endereço http://localhost:${port}`);
})

app.use(sorvete);

app.get('/',(req,res)=>
{
    res.status(200).send("Sistema de sorveteria em node js");
});