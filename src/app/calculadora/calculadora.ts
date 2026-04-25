import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css',
})
export class Calculadora {
  numero1: number = 0;
  numero2: number = 0;

  apresentarMensagem(): void {
    alert("Abacate");
  }

  somar(): void {
    let resultado: number = this.numero1 + this.numero2;
    alert(`Soma: ${resultado}`);
  }

  subtrair(): void {
    let resultado: number = this.numero1 - this.numero2;
    alert(`Subtração: ${resultado}`);
  }

  multiplicar(): void {
    let resultado: number = this.numero1 * this.numero2;
    alert(`Multiplicação: ${resultado}`);
  }

  dividir(): void {
    if (this.numero2 !== 0) {
      let resultado: number = this.numero1 / this.numero2;
      alert(`Divisão: ${resultado}`);
    } else {
      alert('Erro: Não é possível dividir por zero!');
    }
  }
}
