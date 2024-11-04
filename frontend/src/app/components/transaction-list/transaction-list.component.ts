import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/Transaction.model';
import { TransactionsService } from 'src/app/services/transactions.service';
import * as Toastify from 'toastify-js';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  transaction: Transaction[] = [];
  total: number = 0;
  totalExpenses: number = 0; 
  totalRevenue: number = 0;

  constructor(private transactionService: TransactionsService) { }

  ngOnInit(): void {
    this.loadDataIntoTable();
  }

  deleteTransaction(id: number): void { 
    this.transactionService.deleteTransaction(id).subscribe(response => {
      this.showSuccessToast('Gasto eliminado');
      this.transaction = this.transaction.filter(transaction => transaction.id != id);
      this.calculateTotal();
    });
  }

  private loadDataIntoTable(): void {
    this.transactionService.getTransactions().subscribe(transaction => {
      this.transaction = transaction; 
      this.calculateTotal();
    });
  }

  private calculateTotal(): void {
    this.total = this.transaction.reduce((accumulated, currentValue) => {
      const amount = currentValue.type === 'expense' 
        ? -Number(currentValue.amount)
        : Number(currentValue.amount);
      return accumulated + amount;
    }, 0);

    this.totalExpenses = this.transaction
      .filter(t => t.type === 'despesa')
      .reduce((acc, curr) => acc + Number(curr.amount), 0);

    this.totalRevenue = this.transaction
      .filter(t => t.type === 'receita')
      .reduce((acc, curr) => acc + Number(curr.amount), 0);
  }

  private showSuccessToast(message: string): void {
    Toastify({
      text: message,
      close: true,
      gravity: "bottom",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "#189586",
      }
    }).showToast();
  }
}
