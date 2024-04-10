// Tiago Eloy Possidonio Pereira / 2417677
class OrganizacaoComponent {
    constructor(nome) {
        this.nome = nome
    }
}

class Funcionario extends OrganizacaoComponent{
    constructor(id, nome, sobrenome, idade, cargo, salario, departamento) {
        super(nome+' '+sobrenome);
        this.ID = id,
        this.idade = idade,
        this.cargo = cargo,
        this.salario = salario,
        this.departamento = departamento;
    }

    atualizarCargo(novoCargo) {
        this.cargo = novoCargo;
    }

    atualizarNome(novoNome) {
        this.nome = novoNome
    }

    atualizarSalario(novoSalario) {
        this.salario = novoSalario;
    }

    atualizarDepartamento(novoDepartamento) {
        this.departamento = novoDepartamento;
    }
}


class Departamento extends OrganizacaoComponent {
    constructor(id, nome) {
        super(nome);
        this.id = id,
        this.funcionarios = [],
        this.subdepartamentos = []
    }

    exibirFuncionarios() {
        console.log("Funcionários:");
        this.funcionarios.forEach(funcionario => {
          console.log("- ", funcionario.nome, funcionario.cargo);
        });
      }

    adicionarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }

    removerFuncionario(funcionario) {
        for(let c = 0; c < this.funcionarios.length; c++) {
            if(this.funcionarios[c] === funcionario) {
                this.funcionarios.splice(c, 1);
            }
        }
    }

    adicionarSubDepartamento(departamento) {
        this.subdepartamentos.push(departamento);
    }

    removerSubDsepartamento(departamento) {
        for(let c = 0; c < this.subdepartamentos.length; c++) {
            if(this.subdepartamentos[c] === departamento) {
                this.subdepartamentos.splice(c, 1);
            }
        }
    }

    calcularSalarioTotal() {
        let total = 0;
        for(let c = 0; c < this.funcionarios.length; c++){
            total += this.funcionarios[c].salario
        }
        for(let c = 0; c < this.subdepartamentos.length; c++){
            total += this.subdepartamentos[c].calcularSalarioTotal();
        }
        return total;
    }
}

teste();

function teste() {
    let analista = new Funcionario(1, 'Arthur', 'Rodrigues', 19, 'Analista', 3500, 'TI');
    let suporte = new Funcionario(1, 'Ana', 'Rodrigues', 19, 'Suporte', 3000, 'TI');
    let gerente = new Funcionario(1, 'Tiago', 'Possidonio', 21, 'Gerente', 9000, 'TI');
    let ceo = new Funcionario(1, 'Geovanna', 'Pelissari', 20, 'Gerente', 21000.56, 'TI');
    let depTi = new Departamento(1, "TI");
    depTi.adicionarFuncionario(analista);
    depTi.adicionarFuncionario(suporte);
    let projetoRedes = new Departamento(2, "Projeto Redes");
    projetoRedes.adicionarFuncionario(gerente);
    projetoRedes.adicionarFuncionario(ceo)
    depTi.adicionarSubDepartamento(projetoRedes);
    console.log(depTi.exibirFuncionarios());
    console.log(`Salário Total de todos os funcionários da empresa: R$${depTi.calcularSalarioTotal()}`);
}