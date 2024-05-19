const http = require('http');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // Import body-parser
const app = express();
const path = require('path');
const port = 8000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const Detail = require('../models/db')

app.get('/',(req,res)=>{
    res.send('hello world');
})
    app.post('/empdata', async (req, res) => {

        try {
            const newUser = new Detail({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                conpassword: req.body.conpassword,
            });
    
            await newUser.save();
            res.status(201).json({ message: 'User created successfully' });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });


app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});