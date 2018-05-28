import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { PagesComponent } from '../pages/pages.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { Graficas1Component } from '../pages/graficas1/graficas1.component';
import { FormsModule } from '@angular/forms';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

//ng2-Charts
import { ChartsModule } from 'ng2-charts';

import { PAGES_ROUTES } from '../pages/pages.routes';

//temporal
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
	    RxjsComponent
	],
	exports: [
		PagesComponent,
		DashboardComponent,
	    ProgressComponent,
	    Graficas1Component
	],
	imports: [
		SharedModule,
		PAGES_ROUTES,
		FormsModule,
		ChartsModule
	]
})

export class PagesModule {}