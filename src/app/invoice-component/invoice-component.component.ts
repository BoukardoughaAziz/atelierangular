// invoice-component.component.ts


import { Invoice } from '../models/invoice';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-invoice-component',
  templateUrl: './invoice-component.component.html',
  styleUrls: ['./invoice-component.component.css']
})
export class InvoiceComponentComponent {
  id: number = -1;
  active: boolean = false;
  invoice: Invoice | undefined;
  errorMessage: string = '';

  list: Invoice[] = [
    { idFacture: 1, montantFacture: 120, montantRemise: 10, dateFacture: "12/12/2021", active: true },
    { idFacture: 2, montantFacture: 1020, montantRemise: 90, dateFacture: "22/11/2020", active: true },
    { idFacture: 3, montantFacture: 260, montantRemise: 30, dateFacture: "18/10/2020", active: false },
    { idFacture: 4, montantFacture: 450, montantRemise: 40, dateFacture: "14/12/2020", active: true },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.active = params['active'] === 'true';
      this.loadInvoice();
    });
  }

  loadInvoice() {
    this.invoice = this.list.find((item) => item.idFacture === this.id);
    this.errorMessage = !this.invoice || !this.active ? "Impossible de visualiser les détails de la facture" : '';
  }

  goBack() {
    this.router.navigate(['Main Invoice']);
  }
}
