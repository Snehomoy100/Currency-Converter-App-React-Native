import React, {useState} from 'react';
import {View,
        StyleSheet,
        Text,
        TouchableOpacity,
        ScrollView,
        SafeAreaView,
        TextInput} from 'react-native';

import Snackbar from 'react-native-snackbar';

const valuePerRupee = {
  DOLLAR: 0.014, // key-value pairs
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  DINAR: 0.0043,
  YEN: 1.54,
  BITCOIN: 0.000004
}


const App = () => {

  const [inputValue, setInputValue] = useState(0);
  const [resValue, setResValue] = useState(0);

  const buttonPressed = (currency) => {
    if(!inputValue){
      return Snackbar.show({
        text: 'Please enter a value',
        backgroundColor: "#EA7773",
        textColor: "#000000"
      });
    }

    let result = parseFloat(inputValue) * valuePerRupee[currency];
    setResValue(result.toFixed(2));
  }

  return(
    <>
      <ScrollView style={styles.scrollView}
        keyboardShouldPersistTaps="handled" // for Android (keyboard dismissal) 
        contentInsetAdjustmentBehavior="automatic" // for iOS (keyboard dismissal)
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultValue}>{resValue}</Text>
          </View>

          {/* for the input value */}
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.input}
              keyboardType="numeric"
              placeholder="Enter Value in INR"
              placeholderTextColor="#c1c1c1"
              value={inputValue}
              onChangeText={(inputValue) => 
                setInputValue(inputValue)
              }
            >
            </TextInput>

            {/* for output value */}
          </View>
          <View style={styles.convertButtonContainer}>
            {Object.keys(valuePerRupee).map((currency) => (
              <TouchableOpacity
                key={currency}
                style={styles.converterButton}
                onPress={() => buttonPressed(currency)}
              >
                <Text style={styles.convertButtonText}>{currency}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#1b262c"
  },
  container: {
    flex: 1,
    backgroundColor: "#1b262c"
  },
  resultContainer: {
    height: 70,
    marginTop: 80,
    justifyContent: "center",
    borderColor: "#bbe1fa",
    borderWidth: 2,
    alignItems: "center"
  },
  resultValue: {
    fontSize: 35,
    color: "#FFF",
    fontWeight: "bold"
  },
  inputContainer: {
    height: 70,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#bbe1fa"
  },
  input: {
    fontSize: 22,
    textAlign: "center",
    color: "#FFF"
  },
  convertButtonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 30,
  },
  convertButtonText: {
    color: "#FFF",
    fontSize: 15
  },
  converterButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: "33.3%", // considering the whole screen as 100%
    borderWidth: 2,
    borderColor: "#bbe1fa",
    backgroundColor: "#0f4c75",
    marginTop: 30
  }
});


export default App;