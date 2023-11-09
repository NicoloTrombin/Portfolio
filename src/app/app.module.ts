import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './base/header/header.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { FooterComponent } from './base/footer/footer.component';

// Import Toaster 
import { ToastrModule } from 'ngx-toastr';
// Import Translate and Loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BaseSwitcherComponent } from './base/base-switcher/base-switcher.component';
import { SkillsComponent } from './pages/about-page/skills/skills.component';
import { StudiesJobsComponent } from './pages/about-page/studies-jobs/studies-jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    AboutPageComponent,
    ProjectsComponent,
    ContactMeComponent,
    FooterComponent,
    BaseSwitcherComponent,
    SkillsComponent,
    StudiesJobsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true,
    }),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
