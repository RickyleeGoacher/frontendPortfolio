import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ProjectSectionComponent } from './components/project-section/project-section.component';
import { ExperimentsSectionComponent } from './components/experiments-section/experiments-section.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutImageComponent } from './components/about-image/about-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    HeroComponent,
    AboutSectionComponent,
    ProjectSectionComponent,
    ExperimentsSectionComponent,
    ContactFormComponent,
    NavigationComponent,
    FooterComponent,
    AboutImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
