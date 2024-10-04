<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center"></p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# **Payment Gateway API (Node.js - NestJS)**

Este projeto foi desenvolvido como parte de um teste técnico para uma vaga de desenvolvedor na [DevelCode](https://www.develcode.com.br/).

A **Payment Gateway API** é um microsserviço de processamento de pagamentos desenvolvido utilizando **Node.js** com o framework **NestJS**. Este serviço é responsável por simular o processamento de pagamentos de pedidos, retornando o status da transação (sucesso ou falha). A API foi desenvolvida com **Arquitetura Hexagonal (Ports and Adapters)**, garantindo flexibilidade e independência de infraestrutura.

Para mais detalhes sobre o microsserviço de Checkout, visite o repositório (Java - Spring Framework):
- https://github.com/JeanPaulll/checkout-ms-java-develcode


### **Funcionalidades Principais**
- Processar transações de pagamento e retornar o status da operação.
- Suporte para diferentes gateways de pagamento através de adaptadores.
- Arquitetura escalável e flexível com separação clara entre domínio e infraestrutura.
- Suporte para integração com Docker para facilidade de deploy e desenvolvimento.

---

## **Tecnologias Utilizadas**

- **Node.js (v16+)**
- **NestJS**
- **TypeScript**
- **PostgreSQL**: Banco de dados relacional usado para persistir as informações de pedidos e transações (simulado neste serviço).
- **Docker**: Ferramenta de conteinerização usada para criar um ambiente isolado para a aplicação.
- **Swagger**: Ferramenta para documentação interativa da API.
- **Arquitetura Hexagonal (Ports and Adapters)**: Padrão de arquitetura que separa a lógica de negócio (domínio) das interações com o mundo externo (infraestrutura), facilitando a manutenção e escalabilidade.

---

## **Estrutura do Projeto**

O projeto segue a **Arquitetura Hexagonal (Ports and Adapters)**, com separação clara entre o domínio, casos de uso, e adaptadores externos.

---

## **Setup do Projeto**

### **Pré-requisitos**
- **Node.js v16+**
- **Docker**: Para rodar o projeto com Docker

### **Passo a Passo para Rodar o Projeto Localmente**

#### **1. Clonar o Repositório**
Clone o repositório em sua máquina local:

```bash
git clone https://github.com/JeanPaulll/payment-gateway-nestjs-develcode
cd payment-gateway-nestjs-develcode
```

#### **2. Instalar as Dependências**

Use **npm** ou **yarn** para instalar as dependências do projeto:

```bash
npm install
```

#### **3. Rodar o Projeto Localmente**

Para rodar a aplicação localmente em desenvolvimento:

```bash
npm run start
```

A aplicação estará disponível em http://localhost:3000.

#### **4. Rodar com Docker**

Se preferir rodar com Docker, certifique-se de que o Docker está instalado e execute:

```bash
docker-compose up --build
```
Isso irá construir a imagem Docker e rodar o serviço em um contêiner. A API estará disponível em http://localhost:3000.

## **Documentação da API com Swagger**

A API utiliza **Swagger** para fornecer documentação interativa. Você pode acessar a documentação do Swagger via: http://localhost:3000/api/docs

### **Endpoints Principais**

- **`POST /payments`**: Processa um pagamento.
    - **Corpo da Requisição**:
      ```json
      {
        "orderId": 12345,
        "amount": 150.00
      }
      ```
    - **Resposta de Sucesso**:
      ```json
      {
        "success": true,
        "message": "Pagamento realizado com sucesso",
        "status": "SUCESSO"
      }
      ```

    - **Resposta de Falha**:
      ```json
      {
        "success": false,
        "message": "Pagamento falhou",
        "status": "FALHA"
      }
      ```
      
### Contato

- Autor: Jean Paul
- LinkedIn: https://www.linkedin.com/in/jeanpaull/
- Email: jeanpaulwebb@gmail.com


### Evidências

![Projeto 1](https://raw.githubusercontent.com/JeanPaulll/payment-gateway-nestjs-develcode/refs/heads/master/prints/1.png)
![Projeto 2](https://raw.githubusercontent.com/JeanPaulll/payment-gateway-nestjs-develcode/refs/heads/master/prints/2.png)