import transaccionService from "../services/transaccion.service.js";

class TransaccionController {
  constructor() {
    this.services = new transaccionService();
  }

  //   createTransaction = async (req, res) => {
  //     const { tipo, monto, destinatario } = req.body;
  //     if (!tipo || !monto || !destinatario) {
  //       return res.status(400).json({ error: "Faltan datos de la transacción" });
  //     }
  //     const newTransaction = await transaccionService.createTransaction(
  //       tipo,
  //       monto,
  //       destinatario
  //     );
  //     res.status(201).json(newTransaction);
  //   };

  postTransaction = async (req, res) => {
    const data = req.body;
    const newTransaction = await this.service.postTransaction(data);
    res.json(newTransaction);
  };

  getAllTransactions = async (req, res) => {
    const transactions = await transaccionService.getAllTransactions();
    res.json(transactions);
  };

  getTransactionCount = async (req, res) => {
    const count = await transaccionService.getTransactionCount();
    res.json({ message: `Cantidad de transacciones en cuenta: ${count}` });
  };

  deleteTransaction = async (req, res) => {
    const { id } = req.params;
    const deleted = await transaccionService.deleteTransaction(id);
    if (deleted) {
      res.json({ message: "Transacción eliminada correctamente" });
    } else {
      res.status(404).json({ error: "Transacción no encontrada" });
    }
  };
}

export default TransaccionController;
