import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from '../pages/pages.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { Graficas1Component } from '../pages/graficas1/graficas1.component';
import { AccountSettingsComponent } from '../pages/account-settings/account-settings.component';
import { PromesasComponent } from '../pages/promesas/promesas.component';
import { RxjsComponent } from '../pages/rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/service.index';
import { ProfileComponent } from '../pages/profile/profile.component';


const pagesRoutes: Routes = [
	{
		path: '', 
			component: PagesComponent,
			canActivate: [LoginGuardGuard],
			children: [
				{path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'}},
				{path: 'progress', component: ProgressComponent, data: {titulo: 'Progress'}},
				{path: 'graficas1', component: Graficas1Component, data: {titulo: 'Gráficas'}},
				{path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'}},
				{path: 'rxjs', component: RxjsComponent, data: {titulo: 'RxJs'}},
				{path: 'account-settings', component: AccountSettingsComponent, data: {titulo: 'Ajustes del Tema'}},
				{path: 'perfil', component: ProfileComponent, data: {titulo: 'Perfil de Usuario'}},
				{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
			]
	}
]

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);