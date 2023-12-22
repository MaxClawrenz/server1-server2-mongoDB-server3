    import express from "express";
    import sendStatus from "./sendStatus.js";
    import mongoose from "mongoose";
    import Record from "./Record.js";

    const PORT = 3200;
    const DB_URL = 'mongodb+srv://user:user@cluster0.vlkjdyk.mongodb.net/?retryWrites=true&w=majority';

    const app = express();
    app.use(express.json())

    app.post('/', async (req, res) => {
    try {
        const findRecord = await Record.findOne({record: req.body.data.record});
        if(!findRecord){
            const record = await Record.create(req.body.data);
            sendStatus(res, record);
        }else{
            sendStatus(res, {error:"Значение уже есть в базе"});
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
    })

    async function startWithConnect(){
        try {
            await mongoose.connect(DB_URL);
            app.listen(PORT, ()=>console.log('Server2 is working too!'))
        } catch (error) {
            console.log(error)
        }
    }

    startWithConnect()