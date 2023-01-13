import { FlightDataModel } from "./fligh-data.model";

export interface ItineraryRequestModel {
  startDayTime: number;
  from: string;
  to: string;
  flightData: FlightDataModel[];
}

export interface ItineraryResponseModel {
  id: number;
  startDayTime: number;
  from: string;
  to: string;
  flightData: FlightDataModel[];
}
