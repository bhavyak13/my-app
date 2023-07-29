import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
