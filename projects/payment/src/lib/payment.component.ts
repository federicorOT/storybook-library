import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Payment } from './payment.model';

@Component({
  selector: 'ui-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
	@Input() address: string = '';
	@Input() total: number = 0;
	@Input() payments: Payment[] = [];

	currentPayments = 0;

  constructor() { }

  ngOnInit(): void {
		this.currentPayments = this.payments.reduce((acc, p) => acc + (p.ada || 0), 0)
  }

}
