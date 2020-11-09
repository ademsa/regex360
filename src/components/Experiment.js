import React from 'react';
import Notification from './Notification'
import ExperimentControls from './ExperimentControls'
import ExperimentMatchResults from './ExperimentMatchResults'
import ExperimentTestResults from './ExperimentTestResults'
import ExperimentReplaceResults from './ExperimentReplaceResults'
import ExperimentSplitResults from './ExperimentSplitResults'
import recipes from './../core/recipes'
import samples from './../core/samples'

export default class Experiment extends React.Component {
  constructor(props) {
    super(props);

    document.title = "RegEx360 - Experiment";

    this.state = {
      pattern: "",
      flags: "",
      replace: "",
      text: "",
      matchResults: null,
      testResults: null,
      replaceResults: null,
      splitResults: null,
      message: "",
      messageLevel: ""
    };

    this.patternRef = React.createRef();

    this.handlePatternChange = this.handlePatternChange.bind(this);
    this.handleFlagsChange = this.handleFlagsChange.bind(this);
    this.handleReplaceChange = this.handleReplaceChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);

    this.validateInputs = this.validateInputs.bind(this);

    this.handleMatchPattern = this.handleMatchPattern.bind(this);
    this.handleTestPattern = this.handleTestPattern.bind(this);
    this.handleReplacePattern = this.handleReplacePattern.bind(this);
    this.handleSplitPattern = this.handleSplitPattern.bind(this);
    this.handleResetPattern = this.handleResetPattern.bind(this);
    this.handleSamplesClick = this.handleSamplesClick.bind(this);

