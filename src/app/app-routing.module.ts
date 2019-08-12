import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from  './auth.guard';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CreateAboutComponent } from './admin/create-about/create-about.component';
import { CreateExperimentComponent } from './admin/create-experiment/create-experiment.component';
import { CreateProjectComponent } from './admin/create-project/create-project.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'portfolio', component: PortfolioComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
	{ path: 'create-about', component: CreateAboutComponent, canActivate: [AuthGuard] },
	{ path: 'create-experiment', component: CreateExperimentComponent, canActivate: [AuthGuard] },
	{ path: 'create-project', component: CreateProjectComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
	HomeComponent,
	AboutComponent,
	ContactComponent,
	PortfolioComponent,
	LoginComponent,
	RegisterComponent,
	DashboardComponent,
	CreateAboutComponent,
	CreateExperimentComponent,
	CreateProjectComponent
];
