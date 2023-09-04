import React, { useState } from "react";

import { View, Text, Button } from 'react-native'

const App = () => {

const [name , setName] = useState("Akhilesh");

 function testName(){
setName("Siddhu")
 }
  return (
    <View>
<Text style ={{fontSize: 30}}> {name} </Text>
<Button title="Update Name" onPress={testName}/>
    </View>
  )

}


export default App