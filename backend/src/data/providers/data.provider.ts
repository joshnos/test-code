import { FlightDataModel } from "../../domain/models/fligh-data.model";
import { ItineraryResponseModel } from "../../domain/models/itinerary.model";

export interface DataProvider {
  getAll(): ItineraryResponseModel[];
  getById(id: number): ItineraryResponseModel | undefined;
  getAllFlightModel(id: number): FlightDataModel[] | undefined;
  getNextFlightModel(id: number, currentTime: number): FlightDataModel | undefined;
}
