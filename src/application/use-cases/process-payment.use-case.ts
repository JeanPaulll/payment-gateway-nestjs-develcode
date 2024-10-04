import { Injectable } from '@nestjs/common';
import { PaymentService } from '../../domain/services/payment.service';
import { PaymentRepository } from '../../infrastructure/repositories/payment.repository';

/**
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @date 03/10/2024
 */
@Injectable()
export class ProcessPaymentUseCase {
  constructor(
    private readonly paymentService: PaymentService,
    private readonly paymentRepository: PaymentRepository,
  ) {}

  async execute(orderId: number, amount: number) {
    const payment = await this.paymentService.processPayment(orderId, amount);
    this.paymentRepository.save(payment);
    return payment;
  }
}
