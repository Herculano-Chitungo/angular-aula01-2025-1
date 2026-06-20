import { Cliente } from './cliente';

describe('Cliente', () => {

  let cliente: Cliente;

  beforeEach(() => {
    cliente = new Cliente(
      'Maria das Couves',
      100,
      new Date(),
    );
  });

  it('should create an instance', () => {
    expect(cliente).toBeTruthy();
  });

  describe('creditoPreAprovado', () => {

    it('deveria liberar crédito para clientes de alto saldo', () => {
      cliente.saldo = 50;
      expect(cliente.creditoPreAprovado).toBe(100);
    });

    it('não deveria liberar crédito para clientes de baixo saldo', () => {
      cliente.saldo = 49.99;
      expect(cliente.creditoPreAprovado).toBe(0);
    });

  });

});
