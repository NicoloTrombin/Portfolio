import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-base-switcher',
  templateUrl: './base-switcher.component.html',
  styleUrls: ['./base-switcher.component.css'],
})
export class BaseSwitcherComponent {

  languages: { code: string, name: string, flag: string }[] = [
    { code: 'en', name: 'EN', flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/800px-Flag_of_the_United_Kingdom.svg.png' },
    { code: 'es', name: 'SP', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/750px-Flag_of_Spain.svg.png?20140922091435' },
    { code: 'it', name: 'IT', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Flag_of_Italy_%28Pantone%2C_2006%29.svg/220px-Flag_of_Italy_%28Pantone%2C_2006%29.svg.png' },
  ];
  selectedLanguage: { code: string, name: string, flag: string } = this.languages[0]; // Default selected language
  isDropdownVisible: boolean = false;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  selectLanguage(language: { code: string, name: string, flag: string }): void {
    this.selectedLanguage = language;
    this.translate.use(language.code);
  }

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

}
