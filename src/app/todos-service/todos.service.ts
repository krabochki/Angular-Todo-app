import { Injectable } from '@angular/core';
import { Todo, todos } from './todos';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: Todo[] = todos;

  addTodo(todo: Todo) {
    this.todos.unshift(todo);
  }
  clearTodos() {
    this.todos = [];
    return this.todos;
  }
  removeTodo(todo: Todo) {
    const index = this.todos.indexOf(todo, 0);
    this.todos.splice(index, 1);
  }

  constructor() { }
}
