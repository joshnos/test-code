"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItineraryController = void 0;
class ItineraryController {
    constructor(repository) {
        this.repository = repository;
    }
    getAll() {
        return this.repository.getAll();
    }
    getById(id) {
        return this.repository.getById(id);
    }
    getAllFlightModel(id) {
        return this.repository.getAllFlightModel(id);
    }
    getNextFlightModel(id, currentTime) {
        return this.repository.getNextFlightModel(id, currentTime);
    }
}
exports.ItineraryController = ItineraryController;
//# sourceMappingURL=itinerary.controller.js.map