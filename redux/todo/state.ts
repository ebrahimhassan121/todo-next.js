// The Default state for the db
import { State } from './types';

export const defaultState: State = [
  {
    id: 0,
    todoText: 'Run NPM install ',
    todoDescription:"first step you must run npm install in terminal",
    completed: false,
  },
  {
    id: 1,
    todoText: 'Run NPM Run dev',
    todoDescription:"second step start dev  run npm dev in terminal",
    completed: true,
  },
];

export default defaultState;
