import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../pipes/pipes.module';

import { BreadcrumbsComponent } from '../shared/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';

@NgModule ({
	imports: [
		RouterModule,
		CommonModule,
		PipesModule
	],
	declarations: [
		BreadcrumbsComponent,
		HeaderComponent,
		SidebarComponent,
		NopagefoundComponent
	],
	exports: [
		BreadcrumbsComponent,
		HeaderComponent,
		SidebarComponent,
		NopagefoundComponent
	]
})

export class SharedModule {}