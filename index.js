require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.get('/twitter', (req , res)=>{
res.send('AdityaMdotcom');
})
app.get('/login', (req, res) => {
    console.log('Login route accessed');
    res.send('user has logged in');
});
app.get('/youtube',(req,res)=>{
    res.send('youtuber Aditya Mohite Patil');
})

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
