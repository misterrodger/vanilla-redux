//Action Constants
export const ADD_TODO = '[Todo] Add Todo';
export const REMOVE_TODO = '[Todo] Remove Todo'

//Action Creators
export class AddTodo {
  readonly type = ADD_TODO;
  constructor(private payload: any) {}
}

// console.log(new AddTodo({}));

export class RemoveTodo {
  readonly type = REMOVE_TODO;
  constructor(private payload: any) {}
}

