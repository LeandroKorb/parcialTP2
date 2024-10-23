import TransaccionService from "../services/transaccion.service.js";

class TransaccionController {
  constructor() {
    this.services = new TransaccionService();
  }

  postTransaction = async (req, res) => {
    const data = req.body;
    const newTransaction = await this.services.postTransaction(data);
    res.json(newTransaction);
  };

  getAllTransactions = async (req, res) => {
    const transactions = await TransaccionService.getAllTransactions();
    res.json(transactions);
  };

  getTransactionCount = async (req, res) => {
    const count = await TransaccionService.getTransactionCount();
    res.json({ message: `Cantidad de transacciones en cuenta: ${count}` });
  };

  deleteTransaction = async (req, res) => {
    const { id } = req.params;
    const deleted = await TransaccionService.deleteTransaction(id);
    if (deleted) {
      res.json({ message: "Transacción eliminada correctamente" });
    } else {
      res.status(404).json({ error: "Transacción no encontrada" });
    }
  };
}

export default TransaccionController;
