import { ClassPorValorPipe } from './class-por-valor.pipe';

describe('ClassPorValorPipe', () => {

  let pipe: ClassPorValorPipe;

  beforeEach(() => {
    pipe = new ClassPorValorPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('classPorValor', () => {

    it('deveria retornar "positivo" para 99.99', () => {
      expect(pipe.transform(99.99)).toBe("positivo");
    });

    it('deveria retornar "negativo" para -99.99', () => {
      expect(pipe.transform(-99.99)).toBe("negativo");
    });

    it('deveria retornar "" para 0', () => {
      expect(pipe.transform(0)).toBe("");
    });

    it('deveria retornar "" para 0.01', () => {
      expect(pipe.transform(0.01)).toBe("positivo");
    });

    it('deveria retornar "" para 0.0049', () => {
      expect(pipe.transform(0.0049)).toBe("");
    });

    it('deveria retornar "positivo" para 0.005', () => {
      expect(pipe.transform(0.005)).toBe("positivo");
    });

    it('deveria retornar "" para -0.0049', () => {
      expect(pipe.transform(0.0049)).toBe("");
    });

    it('deveria retornar "negativo" para -0.005', () => {
      expect(pipe.transform(-0.005)).toBe("negativo");
    });

  });

});
