import { Body, Controller, Post } from '@nestjs/common';
import { ProcessPaymentUseCase } from '../../application/use-cases/process-payment.use-case';
import { Payment } from '../../domain/entities/payment.entity';

/**
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @date 03/10/2024
 */
@Controller('payments')
export class PaymentController {
  constructor(private readonly processPaymentUseCase: ProcessPaymentUseCase) {}

  @Post()
  async processPayment(
    @Body() body: { orderId: number; amount: number },
  ): Promise<void | Payment> {
    const { orderId, amount } = body;
    return await this.processPaymentUseCase.execute(orderId, amount);
  }
}
