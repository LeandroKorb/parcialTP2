import TransaccionMemModel from "./DAO/transaccion.model.mem.js";

class Factory {
  static get(persistencia) {
    switch (persistencia) {
      case "MEM":
        console.warn("Persistencia en memoria del servidor.");
        return new TransaccionMemModel();
      default:
        console.warn("Persistencia en default (memoria).");
        return new TransaccionMemModel();
    }
  }
}

export default Factory;
