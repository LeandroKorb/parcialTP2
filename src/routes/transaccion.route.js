import transaccionController from "../controllers/transactionController.js";
import express from "express";

class Router {
  constructor() {
    this.router = express.Router();
    this.controller = new transaccionController();
  }

  start() {
    this.router.post("/transaccion", transaccionController.createTransaction());

    this.router.get("/transaccion", transaccionController.getAllTransactions());

    this.router.get(
      "/transaccion/count",
      transaccionController.getTransactionCount()
    );

    this.router.delete(
      "/transaccion/:id",
      transaccionController.deleteTransaction()
    );
  }
}
export default Router;
