/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import { DataProvider } from "../../data/providers/data.provider";
import { FlightDataModel } from "../models/fligh-data.model";
import { ItineraryResponseModel } from "../models/itinerary.model";

export class ItineraryRepository {
  private dataSource: DataProvider;

  constructor(dataSource: DataProvider) {
    this.dataSource = dataSource;
  }

  public getAll(): ItineraryResponseModel[] {
    return this.dataSource.getAll();
  }

  public getById(id: number): ItineraryResponseModel | undefined {
    return this.dataSource.getById(id);
  }

  public getAllFlightModel(id: number): FlightDataModel[] | undefined {
    return this.dataSource.getAllFlightModel(id);
  }

  public getNextFlightModel(id: number, currentTime: number): FlightDataModel | undefined {
    return this.dataSource.getNextFlightModel(id, currentTime);
  }
}
