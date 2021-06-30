import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { QRCodeModule } from 'angularx-qrcode';
import { PaymentComponent } from './payment.component';



@NgModule({
  declarations: [
    PaymentComponent
  ],
  imports: [
		CommonModule,
		TranslateModule,
		FontAwesomeModule,
		QRCodeModule
  ],
  exports: [
    PaymentComponent
  ]
})
export class PaymentModule { }
