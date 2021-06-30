
// A utility module adding I18N support for Storybook stories

import { NgModule } from "@angular/core";
import { FakeMissingTranslationHandler, MissingTranslationHandler, TranslateLoader, TranslateModule, TranslateService } from "@ngx-translate/core";
import { of } from "rxjs";

const staticTranslateLoader: TranslateLoader = {
  getTranslation(lang: string) {
    return of(require(`../assets/i18n/${lang}.json`));
  },
};

let APP_I18N_CONFIG = {
	loader: {
		provide: TranslateLoader,
		useValue: staticTranslateLoader,
	},
	missingTranslationHandler: {
		provide: MissingTranslationHandler,
		useClass: FakeMissingTranslationHandler,
	},
}
 
@NgModule({
  imports: [TranslateModule.forRoot(APP_I18N_CONFIG), TranslateModule],
})
export class StorybookTranslateModule {
  constructor(translateService: TranslateService) {
    console.log("Configuring the translation service: ", translateService);
    console.log("Translations: ", translateService.translations);
    translateService.setDefaultLang("en");
    translateService.use("en");
  }
}