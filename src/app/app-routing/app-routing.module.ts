import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { KanbanBoardComponent } from '../kanban-board/kanban-board.component';
import { KanbanRoutingGuard } from '../kanban-guard.guard';
import { LoginComponent } from '../login/login.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'kanban-board', component: KanbanBoardComponent, canActivate: [KanbanRoutingGuard] },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

