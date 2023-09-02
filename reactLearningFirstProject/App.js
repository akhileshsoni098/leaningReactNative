import React from "react";

import { View, Text, Button } from 'react-native'

import CompanyData from "./components/CompanyData";


const App = () => {


  return (
    <View>
<CompanyData/>
      <Text style={{fontSize:30}}> Components </Text>

<UserData/>
    </View>
  )


}


const UserData = ()=>{

  return (
    <View>
    
    <Text style={{fontSize:20}}> Name: Akhilesh Soni </Text>

    <Text style={{fontSize:20}}> Age: 24 </Text>

    <Text style={{fontSize:20}}> Email: akhilesh9988@gmail.com </Text>

    <Text style={{fontSize:20}}>  </Text>

    </View>
  )
}





export default App