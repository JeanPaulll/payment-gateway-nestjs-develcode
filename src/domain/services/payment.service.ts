import { Payment } from '../entities/payment.entity';
import { PaymentGatewayPort } from '../ports/payment-gateway.port';
import { Inject, Injectable } from '@nestjs/common';

/**
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @date 03/10/2024
 */
@Injectable()
export class PaymentService {
  constructor(
    @Inject('PaymentGatewayPort')
    private readonly paymentGateway: PaymentGatewayPort,
  ) {}

  async processPayment(orderId: number, amount: number): Promise<Payment> {
    const payment = new Payment(orderId, amount);

    const result = await this.paymentGateway.process(payment);

    payment.status = result.success ? 'SUCESSO' : 'FALHA';

    return payment;
  }
}
