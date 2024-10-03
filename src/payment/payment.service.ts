import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentService {
  processPayment(orderId: number, amount: number): { success: boolean; message: string } {
    // Simulação de lógica de pagamento
    const paymentSuccess = Math.random() > 0.5; // 50% de chance de sucesso

    if (paymentSuccess) {
      return { success: true, message: `Pagamento do pedido ${orderId} foi bem sucedido.` };
    } else {
      return { success: false, message: `Pagamento do pedido ${orderId} com falha.` };
    }
  }
}