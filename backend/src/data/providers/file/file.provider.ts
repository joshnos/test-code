/* eslint-disable max-len */
import { DatabaseModel } from "../../../domain/models/database.model";
import { FlightDataModel } from "../../../domain/models/fligh-data.model";
import { ItineraryResponseModel } from "../../../domain/models/itinerary.model";
import { DataProvider } from "../data.provider";

/* eslint-disable require-jsdoc */
export class FileProvider implements DataProvider {
  private db: DatabaseModel;
  constructor(db: DatabaseModel) {
    this.db = db;
  }
  
  public getAll(): ItineraryResponseModel[] {
    return this.db.data;
  }

  public getById(id: number): ItineraryResponseModel | undefined {
    return this.db.data.find((itinerary: ItineraryResponseModel) => itinerary.id === id);
  }

  public getAllFlightModel(id: number): FlightDataModel[] | undefined {
    const itinerary = this.db.data.find((itinerary: ItineraryResponseModel) => itinerary.id === id);
    return itinerary ? itinerary.flightData : undefined;
  }

  public getNextFlightModel(id: number, currentTime: number): FlightDataModel | undefined {
    const itinerary = this.db.data.find((itinerary: ItineraryResponseModel) => itinerary.id === id);
    if (itinerary === undefined) return itinerary;
    let maxTime: number = Number.MIN_VALUE;
    let maxFlight: FlightDataModel | undefined = undefined;
    for (var i = 0; i < itinerary.flightData.length; i++) { 
      if (itinerary.flightData[i].TIME_StartTime <= currentTime && itinerary.flightData[i].TIME_StartTime > maxTime) { 
        maxTime = itinerary.flightData[i].TIME_StartTime;
        maxFlight = itinerary.flightData[i];
      } 
    }
    return maxFlight;
  }
}
