// Tiago Eloy Possidonio Pereira / RA: 2417677

const readline = require("readline"); // chamando módulo readline do Node para possibilitar entrada de dados via terminal.

const alternativa = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
}); // Ajustando a variável alternativa para ser capaz de receber dados do usuário via linha de comando.

class Contato {
  constructor(nome, telefone, email) {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
  }
} // Classe Contato criada.

class ContatoFactory {
  static criarContato(nome, telefone, email) {
    return new Contato(nome, telefone, email);
  }
} // Criação de classe baseada no projeto estrutural Factory methods

class GerenciadorContatos {
  constructor() {
    this.lista = [];
  }

  adicionar(contato) {
    this.lista.push(contato);
  }

  remover(contato) {
    let contatoEncontrado = false;
    for (let c = 0; c < this.lista.length; c++) {
      if (this.lista[c].nome === contato.nome) {
        this.lista.splice(c, 1);
        contatoEncontrado = true;
        break;
      }
    }
    if (contatoEncontrado === true) {
      console.log("Contato deletado.");
    } else {
      console.log("Contato não localizado.");
    }
  }

  listar() {
    if (this.lista.length > 0) {
      this.lista.forEach((element) => {
        console.log(
          `Nome: ${element.nome}, Telefone: ${element.telefone}, Email: ${element.email}`
        );
      });
    } else {
      console.log("Nenhum contato cadastrado.");
    }
  }
  PesquisarContato(algoritmoDeBusca) {
    algoritmoDeBusca.buscar(this.lista);
  }
} // Classe GerenciadorContatos com os métodos adicionar, remover, listar encapsulados e o método PesquisarContato utilizando o padrão de projeto comportamental Command.

// Strategy: Algoritmos de busca:

class BuscarNome {
  buscar(lista) {
    let contatoEncontrado = false;
    alternativa.question("Digite o nome: ", (nome) => {
      for (let c = 0; c < lista.length; c++) {
        if (lista[c].nome === nome) {
          console.log(
            `Usuário localizado:\nNome: ${lista[c].nome} - Telefone: ${lista[c].telefone} - E-mail: ${lista[c].email}`
          );
          contatoEncontrado = true;
          break;
        }
      }
      if (contatoEncontrado === false) {
        console.log("Contato não localizado.");
      }
      main();
    });
  }
}

class BuscarTelefone {
  buscar(lista) {
    let contatoEncontrado = false;
    alternativa.question("Digite o número de Telefone: ", (telefone) => {
      for (let c = 0; c < lista.length; c++) {
        if (lista[c].telefone === telefone) {
          console.log(
            `Usuário localizado:\nNome: ${lista[c].nome} - Telefone: ${lista[c].telefone} - E-mail: ${lista[c].email}`
          );
          contatoEncontrado = true;
          break;
        }
      }
      if (contatoEncontrado === false) {
        console.log("Contato não localizado.");
      }
      main();
    });
  }
}

class BuscarEmail {
  buscar(lista) {
    let contatoEncontrado = false;
    alternativa.question("Digite o E-mail: ", (email) => {
      for (let c = 0; c < lista.length; c++) {
        if (lista[c].email === email) {
          console.log(
            `Usuário localizado:\nNome: ${lista[c].nome} - Telefone: ${lista[c].telefone} - E-mail: ${lista[c].email}`
          );
          contatoEncontrado = true;
          break;
        }
      }
      if (contatoEncontrado === false) {
        console.log("Contato não localizado.");
      }
      main(); // Devido a um problema com o uso do readline, após a inserção do dado "email" continuava em loop solicitando a inserção de mais dados, devido a isso tive que colocar na classe esse direcionamento para o main(), resultado do uso da interface simples de linha de comando (CLI).
    });
  }
}

// ------- Abaixo segue o algoritmo referente a criação da interface simples de linha de comando (CLI):
function main() {
  console.log(
    "\n------------------------------\n MENU\n------------------------------\n[1] Adicionar contato\n[2] Remover contato\n[3] Listar contatos\n[4] Buscar Contato por nome\n[5] Buscar Contato por telefone\n[6] Buscar Contato por E-mail\n[0] Sair\n------------------------------\n"
  );
  alternativa.question("Alternativa: ", (alt) => {
    switch (alt) {
      case "1":
        adicionarContato();
        break;
      case "2":
        removerContato();
        break;
      case "3":
        listarContatos();
        break;
      case "4":
        buscarPorNome();
        break;
      case "5":
        buscarPorTelefone();
        break;
      case "6":
        buscarPorEmail();
        break;
      case "0":
        console.log("Saindo...");
        alternativa.close();
        break;
      default:
        console.log("Opção indisponível.");
        main();
    }
  });
}

function adicionarContato() {
  console.log("\n------------------------------\n");
  alternativa.question("Nome: ", (nome) => {
    alternativa.question("Telefone: ", (telefone) => {
      alternativa.question("E-mail: ", (email) => {
        let contato = ContatoFactory.criarContato(nome, telefone, email);
        gerenciador.adicionar(contato);
        console.log("Contato adicionado com sucesso!");
        main();
      });
    });
  });
}

function removerContato() {
  alternativa.question("Nome do contato: ", (nome) => {
    let contato = ContatoFactory.criarContato(nome);
    gerenciador.remover(contato);
    main();
  });
}

function listarContatos() {
  gerenciador.listar();
  main();
}

function buscarPorNome() {
  gerenciador.PesquisarContato(new BuscarNome());
}
function buscarPorTelefone() {
  gerenciador.PesquisarContato(new BuscarTelefone());
}
function buscarPorEmail() {
  gerenciador.PesquisarContato(new BuscarEmail());
}

const gerenciador = new GerenciadorContatos();

main();
