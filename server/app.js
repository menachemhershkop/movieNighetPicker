import express from 'express';
import cors from 'cors';
import movie from "./data/data.json" with {type:"json"}


const app = express();
app.use(cors());
app.use(express.json());



app.get('/api/movie',(res, req)=>{
    req.send(movie)
})


app.listen(3000, ()=>{
    console.log('listining');
    
})