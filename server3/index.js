import express from "express"

const PORT = 3300;

const app = express();
app.use(express.json());

app.post('/', (req, res) => {
    try {
        if(req.body.data.error){
            res.status(400).json(req.body.data);
        }else{
            res.status(200).json(req.body.data);
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

app.listen(PORT, ()=> console.log('3rd Server is working!'))