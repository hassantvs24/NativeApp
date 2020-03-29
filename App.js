import React, { Component, useRef, useEffect, useState } from 'react';
import {ScrollView, Button, StyleSheet, View, Alert, Text} from 'react-native';

class App extends Component {
    state = {  }

    myStyle = () => {
        return {
            container: {
              marginTop: 50,
              flex: 1,
              flexDirection: 'column',
            },
            bigBlue: {
              color: 'blue',
              fontWeight: 'bold',
              fontSize: 30,
              height: 100, 
              backgroundColor: 'powderblue',
            },
            red: {
              color: 'red',
              fontSize: 30,
              height: 100, 
              backgroundColor: 'yellow',
            },
        };
      
    }
    
      
    render() { 

        const styles = StyleSheet.create(this.myStyle());
        return ( 
            // Try setting `flexDirection` to `column`.
            <ScrollView>
              <View style={styles.container}>
              <Button
                title="Press me"
                onPress={() => Alert.alert('Hello Nadu')}
              />
                <Text style={styles.red}>Nadu Pappa</Text>
                <Text style={styles.bigBlue}>just bigBlue</Text>
                <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
                <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
                <Text style={styles.red}>Nadu Pappa</Text>
                <Text style={styles.bigBlue}>just bigBlue</Text>
                <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
                <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
              </View>
            </ScrollView>
        
         );
    }
}
 
export default App; 