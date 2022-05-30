import { StyleSheet, Text, View} from 'react-native'
import React, {useReducer} from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";

type Todo = {
  id: string,
  text: string,
  complete: boolean
}

interface todoslist{
  [id: string]: Todo
}

const initialtodos = [
  {
    id: 'todo1',
    text: 'text1',
    complete: false,
  },
  {
    id: 'todo2',
    text: 'text2',
    complete: false,
  }
]

const reducer = (state: Todo[], action: { type: string, id:string }): any=>{
    if(action.type ==='complete'){
      return state.map((todo) => {
        if (todo.id === action.id) {
          console.log("Entered on complete", todo.complete)
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
      return state;
  }

}

const TodoNative = () => {
  const [todos, dispatch] = useReducer(reducer, initialtodos)


  return (
    <View>
      <Text>TodoNative</Text>
      {todos.map((todo:Todo) => {
        return(
        <View>
        <Text>Something {todo.id}</Text>
        <Text>Complete? {todo.complete ? 'yes':'no'}</Text>
        <BouncyCheckbox fillColor='blue' size={30} text={todo.text} onPress={() => {dispatch({type: 'complete', id:todo.id})}}/>
        </View>)
      })}
    </View>
  )
}

export default TodoNative

const styles = StyleSheet.create({})