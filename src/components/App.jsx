import React from 'react';
import FeedbackContainer from './FeedbackOptions/FeedbackContainer';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notofication/Notification';

import PropTypes from 'prop-types';


class App extends React.Component {
  state = {
    feedback: { good: 0, neutral: 0, bad: 0 },
  };

  handleFeedback = type => {
    this.setState(prevState => ({
      feedback: {
        ...prevState.feedback,
        [type]: prevState.feedback[type] + 1,
      },
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state.feedback;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state.feedback;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
  };

  render() {
    const { feedback } = this.state;
    const totalFeedback = this.countTotalFeedback();

    return (
      <div>
        <Section>
          <FeedbackContainer handleFeedback={this.handleFeedback} />
        </Section>

        <Section title="Statistic">
          {totalFeedback === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={feedback.good}
              neutral={feedback.neutral}
              bad={feedback.bad}
              total={totalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;

App.propTypes = {
  stats: PropTypes.objectOf({
    feedback: {
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    },
    
  }),
}