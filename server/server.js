const fs = require('fs').promises;

const express = require('express');
const app = express();
const PORT = 3030; //3030 Repeater here...

app.use(express.json());

app.get('/health', (req, res) => {
    //To verify the server is working correctly...
    //curl localhost:PORT/health -I
    res.status(204).send(); //204 No Content
});

app.get('/api/getPlayersFromFile/:filename', async (req, res) => {
    res.json(await fs.readFile("../data/" + req.params.filename, 'utf-8'));
})

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})



