export enum Difficulty {
    Easy = 'легко',
    Medium = 'средне',
    Hard = 'сложно',
  }
   enum Priority {
      Low = 'не срочно',
      Medium = 'в ближайшее время',
      High = 'срочно',
    }
  
    export interface Todo {
      id:number;
      name: string;
      description?: string;
      completed: boolean;
      difficulty?: Difficulty;
      dueDate?: Date; // Необязательное поле для срока выполнения
      priority?: Priority; // Необязательное поле для приоритета
    }
    
    export const todos: Todo[] = [
      {
        id: 1,
        name: 'Записать заметку для презентации',
        description: 'Записать краткую заметку для завтрашней презентации на работе.',
        completed: false,
        difficulty: Difficulty.Medium,
        dueDate: new Date('2023-10-15'),
        priority: Priority.Medium,
      },
      {
        id: 2,
        name: 'Подготовиться к экзамену',
        description: 'Подготовиться к экзамену по математике. Повторить темы 3-5.',
        completed: false,
        difficulty: Difficulty.Hard,
        dueDate: new Date('2023-09-30'),
        priority: Priority.High,
      },
      {
        id: 3,
        name: 'Сходить в спортзал',
        description: 'Пойти в спортзал на тренировку с 17:00 до 18:30.',
        completed: false,
        difficulty: Difficulty.Easy,
      },
      {
        id: 4,
        name: 'Завершить отчет о продажах',
        description: 'Завершить месячный отчет о продажах и отправить его руководству.',
        completed: false,
        difficulty: Difficulty.Medium,
        dueDate: new Date('2023-10-10'),
        priority: Priority.Medium,
      },
      {
        id: 5,
        name: 'Подготовить ужин',
        description: 'Подготовить ужин для семьи с использованием рецепта из кулинарной книги.',
        completed: false,
        difficulty: Difficulty.Easy,
      },
      {
        id: 6,
        name: 'Прочитать главу 3 книги',
        description: 'Прочитать третью главу новой книги до конца дня.',
        completed: false,
        difficulty: Difficulty.Medium,
        dueDate: new Date('2023-10-05'),
        priority: Priority.Medium,
      },
      {
        id: 7,
        name: 'Созвониться с другом',
        description: 'Позвонить другу и договориться о встрече на выходных.',
        completed: false,
      },
      {
        id: 8,
        name: 'Сделать уборку в комнате',
        description: 'Сделать уборку в комнате и выкинуть ненужные вещи.',
        completed: false,
        difficulty: Difficulty.Easy,
      },
      {
        id: 9,
        name: 'Запланировать отпуск',
        description: 'Запланировать даты и место отпуска на следующее лето.',
        completed: false,
        dueDate: new Date('2023-10-20'),
      },
      {
        id: 10,
        name: 'Посетить родителей',
        description: 'Съездить в гости к родителям в выходные.',
        completed: false,
        difficulty: Difficulty.Medium,
      },
    
      {
        id: 11,
        name: 'Сходить в Fix Price',
        completed: false,
        difficulty: Difficulty.Easy,
      }];