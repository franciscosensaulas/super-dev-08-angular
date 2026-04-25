import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  imports: [FormsModule],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes {
  // Lista de Clientes
  clientes: string[] = ["Jorge Silva", "Abacat Batatinha", "Ronaldo Souza"]
  cpfs: string[] = ["123.456.391-10", "685.439.210-20", "129.373.201-20"]

  // Variável para armazenar o que o usuário digitar na página
  nome: string = "";
  cpf: string = "";

  // Variável para armazenar o indice do que será editado
  // Começa com -1 pq está no modo de cadastro
  // Qualquer outro número, quer dizer que está no modo de editar
  indiceParaEditar: number = -1;

  salvar(): void {
    if (this.indiceParaEditar === -1) {
      this.cadastar();
    } else {
      this.editar();
    }

    this.nome = "";
    this.cpf = "";
  }

  cadastar(): void {
    this.clientes.push(this.nome);
    this.cpfs.push(this.cpf);

    alert("Cliente cadastrado com sucesso");
  }

  editar(): void {
    this.clientes[this.indiceParaEditar] = this.nome;
    this.cpfs[this.indiceParaEditar] = this.cpf;

    alert("Cliente alterado com sucesso");

    // Reset do indice para poder cadastrar novamente depois
    this.indiceParaEditar = -1;
  }


  apagar(nomeCliente: string): void {
    let indiceNomeCliente = this.clientes.indexOf(nomeCliente);

    this.clientes.splice(indiceNomeCliente, 1);
    this.cpfs.splice(indiceNomeCliente, 1);
  }

  preencherCampoParaEditar(nomeCliente: string, cpfCliente: string): void {
    // Descobrir o indice do cliente na lista de clientes, armazenando no indice para sabermos 
    // depois onde deve ser alterado na lista 
    this.indiceParaEditar = this.clientes.indexOf(nomeCliente);

    // Preencher o campo do nome
    this.nome = nomeCliente;
    this.cpf = cpfCliente;
  }
}


