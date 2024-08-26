

export enum TransactionType {
  REVENU = 'REVENU',
  DEPENSE = 'DEPENSE',
}

export class Transaction {
  id: number;
  title: string;
  montant: number;
  type: TransactionType;
  date: Date;
}
