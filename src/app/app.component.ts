import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Personal-Portfolio';

  isPopupVisible: boolean = true;

  tooglePopup() {
     this.isPopupVisible = !this.isPopupVisible;
   }
}
