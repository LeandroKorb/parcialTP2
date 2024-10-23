import TransaccionController from "../controllers/transaccion.controller.js";
import express from "express";

class Router {
  constructor() {
    this.router = express.Router();
    this.controller = new TransaccionController();
  }

  start() {
    this.router.post("/transaccion", TransaccionController.postTransaction());

    this.router.get("/transaccion", TransaccionController.getAllTransactions());

    this.router.get(
      "/transaccion/count",
      TransaccionController.getTransactionCount()
    );

    this.router.delete(
      "/transaccion/:id",
      TransaccionController.deleteTransaction()
    );
  }
}
export default Router;
