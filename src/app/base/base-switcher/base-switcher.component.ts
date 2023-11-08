import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-base-switcher',
  templateUrl: './base-switcher.component.html',
  styleUrls: ['./base-switcher.component.css']
})
export class BaseSwitcherComponent {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
