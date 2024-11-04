import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionsService } from 'src/app/services/transactions.service';
import * as Toastify from 'toastify-js';

@Component({
  selector: 'app-transactions-form',
  templateUrl: './transactions-form.component.html',
  styleUrls: ['./transactions-form.component.scss']
})
export class TransactionsFormComponent implements OnInit {
  transactionsForm: FormGroup = new FormGroup({
    type        : new FormControl('', [Validators.required, Validators.maxLength(100)]),
    amount      : new FormControl('', Validators.required),
    description : new FormControl('', Validators.required)
  });
  transactionsId?: number;

  constructor(
    private transactionsService: TransactionsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadDataIntoForm();
  }

  savetransaction(): void {
    if (this.transactionsId) {
      this.transactionsService.updateTransaction(this.transactionsId, this.transactionsForm.value).subscribe(transactions => {
        this.showSuccessToast("Gasto actualizado con éxito");
        this.router.navigateByUrl('/gastos');
      });
    } else {
      this.transactionsService.createTransaction(this.transactionsForm.value).subscribe(transactions => {
        this.showSuccessToast("Gasto agregado con éxito");
        this.router.navigateByUrl('/gastos');
      });
    }
  }

  hasError(field: string): boolean {
    const errorsObject = this.transactionsForm.get(field)?.errors ?? {};
    const errors = Object.keys(errorsObject);

    if (errors.length && (this.transactionsForm.get(field)?.touched || this.transactionsForm.get(field)?.dirty)) {
      return true;
    }

    return false;
  }

  getCurrentError(field: string): string {
    const errorsObject = this.transactionsForm.get(field)?.errors ?? {};
    const errors = Object.keys(errorsObject);

    if (!errors)
      return '';

    return errors[0];
  }

  getFormTitle(): string {
    return this.transactionsId ? 'Editar gasto' : 'Novo Gasto';
  }

  private loadDataIntoForm(): void {
    this.transactionsId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.transactionsId) {
      this.transactionsService.getTransaction(this.transactionsId).subscribe(transactions => this.transactionsForm.patchValue(transactions));
    }
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
