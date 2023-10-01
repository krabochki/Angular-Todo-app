import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Difficulty, Todo } from '../todos-service/todos';
import { TodosService } from '../todos-service/todos.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.html',
  styleUrls: ['../styles/todo.scss'],

})
export class TodoComponent {

  @ViewChild("date", {static: false}) date: ElementRef|undefined;
  @ViewChild("name", {static: false}) name: ElementRef|undefined;
  @ViewChild("description", {static: false}) description: ElementRef|undefined;


  @Input() todo :Todo;


   
  selectedDifficulty:Difficulty|undefined;
  onChanged(newDiffucult:Difficulty){
      this.selectedDifficulty= newDiffucult;
  }

  exit: boolean = false;

  constructor(private tService:TodosService){
    this.todo={
      id:0,
      name:'',
      completed:false
    }
  }



  yesClick(){
   
      this.editMode=!this.editMode;
      if(!this.editMode){

        this.tService.todos[this.todo.id-1].dueDate= this.date?.nativeElement.value;
        this.tService.todos[this.todo.id-1].name= this.name?.nativeElement.textContent;
        this.tService.todos[this.todo.id-1].description= this.description?.nativeElement.textContent;
      
        if(this.selectedDifficulty!=undefined){
        this.tService.todos[this.todo.id-1].difficulty=this.selectedDifficulty}

       
      }

    
  }

  noClick(){

    if(this.editMode){

      this.editMode=!this.editMode;

       
      if ( this.date != undefined) {
        this.date.nativeElement.value = this.tService.todos[this.todo.id-1].dueDate;
      }
      if (this.name != undefined){
        this.name.nativeElement.textContent= this.tService.todos[this.todo.id-1].name;

      }
    if (this.description!=undefined){
      this.description.nativeElement.textContent = this.tService.todos[this.todo.id-1].description;}
     let diff =this.tService.todos[this.todo.id-1].difficulty
      this.todo.difficulty = Difficulty.Easy

      this.todo.difficulty =diff

      
    }
    else{
      this.tService.removeTodo(this.todo);
    }


  }
  changeState(){
    this.todo.completed=!this.todo.completed;
    if(this.todo.completed) this.exit=false
    else this.exit=true;
  }

  editMode:boolean=false

}
