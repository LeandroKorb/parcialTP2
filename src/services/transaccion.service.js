import transaccionModel from "../models/DAO/transaccion.model.mem.js";
import Factory from "../models/factory.js";

class TransaccionService {
  constructor() {
    this.model = Factory.get("");
  }
}
postTransaction = async (data) => {
  // const newTransaction = await this.model.postTransaction(data);
  // return newTransaction;
  return await transaccionModel.postTransaction(data);
};
getAllTransactions = async () => {
  return await transaccionModel.getAllTransactions();
};

getTransactionCount = async () => {
  return await transaccionModel.getTransactionCount();
};

deleteTransaction = async (id) => {
  return await transaccionModel.deleteTransaction(id);
};

export default TransaccionService;
