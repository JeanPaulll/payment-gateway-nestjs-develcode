import { Module } from '@nestjs/common';
import { PaymentService } from '../domain/services/payment.service';
import { PaymentController } from '../infrastructure/controllers/payment.controller';
import { ProcessPaymentUseCase } from '../application/use-cases/process-payment.use-case';
import { PaymentRepository } from '../infrastructure/repositories/payment.repository';
import { ExternalPaymentGatewayAdapter } from '../infrastructure/adapters/payment-gateway-adapter';

@Module({
  controllers: [PaymentController],
  providers: [
    PaymentService,
    PaymentRepository,
    ExternalPaymentGatewayAdapter,
    {
      provide: 'PaymentGatewayPort',
      useClass: ExternalPaymentGatewayAdapter,
    },
    ProcessPaymentUseCase,
  ],
})
export class PaymentModule {}
