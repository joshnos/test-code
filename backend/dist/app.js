"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require("cors");
const file_provider_1 = require("./data/providers/file/file.provider");
const read_csv_utils_1 = require("./data/utils/read-csv.utils");
const itinerary_controller_1 = require("./domain/controllers/itinerary.controller");
const itinerary_repository_1 = require("./domain/repositories/itinerary.repository");
const itinerary_router_1 = __importDefault(require("./presentation/itinerary.router"));
const app = (0, express_1.default)();
const port = 3000;
const db = (0, read_csv_utils_1.getDb)();
const dataProvider = new file_provider_1.FileProvider(db);
const itineraryMiddelware = (0, itinerary_router_1.default)(new itinerary_controller_1.ItineraryController(new itinerary_repository_1.ItineraryRepository(dataProvider)));
app.use(cors());
app.use('/itinerary', itineraryMiddelware);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map