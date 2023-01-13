/* eslint-disable max-len */
/* eslint-disable new-cap */
import express, {Request, Response} from "express";
import { ItineraryController } from "../domain/controllers/itinerary.controller";


// eslint-disable-next-line require-jsdoc
export default function itineraryRouter(
    controller: ItineraryController,
) {
  const router = express.Router();

  router.get("/", (_req: Request, res: Response) => {
    try {
      const documents = controller.getAll();
      res.status(200).send(documents);
    } catch (err) {
      res.status(500).send({message: "Error fetching data"});
    }
  });

  router.get("/:id", (req: Request, res: Response) => {
    try {
      const documents = controller.getById(+req.params.id);
      res.status(200).send(documents);
    } catch (err: any) {
      console.log(err.message);
      res.status(500).send({message: "Error fetching data"});
    }
  });

  router.get("/:id/fligh-data", (req: Request, res: Response) => {
    try {
      const documents = controller.getAllFlightModel(+req.params.id);
      res.status(200).send(documents);
    } catch (err: any) {
      console.log(err.message);
      res.status(500).send({message: "Error fetching data"});
    }
  });

  router.get("/:id/fligh-data/:time", (req: Request, res: Response) => {
    try {
      const documents = controller.getNextFlightModel(+req.params.id, +req.params.time);
      res.status(200).send(documents);
    } catch (err: any) {
      console.log(err.message);
      res.status(500).send({message: "Error fetching data"});
    }
  });

  return router;
}
