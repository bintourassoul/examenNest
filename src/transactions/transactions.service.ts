
import { Injectable } from '@nestjs/common';
import { Transaction, TransactionType } from './transactions.entity';

@Injectable()
export class TransactionsService {
  private transactions: Transaction[] = [];
  private idCounter = 1;

  create(transaction: Partial<Transaction>): Transaction {
    const newTransaction: Transaction = {
      id: this.idCounter++,
      title: transaction.title,
      montant: transaction.montant,
      type: transaction.type,
      date: new Date(),
    };
    this.transactions.push(newTransaction);
    return newTransaction;
  }

  findAll(): Transaction[] {
    return this.transactions;
  }

  findOne(id: number): Transaction {
    return this.transactions.find(transaction => transaction.id === id);
  }

  update(id: number, transaction: Partial<Transaction>): Transaction {
    const existingTransaction = this.findOne(id);
    if (existingTransaction) {
      Object.assign(existingTransaction, transaction);
    }
    return existingTransaction;
  }

  remove(id: number): void {
    this.transactions = this.transactions.filter(transaction => transaction.id !== id);
  }

  getSummary() {
    const revenu = this.transactions
      .filter(t => t.type === TransactionType.REVENU)
      .reduce((sum, t) => sum + t.montant, 0);

    const depense = this.transactions
      .filter(t => t.type === TransactionType.DEPENSE)
      .reduce((sum, t) => sum + t.montant, 0);

    const budgetRemaining = revenu - depense;

    return { revenu, depense, budgetRemaining };
  }
}

