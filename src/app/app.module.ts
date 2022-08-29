import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from "ngx-infinite-scroll";

import { AppComponent } from './app.component';
import { ExcerptListComponent } from './excerpt-list/excerpt-list.component';
import { EntryComponent } from './entry/entry.component';
import { ExcerptComponent } from './excerpt/excerpt.component';
import { InputComponent } from './input/input.component';
import { HeaderComponent } from './header/header.component';
import { SelectComponent } from './select/select.component';
import { ModalComponent } from './modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExcerptFormComponent } from './excerpt-form/excerpt-form.component';
import { TextareaComponent } from './textarea/textarea.component';
import { HttpClientModule } from '@angular/common/http';

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
    ExcerptFormComponent,
    TextareaComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
