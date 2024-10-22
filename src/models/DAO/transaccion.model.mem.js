class TransaccionMemModel {
  constructor() {
    this.transaccion = [];
  }

  getTransactions = async () => {
    return this.transaccion;
  };

  postTransaction = async (data) => {
    const newTransaction = {
      id: this.transaccion.length + 1,
      ...data,
    };
    this.transaccion.push(newTransaction);
    return newTransaction;
  };

  getTransactionCount = async () => {
    return this.transaccion.length;
  };

  deleteTransaction = async (id) => {
    const index = this.transaccion.findIndex(
      (trans) => trans.id === parseInt(id)
    );
    if (index !== -1) {
      this.transaccion.splice(index, 1);
      return { message: "Transacción eliminada con éxito" };
    } else {
      return { message: "Transacción no encontrada" };
    }
  };
}

export default TransaccionMemModel;
