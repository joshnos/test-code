"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItineraryRepository = void 0;
class ItineraryRepository {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    getAll() {
        return this.dataSource.getAll();
    }
    getById(id) {
        return this.dataSource.getById(id);
    }
    getAllFlightModel(id) {
        return this.dataSource.getAllFlightModel(id);
    }
    getNextFlightModel(id, currentTime) {
        return this.dataSource.getNextFlightModel(id, currentTime);
    }
}
exports.ItineraryRepository = ItineraryRepository;
//# sourceMappingURL=itinerary.repository.js.map