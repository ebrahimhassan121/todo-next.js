import { Button } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { todoSelector } from '../redux/todo/selectors';
import { addTodoThunk } from '../redux/todo/slice';
import { media } from '../styles/styles';
import SingleTodoContainer from './SingleTodoContainer';

const Column = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  width: 100%;
  ${media.tablet`
      flex-direction: column;
  `};
`;
const Row = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  max-width: 900px;
  width: 100%;
`;
const Spacer = styled.div`
  height: 50px;
`;

const todoInitialValue={
  text:{value:"",error:false},
  description:{value:"",error:false},
}
const HomePageContainer: React.FC = () => {
  // Component State
  const [todo,setTodo]=React.useState(todoInitialValue)
  const handleChange = (value:string,key:"text"|"description") => {
    setTodo({...todo,[`${key}`]:{value,error:false}})
  };

  // Redux
  const dispatch = useDispatch();
  const todos = useSelector(todoSelector);
  const handleAddTodo = () => {
    const _todo={...todo};
    if(_todo.description.value.length==0){
      _todo.description.error=true
    }
    if(_todo.text.value.length==0){
      _todo.text.error=true
    }
    if(_todo.text.error||_todo.description.error){
      setTodo(_todo);
      return;
    }
    dispatch(
      addTodoThunk({
        todoText:todo.text.value,
        todoDescription:todo.description.value,
        id: Date.now(),
        completed: false,
      })
    );
      todoInitialValue.text.error=false;
      todoInitialValue.description.error=false;
    setTodo(todoInitialValue);
  };

  return (
    <>
      <Column>
        <Row style={{}}>
          <Column style={{flex:1,padding:8}}>
          <TextField
            variant={'standard'}
            error={todo.text.error}
            helperText={todo.text.error ? 'Please Include Some text.' : ''}
            fullWidth
            id="todo"
            label="Add Todo"
            margin="normal"
            onChange={(e)=>{handleChange(e.target.value,'text')}}
            value={todo.text.value}
          />
          <TextField
            variant={'standard'}
            error={todo.description.error}
            helperText={todo.description.error ? 'Please Include Some description.' : ''}
            fullWidth
            multiline
            id="todo_description"
            label="Add Todo Description"
            margin="normal"
            onChange={(e)=>{handleChange(e.target.value,'description')}}
            value={todo.description.value}
          />
            <Button
            href={'#'}
            size={'large'}
            onClick={handleAddTodo}
            style={{alignSelf:'flex-end'}}
            color="secondary"
            aria-label="Add"
            variant='outlined'
            
          >
            <AddIcon />
          </Button>
          </Column>
        
        </Row>
      </Column>
      <Spacer />
      <Column>
        {todos.map((item) => (
          <SingleTodoContainer key={item.id} id={item.id} />
        ))}
      </Column>
    </>
  );
};

export default HomePageContainer;
