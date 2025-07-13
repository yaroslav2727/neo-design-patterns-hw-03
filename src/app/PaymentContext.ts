import { PaymentProviderFactory } from "../core/PaymentProviderFactory";
import { PaymentProvider } from "../core/PaymentProvider";

export class PaymentContext {
  private paymentProvider: PaymentProvider;

  constructor(factory: PaymentProviderFactory) {
    this.paymentProvider = factory.createPaymentProvider();
  }

  processPayment(amount: number): void {
    const transactionId = `${Math.random().toString().substring(2, 9)}`;

    this.paymentProvider.authorize(amount);
    this.paymentProvider.capture(transactionId);
    this.paymentProvider.refund(transactionId);
  }
}
