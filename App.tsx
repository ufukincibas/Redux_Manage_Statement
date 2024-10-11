import React from "react";
import {View , Text, Button} from "react-native";
import {legacy_createStore as createStore} from 'redux';
import { Provider , useSelector , useDispatch } from "react-redux";

const initialState ={
  counter:0, //tutacagım global statelerin initial degerleri
}

function reducers(state , action){ //state ve action : state o anki global state yapisi icinde ne varsa. action ise dispatch i tetiklerken gonderdigim parametre
  switch(action.type){
    case 'updateCounter' :
      return {...state , counter: state.counter + 1}; //buradaki return global state yapima karsilik geliyor
      
      default:
        return  state;
  }
}

function App(){
  return(
    //ilk adim provider icinde createStore ile global stateleri tanımlamak
    //ilk parametredeki state state o anki global state yapisi icinde ne varsa.
    //ilk parametredeki action ise dispatch i tetiklerken gonderdigim parametre
    //ikinci parametrede initial degerler tanımlanır
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
    dispatch({type: 'updateCounter' , ufuk: "dontquite"}) //dispatch de yanına user url vs vs bir cok sey gonderebilirsin or: {type: 'updateCounter' , ufuk: "dontquite"}

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