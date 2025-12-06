export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum PricingTier {
  SINGLE = 'SINGLE',
  MONTHLY = 'MONTHLY'
}
