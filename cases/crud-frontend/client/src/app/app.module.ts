import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';

import { AppHeaderComponent }  from './app-header/app-header.component';
import { AppListComponent }  from './app-list/app-list.component';
import { ModalComponent }  from './app-modal/app-modal.component';

@NgModule({
    imports: [ 
        BrowserModule,
        FormsModule
     ],
    declarations: [ 
        AppComponent,
        AppHeaderComponent,
        AppListComponent,
        ModalComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }