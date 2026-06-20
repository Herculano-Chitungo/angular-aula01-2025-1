import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-consulta-saldo',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './consulta-saldo.component.html',
  styleUrl: './consulta-saldo.component.css',
})
export class ConsultaSaldoComponent {

  public cliente: Cliente = new Cliente(
    'Maria das Couves',
    99.99,
    new Date(),
  );

}
