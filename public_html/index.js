const PORT = process.env.PORT || 3000
const express = require('../node_modules/express')
const cors = require('../node_modules/cors');
const corsOptions = {
    "origin": "*",
    optionsSuccessStatus: 200
}

const app = express()
let counters = {}

app.use(cors(corsOptions));

app.use((req, res, next) => {
    // Set the Access-Control-Allow-Origin header to allow requests from a specific origin
    res.setHeader('Access-Control-Allow-Origin', 'https://vuodenhuiputus.fi');
    // Set other CORS headers
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/', (req, res) => {
    res.json('Greenpeace Nordic API')
})

app.get('/SET', async (req, res) => {
    try {
        const { id } = req.query;

        // If the counter for this ID doesn't exist, initialize it to 0
        if (!counters[id]) {
            counters[id] = 0;
        }

        // Increment the counter for the specified ID
        counters[id]++;

        // Send response with the count for this ID
        res.json({ id, count: counters[id] });
    } catch (error) {
        console.log(response.data);
        console.error(error);
    }
})

app.get('/GET', async (req, res) => {
    try {
        const { vid } = req.query;

        // If the counter for this ID doesn't exist, initialize it to 0
        if (!counters[vid]) {
            counters[vid] = 0;
        }
        // Send response with the count for this ID
        res.json({ vid, count: counters[vid] });
    } catch (error) {
        console.log(response.data);
        console.error(error);
    }
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
