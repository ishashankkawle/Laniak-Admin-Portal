import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { EditorPageComponent } from './editor-page/editor-page.component';
import { PageListComponent } from './page-list/page-list.component';
import { FolderListComponent } from './folder-list/folder-list.component';
import { NewFolderPopupComponent } from './new-folder-popup/new-folder-popup.component';
import { NewPagePopupComponent } from './new-page-popup/new-page-popup.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatListModule, MatDialogModule, MatButtonModule, MatInputModule } from '@angular/material';
import { AdminEditorComponent } from './admin-editor.component';
import { AdminEditorRoutingModue } from './admin-editor-routing.module';
import { TitleBarComponent } from './title-bar/title-bar.component';

@NgModule({
  imports: [
    CommonModule,
    AdminEditorRoutingModue,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule
  ],
  declarations: [
    AdminEditorComponent,
    MenuBarComponent,
    EditorPageComponent,
    PageListComponent,
    FolderListComponent,
    NewFolderPopupComponent,
    NewPagePopupComponent,
    TitleBarComponent,
  ],
  entryComponents: [
    NewFolderPopupComponent,
    NewPagePopupComponent
],
exports: [
  MenuBarComponent,
    EditorPageComponent,
    PageListComponent,
    FolderListComponent,
    NewFolderPopupComponent,
    NewPagePopupComponent,
    TitleBarComponent,
]
})
export class AdminEditorModule { }
