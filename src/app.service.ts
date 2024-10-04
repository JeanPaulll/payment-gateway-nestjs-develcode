import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
      Bem-vindo à API do Payment Gateway!

      A API do **Payment Gateway** é responsável por processar pagamentos de pedidos de compra dentro de um sistema de e-commerce.

      Funcionalidades Principais:
      - **Processamento de Pagamentos**: Recebe as requisições de pagamento e retorna o status da transação (aprovada ou falhada).
      - **Autenticação de Pagamentos**: Integrações com diferentes métodos de pagamento podem ser configuradas.
      - **Verificação e Validação**: Valida se os dados fornecidos para o pagamento estão corretos antes de processar a transação.

      Endpoints Principais:
      - POST /payments: Processa uma transação de pagamento.
      
      Exemplo de Corpo da Requisição:
      {
        "orderId": 12345,
        "amount": 150.00
      }
      
      Exemplo de Resposta de Sucesso:
      {
        "success": true,
        "message": "Pagamento realizado com sucesso"
      }

      Tecnologias Utilizadas:
      - **NestJS**: Framework para criação de aplicações Node.js escaláveis.
      - **Docker**: Para ambiente de desenvolvimento e produção isolados.
      - **PostgreSQL**: Banco de dados relacional utilizado para armazenar os dados dos pedidos e transações.

      Acesse a rota \`/api/docs\` para testar os endpoints via Swagger.
    `;
  }
}