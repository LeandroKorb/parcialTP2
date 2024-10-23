import Factory from "../models/factory.js";

class TransaccionService {
  constructor() {
    this.model = Factory.get("");
  }
}
// postTransaction = async (data) => {
//   //   const newTransaction = await this.model.postTransaction(data);
//   //   return newTransaction;
//   return this.model.postTransaction(data);
// };

postTransaction = async (data) => {
  const newTransaction = await this.model.postTransaction(data);
  return newTransaction;
};

getAllTransactions = async () => {
  return await this.model.getAllTransactions();
};

getTransactionCount = async () => {
  return await this.model.getTransactionCount();
};

deleteTransaction = async (id) => {
  return await this.model.deleteTransaction(id);
};

export default TransaccionService;
