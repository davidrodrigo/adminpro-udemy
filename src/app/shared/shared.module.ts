import { NgModule } from '@angular/core';

import { BreadcrumbsComponent } from '../shared/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';

@NgModule ({
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