import { Component, Input, EventEmitter,  Output, AfterViewInit, OnChanges } from '@angular/core';
import { Difficulty } from '../todos-service/todos';

@Component({
  selector: 'app-hardness-indicator',
  templateUrl: './hardness-indicator.html',
  styleUrls: ['../styles/hardness-indicator.scss'],
})
export class HardnessIndicatorComponent implements AfterViewInit, OnChanges {
  @Input() difficulty: Difficulty | undefined; // Входной параметр для уровня сложности

  @Input() editMode: boolean =false; 


 
  constructor() {

  }
  ngAfterViewInit(): void {
    this.buferDifficulty = this.difficulty;
  }
  ngOnChanges(): void {
    this.buferDifficulty = this.difficulty;
  }

  circles: string[] = ['', '', ''];

  // Определите метод или свойство, которое будет возвращать классы CSS в зависимости от уровня сложности
  getIndicatorClasses(index: number): string {

    switch (this.editMode?this.buferDifficulty:this.difficulty) {
      case Difficulty.Easy:
        if (index == 0) 
          return 'easy';
        else return '';
      case Difficulty.Medium:
        if(index==1 || index==0)
        return 'medium' 
      else return '';
      case Difficulty.Hard:
        return 'hard';
      default:
        return '';
    }
  }

  buferDifficulty:Difficulty|undefined;
  setHardness(index:number){
    if(this.editMode){
      switch(index){
        case 0:
        this.buferDifficulty=Difficulty.Easy;
  this.change(Difficulty.Easy)
        break;

        case 1:
          this.buferDifficulty=Difficulty.Medium;
          this.change(Difficulty.Medium)

          break;

        case 2:
          this.buferDifficulty=Difficulty.Hard;
          this.change(Difficulty.Hard)

        break;


      }

    }
    
  }

  @Output() onChanged = new EventEmitter<Difficulty>();
  change(selectedDifficult:Difficulty) {
      this.onChanged.emit(selectedDifficult);
  }
}
