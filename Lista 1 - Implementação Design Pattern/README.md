# Lista 1 - Implementação Design Pattern

## Aluno: Tiago Eloy Possidonio Pereira / RA: 2417677

## Padrões de projeto Comportamentais: Command e Strategy

## Padrão de projeto estrutural: Factory Methods

### Command:

#### Separação de Responsabilidades: O padrão Command permite encapsular solicitações como objetos, o que separa quem solicita uma operação de quem a executa.

#### Reutilização de Código: O padrão Command permite reutilizar comandos em diferentes partes do sistema. Por exemplo, se precisarmos executar a mesma operação de busca em diferentes contextos, podemos reutilizar o comando de busca sem precisar reescrevê-lo.

### Strategy:

#### Flexibilidade e Extensibilidade: Utilizar o padrão Strategy para os algoritmos de busca permite que diferentes algoritmos sejam facilmente intercambiados. Isso significa que novos algoritmos de busca podem ser adicionados sem modificar o código existente, promovendo a extensibilidade do sistema.

#### Facilidade de Teste: Ao encapsular os algoritmos de busca em objetos separados, tornamos mais fácil escrever testes unitários para esses algoritmos. Podemos testar cada algoritmo individualmente sem depender do contexto maior do sistema.

#### A estruturação do código em padrões como Command e Strategy torna mais simples realizar manutenções no sistema. As mudanças podem ser feitas de forma localizada, sem afetar outras partes do código, desde que a interface pública permaneça a mesma.

### Factory Methods:

#### O factory methods é uma ferramenta poderosa para criar objetos de forma flexível, encapsulada e controlada. Eles promovem boas práticas de design de software, como encapsulamento, abstração e baixo acoplamento, contribuindo para a criação de código mais modular, flexível e fácil de manter.

## Instalação e utilização do projeto:

### Para executar o projeto é necessário instalar o NodeJS e as depencias contidas em "package.json".

### Para rodar o aplicativo, quando estiver no diretório presente o projeto, executar o comando "node index.js".
