import { Component } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Personal-Portfolio';

  ngOnInit(): void {
    Aos.init({
      offset: 400,
      duration: 2000
    });
  }

}
