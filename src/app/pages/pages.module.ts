import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { PagesComponent } from '../pages/pages.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { Graficas1Component } from '../pages/graficas1/graficas1.component';
import { FormsModule } from '@angular/forms';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { ProfileComponent } from './profile/profile.component';

//Pipes Module
import { PipesModule } from '../pipes/pipes.module';

//ng2-Charts
import { ChartsModule } from 'ng2-charts';

import { PAGES_ROUTES } from '../pages/pages.routes';

import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
	declarations: [
		PagesComponent,
		DashboardComponent,
	    ProgressComponent,
	    Graficas1Component,
	    IncrementadorComponent,
	    GraficoDonaComponent,
	    AccountSettingsComponent,
	    PromesasComponent,
	    RxjsComponent,
	    ProfileComponent
	],
	exports: [
		PagesComponent,
		DashboardComponent,
	    ProgressComponent,
	    Graficas1Component
	],
	imports: [
		CommonModule,
		SharedModule,
		PAGES_ROUTES,
		FormsModule,
		ChartsModule,
		PipesModule
	]
})

export class PagesModule {} 