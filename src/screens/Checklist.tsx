import { StyleSheet, Text, View} from 'react-native'
import React, {useReducer} from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";

type Checklist = {
  name: string,
  id:number,
  text: string,
  done: boolean
}
type actionType = {
  id: number,
  type: string

}

const initialChecklist = [
  {
    name: 'item #1',
    id: 1,
    text: 'afazer 1',
    done: false
},
  {
    name: 'item #2',
id: 2,
    text: 'afazer 2',
    done: false
},
  {
    name: 'item #3',
id: 3,
    text: 'afazer 3',
    done: false
},
]

const reducer = (state: Checklist[], action:actionType ) => {
  switch(action.type){
    case 'completed':

      return state.map((task:Checklist)=>{
        if(task.id === action.id){
          return {...task, done: !task.done}
        }else return task;
        })
    default: 
      return state;
}
}

const Checklist = () => {
  const [checklist, dispatch] =useReducer(reducer, initialChecklist)

  const handleCheck = (task: Checklist) =>{
    dispatch({type: 'completed', id:task.id})
}

  return (
    <View>
      <Text>Checklist</Text>
      {checklist.map((task)=>{
        return (
        <View>
          <Text>Completed? {task.done?'yes':'no'}</Text>
          <BouncyCheckbox fillColor="red"
            unfillColor="#FFFFFF" iconStyle={{ borderColor: "red" }} text={`task: ${task.name}`} size={35} onPress={()=>handleCheck(task)} />
        </View>

)

})}
    </View>
  )
}

export default Checklist

const styles = StyleSheet.create({})