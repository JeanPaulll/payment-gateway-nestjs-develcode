/**
 * @author Jean Paul - <jeanpaulwebb@gmail.com>
 * @date 03/10/2024
 */
export class Payment {
  constructor(
    public orderId: number,
    public amount: number,
    public status: 'PENDENTE' | 'SUCESSO' | 'FALHA' = 'PENDENTE',
  ) {}
}
