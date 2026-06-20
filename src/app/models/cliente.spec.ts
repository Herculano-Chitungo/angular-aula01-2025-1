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

});
