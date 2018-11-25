import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { ALPHABETH } from '../utils';

import { Letter } from '../componets'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: this.getRandomNote(),
      solution: "",
      hideOptions: false,
    };

    this.getRandomNote = this.getRandomNote.bind(this);
    this.gradeAnswer = this.gradeAnswer.bind(this);
  }

  getRandomNote() {
    return ALPHABETH[Math.floor(Math.random() * 7)].toUpperCase();
  }

  gradeAnswer(answer) {
    let index = ALPHABETH.indexOf(answer);
    index = index === 0 ? 6 : index - 1;
    if (ALPHABETH[index] === this.state.question) {
      this.setState({ solution: "RICHTIG!!!", hideOptions: true }, () => {
        setTimeout(() => {
          this.setState({ solution: "", question: this.getRandomNote(), hideOptions: false })
        }, 1500)
      })
    } else {
      this.setState({ solution: "FALSCH!!!", hideOptions: true }, () => {
        setTimeout(() => {
          this.setState({ solution: "TRY AGAIN", hideOptions: false })
        }, 1000)
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.question}>
            Which note follows {this.state.question}?
          </Text>
        </View>
        <View>
          <Text style={styles.answer}>
            {this.state.solution}
          </Text>
        </View>
        <View style={styles.options}>

          {this.state.hideOptions ? null : ALPHABETH.map(l => <Letter onPress={this.gradeAnswer} letter={l} key={l} />)}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  question: {
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 64,
  },
  answer: {
    textAlign: 'center',
    fontSize: 64,
  },
  options: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 64,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 16,
  },
});
