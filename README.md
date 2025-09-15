# Projeto Biblioteca UMC

Este é um projeto de sistema web para gestão de biblioteca, desenvolvido como parte da disciplina de Análise e Projeto de Software do curso de Engenharia de Software da UMC.

## Funcionalidades

- Cadastro de usuários (com upload de documentos e comprovante de endereço)
- Cadastro de livros
- Empréstimo e devolução de livros
- Visualização e administração de usuários (aprovação, recusa e exclusão)
- Validação de campos obrigatórios e regras de negócio
- Interface moderna baseada em protótipos e com feedback visual
- Autenticação e permissões (em desenvolvimento)

## Tecnologias Utilizadas

- Java 17
- Spring Boot (Web, Data JPA, Security)
- Thymeleaf
- PostgreSQL
- Maven
- HTML5, CSS3, JavaScript
- Lombok

## Como Executar o Projeto

1. **Pré-requisitos**
    - Java 17+
    - Maven
    - PostgreSQL

2. **Configuração do Banco de Dados**
    - Crie um banco de dados PostgreSQL para o projeto
    - Defina as variáveis de ambiente `DB_USER` e `DB_PASSWORD` com os dados de conexão

3. **Configuração do Projeto**
    - Clone este repositório
    - Execute `mvn clean install` para instalar as dependências

4. **Execução**
    - Rode a aplicação com `mvn spring-boot:run`
    - Acesse o sistema em `http://localhost:8080/usuarios/cadastro`
