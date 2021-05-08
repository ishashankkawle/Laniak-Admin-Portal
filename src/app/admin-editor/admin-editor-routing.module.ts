import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminEditorComponent } from './admin-editor.component';
import { EditorPageComponent } from './editor-page/editor-page.component';

const routes: Routes = [
    {
        path: 'admin-panel', component: AdminEditorComponent, children: [
            { path: 'editor', component: EditorPageComponent},
            { path: '', redirectTo: "editor" , pathMatch: 'full'},
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminEditorRoutingModue { }
