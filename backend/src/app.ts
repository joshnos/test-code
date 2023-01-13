import express from 'express';
import cors = require("cors");
import { FileProvider } from './data/providers/file/file.provider';
import { getDb } from './data/utils/read-csv.utils';
import { ItineraryController } from './domain/controllers/itinerary.controller';
import { ItineraryRepository } from './domain/repositories/itinerary.repository';
import itineraryRouter from './presentation/itinerary.router';
const app = express();
const port = 3000;

const db = getDb();

const dataProvider = new FileProvider(db);
const itineraryMiddelware = itineraryRouter(new ItineraryController(new ItineraryRepository(dataProvider)));

app.use(cors());
app.use('/itinerary', itineraryMiddelware);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
