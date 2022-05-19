const http = require('http');

//require('dotenv').config();

const app = require('./app');

const { loadPlanetsData } = require('./models/planets.model');
const { loadLaunchData } = require('./models/launches.model');
const {mongoConnect} = require("./services/mongo");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
    await mongoConnect();
    await loadPlanetsData();
    await loadLaunchData();

    server.listen(PORT, () => {
        console.log(`Listeningg on port ${PORT}`);
    });
}

startServer();

//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 token for github