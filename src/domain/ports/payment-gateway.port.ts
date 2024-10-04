import { Payment } from '../entities/payment.entity';

/**
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @date 03/10/2024
 */
export interface PaymentGatewayPort {
  process(payment: Payment): Promise<{ success: boolean }>;
}
