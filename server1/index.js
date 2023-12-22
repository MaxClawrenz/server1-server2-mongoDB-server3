import axios from "axios";
import express from "express";


const PORT = 3100;

const app = express();
app.use(express.json())

app.post('/', async (req, res) => {
    await axios.post('http://localhost:3200/', {data: req.body}, {validateStatus: status => status < 500})
    .then(response => res.status(response.status).json(response.data))
    .catch(error => {
        res.status(500).json(error.message)})
})

app.listen(PORT, ()=>console.log('Server is working!'))