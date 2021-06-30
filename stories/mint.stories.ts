import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { PaymentComponent, PaymentModule } from 'projects/payment/src/public-api';
import { StorybookTranslateModule } from './modules/i18nModule';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { APP_INITIALIZER } from '@angular/core';
import { faHome, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faSquare as farSquare, faCheckSquare as farCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { FontModule } from './modules/fontawesome.module';



export default {
  title: 'Mint/Payment',
  component: PaymentComponent,
  decorators: [
		moduleMetadata({
			imports: [CommonModule, StorybookTranslateModule, FontModule, PaymentModule],
			providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: (iconLibrary: FaIconLibrary) => async() => {
            // Add any icons needed here:
            iconLibrary.addIcons(faHome);
            iconLibrary.addIcons(faTimes);
            iconLibrary.addIcons(faSquare);
            iconLibrary.addIcons(farSquare);
          },
          // When using a factory provider you need to explicitly specify its dependencies.
          deps: [FaIconLibrary],
          multi: true,
        },
      ],
		})
    // moduleMetadata({
    //   declarations: [Button],
    //   imports: [CommonModule],
    // }),
  ],
} as Meta;

const Template: Story<PaymentComponent> = (args: PaymentComponent) => ({
  props: args,
});

export const NoPayment = Template.bind({});
NoPayment.args = {
	address: 'addr1v85yqfxpv6wh7h8t6nxfnh4dazygw65nrf6zthmzteuprgq7alc7p',
	total: 5,
	payments: []
};

export const WithPayments = Template.bind({});
WithPayments.args = {
	address: 'addr1v85yqfxpv6wh7h8t6nxfnh4dazygw65nrf6zthmzteuprgq7alc7p',
	total: 6,
	payments: [{ ada: 3}]
};