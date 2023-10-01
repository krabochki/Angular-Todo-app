import {
  state,
  style,
  trigger,
  transition,
  animate,
} from '@angular/animations';
import { Component } from '@angular/core';
import { Todo, Difficulty } from './todos-service/todos';
import { TodosService } from './todos-service/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  animations: [
   trigger('todo', [
      transition(':enter', [
        style({ height: '0',  opacity: 0, 'backdrop-filter': 'blur(4px) opacity(0) ' }),
        animate('800ms ease-out', style({ height: '*', opacity: 1, 'backdrop-filter': 'blur(4px) opacity(1)' }))
      ]),
      transition(':leave', [
         style({ height: '*', opacity: 1, 'backdrop-filter': 'blur(4px) opacity(1) ' }),
        animate('800ms ease-in', style({ height: '0', opacity: 0, 'backdrop-filter': 'blur(4px) opacity(0) ' }))
      ])
    ]),
    trigger('new-todo', [
      transition(':enter', [
        style({  opacity: 0, 'backdrop-filter': 'blur(4px) opacity(0) ' }),
        animate('300ms ease-out', style({ opacity: 1, 'backdrop-filter': 'blur(4px) opacity(1)' }))
      ]),
      transition(':leave', [
         style({ opacity: 1, 'backdrop-filter': 'blur(4px) opacity(1) ' }),
        animate('300ms ease-in', style({ opacity: 0, 'backdrop-filter': 'blur(4px) opacity(0) ' }))
      ])
    ])
 ],
  styleUrls: ['./styles/app.scss'],
})
export class AppComponent {

  newTodoMode: boolean = false;
  constructor(private tService: TodosService) {
   this.nullDate=this.date
  }
  title = 'Время. Задачи. Результаты';
  todos: Todo[] = this.tService.todos;

  selectedDifficulty: Difficulty | undefined;
  onChanged(newDiffucult: Difficulty) {
    this.selectedDifficulty = newDiffucult;
  }

  name: string = '';
  description: string = '';
  date: Date = new Date(0);
  nullDate:Date ;

  
  addNewTodo() {

   let maxId = Math.max(...this.tService.todos.map(todo => todo.id), 0);

    let todo: Todo = {
      id: maxId,
      name: this.name,
      description: this.description,
      completed: false,
      difficulty: this.selectedDifficulty,
    };
    if(this.date!=this.nullDate){
    
      todo.dueDate=this.date
    }
    if(this.name!=''){

      
  
    this.tService.addTodo(todo);
    this.newTodoMode=!this.newTodoMode;
    this.date=this.nullDate
    this.name='';
    this.description=''}
    else{
      alert('Задача должна иметь имя')
    }
    

  }
}
