import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ExcerptListComponent } from './excerpt-list/excerpt-list.component';
import { EntryComponent } from './entry/entry.component';
import { ExcerptComponent } from './excerpt/excerpt.component';
import { InputComponent } from './input/input.component';
import { HeaderComponent } from './header/header.component';
import { SelectComponent } from './select/select.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ExcerptListComponent,
    EntryComponent,
    ExcerptComponent,
    InputComponent,
    HeaderComponent,
    SelectComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
