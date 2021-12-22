/**
 * Rich Text Editor API functionality Sample
 */
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { CheckBoxComponent } from '@syncfusion/ej2-angular-buttons';
import { NumericTextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import {
  RichTextEditorComponent,
  ToolbarService,
  LinkService,
  ImageService,
} from '@syncfusion/ej2-angular-richtexteditor';
import {
  HtmlEditorService,
  CountService,
  QuickToolbarService,
} from '@syncfusion/ej2-angular-richtexteditor';
import {
  DragEventArgs,
  DropDownListComponent,
  FieldSettingsModel,
} from '@syncfusion/ej2-angular-dropdowns';

import { DataManager } from '@syncfusion/ej2-data';
import { ListBoxComponent } from '@syncfusion/ej2-angular-dropdowns';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    ToolbarService,
    LinkService,
    ImageService,
    HtmlEditorService,
    CountService,
    QuickToolbarService,
  ],
})
export class AppComponent {
  @ViewChild('apiRTE')
  public rteObj: RichTextEditorComponent;

  @ViewChild('readonly')
  public readonlyObj: CheckBoxComponent;

  @ViewChild('enable')
  public enableObj: CheckBoxComponent;

  @ViewChild('enablehtml')
  public enablehtmlObj: CheckBoxComponent;

  @ViewChild('numeric')
  public numericObj: NumericTextBoxComponent;

  public maxLength: number = 1000;
  public numericValue: number = 1000;
  public numericmin: number = 555;
  public numericmax: number = 2000;
  public numericformat: string = 'n0';

  public onValChange(): void {
    this.rteObj.maxLength = this.numericObj.value;
  }

  public onChangeRead(): void {
    this.rteObj.readonly = this.readonlyObj.checked;
  }

  public onChangeEnable(): void {
    this.rteObj.enabled = this.enableObj.checked;
  }

  public onChangeHtml(): void {
    this.rteObj.enableHtmlEncode = this.enablehtmlObj.checked;
  }

  public getVal(): void {
    alert(this.rteObj.value);
  }

  public getSelect(): void {
    alert(this.rteObj.getSelection());
  }

  public selectAll(): void {
    this.rteObj.selectAll();
  }

  //*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

  @ViewChild('listbox1') public listObj1: ListBoxComponent;
  @ViewChild('listbox2') public listObj2: ListBoxComponent;
  public dataA: DataManager = new DataManager({
    json: [
      { Name: 'Australia', Code: 'AU' },
      { Name: 'Bermuda', Code: 'BM' },
      { Name: 'Canada', Code: 'CA' },
      { Name: 'Cameroon', Code: 'CM' },
      { Name: 'Denmark', Code: 'DK' },
      { Name: 'France', Code: 'FR' },
      { Name: 'Finland', Code: 'FI' },
      { Name: 'Germany', Code: 'DE' },
      { Name: 'Hong Kong', Code: 'HK' },
    ],
  });
  public fields: FieldSettingsModel = { text: 'Name' };

  public modifiedDataA: ModifiedRecords = {
    addedRecords: [],
    deletedRecords: [],
    changedRecords: [],
  };
  public modifiedDataB: ModifiedRecords = {
    addedRecords: [],
    deletedRecords: [],
    changedRecords: [],
  };
  public saveChanges(): void {
    this.dataA.saveChanges(this.modifiedDataA, this.fields.text);
    //this.dataB.saveChanges(this.modifiedDataB, this.fields.text);
    this.modifiedDataA.addedRecords = [];
    this.modifiedDataB.addedRecords = [];
  }
  public onDropGroupA(args: DragEventArgs): void {
    args.items.forEach((item: { [key: string]: Object }): void => {
      /*Preventing item manipulation while doing drag and drop within same list box.*/
      if (!this.listObj1.getDataByValue(item[this.fields.text] as string)) {
        this.modifiedDataB.addedRecords.push(item);
        this.modifiedDataA.deletedRecords.push(item);
      }
    });
  }
}

interface ModifiedRecords {
  addedRecords: { [key: string]: Object }[];
  deletedRecords: { [key: string]: Object }[];
  changedRecords: { [key: string]: Object }[];
}
