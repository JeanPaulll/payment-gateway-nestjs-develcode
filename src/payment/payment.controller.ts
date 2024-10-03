import { Controller, Post, Body } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  processPayment(@Body() paymentData: { orderId: number; amount: number }) {
    const { orderId, amount } = paymentData;
    return this.paymentService.processPayment(orderId, amount);
  }
}