    this.handleCloseNotification = this.handleCloseNotification.bind(this);
  }

  handlePatternChange(event) {
    let pattern = event.target.value;
    this.setState(prevState => ({
      ...prevState,
      pattern: pattern,
    }));
  }

  handleFlagsChange(event) {
    let flags = event.target.value;
    this.setState(prevState => ({
      ...prevState,
      flags: flags,
    }));
  }

  handleReplaceChange(event) {
    let replace = event.target.value;
    this.setState(prevState => ({
      ...prevState,
      replace: replace,
    }));
  }

  handleTextChange(event) {
    let text = event.target.value;
    this.setState(prevState => ({
      ...prevState,
      text: text,
    }));
  }

  validateInputs(pattern, text, replace) {
    if (pattern === "") {
      this.setState(prevState => ({
        ...prevState,
        matchResults: null,
        testResults: null,
        replaceResults: null,
        splitResults: null,
        message: "Please specify RegEx pattern.",
        messageLevel: "warning",
      }));
      return false;
    }
    if (text === "") {
      this.setState(prevState => ({
        ...prevState,
        matchResults: null,
        testResults: null,
        replaceResults: null,
        splitResults: null,
        message: "Please specify string.",
        messageLevel: "warning",
      }));
      return false;
    }
    if (replace !== undefined && replace === "") {
      this.setState(prevState => ({
        ...prevState,
        matchResults: null,
        testResults: null,
        replaceResults: null,
        splitResults: null,
        message: "Please specify replace string.",
        messageLevel: "warning",
      }));
      return false;
    }
    return true;
  }

  handleMatchPattern() {
    let pattern = this.state.pattern;
    let text = this.state.text;

    if (!this.validateInputs(pattern, text)) {
      return;
    }

    let flags = this.state.flags;

    try {
      let regexp = new RegExp(pattern, flags);
      let result = text.match(regexp);
      console.log("match", pattern, flags, result)
      this.setState(prevState => ({
        ...prevState,
        matchResults: result === null ? "" : result,
        testResults: null,
        replaceResults: null,
        splitResults: null,
        message: "",
        messageLevel: ""
      }));
    } catch (error) {
      this.setState(prevState => ({
        ...prevState,
        matchResults: null,
        testResults: null,
        replaceResults: null,
        splitResults: null,
        message: error.message,
        messageLevel: "danger",
      }));
    }
  }

  handleTestPattern() {
    let pattern = this.state.pattern;
    let text = this.state.text;

    if (!this.validateInputs(pattern, text)) {
      return;
    }

    let flags = this.state.flags;

    try {
      let regexp = new RegExp(pattern, flags);
      let result = regexp.test(text);
      this.setState(prevState => ({
        ...prevState,
        matchResults: null,
        testResults: result === null ? "" : result,
        replaceResults: null,
        splitResults: null,
        message: "",
        messageLevel: ""
      }));
    } catch (error) {
      this.setState(prevState => ({
        ...prevState,
        matchResults: null,
        testResults: null,
        replaceResults: null,
        splitResults: null,
        message: error.message,
        messageLevel: "danger",
      }));
    }
  }

  handleReplacePattern() {
    let pattern = this.state.pattern;
    let text = this.state.text;
    let replace = this.state.replace;

    if (!this.validateInputs(pattern, text, replace)) {
      return;
    }

    let flags = this.state.flags;

    try {
      let regexp = new RegExp(pattern, flags);
      let result = text.replace(regexp, replace);
      this.setState(prevState => ({
        ...prevState,
        matchResults: null,
        testResults: null,
        replaceResults: result === null ? "" : result,
        splitResults: null,
        message: "",
        messageLevel: ""
      }));
    } catch (error) {
      this.setState(prevState => ({
        ...prevState,
        matchResults: null,
        testResults: null,
        replaceResults: null,
        splitResults: null,
        message: error.message,
        messageLevel: "danger",
      }));
    }
  }

  handleSplitPattern() {
    let pattern = this.state.pattern;
    let text = this.state.text;

    if (!this.validateInputs(pattern, text)) {
      return;
    }

    let flags = this.state.flags;

    try {
      let regexp = new RegExp(pattern, flags);
      let result = text.split(regexp);
      this.setState(prevState => ({
        ...prevState,
        matchResults: null,
        testResults: null,
        replaceResults: null,
        splitResults: result === null ? "" : result,
        message: "",
        messageLevel: ""
      }));
    } catch (error) {
      this.setState(prevState => ({
        ...prevState,
        matchResults: null,
        testResults: null,
        replaceResults: null,
        splitResults: null,
        message: error.message,
        messageLevel: "danger",
      }));
    }
  }

  handleResetPattern() {
    this.setState(prevState => ({
      ...prevState,
      pattern: "",
      flags: "",
      replace: "",
      text: "",
      matchResults: null,
      testResults: null,
      replaceResults: null,
      splitResults: null,
      message: "",
      messageLevel: ""
    }));
  }

  handleSamplesClick(event) {
    let text = samples[parseInt(event.currentTarget.dataset.sample)];
    this.setState(prevState => ({
      ...prevState,
      text: text,
    }));
  }

  handleCloseNotification() {
    this.setState(prevState => ({
      ...prevState,
      message: "",
      messageLevel: "",
    }));
  }

  componentDidMount() {
    let recipeId = -1;
    try {
      recipeId = parseInt(window.location.href.split("?")[1].split("=")[1])
    } catch (error) {
      return;
    } finally {
      if (isNaN(recipeId) || recipeId > recipes.length || recipeId < 0) {
        return;
      }
    }

    this.setState(prevState => ({
      ...prevState,
      pattern: recipes[recipeId].pattern,
      flags: recipes[recipeId].flags,
      message: "Copied pattern and flags successfully.",
      messageLevel: "success"
    }));
    setTimeout(() => {
      this.setState(prevState => ({
        ...prevState,
        message: "",
        messageLevel: ""
      }));
    }, 2000);
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <div className="container">
            <ExperimentControls
              patternRef={this.patternRef}
              pattern={this.state.pattern}
              flags={this.state.flags}
              replace={this.state.replace}
              text={this.state.text}
              handlePatternChange={this.handlePatternChange}
              handleFlagsChange={this.handleFlagsChange}
              handleReplaceChange={this.handleReplaceChange}
              handleTextChange={this.handleTextChange}
              handleMatchPattern={this.handleMatchPattern}
              handleTestPattern={this.handleTestPattern}
              handleReplacePattern={this.handleReplacePattern}
              handleSplitPattern={this.handleSplitPattern}
              handleResetPattern={this.handleResetPattern}
              handleSamplesClick={this.handleSamplesClick} />
            {this.state.message &&
              <Notification
                messageLevel={this.state.messageLevel}
                message={this.state.message}
                handleCloseNotification={this.handleCloseNotification} />
            }
            {this.state.matchResults !== null &&
              <ExperimentMatchResults
                results={this.state.matchResults} />
            }
            {this.state.testResults !== null &&
              <ExperimentTestResults
                results={this.state.testResults} />
            }
            {this.state.replaceResults !== null &&
              <ExperimentReplaceResults
                results={this.state.replaceResults} />
            }
            {this.state.splitResults !== null &&
              <ExperimentSplitResults
                results={this.state.splitResults} />
            }
          </div>
        </section>
      </React.Fragment>
    );
  }
}
