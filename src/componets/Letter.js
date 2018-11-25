import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PropTypes from 'prop-types'

import { ALPHABETH } from "../utils";

const Letter = ({ letter, onPress, readOnly }) => {
  const handlePress = () => {
    if (typeof onPress === 'function') onPress(letter);
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={readOnly ? 1 : 0.2}>
      <View style={styles.container}>
        <Text style={styles.letter}>{letter}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    marginVertical: 4,
    marginHorizontal: 4,
  },
  letter: {
    fontSize: 32,
  }
});

Letter.propTypes = {
  letter: PropTypes.oneOf([...ALPHABETH, ""]),
  styles: PropTypes.object,
  readOnly: PropTypes.bool,
};

Letter.defaultProps = { styles: {}, letter: '', readOnly: false };

export default Letter;