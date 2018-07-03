import React, { Component } from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'

export default class PlaceInput extends Component {
  state = {
    placeName: ''
  }

  placeNameChangeHandler = text => {
    this.setState({
      placeName: text
    })
  }

  placeSubmitHandler = () => {
    if(this.state.placeName.trim() === '')
      return

    this.props.onPlaceAdded(this.state.placeName)
  }

  

  render() {
    return(
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="An awesome place"
          onChangeText={this.placeNameChangeHandler} 
          value={this.state.placeName} 
          style={styles.placeInput}
        />
        <Button title="Add" style={styles.placeButton} onPress={this.placeSubmitHandler}/>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
})
