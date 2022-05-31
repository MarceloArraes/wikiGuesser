import { StyleSheet, Text, View } from 'react-native'
import React,{ createContext} from 'react'

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

export const ChecklistContext = createContext(initialChecklist)


export const ChecklistProvider = ({children}:any) => {
  return (
    <View>
    <ChecklistContext.Provider value={initialChecklist}>
      {children}
      </ChecklistContext.Provider>
    </View>
  )
}

