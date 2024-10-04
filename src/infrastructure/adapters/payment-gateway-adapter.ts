import { Injectable } from '@nestjs/common';
import { PaymentGatewayPort } from '../../domain/ports/payment-gateway.port';
import { Payment } from '../../domain/entities/payment.entity';

/**
 * @description Stripe | PayPal
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @date 03/10/2024
 */
@Injectable()
export class ExternalPaymentGatewayAdapter implements PaymentGatewayPort {
  async process(payment: Payment): Promise<{ success: boolean }> {
    const success = Math.random() > 0.5; // Simulando um pagamento aleatório
    return { success };
  }
}
