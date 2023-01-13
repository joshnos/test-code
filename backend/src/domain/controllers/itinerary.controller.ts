/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import { FlightDataModel } from "../models/fligh-data.model";
import { ItineraryResponseModel } from "../models/itinerary.model";
import { ItineraryRepository } from "../repositories/itinerary.repository";

export class ItineraryController {
  private repository: ItineraryRepository;

  constructor(repository: ItineraryRepository) {
    this.repository = repository;
  }

  public getAll(): ItineraryResponseModel[] {
    return this.repository.getAll();
  }

  public getById(id: number): ItineraryResponseModel | undefined {
    return this.repository.getById(id);
  }

  public getAllFlightModel(id: number): FlightDataModel[] | undefined {
    return this.repository.getAllFlightModel(id);
  }

  public getNextFlightModel(id: number, currentTime: number): FlightDataModel | undefined {
    return this.repository.getNextFlightModel(id, currentTime);
  }
}
