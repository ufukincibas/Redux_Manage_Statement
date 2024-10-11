import React from "react";
import {View , Text, Button} from "react-native";
import {legacy_createStore as createStore} from 'redux';
import { Provider , useSelector , useDispatch } from "react-redux";

const initialState ={
  counter:0, 
}

function reducers(state , action){
  switch(action.type){
    case 'updateCounter' :
      return {...state , counter: state.counter + 1};
      
      default:
        return  state;
  }
}

function App(){
  return(
    <Provider store={createStore(reducers,initialState)}>
<View style={{flex:1}}>
  <First/>
  <Second/>
  </View>
  </Provider>
  )
}




function First(){
  const counter = useSelector(selector => selector.counter) //use
  const dispatch = useDispatch()
  function handleUpdate(){
    dispatch({type: 'updateCounter'})

  }
  return(
    <View style={{flex:1}}>
      <Text>First : {counter}</Text>
      <Button title="Update" onPress={handleUpdate}/>
      </View>
  );
}

function Second(){
  const counter = useSelector(selector => selector.counter)
  
  return(
    <View style={{backgroundColor:'gray', flex:1}}>
      <Text>Second : {counter}</Text>
    </View>
  )
}

export default App