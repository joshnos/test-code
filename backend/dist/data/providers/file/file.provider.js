"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileProvider = void 0;
/* eslint-disable require-jsdoc */
class FileProvider {
    constructor(db) {
        this.db = db;
    }
    getAll() {
        return this.db.data;
    }
    getById(id) {
        return this.db.data.find((itinerary) => itinerary.id === id);
    }
    getAllFlightModel(id) {
        const itinerary = this.db.data.find((itinerary) => itinerary.id === id);
        return itinerary ? itinerary.flightData : undefined;
    }
    getNextFlightModel(id, currentTime) {
        const itinerary = this.db.data.find((itinerary) => itinerary.id === id);
        if (itinerary === undefined)
            return itinerary;
        let maxTime = Number.MIN_VALUE;
        let maxFlight = undefined;
        for (var i = 0; i < itinerary.flightData.length; i++) {
            if (itinerary.flightData[i].TIME_StartTime <= currentTime && itinerary.flightData[i].TIME_StartTime > maxTime) {
                maxTime = itinerary.flightData[i].TIME_StartTime;
                maxFlight = itinerary.flightData[i];
            }
        }
        return maxFlight;
    }
}
exports.FileProvider = FileProvider;
//# sourceMappingURL=file.provider.js.map