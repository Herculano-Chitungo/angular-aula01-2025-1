import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaSaldoComponent } from './consulta-saldo.component';

describe('ConsultaSaldoComponent', () => {
  let component: ConsultaSaldoComponent;
  let fixture: ComponentFixture<ConsultaSaldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaSaldoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaSaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('classPorValor', () => {

    it('deveria retornar "positivo" para 99.99', () => {
      expect(component.classPorValor(99.99)).toBe("positivo");
    });

    it('deveria retornar "negativo" para -99.99', () => {
      expect(component.classPorValor(-99.99)).toBe("negativo");
    });

    it('deveria retornar "" para 0', () => {
      expect(component.classPorValor(0)).toBe("");
    });

    it('deveria retornar "" para 0.01', () => {
      expect(component.classPorValor(0.01)).toBe("positivo");
    });

    it('deveria retornar "" para 0.0049', () => {
      expect(component.classPorValor(0.0049)).toBe("");
    });

    it('deveria retornar "positivo" para 0.005', () => {
      expect(component.classPorValor(0.005)).toBe("positivo");
    });

    it('deveria retornar "" para -0.0049', () => {
      expect(component.classPorValor(0.0049)).toBe("");
    });

    it('deveria retornar "negativo" para -0.005', () => {
      expect(component.classPorValor(-0.005)).toBe("negativo");
    });

  });

});
