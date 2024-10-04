import { Injectable } from '@nestjs/common';
import { Payment } from '../../domain/entities/payment.entity';

/**
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @date 03/10/2024
 */
@Injectable()
export class PaymentRepository {
  private readonly payments: Payment[] = [];

  save(payment: Payment): Payment {
    this.payments.push(payment);
    return payment;
  }

  findAll(): Payment[] {
    return this.payments;
  }
}
