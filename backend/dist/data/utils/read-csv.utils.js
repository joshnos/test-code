"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDb = void 0;
let csvToJson = require('convert-csv-to-json');
function getDb() {
    let json = csvToJson.fieldDelimiter(',').formatValueByType().getJsonFromCsv("assets/data/itineraries.csv");
    let db = { data: [] };
    for (let i = 0; i < json.length; i++) {
        const flightData = csvToJson.fieldDelimiter(',').formatValueByType().getJsonFromCsv("assets/data/" + json[i]['flightdatafile']);
        const itineraryModel = {
            id: json[i]['itineraryID'],
            startDayTime: json[i]['daystartingtimeinmillisecondssincemidnight'],
            from: json[i]['fromlocation'],
            to: json[i]['tolocation'],
            flightData: flightData
        };
        db.data.push(itineraryModel);
    }
    return db;
}
exports.getDb = getDb;
//# sourceMappingURL=read-csv.utils.js.map