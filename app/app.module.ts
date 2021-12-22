import { SwitchModule } from '@syncfusion/ej2-angular-buttons';

import { TabModule } from '@syncfusion/ej2-angular-navigations';

import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

import {
  ListBoxAllModule,
  DropDownListModule,
} from '@syncfusion/ej2-angular-dropdowns';

import { DialogModule } from '@syncfusion/ej2-angular-popups';

import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';

import { RadioButtonModule } from '@syncfusion/ej2-angular-buttons';

import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';

import { SplitterModule } from '@syncfusion/ej2-angular-layouts';

import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';

import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TabModule,
    RichTextEditorAllModule,
    SplitterModule,
    CheckBoxModule,
    DialogModule,
    NumericTextBoxModule,
    ButtonModule,
    SwitchModule,
    RadioButtonModule,
    TextBoxModule,
    ListBoxAllModule,
    DropDownListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
