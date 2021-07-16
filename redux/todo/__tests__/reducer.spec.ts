import reducer, { addTodo, removeTodo, toggleComplete } from '../slice';

describe('Todos Reducer', () => {
  it('Should Add a New Todo', () => {
    const todo = {
      id: -1,
      todoText: 'Test Reducer',
      completed: false,
    };
    expect(reducer([], addTodo(todo))).toEqual([todo]);
  });

  it('Should remove Todo', () => {
    expect(
      reducer(
        [
          {
            id: 0,
            todoText: 'npm install',
            todoDescription:"first step you must run npm install in terminal",
            completed: true,
          },
        ],
        removeTodo(0)
      )
    ).toEqual([]);
  });

  it('Should toggle a Todo', () => {
    expect(
      reducer(
        [
          {
            id: 0,
            todoText: 'npm install',
            todoDescription:"second step start dev  run npm dev in terminal",
            completed: false,
          },
        ],
        toggleComplete(0)
      )
    ).toEqual([
      {
        id: 0,
        todoText: 'npm install',
        completed: true,
      },
    ]);
  });
});
