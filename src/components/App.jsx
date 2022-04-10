
import { Component } from 'react';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification/Notification';
import Feedback from './Feedback/Feedback'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };



   countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
   };
  
  onLeaveFeedback = ({ target }) => {
    const { name } = target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  
   
  render() {
    const { good, neutral, bad } = this.state;

    return (
      
        <Section title="Please leave feedback">
        <Feedback onLeaveFeedback={this.onLeaveFeedback} />
        {this.countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'No feedback given'} />
        )}
      </Section>
      
    );
  }
}

export default App;
