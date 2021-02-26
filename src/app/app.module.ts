import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import * as fromTodo from './state/todos.reducer';
import { TodosListComponent } from './todos-list/todos-list.component';
import { MatButtonModule, MatCheckboxModule, MatListModule } from '@angular/material';
import { TodosDetailComponent } from './todos-detail/todos-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosListComponent,
    TodosDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    StoreModule.forRoot({
      todos: fromTodo.reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
