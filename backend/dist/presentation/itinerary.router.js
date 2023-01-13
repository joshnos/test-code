"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-len */
/* eslint-disable new-cap */
const express_1 = __importDefault(require("express"));
// eslint-disable-next-line require-jsdoc
function itineraryRouter(controller) {
    const router = express_1.default.Router();
    router.get("/", (_req, res) => {
        try {
            const documents = controller.getAll();
            res.status(200).send(documents);
        }
        catch (err) {
            res.status(500).send({ message: "Error fetching data" });
        }
    });
    router.get("/:id", (req, res) => {
        try {
            const documents = controller.getById(+req.params.id);
            res.status(200).send(documents);
        }
        catch (err) {
            console.log(err.message);
            res.status(500).send({ message: "Error fetching data" });
        }
    });
    router.get("/:id/fligh-data", (req, res) => {
        try {
            const documents = controller.getAllFlightModel(+req.params.id);
            res.status(200).send(documents);
        }
        catch (err) {
            console.log(err.message);
            res.status(500).send({ message: "Error fetching data" });
        }
    });
    router.get("/:id/fligh-data/:time", (req, res) => {
        try {
            const documents = controller.getNextFlightModel(+req.params.id, +req.params.time);
            res.status(200).send(documents);
        }
        catch (err) {
            console.log(err.message);
            res.status(500).send({ message: "Error fetching data" });
        }
    });
    return router;
}
exports.default = itineraryRouter;
//# sourceMappingURL=itinerary.router.js.map