import { DatabaseModel } from "../../domain/models/database.model";
import { FlightDataModel } from "../../domain/models/fligh-data.model";
import { ItineraryResponseModel } from "../../domain/models/itinerary.model";

let csvToJson = require('convert-csv-to-json');

export function getDb(){
  let json = csvToJson.fieldDelimiter(',').formatValueByType().getJsonFromCsv("assets/data/itineraries.csv");
  let db: DatabaseModel = {data: []};
  for(let i=0; i<json.length;i++){
    const flightData: FlightDataModel[] = csvToJson.fieldDelimiter(',').formatValueByType().getJsonFromCsv("assets/data/" + json[i]['flightdatafile']);
    const itineraryModel: ItineraryResponseModel = {
      id: json[i]['itineraryID'],
      startDayTime: json[i]['daystartingtimeinmillisecondssincemidnight'],
      from: json[i]['fromlocation'],
      to: json[i]['tolocation'],
      flightData: flightData
    }
    db.data.push(itineraryModel);
  }
  return db;
}