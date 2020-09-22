import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesListeComponent } from './pages/notes-liste/notes-liste.component';
import { MainLayoutsComponent } from './pages/main-layouts/main-layouts.component';
import { NoteDetailsComponent } from './pages/note-details/note-details.component';


const routes: Routes = [
  {path: '', component: MainLayoutsComponent, children: [
    { path: '', component: NotesListeComponent},
    { path: 'new', component: NoteDetailsComponent },
    { path: ':id', component: NoteDetailsComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
